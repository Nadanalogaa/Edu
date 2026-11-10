import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';
import { openDoubtCount } from './doubtsController';
import { StaffScope, staffScopeOf, studentInScope, workInScope, testInScope, canSeeStudent, coversAll } from '../utils/staffScope';

// School reports from submitted class assessments, practice and the Mistake
// Book. Everything is limited to the signed-in user's school, and for teachers
// to the classes, sections and subjects they are assigned. A student is
// "at risk" below the pass mark or after missing two tests.

export const PASS_MARK = 35;
/** A chapter counts as strong for a student at this % of answers correct. */
const STRONG_CHAPTER = 60;

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({ success: false, message: error.message });
  }
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const round1 = (n: any) => (n === null || n === undefined ? null : Math.round(Number(n) * 10) / 10);

interface Scope {
  schoolId: string;
  /** Teacher's assignments; null for school admins (whole school). */
  staff: StaffScope;
  classGrade?: number;
  section?: string;
  subjectId?: string;
  from?: string;
}

const scopeFrom = async (req: AuthRequest): Promise<Scope> => {
  const { classGrade, section, subjectId, from } = req.query;
  if (!req.user.schoolId) throw new HttpError(403, 'Your account is not linked to a school');
  return {
    schoolId: req.user.schoolId,
    staff: await staffScopeOf(req),
    classGrade: classGrade ? Number(classGrade) : undefined,
    section: section ? String(section).toUpperCase() : undefined,
    subjectId: isUuid(subjectId) ? (subjectId as string) : undefined,
    from: from && !Number.isNaN(Date.parse(String(from))) ? String(from) : undefined,
  };
};

/**
 * Submitted attempts of the school's class tests within the scope, as a CTE
 * named `att`. Pushes its parameters onto `params`.
 */
const attemptsCte = (scope: Scope, params: any[], studentId?: string) => {
  params.push(scope.schoolId);
  const where = [`t.school_id = $${params.length}`, "a.status = 'completed'", 't.class_grade IS NOT NULL'];
  const add = (sql: string, value: any) => {
    params.push(value);
    where.push(sql.replace('?', `$${params.length}`));
  };
  if (scope.classGrade) add('t.class_grade = ?', scope.classGrade);
  if (scope.section) add('u.section = ?', scope.section);
  if (scope.subjectId) add('t.subject_id = ?', scope.subjectId);
  if (scope.from) add('a.end_time >= ?', scope.from);
  if (studentId) add('a.student_id = ?', studentId);
  else where.push('u.is_active');
  where.push(workInScope(scope.staff, params, 't.class_grade', 'u.section', 't.subject_id'));
  return `att AS (
    SELECT a.id, a.student_id, a.test_id, a.percentage, a.marks_obtained, a.total_marks, a.end_time, a.answers,
           a.correct_answers, a.wrong_answers, a.skipped_answers, a.time_taken,
           t.title AS test_title, t.subject_id, t.class_grade, u.section, u.name
    FROM student_attempts a
    JOIN tests t ON t.id = a.test_id
    JOIN users u ON u.id = a.student_id
    WHERE ${where.join(' AND ')}
  )`;
};

/** Chapter accuracy from the answers of attempts in `att`. */
const chapterSql = (minAnswers: number) => `
  SELECT c.id AS chapter_id, c.number, c.name_en, c.name_ta, s.id AS subject_id, s.name_en AS subject_en, s.name_ta AS subject_ta,
         count(*)::int AS answered,
         count(*) FILTER (WHERE (ans->>'isCorrect')::boolean)::int AS correct
  FROM att, jsonb_array_elements(att.answers) ans
  JOIN questions q ON q.id = (ans->>'questionId')::uuid
  JOIN chapters c ON c.id = q.chapter_id
  JOIN subjects s ON s.id = c.subject_id
  GROUP BY c.id, c.number, c.name_en, c.name_ta, s.id, s.name_en, s.name_ta
  HAVING count(*) >= ${minAnswers}`;

/** Accuracy by question difficulty from the answers of attempts in `att`. */
const difficultySql = `
  SELECT q.difficulty, count(*)::int AS answered,
         count(*) FILTER (WHERE (ans->>'isCorrect')::boolean)::int AS correct
  FROM att, jsonb_array_elements(att.answers) ans
  JOIN questions q ON q.id = (ans->>'questionId')::uuid
  GROUP BY q.difficulty`;

const difficultyRows = (rows: any[]) =>
  ['easy', 'medium', 'hard']
    .map((level) => rows.find((r) => r.difficulty === level))
    .filter(Boolean)
    .map((r) => ({ difficulty: r.difficulty, answered: r.answered, correct: r.correct, accuracy: round1((r.correct / r.answered) * 100) }));

const chapterRow = (r: any) => ({
  chapterId: r.chapter_id,
  number: r.number,
  nameEn: r.name_en,
  nameTa: r.name_ta,
  subjectId: r.subject_id,
  subjectEn: r.subject_en,
  subjectTa: r.subject_ta,
  answered: r.answered,
  correct: r.correct,
  accuracy: round1((r.correct / r.answered) * 100),
});

/** Students in scope with their averages; used by the overview and the student list. */
const studentSummaries = async (scope: Scope) => {
  const params: any[] = [];
  const cte = attemptsCte(scope, params);
  params.push(scope.schoolId);
  const schoolParam = params.length;
  const studentWhere = [`u.school_id = $${schoolParam}`, "u.role = 'student'", 'u.is_active', studentInScope(scope.staff, params, 'u.class_grade', 'u.section')];
  if (scope.classGrade) {
    params.push(scope.classGrade);
    studentWhere.push(`u.class_grade = $${params.length}`);
  }
  if (scope.section) {
    params.push(scope.section);
    studentWhere.push(`u.section = $${params.length}`);
  }
  let subjectFilter = `AND ${workInScope(scope.staff, params, 'u.class_grade', 'u.section', 't.subject_id')}`;
  // Practice answers and mistakes count in the same subjects
  let workFilter = `AND ${workInScope(scope.staff, params, 'u.class_grade', 'u.section', 'q.subject_id')}`;
  if (scope.subjectId) {
    params.push(scope.subjectId);
    subjectFilter += ` AND t.subject_id = $${params.length}`;
    workFilter += ` AND q.subject_id = $${params.length}`;
  }

  const rows = await query(
    `WITH ${cte},
     ranked AS (
       SELECT student_id, percentage, end_time, row_number() OVER (PARTITION BY student_id ORDER BY end_time DESC) AS rn,
              -- Trend compares the latest tests with the ones before: up to 3 each, at least 2 tests in all
              LEAST(3, count(*) OVER (PARTITION BY student_id) / 2) AS k
       FROM att
     ),
     -- Published class tests already open for the student's class/section, and whether they took them
     due AS (
       SELECT u.id AS student_id, count(t.id)::int AS assigned,
              count(t.id) FILTER (WHERE t.end_time < now() AND NOT EXISTS (
                SELECT 1 FROM student_attempts a WHERE a.test_id = t.id AND a.student_id = u.id AND a.status = 'completed'))::int AS missed
       FROM users u
       JOIN tests t ON t.school_id = u.school_id AND t.class_grade = u.class_grade AND t.is_active AND t.is_published
         AND (cardinality(t.sections) = 0 OR u.section = ANY(t.sections)) AND (t.start_time IS NULL OR t.start_time <= now())
         ${subjectFilter}
       WHERE ${studentWhere.join(' AND ')}
       GROUP BY u.id
     ),
     prac AS (
       SELECT pl.user_id,
              count(*) FILTER (WHERE pl.answered_at >= now() - interval '7 days')::int AS p7,
              count(*) FILTER (WHERE pl.answered_at >= now() - interval '14 days' AND pl.answered_at < now() - interval '7 days')::int AS p7_prev,
              count(*) FILTER (WHERE pl.answered_at >= now() - interval '30 days')::int AS p30,
              count(*) FILTER (WHERE pl.answered_at >= now() - interval '30 days' AND pl.correct)::int AS c30,
              count(DISTINCT (pl.answered_at AT TIME ZONE 'Asia/Kolkata')::date) FILTER (WHERE pl.answered_at >= now() - interval '7 days')::int AS days7,
              count(*)::int AS total, max(pl.answered_at) AS last_at
       FROM practice_log pl JOIN users u ON u.id = pl.user_id JOIN questions q ON q.id = pl.question_id
       WHERE ${studentWhere.join(' AND ')} ${workFilter}
       GROUP BY pl.user_id
     ),
     mist AS (
       SELECT m.student_id, count(*) FILTER (WHERE NOT m.is_reviewed)::int AS open,
              count(*) FILTER (WHERE m.is_reviewed AND m.reviewed_at >= now() - interval '7 days')::int AS fixed7
       FROM mistake_book m JOIN users u ON u.id = m.student_id JOIN questions q ON q.id = m.question_id
       WHERE ${studentWhere.join(' AND ')} ${workFilter}
       GROUP BY m.student_id
     )
     SELECT u.id, u.name, u.admission_number, u.class_grade, u.section,
            prac.p7, prac.p7_prev, prac.p30, prac.c30, prac.days7, prac.total AS practice_total, prac.last_at AS last_practice_at,
            mist.open AS open_mistakes, mist.fixed7,
            count(att.id)::int AS tests_taken,
            avg(att.percentage) AS average,
            max(att.end_time) AS last_test_at,
            (SELECT percentage FROM ranked r WHERE r.student_id = u.id AND rn = 1) AS last_percentage,
            (SELECT avg(percentage) FROM ranked r WHERE r.student_id = u.id AND k > 0 AND rn <= k) AS recent_average,
            (SELECT avg(percentage) FROM ranked r WHERE r.student_id = u.id AND k > 0 AND rn > k AND rn <= 2 * k) AS earlier_average,
            COALESCE(due.assigned, 0) AS assigned, COALESCE(due.missed, 0) AS missed
     FROM users u
     LEFT JOIN att ON att.student_id = u.id
     LEFT JOIN due ON due.student_id = u.id
     LEFT JOIN prac ON prac.user_id = u.id
     LEFT JOIN mist ON mist.student_id = u.id
     WHERE ${studentWhere.join(' AND ')}
     GROUP BY u.id, u.name, u.admission_number, u.class_grade, u.section, due.assigned, due.missed,
              prac.p7, prac.p7_prev, prac.p30, prac.c30, prac.days7, prac.total, prac.last_at, mist.open, mist.fixed7
     ORDER BY u.class_grade, u.section NULLS FIRST, u.name`,
    params
  );

  return rows.map((r) => {
    const average = round1(r.average);
    const trend =
      r.recent_average !== null && r.earlier_average !== null ? round1(Number(r.recent_average) - Number(r.earlier_average)) : null;
    const lastActiveAt = [r.last_test_at, r.last_practice_at].filter(Boolean).sort((a: any, b: any) => +new Date(b) - +new Date(a))[0] || null;
    const practice = {
      week: r.p7 || 0,
      lastWeek: r.p7_prev || 0,
      month: r.p30 || 0,
      accuracy: r.p30 ? round1((r.c30 / r.p30) * 100) : null,
      daysThisWeek: r.days7 || 0,
      total: r.practice_total || 0,
      lastAt: r.last_practice_at,
    };
    const mistakes = { open: r.open_mistakes || 0, fixedThisWeek: r.fixed7 || 0 };
    const attention = attentionReasons({ average, trend, missed: r.missed, testsTaken: r.tests_taken, assigned: r.assigned, lastActiveAt, practice, mistakes });
    return {
      _id: r.id,
      name: r.name,
      admissionNumber: r.admission_number,
      classGrade: r.class_grade,
      section: r.section,
      testsTaken: r.tests_taken,
      assigned: r.assigned,
      missed: r.missed,
      average,
      lastPercentage: round1(r.last_percentage),
      lastTestAt: r.last_test_at,
      trend,
      atRisk: (average !== null && average < PASS_MARK) || r.missed >= 2,
      practice,
      mistakes,
      lastActiveAt,
      band: bandOf(average),
      attention: attention.reasons,
      attentionScore: attention.score,
    };
  });
};

export type StudentSummary = Awaited<ReturnType<typeof studentSummaries>>[number];

/** Performance band from the test average. */
const bandOf = (average: number | null) =>
  average === null ? 'notStarted' : average >= 80 ? 'excellent' : average >= 60 ? 'good' : average >= PASS_MARK ? 'average' : 'struggling';

const DAY = 86400000;

/**
 * Why a student needs a teacher's attention, most serious first, with a score
 * to sort by: below the pass mark, missed tests, falling marks, no work for a
 * week, a pile of open mistakes, practising with low accuracy.
 */
const attentionReasons = (s: {
  average: number | null; trend: number | null; missed: number; testsTaken: number; assigned: number; lastActiveAt: any;
  practice: { week: number; month: number; accuracy: number | null }; mistakes: { open: number };
}) => {
  const reasons: { code: string; severity: 'high' | 'medium'; text: string }[] = [];
  if (s.average !== null && s.average < PASS_MARK) reasons.push({ code: 'belowPass', severity: 'high', text: `Test average ${s.average}%, below the pass mark` });
  if (s.missed >= 2) reasons.push({ code: 'missed', severity: 'high', text: `Missed ${s.missed} tests` });
  else if (s.missed === 1) reasons.push({ code: 'missed', severity: 'medium', text: 'Missed 1 test' });
  if (s.trend !== null && s.trend <= -10) reasons.push({ code: 'falling', severity: 'medium', text: `Marks falling (${s.trend} points over the last 3 tests)` });
  const idleDays = s.lastActiveAt ? Math.floor((Date.now() - +new Date(s.lastActiveAt)) / DAY) : null;
  if (idleDays === null) reasons.push({ code: 'inactive', severity: s.assigned > 0 ? 'high' : 'medium', text: 'Has not started: no tests or practice yet' });
  else if (idleDays >= 7) reasons.push({ code: 'inactive', severity: 'medium', text: `No practice or tests for ${idleDays} days` });
  if (s.mistakes.open >= 15) reasons.push({ code: 'mistakes', severity: 'medium', text: `${s.mistakes.open} mistakes not yet fixed` });
  if (s.practice.month >= 10 && s.practice.accuracy !== null && s.practice.accuracy < 50) {
    reasons.push({ code: 'lowAccuracy', severity: 'medium', text: `Practice accuracy only ${s.practice.accuracy}%` });
  }
  const score = reasons.reduce((n, r) => n + (r.severity === 'high' ? 3 : 1), 0);
  return { reasons, score };
};

// @desc    School (or class/section/subject) performance overview
// @route   GET /api/reports/overview?classGrade=&section=&subjectId=&from=
export const overview = async (req: AuthRequest, res: Response) => {
  try {
    const scope = await scopeFrom(req);
    const run = async (select: string) => {
      const params: any[] = [];
      return query(`WITH ${attemptsCte(scope, params)} ${select}`, params);
    };

    const [kpi] = await run(`SELECT count(DISTINCT test_id)::int AS tests, count(*)::int AS attempts,
                                    count(DISTINCT student_id)::int AS students, avg(percentage) AS average,
                                    count(*) FILTER (WHERE percentage >= ${PASS_MARK})::int AS passed FROM att`);
    const trend = await run(`SELECT date_trunc('week', end_time) AS week, avg(percentage) AS average, count(*)::int AS attempts
                             FROM att GROUP BY 1 ORDER BY 1`);
    const bySubject = await run(`SELECT s.id, s.name_en, s.name_ta, avg(att.percentage) AS average, count(*)::int AS attempts,
                                        count(DISTINCT att.test_id)::int AS tests
                                 FROM att JOIN subjects s ON s.id = att.subject_id GROUP BY s.id, s.name_en, s.name_ta, s.sort_order
                                 ORDER BY s.sort_order`);
    const byClass = await run(`SELECT class_grade, section, avg(percentage) AS average, count(*)::int AS attempts,
                                      count(DISTINCT student_id)::int AS students
                               FROM att GROUP BY class_grade, section ORDER BY class_grade, section NULLS FIRST`);
    const chapters = await run(`${chapterSql(3)} ORDER BY (count(*) FILTER (WHERE (ans->>'isCorrect')::boolean))::float / count(*) ASC LIMIT 8`);
    const byDifficulty = difficultyRows(await run(difficultySql));
    const recentTests = await run(`SELECT test_id, test_title, class_grade, max(end_time) AS last_submitted, avg(percentage) AS average,
                                          count(*)::int AS submitted
                                   FROM att GROUP BY test_id, test_title, class_grade ORDER BY max(end_time) DESC LIMIT 6`);

    // Participation: of the students each open test was for, how many submitted
    const pParams: any[] = [scope.schoolId];
    const pWhere = ['t.school_id = $1', 't.is_active', 't.is_published', 't.class_grade IS NOT NULL', '(t.start_time IS NULL OR t.start_time <= now())'];
    if (scope.classGrade) {
      pParams.push(scope.classGrade);
      pWhere.push(`t.class_grade = $${pParams.length}`);
    }
    if (scope.subjectId) {
      pParams.push(scope.subjectId);
      pWhere.push(`t.subject_id = $${pParams.length}`);
    }
    if (scope.from) {
      pParams.push(scope.from);
      pWhere.push(`COALESCE(t.start_time, t.created_at) >= $${pParams.length}`);
    }
    pWhere.push(testInScope(scope.staff, pParams, 't'));
    pParams.push(scope.section || null);
    const sectionParam = pParams.length;
    const pStudentScope = studentInScope(scope.staff, pParams, 'u.class_grade', 'u.section');
    const [participation] = await query(
      `SELECT COALESCE(sum(assigned), 0)::int AS assigned, COALESCE(sum(submitted), 0)::int AS submitted FROM (
         SELECT
           (SELECT count(*) FROM users u WHERE u.school_id = t.school_id AND u.role = 'student' AND u.is_active
              AND u.class_grade = t.class_grade AND (cardinality(t.sections) = 0 OR u.section = ANY(t.sections))
              AND ($${sectionParam}::text IS NULL OR u.section = $${sectionParam}) AND ${pStudentScope}) AS assigned,
           (SELECT count(*) FROM student_attempts a JOIN users u ON u.id = a.student_id
              WHERE a.test_id = t.id AND a.status = 'completed' AND u.is_active
              AND ($${sectionParam}::text IS NULL OR u.section = $${sectionParam}) AND ${pStudentScope}) AS submitted
         FROM tests t WHERE ${pWhere.join(' AND ')}
       ) x`,
      pParams
    );

    const students = await studentSummaries(scope);
    const withScores = students.filter((s) => s.average !== null);

    res.status(200).json({
      success: true,
      data: {
        passMark: PASS_MARK,
        kpis: {
          tests: kpi.tests,
          attempts: kpi.attempts,
          studentsTested: kpi.students,
          students: students.length,
          average: round1(kpi.average),
          passRate: kpi.attempts ? round1((kpi.passed / kpi.attempts) * 100) : null,
          participation: participation.assigned ? round1((participation.submitted / participation.assigned) * 100) : null,
          atRisk: students.filter((s) => s.atRisk).length,
        },
        trend: trend.map((t) => ({ week: t.week, average: round1(t.average), attempts: t.attempts })),
        bySubject: bySubject.map((s) => ({ subjectId: s.id, nameEn: s.name_en, nameTa: s.name_ta, average: round1(s.average), attempts: s.attempts, tests: s.tests })),
        byClass: byClass.map((c) => ({ classGrade: c.class_grade, section: c.section, average: round1(c.average), attempts: c.attempts, students: c.students })),
        weakChapters: chapters.map(chapterRow),
        byDifficulty,
        recentTests: recentTests.map((t) => ({ testId: t.test_id, title: t.test_title, classGrade: t.class_grade, lastSubmitted: t.last_submitted, average: round1(t.average), submitted: t.submitted })),
        atRisk: students.filter((s) => s.atRisk).sort((a, b) => (a.average ?? 101) - (b.average ?? 101)).slice(0, 10),
        top: [...withScores].sort((a, b) => b.average! - a.average!).slice(0, 5),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Report overview');
  }
};

// @desc    Every student in scope with tests taken, average, last score, trend, risk
// @route   GET /api/reports/students?classGrade=&section=&subjectId=&search=
export const students = async (req: AuthRequest, res: Response) => {
  try {
    const scope = await scopeFrom(req);
    let rows = await studentSummaries(scope);
    const search = String(req.query.search || '').trim().toLowerCase();
    if (search) rows = rows.filter((s) => s.name.toLowerCase().includes(search) || (s.admissionNumber || '').toLowerCase().includes(search));
    res.status(200).json({ success: true, passMark: PASS_MARK, data: rows });
  } catch (error: any) {
    sendError(res, error, 'Student reports');
  }
};

/** Full report for one student of the school (also used for the student's own progress page). */
export const buildStudentReport = async (schoolId: string, studentId: string, staff: StaffScope = null) => {
  const [student] = await query(
    `SELECT id, name, admission_number, class_grade, section, phone, email, created_at FROM users
     WHERE id = $1 AND school_id = $2 AND role = 'student'`,
    [studentId, schoolId]
  );
  if (!student || !canSeeStudent(staff, { classGrade: student.class_grade, section: student.section })) throw new HttpError(404, 'Student not found');

  const scope: Scope = { schoolId, staff };
  const run = async (select: string) => {
    const params: any[] = [];
    return query(`WITH ${attemptsCte(scope, params, studentId)} ${select}`, params);
  };

  const history = await run(`
    SELECT att.id, att.test_id, att.test_title, att.end_time, att.percentage, att.marks_obtained, att.total_marks,
           att.correct_answers, att.wrong_answers, att.skipped_answers, att.time_taken, s.name_en, s.name_ta,
           (SELECT avg(a2.percentage) FROM student_attempts a2 WHERE a2.test_id = att.test_id AND a2.status = 'completed') AS class_average
    FROM att LEFT JOIN subjects s ON s.id = att.subject_id ORDER BY att.end_time`);
  const bySubject = await run(`SELECT s.id, s.name_en, s.name_ta, avg(att.percentage) AS average, count(*)::int AS tests
                               FROM att JOIN subjects s ON s.id = att.subject_id GROUP BY s.id, s.name_en, s.name_ta, s.sort_order ORDER BY s.sort_order`);
  const chapters = await run(`${chapterSql(1)} ORDER BY s.name_en, c.number`);
  const byDifficulty = difficultyRows(await run(difficultySql));
  const missed = await query(
    `SELECT t.id, t.title, t.end_time, s.name_en, s.name_ta FROM tests t
     JOIN users u ON u.id = $1
     LEFT JOIN subjects s ON s.id = t.subject_id
     WHERE t.school_id = $2 AND t.is_active AND t.is_published AND t.class_grade = u.class_grade
       AND (cardinality(t.sections) = 0 OR u.section = ANY(t.sections)) AND t.end_time < now()
       AND NOT EXISTS (SELECT 1 FROM student_attempts a WHERE a.test_id = t.id AND a.student_id = u.id AND a.status = 'completed')
     ORDER BY t.end_time DESC`,
    [studentId, schoolId]
  );

  // Practice and Mistake Book, in the subjects the viewer looks after
  const work = (alias: string) => {
    const params: any[] = [studentId];
    return { params, sql: workInScope(staff, params, String(student.class_grade), `'${String(student.section || '').replace(/'/g, "''")}'`, `${alias}.subject_id`) };
  };
  const pw = work('q');
  const [practiceKpis] = await query(
    `SELECT count(*)::int AS total,
            count(*) FILTER (WHERE pl.answered_at >= now() - interval '7 days')::int AS week,
            count(*) FILTER (WHERE pl.answered_at >= now() - interval '30 days')::int AS month,
            count(*) FILTER (WHERE pl.answered_at >= now() - interval '30 days' AND pl.correct)::int AS month_correct,
            count(DISTINCT (pl.answered_at AT TIME ZONE 'Asia/Kolkata')::date) FILTER (WHERE pl.answered_at >= now() - interval '30 days')::int AS days30,
            max(pl.answered_at) AS last_at
     FROM practice_log pl JOIN questions q ON q.id = pl.question_id WHERE pl.user_id = $1 AND ${pw.sql}`,
    pw.params
  );
  const pweeks = work('q');
  const practiceWeeks = await query(
    `SELECT date_trunc('week', pl.answered_at AT TIME ZONE 'Asia/Kolkata') AS week, count(*)::int AS answered,
            count(*) FILTER (WHERE pl.correct)::int AS correct
     FROM practice_log pl JOIN questions q ON q.id = pl.question_id
     WHERE pl.user_id = $1 AND pl.answered_at >= now() - interval '8 weeks' AND ${pweeks.sql}
     GROUP BY 1 ORDER BY 1`,
    pweeks.params
  );
  const pch = work('q');
  const practiceChapters = await query(
    `SELECT c.id AS chapter_id, c.number, c.name_en, c.name_ta, s.id AS subject_id, s.name_en AS subject_en, s.name_ta AS subject_ta,
            count(*)::int AS answered, count(*) FILTER (WHERE pl.correct)::int AS correct
     FROM practice_log pl JOIN questions q ON q.id = pl.question_id JOIN chapters c ON c.id = q.chapter_id JOIN subjects s ON s.id = c.subject_id
     WHERE pl.user_id = $1 AND ${pch.sql}
     GROUP BY c.id, c.number, c.name_en, c.name_ta, s.id, s.name_en, s.name_ta ORDER BY s.name_en, c.number`,
    pch.params
  );
  const mk = work('q');
  const [mistakeKpis] = await query(
    `SELECT count(*) FILTER (WHERE NOT m.is_reviewed)::int AS open,
            count(*) FILTER (WHERE NOT m.is_reviewed AND m.source = 'test')::int AS open_tests,
            count(*) FILTER (WHERE NOT m.is_reviewed AND m.source = 'practice')::int AS open_practice,
            count(*) FILTER (WHERE m.is_reviewed)::int AS fixed
     FROM mistake_book m JOIN questions q ON q.id = m.question_id WHERE m.student_id = $1 AND ${mk.sql}`,
    mk.params
  );
  const mc = work('q');
  const mistakeChapters = await query(
    `SELECT c.id AS chapter_id, c.number, c.name_en, s.name_en AS subject_en, count(*)::int AS open
     FROM mistake_book m JOIN questions q ON q.id = m.question_id JOIN chapters c ON c.id = q.chapter_id JOIN subjects s ON s.id = c.subject_id
     WHERE m.student_id = $1 AND NOT m.is_reviewed AND ${mc.sql}
     GROUP BY c.id, c.number, c.name_en, s.name_en ORDER BY count(*) DESC LIMIT 8`,
    mc.params
  );
  const mt = work('q');
  const topMistakes = await query(
    `SELECT m.id, m.source, m.wrong_count, m.updated_at, q.question->>'en' AS text, q.image_url, c.number, c.name_en AS chapter_en, s.name_en AS subject_en
     FROM mistake_book m JOIN questions q ON q.id = m.question_id LEFT JOIN chapters c ON c.id = q.chapter_id LEFT JOIN subjects s ON s.id = q.subject_id
     WHERE m.student_id = $1 AND NOT m.is_reviewed AND ${mt.sql}
     ORDER BY m.wrong_count DESC, m.updated_at DESC LIMIT 8`,
    mt.params
  );

  const percentages = history.map((h) => round1(h.percentage) as number);
  const average = percentages.length ? round1(percentages.reduce((a, b) => a + b, 0) / percentages.length) : null;
  const chapterRows = chapters.map(chapterRow);

  return {
    passMark: PASS_MARK,
    student: {
      _id: student.id,
      name: student.name,
      admissionNumber: student.admission_number,
      classGrade: student.class_grade,
      section: student.section,
      phone: student.phone,
      email: student.email,
    },
    kpis: {
      testsTaken: history.length,
      average,
      best: percentages.length ? Math.max(...percentages) : null,
      last: percentages.length ? percentages[percentages.length - 1] : null,
      missed: missed.length,
      atRisk: (average !== null && average < PASS_MARK) || missed.length >= 2,
    },
    history: history.map((h) => ({
      attemptId: h.id,
      testId: h.test_id,
      title: h.test_title,
      subjectEn: h.name_en,
      subjectTa: h.name_ta,
      submittedAt: h.end_time,
      percentage: round1(h.percentage),
      marksObtained: h.marks_obtained,
      totalMarks: h.total_marks,
      correct: h.correct_answers,
      wrong: h.wrong_answers,
      skipped: h.skipped_answers,
      timeTaken: h.time_taken,
      classAverage: round1(h.class_average),
    })),
    bySubject: bySubject.map((s) => ({ subjectId: s.id, nameEn: s.name_en, nameTa: s.name_ta, average: round1(s.average), tests: s.tests })),
    byDifficulty,
    // Chapters answered at least 3 times: below 60% correct needs practice, 60% and above is strong
    weakChapters: chapterRows.filter((c) => c.answered >= 3 && c.accuracy! < STRONG_CHAPTER).sort((a, b) => a.accuracy! - b.accuracy!).slice(0, 5),
    strongChapters: chapterRows.filter((c) => c.answered >= 3 && c.accuracy! >= STRONG_CHAPTER).sort((a, b) => b.accuracy! - a.accuracy!).slice(0, 5),
    chapters: chapterRows,
    missed: missed.map((m) => ({ testId: m.id, title: m.title, closedAt: m.end_time, subjectEn: m.name_en, subjectTa: m.name_ta })),
    practice: {
      total: practiceKpis.total,
      week: practiceKpis.week,
      month: practiceKpis.month,
      accuracy: practiceKpis.month ? round1((practiceKpis.month_correct / practiceKpis.month) * 100) : null,
      activeDays30: practiceKpis.days30,
      lastAt: practiceKpis.last_at,
      weeks: practiceWeeks.map((w) => ({ week: w.week, answered: w.answered, accuracy: round1((w.correct / w.answered) * 100) })),
      chapters: practiceChapters.map(chapterRow),
    },
    mistakes: {
      open: mistakeKpis.open,
      openFromTests: mistakeKpis.open_tests,
      openFromPractice: mistakeKpis.open_practice,
      fixed: mistakeKpis.fixed,
      byChapter: mistakeChapters.map((c) => ({ chapterId: c.chapter_id, number: c.number, nameEn: c.name_en, subjectEn: c.subject_en, open: c.open })),
      top: topMistakes.map((m) => ({
        _id: m.id, source: m.source, wrongCount: m.wrong_count, updatedAt: m.updated_at, text: m.text, imageUrl: m.image_url,
        chapter: m.number ? `Ch. ${m.number} ${m.chapter_en}` : null, subjectEn: m.subject_en,
      })),
    },
  };
};

// @desc    One student's full report
// @route   GET /api/reports/students/:id
export const studentReport = async (req: AuthRequest, res: Response) => {
  try {
    if (!isUuid(req.params.id)) throw new HttpError(404, 'Student not found');
    res.status(200).json({ success: true, data: await buildStudentReport(req.user.schoolId, req.params.id, await staffScopeOf(req)) });
  } catch (error: any) {
    sendError(res, error, 'Student report');
  }
};

// @desc    The signed-in student's own progress
// @route   GET /api/student/progress
export const myProgress = async (req: AuthRequest, res: Response) => {
  try {
    const report = await buildStudentReport(req.user.schoolId, req.user._id);
    // Students do not need their contact details echoed back
    res.status(200).json({ success: true, data: { ...report, student: { ...report.student, phone: undefined, email: undefined } } });
  } catch (error: any) {
    sendError(res, error, 'My progress');
  }
};

const pct = (part: number, whole: number) => (whole ? round1((part / whole) * 100) : null);
const avgOf = (values: (number | null)[]) => {
  const v = values.filter((x): x is number => x !== null);
  return v.length ? round1(v.reduce((a, b) => a + b, 0) / v.length) : null;
};
const classKey = (g: number | null, s: string | null) => `${g ?? ''}|${s ?? ''}`;

// @desc    Home dashboard for teachers and school admins: who needs help, who is
//          doing well, how much the classes practise, what to teach again.
// @route   GET /api/reports/dashboard?classGrade=&section=&subjectId=
export const dashboard = async (req: AuthRequest, res: Response) => {
  try {
    const scope = await scopeFrom(req);
    const isAdmin = req.user.role === 'admin';
    const students = await studentSummaries(scope);
    const ids = students.map((s) => s._id);

    // Same student/subject limits for the queries below
    const workWhere = (params: any[], subjectCol: string) => {
      const parts = [`u.id = ANY($${params.push(ids)}::uuid[])`, workInScope(scope.staff, params, 'u.class_grade', 'u.section', subjectCol)];
      if (scope.subjectId) parts.push(`${subjectCol} = $${params.push(scope.subjectId)}`);
      return parts.join(' AND ');
    };

    // Daily activity for the last 14 days (India time)
    const ap: any[] = [];
    const pw = workWhere(ap, 'q.subject_id');
    const practiceDays = await query(
      `SELECT (pl.answered_at AT TIME ZONE 'Asia/Kolkata')::date AS day, count(*)::int AS answered,
              count(*) FILTER (WHERE pl.correct)::int AS correct, count(DISTINCT pl.user_id)::int AS students
       FROM practice_log pl JOIN users u ON u.id = pl.user_id JOIN questions q ON q.id = pl.question_id
       WHERE pl.answered_at >= now() - interval '14 days' AND ${pw} GROUP BY 1`,
      ap
    );
    const tp: any[] = [];
    const cte = attemptsCte({ ...scope, from: new Date(Date.now() - 14 * DAY).toISOString() }, tp);
    const testDays = await query(
      `WITH ${cte} SELECT (end_time AT TIME ZONE 'Asia/Kolkata')::date AS day, count(*)::int AS submitted, avg(percentage) AS average FROM att GROUP BY 1`,
      tp
    );
    const dayKey = (d: any) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
    const pByDay = new Map(practiceDays.map((d) => [dayKey(d.day), d]));
    const tByDay = new Map(testDays.map((d) => [dayKey(d.day), d]));
    const todayIst = new Date(Date.now() + 5.5 * 3600000);
    const activity = Array.from({ length: 14 }, (_, i) => {
      const day = new Date(todayIst.getTime() - (13 - i) * DAY).toISOString().slice(0, 10);
      const p = pByDay.get(day);
      const t = tByDay.get(day);
      return { day, practice: p?.answered || 0, practiceAccuracy: p ? pct(p.correct, p.answered) : null, practiceStudents: p?.students || 0, tests: t?.submitted || 0 };
    });

    // Test averages: last 30 days against the 30 before
    const mp: any[] = [];
    const [months] = await query(
      `WITH ${attemptsCte(scope, mp)}
       SELECT avg(percentage) FILTER (WHERE end_time >= now() - interval '30 days') AS recent,
              avg(percentage) FILTER (WHERE end_time < now() - interval '30 days' AND end_time >= now() - interval '60 days') AS earlier,
              count(*) FILTER (WHERE end_time >= now() - interval '30 days')::int AS submitted30,
              avg(percentage) AS overall, count(*)::int AS attempts
       FROM att`,
      mp
    );

    // By subject: tests, practice and open mistakes
    const sp: any[] = [];
    const sCte = attemptsCte(scope, sp);
    const subjectTests = await query(
      `WITH ${sCte} SELECT subject_id, avg(percentage) AS average, count(*)::int AS attempts FROM att WHERE subject_id IS NOT NULL GROUP BY subject_id`,
      sp
    );
    const spp: any[] = [];
    const spw = workWhere(spp, 'q.subject_id');
    const subjectPractice = await query(
      `SELECT q.subject_id, count(*)::int AS answered, count(*) FILTER (WHERE pl.correct)::int AS correct,
              count(*) FILTER (WHERE pl.answered_at >= now() - interval '7 days')::int AS week
       FROM practice_log pl JOIN users u ON u.id = pl.user_id JOIN questions q ON q.id = pl.question_id
       WHERE pl.answered_at >= now() - interval '30 days' AND ${spw} GROUP BY q.subject_id`,
      spp
    );
    const smp: any[] = [];
    const smw = workWhere(smp, 'q.subject_id');
    const subjectMistakes = await query(
      `SELECT q.subject_id, count(*) FILTER (WHERE NOT m.is_reviewed)::int AS open,
              count(*) FILTER (WHERE m.is_reviewed AND m.reviewed_at >= now() - interval '7 days')::int AS fixed7
       FROM mistake_book m JOIN users u ON u.id = m.student_id JOIN questions q ON q.id = m.question_id
       WHERE ${smw} GROUP BY q.subject_id`,
      smp
    );
    const subjectIds = [...new Set([...subjectTests, ...subjectPractice, ...subjectMistakes].map((r) => r.subject_id).filter(Boolean))];
    const subjectRows = subjectIds.length
      ? await query('SELECT id, name_en, name_ta, class_grade, sort_order FROM subjects WHERE id = ANY($1::uuid[]) ORDER BY class_grade, sort_order', [subjectIds])
      : [];
    const subjects = subjectRows.map((s) => {
      const t = subjectTests.find((r) => r.subject_id === s.id);
      const p = subjectPractice.find((r) => r.subject_id === s.id);
      const m = subjectMistakes.find((r) => r.subject_id === s.id);
      return {
        subjectId: s.id, nameEn: s.name_en, nameTa: s.name_ta, classGrade: s.class_grade,
        testAverage: t ? round1(t.average) : null, testAttempts: t?.attempts || 0,
        practiceAccuracy: p ? pct(p.correct, p.answered) : null, practiceWeek: p?.week || 0,
        openMistakes: m?.open || 0, fixedThisWeek: m?.fixed7 || 0,
      };
    });

    // Chapters to teach again: tests and practice together
    const cp: any[] = [];
    const testChapters = await query(`WITH ${attemptsCte(scope, cp)} ${chapterSql(1)}`, cp);
    const pcp: any[] = [];
    const pcw = workWhere(pcp, 'q.subject_id');
    const practiceChapters = await query(
      `SELECT c.id AS chapter_id, c.number, c.name_en, c.name_ta, s.id AS subject_id, s.name_en AS subject_en, s.name_ta AS subject_ta,
              count(*)::int AS answered, count(*) FILTER (WHERE pl.correct)::int AS correct
       FROM practice_log pl JOIN users u ON u.id = pl.user_id JOIN questions q ON q.id = pl.question_id
       JOIN chapters c ON c.id = q.chapter_id JOIN subjects s ON s.id = c.subject_id
       WHERE ${pcw} GROUP BY c.id, c.number, c.name_en, c.name_ta, s.id, s.name_en, s.name_ta`,
      pcp
    );
    const chapterMap = new Map<string, any>();
    for (const [rows, kind] of [[testChapters, 'test'], [practiceChapters, 'practice']] as const) {
      for (const r of rows) {
        const c = chapterMap.get(r.chapter_id) || { ...chapterRow({ ...r, answered: 0, correct: 0 }), answered: 0, correct: 0, testAccuracy: null, practiceAccuracy: null, students: 0 };
        c.answered += r.answered;
        c.correct += r.correct;
        c[kind === 'test' ? 'testAccuracy' : 'practiceAccuracy'] = pct(r.correct, r.answered);
        chapterMap.set(r.chapter_id, c);
      }
    }
    const weakChapters = [...chapterMap.values()]
      .filter((c) => c.answered >= 5)
      .map((c) => ({ ...c, accuracy: pct(c.correct, c.answered) }))
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 8);

    // The questions most students currently have in their Mistake Book
    const qp: any[] = [];
    const qw = workWhere(qp, 'q.subject_id');
    const missedQuestions = await query(
      `SELECT q.id, q.question->>'en' AS text, q.image_url, q.difficulty, c.number, c.name_en AS chapter_en, s.name_en AS subject_en,
              count(DISTINCT m.student_id)::int AS students, sum(m.wrong_count)::int AS wrong
       FROM mistake_book m JOIN users u ON u.id = m.student_id JOIN questions q ON q.id = m.question_id
       LEFT JOIN chapters c ON c.id = q.chapter_id LEFT JOIN subjects s ON s.id = q.subject_id
       WHERE NOT m.is_reviewed AND ${qw}
       GROUP BY q.id, q.question, q.image_url, q.difficulty, c.number, c.name_en, s.name_en
       HAVING count(DISTINCT m.student_id) >= 2
       ORDER BY count(DISTINCT m.student_id) DESC, sum(m.wrong_count) DESC LIMIT 6`,
      qp
    );

    // Classes and sections side by side
    const classMap = new Map<string, StudentSummary[]>();
    for (const s of students) classMap.set(classKey(s.classGrade, s.section), [...(classMap.get(classKey(s.classGrade, s.section)) || []), s]);
    const activeThisWeek = (s: StudentSummary) => s.practice.week > 0 || (s.lastTestAt && Date.now() - +new Date(s.lastTestAt) < 7 * DAY);
    const classes = [...classMap.values()].map((list) => ({
      classGrade: list[0].classGrade,
      section: list[0].section,
      students: list.length,
      testAverage: avgOf(list.map((s) => s.average)),
      practicePerStudent: round1(list.reduce((n, s) => n + s.practice.week, 0) / list.length),
      activeRate: pct(list.filter(activeThisWeek).length, list.length),
      openMistakes: list.reduce((n, s) => n + s.mistakes.open, 0),
      needAttention: list.filter((s) => s.attentionScore >= 3).length,
    }));

    const summary = (s: StudentSummary) => ({
      _id: s._id, name: s.name, admissionNumber: s.admissionNumber, classGrade: s.classGrade, section: s.section,
      average: s.average, trend: s.trend, testsTaken: s.testsTaken, missed: s.missed, practice: s.practice, mistakes: s.mistakes,
      lastActiveAt: s.lastActiveAt, band: s.band, attention: s.attention, attentionScore: s.attentionScore,
    });
    const attention = students.filter((s) => s.attentionScore >= 2).sort((a, b) => b.attentionScore - a.attentionScore || (a.average ?? 101) - (b.average ?? 101));
    const withScores = students.filter((s) => s.average !== null);
    const bands = { excellent: 0, good: 0, average: 0, struggling: 0, notStarted: 0 } as Record<string, number>;
    students.forEach((s) => bands[s.band]++);

    const practiceWeek = students.reduce((n, s) => n + s.practice.week, 0);
    const practiceLastWeek = students.reduce((n, s) => n + s.practice.lastWeek, 0);
    const weekDays = activity.slice(7);
    const weekAnswered = weekDays.reduce((n, d) => n + d.practice, 0);
    const weekCorrect = practiceDays
      .filter((d) => weekDays.some((w) => w.day === dayKey(d.day)))
      .reduce((n, d) => n + d.correct, 0);

    // Admin only: what each teacher looks after and how those students are doing
    let teachers: any[] | undefined;
    let gaps: any[] | undefined;
    if (isAdmin) {
      const staff = await query(
        `SELECT u.id, u.name, u.email,
                (SELECT count(*)::int FROM tests t WHERE t.created_by = u.id AND t.is_active AND t.created_at >= now() - interval '30 days') AS tests30,
                (SELECT max(t.created_at) FROM tests t WHERE t.created_by = u.id AND t.is_active) AS last_test_at
         FROM users u WHERE u.school_id = $1 AND u.role = 'teacher' AND u.is_active ORDER BY u.name`,
        [scope.schoolId]
      );
      const assignRows = await query(
        `SELECT a.teacher_id, a.class_grade, a.section, a.subject_id, s.name_en FROM teacher_assignments a
         LEFT JOIN subjects s ON s.id = a.subject_id WHERE a.school_id = $1`,
        [scope.schoolId]
      );
      teachers = await Promise.all(
        staff.map(async (t) => {
          const mine = assignRows.filter((a) => a.teacher_id === t.id);
          const tScope: StaffScope = mine.map((a) => ({ classGrade: a.class_grade, section: a.section, subjectId: a.subject_id }));
          const theirStudents = students.filter((s) => canSeeStudent(tScope, s));
          const tp2: any[] = [];
          const [avg] = await query(`WITH ${attemptsCte({ ...scope, staff: tScope }, tp2)} SELECT avg(percentage) AS average, count(*)::int AS attempts FROM att`, tp2);
          return {
            _id: t.id, name: t.name, email: t.email,
            wholeSchool: coversAll(tScope),
            assignments: mine.map((a) => ({ classGrade: a.class_grade, section: a.section, subjectEn: a.name_en })),
            testsLast30Days: t.tests30, lastTestAt: t.last_test_at,
            students: theirStudents.length,
            testAverage: round1(avg.average), attempts: avg.attempts,
            practiceWeek: theirStudents.reduce((n, s) => n + s.practice.week, 0),
            needAttention: theirStudents.filter((s) => s.attentionScore >= 3).length,
          };
        })
      );
      // Subjects of classes that have students but no teacher looking after them
      const allScopes = assignRows.map((a) => ({ classGrade: a.class_grade, section: a.section, subjectId: a.subject_id }));
      const grades = [...new Set(students.map((s) => s.classGrade).filter(Boolean))] as number[];
      const board = (await query('SELECT board FROM schools WHERE id = $1', [scope.schoolId]))[0]?.board;
      const subjectsByGrade = grades.length
        ? await query('SELECT id, name_en, class_grade FROM subjects WHERE board = $1 AND class_grade = ANY($2::int[]) AND is_active ORDER BY class_grade, sort_order', [board, grades])
        : [];
      gaps = [];
      for (const c of classes) {
        const missing = subjectsByGrade
          .filter((sub) => sub.class_grade === c.classGrade)
          .filter((sub) => !allScopes.some((a) => (!a.classGrade || a.classGrade === c.classGrade) && (!a.section || a.section === c.section) && (!a.subjectId || a.subjectId === sub.id)))
          .map((sub) => sub.name_en);
        if (missing.length) gaps.push({ classGrade: c.classGrade, section: c.section, subjects: missing });
      }
    }

    res.status(200).json({
      success: true,
      data: {
        passMark: PASS_MARK,
        role: req.user.role,
        assignments: scope.staff === null ? null : (await query(
          `SELECT a.class_grade, a.section, s.name_en FROM teacher_assignments a LEFT JOIN subjects s ON s.id = a.subject_id
           WHERE a.teacher_id = $1 ORDER BY a.class_grade NULLS FIRST, a.section NULLS FIRST`, [req.user._id]
        )).map((a) => ({ classGrade: a.class_grade, section: a.section, subjectEn: a.name_en })),
        kpis: {
          students: students.length,
          activeThisWeek: students.filter(activeThisWeek).length,
          testAverage: round1(months.overall),
          testAverageRecent: round1(months.recent),
          testAverageEarlier: round1(months.earlier),
          testsSubmitted30: months.submitted30,
          practiceWeek,
          practiceLastWeek,
          practiceAccuracyWeek: pct(weekCorrect, weekAnswered),
          openMistakes: students.reduce((n, s) => n + s.mistakes.open, 0),
          fixedThisWeek: students.reduce((n, s) => n + s.mistakes.fixedThisWeek, 0),
          needAttention: students.filter((s) => s.attentionScore >= 3).length,
          watch: students.filter((s) => s.attentionScore === 2).length,
          openDoubts: (await openDoubtCount(scope.schoolId, scope.staff)).questions,
        },
        bands,
        activity,
        attention: attention.slice(0, 12).map(summary),
        attentionTotal: attention.length,
        top: {
          best: [...withScores].sort((a, b) => b.average! - a.average!).slice(0, 5).map(summary),
          improved: students.filter((s) => s.trend !== null && s.trend > 0).sort((a, b) => b.trend! - a.trend!).slice(0, 5).map(summary),
          practice: students.filter((s) => s.practice.week > 0).sort((a, b) => b.practice.week - a.practice.week).slice(0, 5).map(summary),
        },
        classes,
        subjects,
        weakChapters,
        missedQuestions: missedQuestions.map((q) => ({
          questionId: q.id, text: q.text, imageUrl: q.image_url, difficulty: q.difficulty,
          chapter: q.number ? `Ch. ${q.number} ${q.chapter_en}` : null, subjectEn: q.subject_en, students: q.students, wrong: q.wrong,
        })),
        ...(teachers && { teachers }),
        ...(gaps && { gaps }),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Dashboard');
  }
};
