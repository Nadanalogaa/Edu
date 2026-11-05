import { query, Queryable } from '../config/database';
import { AuthRequest } from '../middleware/auth';

// What a school's staff may see. School admins see the whole school. Teachers
// see the classes, sections and subjects the admin assigned them; a NULL column
// in an assignment means "all", so a row with every column NULL is a teacher
// who looks after the whole school. A teacher with no assignment sees nothing.

export interface Assignment {
  classGrade: number | null;
  section: string | null;
  subjectId: string | null;
}

/** null = no limit (school admin). */
export type StaffScope = Assignment[] | null;

export const assignmentsOf = async (teacherId: string, client?: Queryable): Promise<Assignment[]> => {
  const rows = await query(
    `SELECT class_grade, section, subject_id FROM teacher_assignments WHERE teacher_id = $1
     ORDER BY class_grade NULLS FIRST, section NULLS FIRST`,
    [teacherId],
    client
  );
  return rows.map((r) => ({ classGrade: r.class_grade, section: r.section, subjectId: r.subject_id }));
};

export const staffScopeOf = async (req: AuthRequest): Promise<StaffScope> =>
  req.user.role === 'teacher' ? assignmentsOf(req.user._id) : null;

/** True for a scope that covers the whole school. */
export const coversAll = (scope: StaffScope) => scope === null || scope.some((a) => !a.classGrade && !a.section && !a.subjectId);

const either = (parts: string[]) => (parts.length ? `(${parts.join(' OR ')})` : 'false');

/**
 * SQL condition: the student (class and section columns) is in one of the
 * teacher's classes. Subject assignments count, since the teacher teaches them.
 */
export const studentInScope = (scope: StaffScope, params: any[], gradeCol: string, sectionCol: string) => {
  if (coversAll(scope)) return 'true';
  return either(
    scope!.map((a) => {
      const parts: string[] = [];
      if (a.classGrade) {
        params.push(a.classGrade);
        parts.push(`${gradeCol} = $${params.length}`);
      }
      if (a.section) {
        params.push(a.section);
        parts.push(`${sectionCol} = $${params.length}`);
      }
      return parts.length ? `(${parts.join(' AND ')})` : 'true';
    })
  );
};

/**
 * SQL condition: a piece of work (a test answer, practice answer or mistake)
 * by a student of class/section in a subject falls inside the scope.
 */
export const workInScope = (scope: StaffScope, params: any[], gradeCol: string, sectionCol: string, subjectCol: string) => {
  if (coversAll(scope)) return 'true';
  return either(
    scope!.map((a) => {
      const parts: string[] = [];
      if (a.classGrade) {
        params.push(a.classGrade);
        parts.push(`${gradeCol} = $${params.length}`);
      }
      if (a.section) {
        params.push(a.section);
        parts.push(`${sectionCol} = $${params.length}`);
      }
      if (a.subjectId) {
        params.push(a.subjectId);
        parts.push(`${subjectCol} = $${params.length}`);
      }
      return parts.length ? `(${parts.join(' AND ')})` : 'true';
    })
  );
};

/** SQL condition for tests (alias t): the test's class and subject, and a section it is open to. */
export const testInScope = (scope: StaffScope, params: any[], alias = 't') => {
  if (coversAll(scope)) return 'true';
  return either(
    scope!.map((a) => {
      const parts: string[] = [];
      if (a.classGrade) {
        params.push(a.classGrade);
        parts.push(`${alias}.class_grade = $${params.length}`);
      }
      if (a.section) {
        params.push(a.section);
        parts.push(`(cardinality(${alias}.sections) = 0 OR $${params.length} = ANY(${alias}.sections))`);
      }
      if (a.subjectId) {
        params.push(a.subjectId);
        parts.push(`${alias}.subject_id = $${params.length}`);
      }
      return parts.length ? `(${parts.join(' AND ')})` : 'true';
    })
  );
};

/** May the teacher set or change a test for this class and subject (optionally for these sections)? */
export const canTeach = (scope: StaffScope, classGrade: number, subjectId: string, sections: string[] = []) => {
  if (coversAll(scope)) return true;
  const fits = (a: Assignment) => (!a.classGrade || a.classGrade === classGrade) && (!a.subjectId || a.subjectId === subjectId);
  if (!sections.length) return scope!.some((a) => fits(a) && !a.section);
  return sections.every((sec) => scope!.some((a) => fits(a) && (!a.section || a.section === sec)));
};

/** The sections a teacher looks after for this class and subject ([] = every section). */
export const sectionsFor = (scope: StaffScope, classGrade: number, subjectId: string) => {
  if (canTeach(scope, classGrade, subjectId)) return [];
  return [...new Set(scope!.filter((a) => (!a.classGrade || a.classGrade === classGrade) && (!a.subjectId || a.subjectId === subjectId)).map((a) => a.section!))];
};

/** May staff open this student's report? */
export const canSeeStudent = (scope: StaffScope, student: { classGrade: number | null; section: string | null }) =>
  coversAll(scope) ||
  scope!.some((a) => (!a.classGrade || a.classGrade === student.classGrade) && (!a.section || a.section === student.section));
