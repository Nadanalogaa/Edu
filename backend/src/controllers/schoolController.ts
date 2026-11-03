import { Response } from 'express';
import fs from 'fs';
import { randomInt } from 'crypto';
import * as XLSX from 'xlsx';
import { AuthRequest } from '../middleware/auth';
import { Users, createUser, findUserByEmail, hashPassword } from '../models/User';
import { query, withTransaction } from '../config/database';
import { assertStudentSeats, HttpError } from '../utils/tenancy';
import { parseClassGrade } from './registrationController';

// School admins manage their own school's students, teachers and fellow admins.
// Every query is limited to req.user.schoolId; active students count against
// the school's paid student limit. Students sign in with the school code and
// their admission number; teachers and admins with their email.

type PersonRole = 'student' | 'teacher' | 'admin';

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const NAMES: Record<PersonRole, string> = { student: 'Student', teacher: 'Teacher', admin: 'Admin' };

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({ success: false, message: error.message });
  }
  if (error.code === '23505') {
    const message = String(error.constraint).includes('admission')
      ? 'This admission number is already used in your school'
      : 'This email is already registered';
    return res.status(400).json({ success: false, message });
  }
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const PERSON_COLUMNS = `id, name, email, admission_number, role, phone, class_grade, section, is_active, school_id, created_at, updated_at`;

/** An easy-to-read password (no 0/O, 1/l) for the school to hand out. */
const generatePassword = () => {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  return Array.from({ length: 8 }, () => chars[randomInt(chars.length)]).join('');
};

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

const clean = (value: any) => (value === undefined || value === null ? '' : String(value).trim());

/**
 * Validates and normalises a new person's details. Students need an admission
 * number; teachers and admins an email. A missing password is generated.
 */
const newPersonFields = async (role: PersonRole, input: Record<string, any>) => {
  const name = clean(input.name);
  const email = clean(input.email).toLowerCase();
  const admissionNumber = clean(input.admissionNumber);
  const phone = clean(input.phone);
  let password = clean(input.password);

  if (!name) throw new HttpError(400, 'Name is required');
  if (role === 'student' && !admissionNumber) throw new HttpError(400, 'Admission number is required');
  if (role !== 'student' && !email) throw new HttpError(400, 'Email is required');
  if (email && !EMAIL_RE.test(email)) throw new HttpError(400, 'Please provide a valid email');
  if (email && (await findUserByEmail(email))) throw new HttpError(400, 'This email is already registered');
  if (password && password.length < 6) throw new HttpError(400, 'Password must be at least 6 characters');
  const generated = !password;
  if (generated) password = generatePassword();

  return {
    fields: {
      name,
      email: email || null,
      admissionNumber: role === 'student' ? admissionNumber : null,
      phone: phone || null,
      password,
      role,
      ...(role === 'student' && classFields(input.classGrade, input.section)),
    },
    password,
    generated,
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

// @desc    List the school's students, teachers or admins
// @route   GET /api/school/students | teachers | admins
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
      where.push(`(name ILIKE $${params.length} OR email ILIKE $${params.length} OR admission_number ILIKE $${params.length} OR phone ILIKE $${params.length})`);
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

// @desc    Add a student, teacher or admin (active immediately)
// @route   POST /api/school/students | teachers | admins
export const addPerson = (role: PersonRole) => async (req: AuthRequest, res: Response) => {
  try {
    const { fields, password, generated } = await newPersonFields(role, req.body);

    const person = await withTransaction(async (client) => {
      if (role === 'student') await assertStudentSeats(client, req.user.schoolId);
      return createUser({ ...fields, schoolId: req.user.schoolId, isActive: true }, client);
    });

    res.status(201).json({
      success: true,
      message: `${NAMES[role]} added`,
      data: person,
      // Shown once so the school can hand it out
      ...(generated && { generatedPassword: password }),
    });
  } catch (error: any) {
    sendError(res, error, `Add ${role}`);
  }
};

// @desc    Edit a person; activating a student needs a free seat
// @route   PATCH /api/school/students/:id | teachers/:id | admins/:id
export const updatePerson = (role: PersonRole) => async (req: AuthRequest, res: Response) => {
  try {
    const person = await findPerson(req, role);
    if (!person) throw new HttpError(404, `${NAMES[role]} not found`);

    const { name, phone, classGrade, section, isActive, admissionNumber, email } = req.body;
    const updates: Record<string, any> = {};
    if (name !== undefined) {
      if (!clean(name)) throw new HttpError(400, 'Name is required');
      updates.name = clean(name);
    }
    if (phone !== undefined) updates.phone = clean(phone) || null;
    if (email !== undefined) {
      const value = clean(email).toLowerCase();
      if (value && !EMAIL_RE.test(value)) throw new HttpError(400, 'Please provide a valid email');
      if (!value && role !== 'student') throw new HttpError(400, 'Email is required');
      updates.email = value || null;
    }
    if (role === 'student') {
      if (admissionNumber !== undefined) {
        if (!clean(admissionNumber)) throw new HttpError(400, 'Admission number is required');
        updates.admissionNumber = clean(admissionNumber);
      }
      if (classGrade !== undefined || section !== undefined) {
        Object.assign(updates, classFields(classGrade ?? person.classGrade, section !== undefined ? section : person.section));
      }
    }
    if (isActive !== undefined) {
      if (role === 'admin' && person._id === req.user._id && !isActive) {
        throw new HttpError(400, 'You cannot deactivate your own account');
      }
      updates.isActive = Boolean(isActive);
    }

    const updated = await withTransaction(async (client) => {
      if (role === 'student' && updates.isActive === true && !person.isActive) {
        await assertStudentSeats(client, req.user.schoolId);
      }
      // Approving a self-registered student/teacher also approves their registration form
      if (updates.isActive === true && role !== 'admin') {
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

// @desc    Set a new password for someone who forgot theirs (generated if not given)
// @route   POST /api/school/{students|teachers|admins}/:id/reset-password
export const resetPersonPassword = (role: PersonRole) => async (req: AuthRequest, res: Response) => {
  try {
    const person = await findPerson(req, role);
    if (!person) throw new HttpError(404, `${NAMES[role]} not found`);
    let password = clean(req.body.password);
    if (password && password.length < 6) throw new HttpError(400, 'Password must be at least 6 characters');
    const generated = !password;
    if (generated) password = generatePassword();

    await Users.updateById(person._id, { password: await hashPassword(password) });
    res.status(200).json({
      success: true,
      message: `Password reset for ${person.name}`,
      ...(generated && { generatedPassword: password }),
    });
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

// Spreadsheet columns, matched loosely: "Admission No", "admission_number",
// "Roll No" all mean the admission number.
const COLUMN_ALIASES: Record<string, string[]> = {
  admissionNumber: ['admissionnumber', 'admissionno', 'admno', 'admission', 'rollno', 'rollnumber', 'regno', 'registerno', 'studentid'],
  name: ['name', 'studentname', 'fullname'],
  classGrade: ['class', 'classgrade', 'standard', 'std', 'grade', 'classstandard'],
  section: ['section', 'sec', 'division'],
  phone: ['phone', 'mobile', 'mobileno', 'phonenumber', 'mobilenumber', 'parentphone', 'parentmobile', 'parentmobilenumber', 'contact'],
  email: ['email', 'emailid', 'mail', 'parentemail'],
  password: ['password', 'pass'],
};
const IMPORT_HEADERS = ['Admission No', 'Name', 'Class', 'Section', 'Phone', 'Email', 'Password'];

const normaliseRow = (row: Record<string, any>) => {
  const byKey: Record<string, any> = {};
  for (const [header, value] of Object.entries(row)) {
    const key = header.toLowerCase().replace(/[^a-z0-9]/g, '');
    const field = Object.keys(COLUMN_ALIASES).find((f) => COLUMN_ALIASES[f].includes(key));
    if (field && byKey[field] === undefined) byKey[field] = value;
  }
  return byKey;
};

/** Reads the first sheet of an .xlsx/.xls/.csv file as rows keyed by header. */
const readSheet = (filePath: string) => {
  const workbook = XLSX.readFile(filePath, { raw: false });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  // raw: false keeps admission numbers and phones as typed (no 9.87E+09)
  return XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: '', raw: false });
};

// @desc    Excel template for importing students
// @route   GET /api/school/students/import-template
export const getImportTemplate = (req: AuthRequest, res: Response) => {
  const sheet = XLSX.utils.aoa_to_sheet([
    IMPORT_HEADERS,
    ['1001', 'Anu R', '9', 'A', '9876543210', '', ''],
    ['1002', 'Bala K', '9', 'B', '9876500001', 'bala@example.com', ''],
  ]);
  sheet['!cols'] = IMPORT_HEADERS.map((h) => ({ wch: Math.max(12, h.length + 2) }));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, 'Students');
  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="students-import-template.xlsx"');
  res.send(buffer);
};

// @desc    Add many students from an Excel or CSV file
// @route   POST /api/school/students/bulk-upload
export const bulkUploadStudents = async (req: AuthRequest, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Please upload an Excel or CSV file' });
  }

  try {
    let rows: Record<string, any>[];
    try {
      rows = readSheet(req.file.path).map(normaliseRow).filter((r) => Object.values(r).some((v) => clean(v)));
    } catch {
      throw new HttpError(400, 'Could not read the file. Please upload an Excel (.xlsx) or CSV file.');
    }
    if (rows.length === 0) throw new HttpError(400, 'The file has no student rows');
    if (rows.length > 2000) throw new HttpError(400, 'Please import at most 2000 students at a time');

    const errors: any[] = [];
    const created: any[] = [];
    const seen = new Set<string>();

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNumber = i + 2; // row 1 is the header
      try {
        const admissionKey = clean(row.admissionNumber).toUpperCase();
        if (admissionKey && seen.has(admissionKey)) throw new HttpError(400, 'Admission number repeated in the file');
        if (admissionKey) seen.add(admissionKey);

        const { fields, password } = await newPersonFields('student', row);
        const student = await withTransaction(async (client) => {
          await assertStudentSeats(client, req.user.schoolId);
          return createUser({ ...fields, schoolId: req.user.schoolId, isActive: true }, client);
        });
        created.push({
          admissionNumber: student.admissionNumber,
          name: student.name,
          classGrade: student.classGrade,
          section: student.section,
          password,
        });
      } catch (error: any) {
        const message =
          error.code === '23505' ? 'Admission number already used in your school' : error.message;
        errors.push({ row: rowNumber, admissionNumber: clean(row.admissionNumber), name: clean(row.name), error: message });
        // No seats left: the remaining rows would all fail the same way
        if (error instanceof HttpError && error.status === 403) {
          if (i + 1 < rows.length) errors.push({ row: rowNumber + 1, error: `${rows.length - i - 1} more rows not added` });
          break;
        }
      }
    }

    res.status(200).json({
      success: true,
      message: `${created.length} of ${rows.length} students added`,
      summary: { total: rows.length, success: created.length, errors: rows.length - created.length },
      // Login details to hand out (passwords are stored hashed and cannot be shown again)
      created,
      errors,
    });
  } catch (error: any) {
    sendError(res, error, 'Bulk upload students');
  } finally {
    fs.unlink(req.file.path, () => {});
  }
};
