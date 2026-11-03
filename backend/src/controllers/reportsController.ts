import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';

// School reports from submitted class assessments. Everything is limited to the
// signed-in user's school. A student is "at risk" below the pass mark.

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
  classGrade?: number;
  section?: string;
  subjectId?: string;
  from?: string;
}

const scopeFrom = (req: AuthRequest): Scope => {
  const { classGrade, section, subjectId, from } = req.query;
  if (!req.user.schoolId) throw new HttpError(403, 'Your account is not linked to a school');
  return {
    schoolId: req.user.schoolId,
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
  const studentWhere = [`u.school_id = $${schoolParam}`, "u.role = 'student'", 'u.is_active'];
  if (scope.classGrade) {
    params.push(scope.classGrade);
    studentWhere.push(`u.class_grade = $${params.length}`);
  }
  if (scope.section) {
    params.push(scope.section);
    studentWhere.push(`u.section = $${params.length}`);
  }
  let subjectFilter = '';
  if (scope.subjectId) {
    params.push(scope.subjectId);
    subjectFilter = `AND t.subject_id = $${params.length}`;
  }

  const rows = await query(
    `WITH ${cte},
     ranked AS (
       SELECT student_id, percentage, end_time, row_number() OVER (PARTITION BY student_id ORDER BY end_time DESC) AS rn FROM att
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
     )
     SELECT u.id, u.name, u.admission_number, u.class_grade, u.section,
            count(att.id)::int AS tests_taken,
            avg(att.percentage) AS average,
            max(att.end_time) AS last_test_at,
            (SELECT percentage FROM ranked r WHERE r.student_id = u.id AND rn = 1) AS last_percentage,
            (SELECT avg(percentage) FROM ranked r WHERE r.student_id = u.id AND rn <= 3) AS recent_average,
            (SELECT avg(percentage) FROM ranked r WHERE r.student_id = u.id AND rn > 3 AND rn <= 6) AS earlier_average,
            COALESCE(due.assigned, 0) AS assigned, COALESCE(due.missed, 0) AS missed
     FROM users u
     LEFT JOIN att ON att.student_id = u.id
     LEFT JOIN due ON due.student_id = u.id
     WHERE ${studentWhere.join(' AND ')}
     GROUP BY u.id, u.name, u.admission_number, u.class_grade, u.section, due.assigned, due.missed
     ORDER BY u.class_grade, u.section NULLS FIRST, u.name`,
    params
  );

  return rows.map((r) => {
    const average = round1(r.average);
    const trend =
      r.recent_average !== null && r.earlier_average !== null ? round1(Number(r.recent_average) - Number(r.earlier_average)) : null;
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
    };
  });
};

// @desc    School (or class/section/subject) performance overview
// @route   GET /api/reports/overview?classGrade=&section=&subjectId=&from=
export const overview = async (req: AuthRequest, res: Response) => {
  try {
    const scope = scopeFrom(req);
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
    pParams.push(scope.section || null);
    const sectionParam = pParams.length;
    const [participation] = await query(
      `SELECT COALESCE(sum(assigned), 0)::int AS assigned, COALESCE(sum(submitted), 0)::int AS submitted FROM (
         SELECT
           (SELECT count(*) FROM users u WHERE u.school_id = t.school_id AND u.role = 'student' AND u.is_active
              AND u.class_grade = t.class_grade AND (cardinality(t.sections) = 0 OR u.section = ANY(t.sections))
              AND ($${sectionParam}::text IS NULL OR u.section = $${sectionParam})) AS assigned,
           (SELECT count(*) FROM student_attempts a JOIN users u ON u.id = a.student_id
              WHERE a.test_id = t.id AND a.status = 'completed' AND u.is_active
              AND ($${sectionParam}::text IS NULL OR u.section = $${sectionParam})) AS submitted
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
    const scope = scopeFrom(req);
    let rows = await studentSummaries(scope);
    const search = String(req.query.search || '').trim().toLowerCase();
    if (search) rows = rows.filter((s) => s.name.toLowerCase().includes(search) || (s.admissionNumber || '').toLowerCase().includes(search));
    res.status(200).json({ success: true, passMark: PASS_MARK, data: rows });
  } catch (error: any) {
    sendError(res, error, 'Student reports');
  }
};

/** Full report for one student of the school (also used for the student's own progress page). */
export const buildStudentReport = async (schoolId: string, studentId: string) => {
  const [student] = await query(
    `SELECT id, name, admission_number, class_grade, section, phone, email, created_at FROM users
     WHERE id = $1 AND school_id = $2 AND role = 'student'`,
    [studentId, schoolId]
  );
  if (!student) throw new HttpError(404, 'Student not found');

  const scope: Scope = { schoolId };
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
    // Chapters answered at least 3 times: below 60% correct needs practice, 60% and above is strong
    weakChapters: chapterRows.filter((c) => c.answered >= 3 && c.accuracy! < STRONG_CHAPTER).sort((a, b) => a.accuracy! - b.accuracy!).slice(0, 5),
    strongChapters: chapterRows.filter((c) => c.answered >= 3 && c.accuracy! >= STRONG_CHAPTER).sort((a, b) => b.accuracy! - a.accuracy!).slice(0, 5),
    chapters: chapterRows,
    missed: missed.map((m) => ({ testId: m.id, title: m.title, closedAt: m.end_time, subjectEn: m.name_en, subjectTa: m.name_ta })),
  };
};

// @desc    One student's full report
// @route   GET /api/reports/students/:id
export const studentReport = async (req: AuthRequest, res: Response) => {
  try {
    if (!isUuid(req.params.id)) throw new HttpError(404, 'Student not found');
    res.status(200).json({ success: true, data: await buildStudentReport(req.user.schoolId, req.params.id) });
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
