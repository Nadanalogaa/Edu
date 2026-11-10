import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { Questions } from '../models/Question';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';
import { practisable, practiceView } from './practiceController';
import { pickByDifficulty } from './assessmentController';
import { recordMistake, fixMistake } from '../utils/mistakes';
import { chaptersWithBank, masteryStats, LEVELS } from '../utils/mastery';
import { textbookFor } from '../utils/textbook';

// Exam revision: a student enters an exam (subject, date, chapters); the app
// spreads the chapters over the days left, weakest first, with a daily target,
// and keeps the last day for a full mock test. Mock tests are timed, show no
// answers until submitted, and count as practice (Mistake Book, mastery, goal).

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) return res.status(error.status).json({ success: false, message: error.message });
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const istToday = () => new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);
const addDays = (iso: string, n: number) => {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};
const daysBetween = (a: string, b: string) => Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86400000);

/** A subject of the student's own class and board. */
const studentSubject = async (req: AuthRequest, subjectId: any) => {
  if (!isUuid(subjectId)) throw new HttpError(400, 'Choose a subject');
  const [s] = await query(
    `SELECT s.id, s.name_en, s.name_ta FROM subjects s JOIN schools sc ON sc.board = s.board
     WHERE s.id = $1 AND sc.id = $2 AND s.class_grade = $3`,
    [subjectId, req.user.schoolId, req.user.classGrade]
  );
  if (!s) throw new HttpError(404, 'Subject not found');
  return s;
};

/** Day-by-day schedule: study days with chapters (weakest first), then a mock-test day before the exam. */
const buildSchedule = (plan: any, chapters: any[], level: Map<string, string>, doneByDay: Map<string, Map<string, number>>) => {
  const today = istToday();
  const start = plan.created_at.toISOString ? addDays(new Date(plan.created_at.getTime() + 5.5 * 3600000).toISOString().slice(0, 10), 0) : today;
  const lastDay = addDays(plan.exam_date, -1);
  const total = Math.max(1, daysBetween(start, lastDay) + 1);
  const mockDay = total >= 2 ? lastDay : null;
  const studyDays = Array.from({ length: mockDay ? total - 1 : total }, (_, i) => addDays(start, i));
  const order = LEVELS.reduce<Record<string, number>>((o, l, i) => ({ ...o, [l]: i }), {});
  const sorted = [...chapters].sort((a, b) => (order[level.get(a.id) || 'notStarted'] - order[level.get(b.id) || 'notStarted']) || a.number - b.number);
  // Spread chapters over the study days; with more days than chapters, go round again (revision)
  const perDay = Math.max(1, Math.ceil(sorted.length / Math.max(1, studyDays.length)));
  const days = studyDays.map((date, i) => {
    const list = sorted.length ? Array.from({ length: Math.min(perDay, sorted.length) }, (_, k) => sorted[(i * perDay + k) % sorted.length]) : [];
    const unique = [...new Map(list.map((c) => [c.id, c])).values()];
    const done = unique.reduce((n, c) => n + (doneByDay.get(date)?.get(c.id) || 0), 0);
    return {
      date,
      kind: 'study' as const,
      chapters: unique.map((c) => ({ chapterId: c.id, number: c.number, nameEn: c.name_en, nameTa: c.name_ta, level: level.get(c.id) || 'notStarted' })),
      target: plan.daily_target,
      done,
      status: done >= plan.daily_target ? 'done' : date < today ? 'missed' : date === today ? 'today' : 'upcoming',
    };
  });
  if (mockDay) days.push({ date: mockDay, kind: 'mock' as any, chapters: [], target: 0, done: 0, status: mockDay < today ? 'missed' : mockDay === today ? 'today' : 'upcoming' });
  return days;
};

// @desc    The student's exam plans with schedules, chapter levels and mock tests
// @route   GET /api/student/exam-plans
export const myPlans = async (req: AuthRequest, res: Response) => {
  try {
    const plans = await query(
      `SELECT p.*, s.name_en, s.name_ta FROM exam_plans p JOIN subjects s ON s.id = p.subject_id
       WHERE p.student_id = $1 AND p.exam_date >= (now() AT TIME ZONE 'Asia/Kolkata')::date - 1 ORDER BY p.exam_date`,
      [req.user._id]
    );
    const out = [];
    for (const p of plans) {
      const all = await chaptersWithBank([p.subject_id], req.user.schoolId);
      const chapters = (p.chapter_ids.length ? all.filter((c) => p.chapter_ids.includes(c.id)) : all).filter((c) => c.bank > 0);
      const stats = await masteryStats([req.user._id], [p.subject_id], new Map(all.map((c) => [c.id, c.bank])));
      const level = new Map(chapters.map((c) => [c.id, stats.get(`${req.user._id}|${c.id}`)?.level || 'notStarted']));
      const done = await query(
        `SELECT to_char((pl.answered_at AT TIME ZONE 'Asia/Kolkata')::date, 'YYYY-MM-DD') AS day, q.chapter_id, count(*)::int AS n
         FROM practice_log pl JOIN questions q ON q.id = pl.question_id
         WHERE pl.user_id = $1 AND q.subject_id = $2 AND pl.answered_at >= $3 GROUP BY 1, 2`,
        [req.user._id, p.subject_id, p.created_at]
      );
      const doneByDay = new Map<string, Map<string, number>>();
      for (const d of done) doneByDay.set(d.day, (doneByDay.get(d.day) || new Map()).set(d.chapter_id, d.n));
      const mocks = await query(
        `SELECT id, total, correct, percentage, time_taken, created_at FROM mock_attempts WHERE student_id = $1 AND subject_id = $2 AND created_at >= $3 ORDER BY created_at DESC LIMIT 10`,
        [req.user._id, p.subject_id, p.created_at]
      );
      out.push({
        _id: p.id, title: p.title, examDate: p.exam_date instanceof Date ? p.exam_date.toISOString().slice(0, 10) : p.exam_date,
        daysLeft: daysBetween(istToday(), p.exam_date instanceof Date ? p.exam_date.toISOString().slice(0, 10) : p.exam_date),
        subject: { _id: p.subject_id, nameEn: p.name_en, nameTa: p.name_ta }, dailyTarget: p.daily_target,
        chapterIds: chapters.map((c) => c.id),
        levels: Object.fromEntries(LEVELS.map((l) => [l, chapters.filter((c) => level.get(c.id) === l).length])),
        schedule: buildSchedule({ ...p, exam_date: p.exam_date instanceof Date ? p.exam_date.toISOString().slice(0, 10) : p.exam_date }, chapters, level, doneByDay),
        mocks: mocks.map((m) => ({ _id: m.id, total: m.total, correct: m.correct, percentage: Math.round(m.percentage * 10) / 10, timeTaken: m.time_taken, at: m.created_at })),
      });
    }
    res.status(200).json({ success: true, data: out });
  } catch (error: any) {
    sendError(res, error, 'Exam plans');
  }
};

// @route   POST /api/student/exam-plans  { title, examDate (YYYY-MM-DD), subjectId, chapterIds?, dailyTarget? }
export const createPlan = async (req: AuthRequest, res: Response) => {
  try {
    const subject = await studentSubject(req, req.body?.subjectId);
    const examDate = String(req.body?.examDate || '');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(examDate) || Number.isNaN(Date.parse(examDate))) throw new HttpError(400, 'Choose the exam date');
    const days = daysBetween(istToday(), examDate);
    if (days < 1) throw new HttpError(400, 'The exam date must be after today');
    if (days > 120) throw new HttpError(400, 'Choose an exam within the next 4 months');
    const title = String(req.body?.title || '').trim().slice(0, 80) || `${subject.name_en} exam`;
    const all = await chaptersWithBank([subject.id], req.user.schoolId);
    const chosen = (Array.isArray(req.body?.chapterIds) ? req.body.chapterIds : []).filter((id: string) => all.some((c) => c.id === id));
    const target = [10, 15, 20, 30].includes(Number(req.body?.dailyTarget)) ? Number(req.body.dailyTarget) : 15;
    const [{ n }] = await query('SELECT count(*)::int AS n FROM exam_plans WHERE student_id = $1 AND exam_date >= (now() AT TIME ZONE \'Asia/Kolkata\')::date', [req.user._id]);
    if (n >= 6) throw new HttpError(400, 'You already have 6 exam plans. Remove one first.');
    const [plan] = await query(
      `INSERT INTO exam_plans (student_id, title, exam_date, subject_id, chapter_ids, daily_target) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [req.user._id, title, examDate, subject.id, chosen, target]
    );
    res.status(201).json({ success: true, data: { _id: plan.id } });
  } catch (error: any) {
    sendError(res, error, 'Create exam plan');
  }
};

// @route   DELETE /api/student/exam-plans/:id
export const deletePlan = async (req: AuthRequest, res: Response) => {
  try {
    if (!isUuid(req.params.id)) throw new HttpError(404, 'Plan not found');
    await query('DELETE FROM exam_plans WHERE id = $1 AND student_id = $2', [req.params.id, req.user._id]);
    res.status(200).json({ success: true });
  } catch (error: any) {
    sendError(res, error, 'Delete exam plan');
  }
};

// @desc    Start a timed mock test: questions without answers (checked on submit)
// @route   POST /api/student/mock-tests/start  { subjectId, chapterIds?, count, minutes }
export const startMock = async (req: AuthRequest, res: Response) => {
  try {
    const subject = await studentSubject(req, req.body?.subjectId);
    const count = Math.min(50, Math.max(5, Number(req.body?.count) || 20));
    const minutes = Math.min(180, Math.max(5, Number(req.body?.minutes) || Math.round(count * 1.2)));
    const params: any[] = [];
    const where = [practisable(req.user, params), `q.subject_id = $${params.push(subject.id)}`];
    const chapterIds = (Array.isArray(req.body?.chapterIds) ? req.body.chapterIds : []).filter(isUuid);
    if (chapterIds.length) where.push(`q.chapter_id = ANY($${params.push(chapterIds)}::uuid[])`);
    const pool = await Questions.select(`SELECT q.* FROM questions q WHERE ${where.join(' AND ')} ORDER BY random()`, params);
    if (pool.length < 5) throw new HttpError(400, 'Not enough questions in these chapters yet');
    const picked = pickByDifficulty(pool, Math.min(count, pool.length), 'mixed');
    const order: Record<string, number> = { easy: 1, medium: 2, hard: 3 };
    picked.sort((a, b) => (order[a.difficulty] || 2) - (order[b.difficulty] || 2));
    res.status(200).json({
      success: true,
      data: {
        subject: { _id: subject.id, nameEn: subject.name_en, nameTa: subject.name_ta },
        minutes,
        chapterIds,
        // No answers or explanations until the test is submitted
        questions: picked.map((q) => {
          const v = practiceView(q);
          return { _id: v._id, question: v.question, options: v.options, order: v.order, imageUrl: v.imageUrl, difficulty: v.difficulty };
        }),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Start mock test');
  }
};

// @desc    Submit a mock test: score, chapters, review; answers count as practice
// @route   POST /api/student/mock-tests/submit  { subjectId, chapterIds, minutes, timeTaken, answers: [{ questionId, selectedAnswer }] }
export const submitMock = async (req: AuthRequest, res: Response) => {
  try {
    const subject = await studentSubject(req, req.body?.subjectId);
    const answers: { questionId: string; selectedAnswer: number }[] = (Array.isArray(req.body?.answers) ? req.body.answers : [])
      .filter((a: any) => isUuid(a?.questionId))
      .slice(0, 50);
    if (answers.length < 5) throw new HttpError(400, 'No answers to submit');
    const params: any[] = [];
    const where = [practisable(req.user, params), `q.subject_id = $${params.push(subject.id)}`, `q.id = ANY($${params.push(answers.map((a) => a.questionId))}::uuid[])`];
    const rows = await query(
      `SELECT q.*, c.number AS chapter_number, c.name_en AS chapter_en, c.name_ta AS chapter_ta FROM questions q LEFT JOIN chapters c ON c.id = q.chapter_id
       WHERE ${where.join(' AND ')}`,
      params
    );
    const byId = new Map(rows.map((r) => [r.id, r]));
    const details: any[] = [];
    const chapters = new Map<string, { number: number; nameEn: string; nameTa: string; total: number; correct: number }>();
    let correct = 0;
    for (const a of answers) {
      const q = byId.get(a.questionId);
      if (!q) continue;
      const selected = Number.isInteger(a.selectedAnswer) && a.selectedAnswer >= 0 && a.selectedAnswer <= 3 ? a.selectedAnswer : -1;
      const isCorrect = selected === q.correct_answer;
      if (isCorrect) correct++;
      details.push({ questionId: q.id, selected, correct: isCorrect });
      if (q.chapter_id) {
        const ch = chapters.get(q.chapter_id) || { number: q.chapter_number, nameEn: q.chapter_en, nameTa: q.chapter_ta, total: 0, correct: 0 };
        ch.total++;
        if (isCorrect) ch.correct++;
        chapters.set(q.chapter_id, ch);
      }
      // Counts as practice: daily goal, mastery, Mistake Book
      if (selected >= 0) {
        await query('INSERT INTO practice_log (user_id, question_id, correct) VALUES ($1, $2, $3)', [req.user._id, q.id, isCorrect]);
        await query(
          `INSERT INTO practice_progress (user_id, question_id, times_seen, times_correct, last_correct, last_seen_at)
           VALUES ($1, $2, 1, $3::int, $4, now())
           ON CONFLICT (user_id, question_id) DO UPDATE SET times_seen = practice_progress.times_seen + 1,
             times_correct = practice_progress.times_correct + EXCLUDED.times_correct, last_correct = EXCLUDED.last_correct, last_seen_at = now()`,
          [req.user._id, q.id, isCorrect ? 1 : 0, isCorrect]
        );
        if (isCorrect) await fixMistake(req.user._id, q.id, 'practice');
        else await recordMistake({ studentId: req.user._id, questionId: q.id, selectedAnswer: selected, correctAnswer: q.correct_answer, source: 'practice' });
      }
    }
    const total = details.length;
    if (!total) throw new HttpError(400, 'No valid answers');
    const percentage = Math.round((correct / total) * 1000) / 10;
    const minutes = Math.min(180, Math.max(5, Number(req.body?.minutes) || 20));
    const timeTaken = Math.max(0, Math.min(minutes * 60 + 120, Number(req.body?.timeTaken) || 0));
    const chapterIds = (Array.isArray(req.body?.chapterIds) ? req.body.chapterIds : []).filter(isUuid);
    const [attempt] = await query(
      `INSERT INTO mock_attempts (student_id, subject_id, chapter_ids, total, correct, percentage, time_taken, minutes, details)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
      [req.user._id, subject.id, chapterIds, total, correct, percentage, timeTaken, minutes, JSON.stringify(details)]
    );
    res.status(200).json({
      success: true,
      data: {
        _id: attempt.id, total, correct, percentage, timeTaken,
        chapters: [...chapters.values()].sort((a, b) => a.correct / a.total - b.correct / b.total),
        review: details.map((d) => {
          const q = byId.get(d.questionId);
          return {
            _id: q.id, question: q.question, options: q.options, correctAnswer: q.correct_answer, selected: d.selected, correct: d.correct,
            explanation: q.explanation, imageUrl: q.image_url, chapter: q.chapter_number ? { number: q.chapter_number, en: q.chapter_en, ta: q.chapter_ta } : null,
            textbook: textbookFor({ board: q.board, classGrade: q.class_grade, subject: q.subject, source: q.source }),
          };
        }),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Submit mock test');
  }
};
