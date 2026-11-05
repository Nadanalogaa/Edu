import { Response } from 'express';
import fs from 'fs';
import { randomInt } from 'crypto';
import * as XLSX from 'xlsx';
import { AuthRequest } from '../middleware/auth';
import { Users, createUser, findUserByEmail, hashPassword } from '../models/User';
import { query, withTransaction } from '../config/database';
import { assertStudentSeats, HttpError } from '../utils/tenancy';
import { parseClassGrade } from './registrationController';
import { Queryable } from '../config/database';
import { isUuid } from '../db/table';
import { howToSheet, readFirstSheet, sendWorkbook } from '../utils/excel';

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

/** Each teacher's classes, sections and subjects, with subject names, keyed by teacher id. */
const assignmentsByTeacher = async (schoolId: string, teacherIds: string[]) => {
  if (!teacherIds.length) return new Map<string, any[]>();
  const rows = await query(
    `SELECT a.id, a.teacher_id, a.class_grade, a.section, a.subject_id, s.name_en, s.name_ta
     FROM teacher_assignments a LEFT JOIN subjects s ON s.id = a.subject_id
     WHERE a.school_id = $1 AND a.teacher_id = ANY($2::uuid[])
     ORDER BY a.class_grade NULLS FIRST, a.section NULLS FIRST, s.sort_order NULLS FIRST`,
    [schoolId, teacherIds]
  );
  const map = new Map<string, any[]>();
  for (const r of rows) {
    const list = map.get(r.teacher_id) || [];
    list.push({ _id: r.id, classGrade: r.class_grade, section: r.section, subjectId: r.subject_id, subjectEn: r.name_en, subjectTa: r.name_ta });
    map.set(r.teacher_id, list);
  }
  return map;
};

type AssignmentItem = { classGrade: number | null; section: string | null; subjectId: string | null };

/**
 * Checks a teacher's classes. `all: true` = the whole school. Each item: a
 * class, optionally a section and a subject of that class (empty = every
 * section / every subject).
 */
const parseAssignments = async (client: Queryable, board: string, input: any) => {
  const items: AssignmentItem[] = [];
  if (input?.all) return [{ classGrade: null, section: null, subjectId: null }];
  for (const raw of Array.isArray(input?.items) ? input.items : []) {
    const classGrade = parseClassGrade(raw?.classGrade);
    if (classGrade === null) throw new HttpError(400, 'Each class must be between 6th and 12th');
    const section = clean(raw?.section).toUpperCase() || null;
    let subjectId: string | null = null;
    if (raw?.subjectId) {
      if (!isUuid(raw.subjectId)) throw new HttpError(400, 'Please choose a subject');
      const [subject] = await query('SELECT class_grade, board FROM subjects WHERE id = $1', [raw.subjectId], client);
      if (!subject || subject.board !== board || subject.class_grade !== classGrade) {
        throw new HttpError(400, `The subject chosen for ${classGrade}th does not belong to that class`);
      }
      subjectId = raw.subjectId;
    }
    if (!items.some((i) => i.classGrade === classGrade && i.section === section && i.subjectId === subjectId)) {
      items.push({ classGrade, section, subjectId });
    }
  }
  if (items.length > 60) throw new HttpError(400, 'Too many classes for one teacher');
  return items;
};

/** Stores a teacher's classes: replacing the old ones, or adding to them. */
const writeAssignments = async (client: Queryable, schoolId: string, teacherId: string, items: AssignmentItem[], mode: 'replace' | 'add' = 'replace') => {
  if (mode === 'replace') await query('DELETE FROM teacher_assignments WHERE teacher_id = $1', [teacherId], client);
  for (const i of items) {
    await query(
      `INSERT INTO teacher_assignments (school_id, teacher_id, class_grade, section, subject_id) VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (teacher_id, COALESCE(class_grade, 0), COALESCE(section, ''), COALESCE(subject_id, '00000000-0000-0000-0000-000000000000')) DO NOTHING`,
      [schoolId, teacherId, i.classGrade, i.section, i.subjectId],
      client
    );
  }
};

const saveAssignments = async (client: Queryable, schoolId: string, board: string, teacherId: string, input: any) =>
  writeAssignments(client, schoolId, teacherId, await parseAssignments(client, board, input));

const schoolBoard = async (schoolId: string, client?: Queryable) => {
  const [school] = await query('SELECT board FROM schools WHERE id = $1', [schoolId], client);
  return school?.board;
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

    if (role === 'teacher') {
      const assignments = await assignmentsByTeacher(req.user.schoolId, people.map((p) => p._id));
      people.forEach((p) => (p.assignments = assignments.get(p._id) || []));
    }

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
      const created = await createUser({ ...fields, schoolId: req.user.schoolId, isActive: true }, client);
      // A new teacher looks after the whole school unless the admin chose classes
      if (role === 'teacher') {
        const board = await schoolBoard(req.user.schoolId, client);
        await saveAssignments(client, req.user.schoolId, board, created._id, req.body.assignments ?? { all: true });
      }
      return created;
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

// @desc    Replace a teacher's classes, sections and subjects
// @route   PUT /api/school/teachers/:id/assignments  { all: true } | { items: [{ classGrade, section?, subjectId? }] }
export const setTeacherAssignments = async (req: AuthRequest, res: Response) => {
  try {
    const teacher = await findPerson(req, 'teacher');
    if (!teacher) throw new HttpError(404, 'Teacher not found');
    await withTransaction(async (client) => {
      const board = await schoolBoard(req.user.schoolId, client);
      await saveAssignments(client, req.user.schoolId, board, teacher._id, req.body);
    });
    const assignments = (await assignmentsByTeacher(req.user.schoolId, [teacher._id])).get(teacher._id) || [];
    res.status(200).json({ success: true, message: 'Classes saved', data: assignments });
  } catch (error: any) {
    sendError(res, error, 'Save teacher classes');
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
export const getImportTemplate = async (req: AuthRequest, res: Response) => {
  const sections = await query(
    `SELECT class_grade, section, count(*)::int AS n FROM users
     WHERE school_id = $1 AND role = 'student' AND is_active AND class_grade IS NOT NULL
     GROUP BY 1, 2 ORDER BY 1, 2 NULLS FIRST`,
    [req.user.schoolId]
  );
  sendWorkbook(res, 'students-import-template.xlsx', [
    {
      name: 'Students',
      rows: [
        IMPORT_HEADERS,
        ['1001', 'Anu R', '9', 'A', '9876543210', '', ''],
        ['1002', 'Bala K', '9', 'A', '9876500001', 'bala.parent@example.com', ''],
        ['1003', 'Chitra M', '9', 'B', '9876500002', '', 'chitra123'],
        ['1004', 'Dinesh P', '10', 'A', '9876500003', '', ''],
      ],
      widths: [14, 24, 8, 10, 16, 28, 14],
    },
    howToSheet('Importing students: one row per student', [
      ['Admission No (required)', 'The student signs in with your school code and this number. It must be unique in your school.'],
      ['Name (required)', 'Full name as it should appear on reports.'],
      ['Class (required)', '6 to 12, written as 9, 9th or IX.'],
      ['Section', 'A, B, C… Use the same spelling as your teachers\' sections. Leave empty if the class has one section.'],
      ['Phone', 'Parent\'s mobile number.'],
      ['Email', 'Optional.'],
      ['Password', 'Optional. Leave empty and the app creates one; download the login details after the import.'],
      [],
      ['Tips', '• Keep the first row (the column names) as it is. • Delete the sample rows before uploading. • Up to 2000 students per file.'],
      ['', '• Only active students count towards your licence; the import stops when the licence is full.'],
    ]),
    {
      name: 'Your classes now',
      rows: [['Class', 'Section', 'Students'], ...sections.map((r) => [r.class_grade, r.section || '(none)', r.n])],
      widths: [10, 12, 10],
    },
  ]);
};

// ------------------------------------------------------------ teacher import

const TEACHER_ALIASES: Record<string, string[]> = {
  name: ['name', 'teachername', 'fullname'],
  email: ['email', 'emailid', 'mail'],
  phone: ['phone', 'mobile', 'mobileno', 'phonenumber', 'mobilenumber', 'contact'],
  password: ['password', 'pass'],
  classGrade: ['class', 'classgrade', 'standard', 'std', 'grade'],
  section: ['section', 'sec', 'division'],
  subject: ['subject', 'subjects', 'subjectname'],
};
const TEACHER_HEADERS = ['Name', 'Email', 'Phone', 'Password', 'Class', 'Section', 'Subject'];

const normaliseTeacherRow = (row: Record<string, any>) => {
  const byKey: Record<string, any> = {};
  for (const [header, value] of Object.entries(row)) {
    const key = header.toLowerCase().replace(/[^a-z0-9]/g, '');
    const field = Object.keys(TEACHER_ALIASES).find((f) => TEACHER_ALIASES[f].includes(key));
    if (field && byKey[field] === undefined) byKey[field] = value;
  }
  return byKey;
};

const WHOLE_SCHOOL = /^(all|all classes|whole school|school)$/i;
const ALL_SUBJECTS = /^(|all|all subjects|every subject)$/i;
const subjectKey = (v: string) => v.toLowerCase().replace(/[^a-z0-9\u0B80-\u0BFF]/g, '');

// @desc    Excel template for importing teachers, with the school's subjects
// @route   GET /api/school/teachers/import-template
export const getTeacherImportTemplate = async (req: AuthRequest, res: Response) => {
  const board = await schoolBoard(req.user.schoolId);
  const subjects = await query(
    'SELECT class_grade, name_en, name_ta FROM subjects WHERE board = $1 AND is_active ORDER BY class_grade, sort_order, name_en',
    [board]
  );
  sendWorkbook(res, 'teachers-import-template.xlsx', [
    {
      name: 'Teachers',
      rows: [
        TEACHER_HEADERS,
        ['Priya S', 'priya@yourschool.com', '9876500011', '', '9', '', 'Maths'],
        ['Priya S', 'priya@yourschool.com', '', '', '10', '', 'Maths'],
        ['Kumar R', 'kumar@yourschool.com', '9876500012', '', '9', 'A', 'Science'],
        ['Kumar R', 'kumar@yourschool.com', '', '', '9', 'B', 'Science'],
        ['Lakshmi V', 'lakshmi@yourschool.com', '9876500013', '', '9', 'A', 'All'],
        ['Head Teacher', 'head@yourschool.com', '9876500014', 'head1234', 'All', '', ''],
      ],
      widths: [20, 28, 14, 12, 8, 10, 18],
    },
    howToSheet('Importing teachers: one row for each class and subject a teacher looks after', [
      ['Name (required)', 'Full name.'],
      ['Email (required)', 'The teacher signs in with this email. Use the same email on every row of the same teacher.'],
      ['Phone', 'Mobile number (only needed on the teacher\'s first row).'],
      ['Password', 'Optional. Leave empty and the app creates one; download the login details after the import.'],
      ['Class (required)', '6 to 12 (written as 9, 9th or IX), or All for a teacher who looks after the whole school.'],
      ['Section', 'A, B, C… Leave empty for every section of the class. Use the same spelling as your students\' sections.'],
      ['Subject', 'The subject name as in the Subjects sheet (e.g. Maths, Science). Leave empty or write All for every subject (a class teacher).'],
      [],
      ['Examples', '• Priya teaches Maths in all sections of 9th and 10th: two rows, Class 9 and Class 10, Subject Maths, Section empty.'],
      ['', '• Kumar teaches Science in 9A and 9B only: two rows with Section A and Section B.'],
      ['', '• Lakshmi is the class teacher of 9A for every subject: Class 9, Section A, Subject All.'],
      ['', '• The head teacher sees the whole school: Class All.'],
      [],
      ['Already added teachers', 'A row with the email of a teacher already in your school adds those classes to that teacher (nothing else changes).'],
      ['Tips', '• Keep the first row (the column names) as it is. • Delete the sample rows before uploading. • Up to 500 rows per file.'],
    ]),
    {
      name: 'Subjects',
      rows: [['Class', 'Subject (write this)', 'Subject in Tamil'], ...subjects.map((s) => [s.class_grade, s.name_en, s.name_ta])],
      widths: [8, 30, 30],
    },
  ]);
};

// @desc    Add teachers and their classes from an Excel or CSV file (one row per class and subject)
// @route   POST /api/school/teachers/bulk-upload
export const bulkUploadTeachers = async (req: AuthRequest, res: Response) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'Please upload an Excel or CSV file' });
  try {
    let rows: Record<string, any>[];
    try {
      rows = readFirstSheet(req.file.path).map(normaliseTeacherRow);
    } catch {
      throw new HttpError(400, 'Could not read the file. Please upload an Excel (.xlsx) or CSV file.');
    }
    // Keep Excel row numbers (row 1 is the header) and drop empty rows
    const numbered = rows.map((row, i) => ({ row, rowNumber: i + 2 })).filter(({ row }) => Object.values(row).some((v) => clean(v)));
    if (numbered.length === 0) throw new HttpError(400, 'The file has no teacher rows. Check the column names against the template.');
    if (numbered.length > 500) throw new HttpError(400, 'Please import at most 500 rows at a time');

    const board = await schoolBoard(req.user.schoolId);
    const subjects = await query('SELECT id, class_grade, name_en, name_ta, code FROM subjects WHERE board = $1 AND is_active', [board]);
    const errors: { row: number; name?: string; email?: string; error: string }[] = [];

    // Rows of the same teacher (same email) together, in file order
    const groups = new Map<string, typeof numbered>();
    for (const item of numbered) {
      const email = clean(item.row.email).toLowerCase();
      if (!email) {
        errors.push({ row: item.rowNumber, name: clean(item.row.name), error: 'Email is required' });
        continue;
      }
      groups.set(email, [...(groups.get(email) || []), item]);
    }

    const created: any[] = [];
    const updated: any[] = [];
    for (const [email, items] of groups) {
      const first = items[0];
      const name = items.map((i) => clean(i.row.name)).find(Boolean) || '';
      // Each row: a class (or the whole school), a section and a subject
      const classes: AssignmentItem[] = [];
      let rowsOk = true;
      for (const { row, rowNumber } of items) {
        const rawClass = clean(row.classGrade);
        if (WHOLE_SCHOOL.test(rawClass)) {
          classes.push({ classGrade: null, section: null, subjectId: null });
          continue;
        }
        const classGrade = parseClassGrade(rawClass);
        if (classGrade === null) {
          errors.push({ row: rowNumber, name, email, error: rawClass ? `Class "${rawClass}" must be 6 to 12, or All` : 'Class is required (6 to 12, or All)' });
          rowsOk = false;
          continue;
        }
        const rawSubject = clean(row.subject);
        let subjectId: string | null = null;
        if (!ALL_SUBJECTS.test(rawSubject)) {
          const key = subjectKey(rawSubject);
          const match = subjects.find((s) => s.class_grade === classGrade && [s.name_en, s.name_ta, s.code].some((n) => n && subjectKey(n) === key));
          if (!match) {
            errors.push({ row: rowNumber, name, email, error: `No subject "${rawSubject}" in ${classGrade}th. See the Subjects sheet of the template.` });
            rowsOk = false;
            continue;
          }
          subjectId = match.id;
        }
        classes.push({ classGrade, section: clean(row.section).toUpperCase() || null, subjectId });
      }
      if (!rowsOk) continue; // fix the rows and import the teacher again

      const items_ = classes.some((c) => !c.classGrade) ? [{ classGrade: null, section: null, subjectId: null }] : classes;
      try {
        const existing = await findUserByEmail(email);
        if (existing) {
          if (existing.role !== 'teacher' || existing.schoolId !== req.user.schoolId) throw new HttpError(400, 'This email is already used by another account');
          await withTransaction((client) => writeAssignments(client, req.user.schoolId, existing._id, items_, 'add'));
          updated.push({ name: existing.name, email, classes: items_.length });
          continue;
        }
        const input = {
          name,
          email,
          phone: items.map((i) => clean(i.row.phone)).find(Boolean),
          password: items.map((i) => clean(i.row.password)).find(Boolean),
        };
        const { fields, password } = await newPersonFields('teacher', input);
        await withTransaction(async (client) => {
          const teacher = await createUser({ ...fields, schoolId: req.user.schoolId, isActive: true }, client);
          await writeAssignments(client, req.user.schoolId, teacher._id, items_);
        });
        created.push({ name, email, password, classes: items_.length });
      } catch (error: any) {
        errors.push({ row: first.rowNumber, name, email, error: error.code === '23505' ? 'This email is already registered' : error.message });
      }
    }

    const teachers = groups.size;
    res.status(200).json({
      success: true,
      message: `${created.length} teachers added${updated.length ? `, ${updated.length} existing teachers given more classes` : ''}${errors.length ? `; ${errors.length} rows need fixing` : ''}`,
      summary: { teachers, created: created.length, updated: updated.length, errors: errors.length },
      created,
      updated,
      errors: errors.sort((a, b) => a.row - b.row),
    });
  } catch (error: any) {
    sendError(res, error, 'Import teachers');
  } finally {
    fs.unlink(req.file.path, () => {});
  }
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
