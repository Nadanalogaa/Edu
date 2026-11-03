import { Response } from 'express';
import fs from 'fs';
import csvParser from 'csv-parser';
import { AuthRequest } from '../middleware/auth';
import { Users, createUser, findUserByEmail, hashPassword } from '../models/User';
import { query, withTransaction } from '../config/database';
import { assertStudentSeats, HttpError } from '../utils/tenancy';
import { parseClassGrade } from './registrationController';

// School admins manage their own school's students and teachers. Every query
// is limited to req.user.schoolId; active students count against the school's
// paid student limit.

type PersonRole = 'student' | 'teacher';

const EMAIL_RE = /^\S+@\S+\.\S+$/;

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({ success: false, message: error.message });
  }
  if (error.code === '23505') {
    return res.status(400).json({ success: false, message: 'This email is already registered' });
  }
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const PERSON_COLUMNS = `id, name, email, role, phone, class_grade, section, is_active, school_id, created_at, updated_at`;

/** Builds the fields for a student's class and section (grade kept in sync for test sharing). */
const classFields = (classGrade: any, section: any) => {
  const grade = parseClassGrade(classGrade);
  if (grade === null) throw new HttpError(400, 'Class must be between 6th and 12th');
  return {
    classGrade: grade,
    grade: `${grade}th`,
    section: section ? String(section).trim().toUpperCase() : null,
  };
};

const findPerson = async (req: AuthRequest, role: PersonRole) => {
  const person = await Users.findById(req.params.id);
  return person && person.role === role && person.schoolId === req.user.schoolId ? person : null;
};

// @desc    School summary: licence usage and people by class
// @route   GET /api/school/overview
export const getOverview = async (req: AuthRequest, res: Response) => {
  try {
    const schoolId = req.user.schoolId;
    const [counts] = await query(
      `SELECT
         count(*) FILTER (WHERE role = 'student' AND is_active)::int AS active_students,
         count(*) FILTER (WHERE role = 'student' AND NOT is_active)::int AS inactive_students,
         count(*) FILTER (WHERE role = 'teacher' AND is_active)::int AS active_teachers,
         count(*) FILTER (WHERE role = 'teacher' AND NOT is_active)::int AS inactive_teachers
       FROM users WHERE school_id = $1`,
      [schoolId]
    );
    const byClass = await query(
      `SELECT class_grade, section, count(*)::int AS students
       FROM users WHERE school_id = $1 AND role = 'student' AND is_active
       GROUP BY class_grade, section ORDER BY class_grade, section NULLS FIRST`,
      [schoolId]
    );
    const [tests] = await query(
      `SELECT count(*)::int AS tests FROM tests WHERE school_id = $1 AND is_active`,
      [schoolId]
    );

    res.status(200).json({
      success: true,
      data: {
        school: req.school,
        activeStudents: counts.active_students,
        inactiveStudents: counts.inactive_students,
        activeTeachers: counts.active_teachers,
        inactiveTeachers: counts.inactive_teachers,
        studentLimit: req.school?.studentLimit ?? 0,
        tests: tests.tests,
        byClass: byClass.map((row) => ({ classGrade: row.class_grade, section: row.section, students: row.students })),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'School overview');
  }
};

// @desc    List the school's students or teachers
// @route   GET /api/school/students | /api/school/teachers
export const listPeople = (role: PersonRole) => async (req: AuthRequest, res: Response) => {
  try {
    const { classGrade, section, status, search } = req.query;
    const params: any[] = [req.user.schoolId, role];
    const where = ['school_id = $1', 'role = $2'];

    if (status === 'active') where.push('is_active = true');
    if (status === 'inactive') where.push('is_active = false');
    if (classGrade) {
      params.push(Number(classGrade));
      where.push(`class_grade = $${params.length}`);
    }
    if (section) {
      params.push(String(section).toUpperCase());
      where.push(`section = $${params.length}`);
    }
    if (search) {
      params.push(`%${String(search).trim()}%`);
      where.push(`(name ILIKE $${params.length} OR email ILIKE $${params.length})`);
    }

    const people = await Users.select(
      `SELECT ${PERSON_COLUMNS} FROM users WHERE ${where.join(' AND ')}
       ORDER BY is_active, class_grade NULLS LAST, section NULLS LAST, name`,
      params
    );

    res.status(200).json({ success: true, count: people.length, data: people });
  } catch (error: any) {
    sendError(res, error, `List ${role}s`);
  }
};

// @desc    Add a student or teacher (active immediately)
// @route   POST /api/school/students | /api/school/teachers
export const addPerson = (role: PersonRole) => async (req: AuthRequest, res: Response) => {
  try {
    const { name, email, password, phone, classGrade, section } = req.body;

    if (!name || !String(name).trim()) throw new HttpError(400, 'Name is required');
    if (!email || !EMAIL_RE.test(String(email).trim())) throw new HttpError(400, 'Please provide a valid email');
    if (!password || String(password).length < 6) throw new HttpError(400, 'Password must be at least 6 characters');
    if (await findUserByEmail(email)) throw new HttpError(400, 'This email is already registered');

    const studentClass = role === 'student' ? classFields(classGrade, section) : {};

    const person = await withTransaction(async (client) => {
      if (role === 'student') await assertStudentSeats(client, req.user.schoolId);
      return createUser(
        {
          name: String(name).trim(),
          email,
          password,
          phone,
          role,
          schoolId: req.user.schoolId,
          isActive: true,
          ...studentClass,
        },
        client
      );
    });

    res.status(201).json({ success: true, message: `${role === 'student' ? 'Student' : 'Teacher'} added`, data: person });
  } catch (error: any) {
    sendError(res, error, `Add ${role}`);
  }
};

// @desc    Edit a student or teacher; activating a student needs a free seat
// @route   PATCH /api/school/students/:id | /api/school/teachers/:id
export const updatePerson = (role: PersonRole) => async (req: AuthRequest, res: Response) => {
  try {
    const person = await findPerson(req, role);
    if (!person) throw new HttpError(404, `${role === 'student' ? 'Student' : 'Teacher'} not found`);

    const { name, phone, classGrade, section, isActive } = req.body;
    const updates: Record<string, any> = {};
    if (name !== undefined) updates.name = String(name).trim();
    if (phone !== undefined) updates.phone = phone;
    if (role === 'student' && (classGrade !== undefined || section !== undefined)) {
      Object.assign(updates, classFields(classGrade ?? person.classGrade, section !== undefined ? section : person.section));
    }
    if (isActive !== undefined) updates.isActive = Boolean(isActive);

    const updated = await withTransaction(async (client) => {
      if (role === 'student' && updates.isActive === true && !person.isActive) {
        await assertStudentSeats(client, req.user.schoolId);
      }
      // Approving a self-registered student also approves their registration form
      if (updates.isActive === true) {
        const table = role === 'student' ? 'students' : 'teachers';
        await query(
          `UPDATE ${table} SET registration_status = 'approved', updated_at = now()
           WHERE user_id = $1 AND registration_status = 'pending'`,
          [person._id],
          client
        );
      }
      return Users.updateById(person._id, updates, client);
    });

    res.status(200).json({ success: true, message: 'Saved', data: updated });
  } catch (error: any) {
    sendError(res, error, `Update ${role}`);
  }
};

// @desc    Set a new password for a student or teacher who forgot theirs
// @route   POST /api/school/students/:id/reset-password | /api/school/teachers/:id/reset-password
export const resetPersonPassword = (role: PersonRole) => async (req: AuthRequest, res: Response) => {
  try {
    const person = await findPerson(req, role);
    if (!person) throw new HttpError(404, `${role === 'student' ? 'Student' : 'Teacher'} not found`);
    const { password } = req.body;
    if (!password || String(password).length < 6) throw new HttpError(400, 'Password must be at least 6 characters');

    await Users.updateById(person._id, { password: await hashPassword(password) });
    res.status(200).json({ success: true, message: `Password reset for ${person.name}` });
  } catch (error: any) {
    sendError(res, error, `Reset ${role} password`);
  }
};

// @desc    Classes and sections that have students (for filters and test sharing)
// @route   GET /api/school/sections
export const getSections = async (req: AuthRequest, res: Response) => {
  try {
    const rows = await query(
      `SELECT class_grade, section, count(*)::int AS students
       FROM users WHERE school_id = $1 AND role = 'student' AND is_active AND class_grade IS NOT NULL
       GROUP BY class_grade, section ORDER BY class_grade, section NULLS FIRST`,
      [req.user.schoolId]
    );
    res.status(200).json({
      success: true,
      data: rows.map((row) => ({ classGrade: row.class_grade, section: row.section, students: row.students })),
    });
  } catch (error: any) {
    sendError(res, error, 'List sections');
  }
};

const readCsv = (filePath: string) =>
  new Promise<any[]>((resolve, reject) => {
    const rows: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csvParser({ mapHeaders: ({ header }) => header.trim() }))
      .on('data', (row) => rows.push(row))
      .on('end', () => resolve(rows))
      .on('error', reject);
  });

// @desc    Add many students from a CSV file (name, email, password, classGrade, section, phone)
// @route   POST /api/school/students/bulk-upload
export const bulkUploadStudents = async (req: AuthRequest, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Please upload a CSV file' });
  }

  try {
    const rows = await readCsv(req.file.path);
    const errors: any[] = [];
    let added = 0;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const name = row.name || row.studentName;
      const classGrade = row.classGrade || row.class || row.classStandard;
      try {
        if (!name || !String(name).trim()) throw new HttpError(400, 'Name is required');
        if (!row.email || !EMAIL_RE.test(String(row.email).trim())) throw new HttpError(400, 'Valid email is required');
        if (await findUserByEmail(row.email)) throw new HttpError(400, 'Email already registered');
        const password = row.password && String(row.password).length >= 6 ? row.password : null;
        if (!password) throw new HttpError(400, 'Password of at least 6 characters is required');

        const studentClass = classFields(classGrade, row.section);

        await withTransaction(async (client) => {
          await assertStudentSeats(client, req.user.schoolId);
          await createUser(
            {
              name: String(name).trim(),
              email: row.email,
              password,
              phone: row.phone || row.parentMobileNumber,
              role: 'student',
              schoolId: req.user.schoolId,
              isActive: true,
              ...studentClass,
            },
            client
          );
        });
        added++;
      } catch (error: any) {
        errors.push({ row: i + 2, email: row.email, error: error.message });
        // No seats left: the remaining rows would all fail the same way
        if (error instanceof HttpError && error.status === 403) {
          if (i + 1 < rows.length) errors.push({ row: i + 3, error: `${rows.length - i - 1} more rows not added` });
          break;
        }
      }
    }

    res.status(200).json({
      success: true,
      message: `${added} of ${rows.length} students added`,
      summary: { total: rows.length, success: added, errors: rows.length - added },
      errors,
    });
  } catch (error: any) {
    sendError(res, error, 'Bulk upload students');
  } finally {
    fs.unlink(req.file.path, () => {});
  }
};
