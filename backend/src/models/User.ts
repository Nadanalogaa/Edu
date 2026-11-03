import bcrypt from 'bcryptjs';
import { Table, Doc } from '../db/table';
import { query, Queryable } from '../config/database';

export const Users = new Table(
  'users',
  [
    'name', 'email', 'password', 'role', 'schoolId', 'grade', 'phone', 'language', 'theme',
    'profileImage', 'isActive', 'coins', 'streak', 'lastActivityDate', 'totalPoints', 'classGrade',
    'section', 'admissionNumber',
  ],
  [],
  ['password'] // never returned unless asked for
);

export const hashPassword = async (password: string) => bcrypt.hash(password, await bcrypt.genSalt(10));

export const comparePassword = (candidate: string, hash: string) => bcrypt.compare(candidate, hash);

/** Creates a user, normalising the email and hashing the password. */
export const createUser = async (data: Record<string, any>, client?: Queryable): Promise<Doc> => {
  if (!data.password || String(data.password).length < 6) {
    throw Object.assign(new Error('Password must be at least 6 characters'), { status: 400 });
  }
  return Users.insert(
    {
      ...data,
      email: data.email ? String(data.email).trim().toLowerCase() : null,
      admissionNumber: data.admissionNumber ? String(data.admissionNumber).trim() : null,
      password: await hashPassword(data.password),
    },
    client
  );
};

/** A student by their school's code and admission number (case-insensitive). */
export const findStudentByAdmission = async (schoolCode: string, admissionNumber: string, { withPassword = false } = {}) => {
  const [row] = await query(
    `SELECT u.* FROM users u JOIN schools s ON s.id = u.school_id
     WHERE s.code = upper($1) AND upper(u.admission_number) = upper($2)`,
    [String(schoolCode || '').trim(), String(admissionNumber || '').trim()]
  );
  return Users.toDoc(row, { withHidden: withPassword });
};

export const findUserWithPassword = async (id: string) => {
  const [row] = await query('SELECT * FROM users WHERE id = $1', [id]);
  return Users.toDoc(row, { withHidden: true });
};

export const findUserByEmail = async (email: string, { withPassword = false } = {}) => {
  const [row] = await query('SELECT * FROM users WHERE email = $1', [String(email || '').trim().toLowerCase()]);
  return Users.toDoc(row, { withHidden: withPassword });
};
