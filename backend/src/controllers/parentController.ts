import { Response, Request } from 'express';
import { randomBytes } from 'crypto';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';
import { staffScopeOf, canSeeStudent } from '../utils/staffScope';
import { chaptersWithBank, masteryStats } from '../utils/mastery';
import { PASS_MARK } from './reportsController';

// Weekly report for parents: a private link (no login) the student or a
// teacher shares, e.g. on WhatsApp. It shows this week's practice, tests,
// mistakes fixed, strong and weak chapters and what to do next. Only first
// name, class and school are shown, never contact details.

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) return res.status(error.status).json({ success: false, message: error.message });
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const linkFor = async (studentId: string, createdBy: string) => {
  const [existing] = await query('SELECT token FROM parent_links WHERE student_id = $1', [studentId]);
  if (existing) return existing.token as string;
  const token = randomBytes(18).toString('base64url');
  await query('INSERT INTO parent_links (token, student_id, created_by) VALUES ($1, $2, $3) ON CONFLICT (student_id) DO NOTHING', [token, studentId, createdBy]);
  return (await query('SELECT token FROM parent_links WHERE student_id = $1', [studentId]))[0].token as string;
};

// @desc    The student's own parent link (created on first use)
// @route   POST /api/student/parent-link   { renew?: true } makes a new link (the old one stops working)
export const myParentLink = async (req: AuthRequest, res: Response) => {
  try {
    if (req.body?.renew) await query('DELETE FROM parent_links WHERE student_id = $1', [req.user._id]);
    res.status(200).json({ success: true, data: { token: await linkFor(req.user._id, req.user._id) } });
  } catch (error: any) {
    sendError(res, error, 'Parent link');
  }
};

// @route   POST /api/reports/students/:id/parent-link   (staff, for students in their classes)
export const studentParentLink = async (req: AuthRequest, res: Response) => {
  try {
    if (!isUuid(req.params.id)) throw new HttpError(404, 'Student not found');
    const [student] = await query(`SELECT id, class_grade, section FROM users WHERE id = $1 AND school_id = $2 AND role = 'student'`, [req.params.id, req.user.schoolId]);
    if (!student || !canSeeStudent(await staffScopeOf(req), { classGrade: student.class_grade, section: student.section })) throw new HttpError(404, 'Student not found');
    res.status(200).json({ success: true, data: { token: await linkFor(student.id, req.user._id) } });
  } catch (error: any) {
    sendError(res, error, 'Parent link');
  }
};

// @desc    The weekly report behind a parent link (public, read-only)
// @route   GET /api/public/parent-report/:token
export const parentReport = async (req: Request, res: Response) => {
  try {
    const token = String(req.params.token || '');
    if (!/^[A-Za-z0-9_-]{20,40}$/.test(token)) throw new HttpError(404, 'This link is not valid');
    const [link] = await query(
      `SELECT u.id, u.name, u.class_grade, u.section, u.school_id, u.daily_goal, s.name AS school, s.board
       FROM parent_links l JOIN users u ON u.id = l.student_id JOIN schools s ON s.id = u.school_id
       WHERE l.token = $1 AND u.is_active`,
      [token]
    );
    if (!link) throw new HttpError(404, 'This link is not valid any more. Ask your child or their teacher for a new one.');
    await query('UPDATE parent_links SET views = views + 1 WHERE token = $1', [token]);
    const id = link.id;

    const days = await query(
      `SELECT to_char(d, 'YYYY-MM-DD') AS day, COALESCE(x.n, 0)::int AS answers, COALESCE(x.c, 0)::int AS correct
       FROM generate_series((now() AT TIME ZONE 'Asia/Kolkata')::date - 6, (now() AT TIME ZONE 'Asia/Kolkata')::date, interval '1 day') d
       LEFT JOIN (SELECT (answered_at AT TIME ZONE 'Asia/Kolkata')::date AS day, count(*) AS n, count(*) FILTER (WHERE correct) AS c
                  FROM practice_log WHERE user_id = $1 AND answered_at >= now() - interval '8 days' GROUP BY 1) x ON x.day = d::date
       ORDER BY d`,
      [id]
    );
    const tests = await query(
      `SELECT t.title, a.percentage, a.end_time, s.name_en AS subject,
              (SELECT avg(a2.percentage) FROM student_attempts a2 WHERE a2.test_id = a.test_id AND a2.status = 'completed') AS class_avg
       FROM student_attempts a JOIN tests t ON t.id = a.test_id LEFT JOIN subjects s ON s.id = t.subject_id
       WHERE a.student_id = $1 AND a.status = 'completed' ORDER BY a.end_time DESC LIMIT 6`,
      [id]
    );
    const [avg] = await query(
      `SELECT avg(percentage) FILTER (WHERE end_time >= now() - interval '30 days') AS recent,
              avg(percentage) AS overall FROM student_attempts WHERE student_id = $1 AND status = 'completed'`,
      [id]
    );
    const [mistakes] = await query(
      `SELECT count(*) FILTER (WHERE NOT is_reviewed)::int AS open,
              count(*) FILTER (WHERE is_reviewed AND reviewed_at >= now() - interval '7 days')::int AS fixed_week
       FROM mistake_book WHERE student_id = $1`,
      [id]
    );
    const open = await query(
      `SELECT t.title, t.end_time, s.name_en AS subject FROM tests t LEFT JOIN subjects s ON s.id = t.subject_id JOIN users u ON u.id = $1
       WHERE t.school_id = u.school_id AND t.is_active AND t.is_published AND t.class_grade = u.class_grade
         AND (cardinality(t.sections) = 0 OR u.section = ANY(t.sections)) AND (t.start_time IS NULL OR t.start_time <= now())
         AND (t.end_time IS NULL OR t.end_time > now())
         AND NOT EXISTS (SELECT 1 FROM student_attempts a WHERE a.test_id = t.id AND a.student_id = u.id AND a.status = 'completed')`,
      [id]
    );
    // Chapters: strongest and weakest from practice and tests
    const subjects = await query('SELECT id FROM subjects WHERE board = $1 AND class_grade = $2 AND is_active', [link.board, link.class_grade]);
    const chapters = await chaptersWithBank(subjects.map((s) => s.id), link.school_id);
    const stats = await masteryStats([id], subjects.map((s) => s.id), new Map(chapters.map((c) => [c.id, c.bank])));
    const subjectNames = new Map((await query('SELECT id, name_en, name_ta FROM subjects WHERE id = ANY($1::uuid[])', [subjects.map((s) => s.id)])).map((s) => [s.id, s]));
    const rated = chapters
      .map((c) => ({ c, st: stats.get(`${id}|${c.id}`) }))
      .filter((x) => x.st && x.st.answers >= 5)
      .map((x) => ({
        nameEn: x.c.name_en, nameTa: x.c.name_ta, subjectEn: subjectNames.get(x.c.subject_id)?.name_en, subjectTa: subjectNames.get(x.c.subject_id)?.name_ta,
        level: x.st!.level, accuracy: x.st!.recentAccuracy,
      }));
    const strong = rated.filter((r) => r.level === 'mastered' || r.level === 'good').sort((a, b) => (b.accuracy ?? 0) - (a.accuracy ?? 0)).slice(0, 3);
    const weak = rated.filter((r) => r.level === 'learning').sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0)).slice(0, 3);

    const week = days.reduce((a, d) => ({ answers: a.answers + d.answers, correct: a.correct + d.correct, days: a.days + (d.answers ? 1 : 0), goalDays: a.goalDays + (d.answers >= link.daily_goal ? 1 : 0) }), { answers: 0, correct: 0, days: 0, goalDays: 0 });
    const round1 = (n: any) => (n === null || n === undefined ? null : Math.round(Number(n) * 10) / 10);

    // What to do next, most useful first (codes; the page words them in English or Tamil)
    const next: { code: string; value?: string | number }[] = [];
    if (open.length) next.push({ code: 'openTest', value: open[0].title });
    if (week.days < 3) next.push({ code: 'practiseMore' });
    if (weak[0]) next.push({ code: 'weakChapter', value: weak[0].nameEn });
    if (mistakes.open >= 10) next.push({ code: 'mistakes', value: mistakes.open });
    if (!next.length) next.push({ code: 'keepGoing' });

    res.status(200).json({
      success: true,
      data: {
        student: { firstName: String(link.name).split(' ')[0], classGrade: link.class_grade, section: link.section, school: link.school },
        passMark: PASS_MARK,
        week: { ...week, accuracy: week.answers ? round1((week.correct / week.answers) * 100) : null, goal: link.daily_goal, days },
        tests: { recentAverage: round1(avg.recent), overallAverage: round1(avg.overall), latest: tests.map((t) => ({ title: t.title, subject: t.subject, percentage: round1(t.percentage), classAverage: round1(t.class_avg), at: t.end_time })) },
        openTests: open.map((t) => ({ title: t.title, subject: t.subject, closes: t.end_time })),
        mistakes: { open: mistakes.open, fixedThisWeek: mistakes.fixed_week },
        strong,
        weak,
        next,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Parent report');
  }
};
