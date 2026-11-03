import bcrypt from 'bcryptjs';
import { Table, Doc } from '../db/table';
import { query, Queryable } from '../config/database';

export const Users = new Table(
  'users',
  [
    'name', 'email', 'password', 'role', 'schoolId', 'grade', 'phone', 'language', 'theme',
    'profileImage', 'isActive', 'coins', 'streak', 'lastActivityDate', 'totalPoints',
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
      email: String(data.email || '').trim().toLowerCase(),
      password: await hashPassword(data.password),
    },
    client
  );
};

export const findUserByEmail = async (email: string, { withPassword = false } = {}) => {
  const [row] = await query('SELECT * FROM users WHERE email = $1', [String(email || '').trim().toLowerCase()]);
  return Users.toDoc(row, { withHidden: withPassword });
};
