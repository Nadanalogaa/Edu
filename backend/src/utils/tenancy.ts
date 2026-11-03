import { query, Queryable } from '../config/database';

// Each school is a separate customer. Content rows carry school_id:
//   NULL      -> the owner's shared bank, visible to every school
//   school id -> that school's own content, visible only inside the school
// These helpers build the SQL conditions; they push their values onto `params`.

export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export const isOwner = (user: any) => user?.role === 'owner';

/** The school new content belongs to: NULL (shared bank) for the owner. */
export const contentSchoolId = (user: any): string | null => (isOwner(user) ? null : user.schoolId);

/** Rows the user can read: the shared bank plus their own school's rows. */
export const visibleTo = (user: any, params: any[], column = 'school_id') => {
  if (isOwner(user) || !user.schoolId) return `${column} IS NULL`;
  params.push(user.schoolId);
  return `(${column} IS NULL OR ${column} = $${params.length})`;
};

/** Rows the user can change: the shared bank for the owner, otherwise their own school's rows. */
export const ownedBy = (user: any, params: any[], column = 'school_id') => {
  if (isOwner(user)) return `${column} IS NULL`;
  if (!user.schoolId) return 'false';
  params.push(user.schoolId);
  return `${column} = $${params.length}`;
};

/** Same checks for a row already loaded. */
export const canRead = (user: any, row: Record<string, any>) =>
  !row.schoolId || (!isOwner(user) && row.schoolId === user.schoolId);
export const canChange = (user: any, row: Record<string, any>) =>
  isOwner(user) ? !row.schoolId : Boolean(user.schoolId) && row.schoolId === user.schoolId;

const today = () => new Date().toISOString().slice(0, 10);

/**
 * Why a school's users may not sign in, or null if they may. Used at login and
 * on every request, so changes made by the owner apply immediately.
 */
export const schoolBlockReason = (school: any): string | null => {
  if (!school) return null;
  if (school.registrationStatus === 'pending') return 'Your school registration is waiting for approval.';
  if (school.registrationStatus === 'rejected') return 'Your school registration was not approved.';
  if (!school.isActive) return 'Your school account is inactive. Please contact support.';
  if (school.subscriptionExpiresAt && school.subscriptionExpiresAt < today()) {
    return 'Your school subscription has expired. Please contact support to renew.';
  }
  return null;
};

/**
 * Throws unless the school can take `count` more active students. Locks the
 * school row, so call it inside the transaction that adds the students.
 */
export const assertStudentSeats = async (client: Queryable, schoolId: string, count = 1) => {
  const [school] = await query('SELECT student_limit FROM schools WHERE id = $1 FOR UPDATE', [schoolId], client);
  if (!school) throw new HttpError(404, 'School not found');
  const [{ used }] = await query(
    "SELECT count(*)::int AS used FROM users WHERE school_id = $1 AND role = 'student' AND is_active = true",
    [schoolId],
    client
  );
  if (used + count > school.student_limit) {
    throw new HttpError(
      403,
      `Student limit reached: ${used} of ${school.student_limit} students are active. Please contact support to add more students.`
    );
  }
};
