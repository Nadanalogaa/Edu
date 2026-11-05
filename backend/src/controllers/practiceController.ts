import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { Questions } from '../models/Question';
import { Subjects } from '../models/Syllabus';
import { isUuid } from '../db/table';
import { textbookFor } from '../utils/textbook';
import { recordMistake, fixMistake } from '../utils/mistakes';

// Self-practice for students: questions of their own class and board (the
// shared bank and their school's), and for 11th-12th the NEET/JEE bank.
// Answers come with the questions, so any question in a test that is still
// open or upcoming for the student's class is never offered.

const NEET_SUBJECTS = ['Physics', 'Chemistry', 'Biology', 'Maths'];

/** SQL condition: visible to the student and not part of a test they may still write. Pushes params. */
const practisable = (student: any, params: any[]) => {
  params.push(student.schoolId);
  const schoolParam = params.length;
  params.push(student.classGrade);
  const classParam = params.length;
  return `q.is_active
    AND (q.school_id IS NULL OR q.school_id = $${schoolParam})
    AND NOT EXISTS (
      SELECT 1 FROM tests t
      WHERE t.school_id = $${schoolParam} AND t.is_active AND t.class_grade = $${classParam}
        AND (t.end_time IS NULL OR t.end_time > now()) AND q.id = ANY(t.questions)
    )`;
};

const shuffle = <T,>(list: T[]) => {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

// Up to this share of a session goes to questions answered wrongly before
const RETRY_SHARE = 0.3;

/**
 * Chooses a practice set: questions answered wrongly before (up to 30%), then
 * questions never seen, then the rest of the wrong ones, then ones answered
 * correctly, longest ago first. So students work through the whole bank and
 * mistakes come back until they get them right.
 */
const pickForPractice = (pool: { id: string; last_correct: boolean | null; last_seen_at: Date | null }[], count: number) => {
  const wrong = shuffle(pool.filter((p) => p.last_correct === false));
  const fresh = shuffle(pool.filter((p) => p.last_correct === null));
  const right = shuffle(pool.filter((p) => p.last_correct === true)).sort(
    (a, b) => new Date(a.last_seen_at as any).getTime() - new Date(b.last_seen_at as any).getTime()
  );
  const retryNow = wrong.slice(0, Math.ceil(count * RETRY_SHARE));
  const ordered = [
    ...retryNow.map((p) => ({ id: p.id, status: 'retry' })),
    ...fresh.map((p) => ({ id: p.id, status: 'new' })),
    ...wrong.slice(retryNow.length).map((p) => ({ id: p.id, status: 'retry' })),
    ...right.map((p) => ({ id: p.id, status: 'seen' })),
  ];
  return ordered.slice(0, count);
};

// Assertion–reason questions keep the textbook's (a)-(d) order
const isAssertionReason = (options: string[]) => /^both assertion and reason are true/i.test(options?.[0] || '') && /assertion/i.test(options?.[3] || '');

/** A new A–D order every session (same order in English and Tamil). */
const shuffleOptions = (options: { en: string[]; ta?: string[] }, correctAnswer: number) => {
  const same = (options?.en || []).map((_, i) => i);
  if (!options?.en || options.en.length < 2 || isAssertionReason(options.en)) return { options, correctAnswer, order: same };
  const order = shuffle(same);
  return {
    options: { en: order.map((i) => options.en[i]), ta: options.ta?.length ? order.map((i) => options.ta![i]) : options.ta },
    correctAnswer: order.indexOf(correctAnswer),
    order, // order[shown position] = stored position, sent back with the answer
  };
};

/** A question as practice shows it: options in a fresh order, with its textbook page. */
const practiceView = (q: any, status?: string) => {
  const { options, correctAnswer, order } = shuffleOptions(q.options, q.correctAnswer);
  return {
    _id: q._id,
    question: q.question,
    options,
    correctAnswer,
    order,
    explanation: q.explanation,
    chapter: q.chapter,
    topic: q.topic,
    subject: q.subject,
    difficulty: q.difficulty,
    imageUrl: q.imageUrl || null,
    source: q.source || null,
    textbook: textbookFor(q),
    status, // new | retry | seen
  };
};

const canDoNeet = (student: any) => (student.classGrade || 0) >= 11;

// @desc    What the student can practise: their subjects (with chapters) and, for 11th-12th, NEET/JEE
// @route   GET /api/student/practice/options
export const practiceOptions = async (req: AuthRequest, res: Response) => {
  try {
    const student = req.user;
    const board = req.school?.board;
    let subjects: any[] = [];

    if (board && student.classGrade) {
      const params: any[] = [];
      const condition = practisable(student, params);
      const classParam = params.length; // practisable() pushes the class last
      params.push(board);
      const boardParam = params.length;
      params.push(student._id);
      const userParam = params.length;
      const rows = await query(
        `SELECT s.id AS subject_id, s.name_en AS subject_en, s.name_ta AS subject_ta, s.sort_order,
                c.id AS chapter_id, c.number, c.name_en, c.name_ta, count(q.id)::int AS questions,
                count(q.id) FILTER (WHERE q.difficulty = 'easy')::int AS easy,
                count(q.id) FILTER (WHERE q.difficulty = 'medium')::int AS medium,
                count(q.id) FILTER (WHERE q.difficulty = 'hard')::int AS hard,
                count(pp.question_id)::int AS done,
                count(pp.question_id) FILTER (WHERE q.difficulty = 'easy')::int AS done_easy,
                count(pp.question_id) FILTER (WHERE q.difficulty = 'medium')::int AS done_medium,
                count(pp.question_id) FILTER (WHERE q.difficulty = 'hard')::int AS done_hard
         FROM subjects s
         JOIN chapters c ON c.subject_id = s.id AND c.is_active
         LEFT JOIN questions q ON q.chapter_id = c.id AND ${condition}
         LEFT JOIN practice_progress pp ON pp.question_id = q.id AND pp.user_id = $${userParam}
         WHERE s.board = $${boardParam} AND s.class_grade = $${classParam} AND s.is_active
         GROUP BY s.id, s.name_en, s.name_ta, s.sort_order, c.id, c.number, c.name_en, c.name_ta
         ORDER BY s.sort_order, c.number`,
        params
      );
      const bySubject = new Map<string, any>();
      for (const r of rows) {
        if (!bySubject.has(r.subject_id)) {
          bySubject.set(r.subject_id, {
            subjectId: r.subject_id, nameEn: r.subject_en, nameTa: r.subject_ta, questions: 0,
            byLevel: { easy: 0, medium: 0, hard: 0 }, done: 0, doneByLevel: { easy: 0, medium: 0, hard: 0 }, chapters: [],
          });
        }
        const subject = bySubject.get(r.subject_id);
        subject.questions += r.questions;
        subject.done += r.done;
        for (const level of ['easy', 'medium', 'hard']) {
          subject.byLevel[level] += r[level];
          subject.doneByLevel[level] += r[`done_${level}`];
        }
        subject.chapters.push({
          chapterId: r.chapter_id, number: r.number, nameEn: r.name_en, nameTa: r.name_ta, questions: r.questions,
          byLevel: { easy: r.easy, medium: r.medium, hard: r.hard },
          done: r.done, doneByLevel: { easy: r.done_easy, medium: r.done_medium, hard: r.done_hard },
        });
      }
      subjects = [...bySubject.values()].filter((s) => s.questions > 0);
    }

    let neet: any = null;
    if (canDoNeet(student)) {
      const params: any[] = [];
      const condition = practisable(student, params);
      const rows = await query(
        `SELECT q.subject, count(*) FILTER (WHERE q.exam_type IN ('NEET', 'Both'))::int AS neet,
                count(*) FILTER (WHERE q.exam_type IN ('JEE', 'Both'))::int AS jee
         FROM questions q WHERE q.subject_id IS NULL AND ${condition} GROUP BY q.subject`,
        params
      );
      neet = NEET_SUBJECTS.map((name) => {
        const r = rows.find((x) => x.subject === name);
        return { subject: name, neet: r?.neet || 0, jee: r?.jee || 0 };
      }).filter((s) => s.neet || s.jee);
    }

    res.status(200).json({ success: true, data: { subjects, neet } });
  } catch (error: any) {
    console.error('Practice options error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error loading practice' });
  }
};

// @desc    Random practice questions (with answers and explanations)
// @route   GET /api/student/practice/questions?subjectId=&chapterId=&count= | ?track=NEET|JEE&subject=Physics&count=
export const practiceQuestions = async (req: AuthRequest, res: Response) => {
  try {
    const student = req.user;
    // count=all (or a big number) gives every matching question, up to 300
    const count = req.query.count === 'all' ? 300 : Math.min(300, Math.max(1, Number(req.query.count) || 10));
    const params: any[] = [];
    const where = [practisable(student, params)];
    const { subjectId, chapterId, track, subject, difficulty, mistakes } = req.query;

    // Practise my mistakes: the student's open Mistake Book questions (tests and practice)
    if (mistakes) {
      const mp: any[] = [student._id, student.schoolId];
      let filter = '';
      if (isUuid(subjectId)) {
        mp.push(subjectId);
        filter = ` AND q.subject_id = $${mp.length}`;
      }
      mp.push(count);
      const rows = await Questions.select(
        `SELECT q.* FROM mistake_book m JOIN questions q ON q.id = m.question_id
         WHERE m.student_id = $1 AND NOT m.is_reviewed AND q.is_active AND (q.school_id IS NULL OR q.school_id = $2)${filter}
         ORDER BY random() LIMIT $${mp.length}`,
        mp
      );
      return res.status(200).json({ success: true, data: rows.map((q) => practiceView(q, 'retry')) });
    }
    if (['easy', 'medium', 'hard'].includes(String(difficulty))) {
      params.push(String(difficulty));
      where.push(`q.difficulty = $${params.length}`);
    }

    if (track) {
      if (!canDoNeet(student)) return res.status(403).json({ success: false, message: 'NEET/JEE practice is for 11th and 12th' });
      if (!['NEET', 'JEE'].includes(String(track)) || !NEET_SUBJECTS.includes(String(subject))) {
        return res.status(400).json({ success: false, message: 'Choose NEET or JEE and a subject' });
      }
      params.push(String(subject));
      where.push(`q.subject_id IS NULL AND q.subject = $${params.length}`);
      params.push(String(track));
      where.push(`q.exam_type IN ($${params.length}, 'Both')`);
    } else {
      const subjectDoc = isUuid(subjectId) ? await Subjects.findById(subjectId as string) : null;
      // Only the student's own board and class
      if (!subjectDoc || subjectDoc.board !== req.school?.board || subjectDoc.classGrade !== student.classGrade) {
        return res.status(404).json({ success: false, message: 'Subject not found' });
      }
      params.push(subjectDoc._id);
      where.push(`q.subject_id = $${params.length}`);
      if (isUuid(chapterId)) {
        params.push(chapterId);
        where.push(`q.chapter_id = $${params.length}`);
      }
    }

    // Every matching question with this student's history for it
    params.push(student._id);
    const pool = await query(
      `SELECT q.id, pp.last_correct, pp.last_seen_at FROM questions q
       LEFT JOIN practice_progress pp ON pp.question_id = q.id AND pp.user_id = $${params.length}
       WHERE ${where.join(' AND ')}`,
      params
    );
    const picked = pickForPractice(pool, count);
    const status = new Map(picked.map((p) => [p.id, p.status]));
    const rows = picked.length ? await Questions.select(`SELECT q.* FROM questions q WHERE q.id = ANY($1)`, [picked.map((p) => p.id)]) : [];
    const order: Record<string, number> = { easy: 1, medium: 2, hard: 3 };
    rows.sort((a, b) => (order[a.difficulty] || 2) - (order[b.difficulty] || 2) || Math.random() - 0.5);
    res.status(200).json({ success: true, data: rows.map((q) => practiceView(q, status.get(q._id))) });
  } catch (error: any) {
    console.error('Practice questions error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error loading practice questions' });
  }
};

// @desc    Remember a practice answer: wrong ones go to the Mistake Book, right ones fix an open mistake
// @route   POST /api/student/practice/answers  { questionId, selectedAnswer }  (selectedAnswer in stored option order)
export const recordPracticeAnswer = async (req: AuthRequest, res: Response) => {
  try {
    const { questionId, selectedAnswer } = req.body || {};
    if (!isUuid(questionId) || !Number.isInteger(selectedAnswer) || selectedAnswer < 0 || selectedAnswer > 3) {
      return res.status(400).json({ success: false, message: 'questionId and selectedAnswer are required' });
    }
    const student = req.user;
    // Only questions the student may practise, or ones already in their Mistake Book
    // (so answers to questions in a test still open can't be probed here)
    const params: any[] = [];
    const condition = practisable(student, params);
    params.push(questionId);
    const qParam = params.length;
    params.push(student._id);
    const [question] = await query(
      `SELECT q.id, q.correct_answer FROM questions q
       WHERE q.id = $${qParam} AND (
         (${condition})
         OR EXISTS (SELECT 1 FROM mistake_book m WHERE m.question_id = q.id AND m.student_id = $${params.length} AND NOT m.is_reviewed)
       )`,
      params
    );
    if (!question) return res.status(404).json({ success: false, message: 'Question not found' });

    const correct = selectedAnswer === question.correct_answer;
    await query(
      `INSERT INTO practice_progress (user_id, question_id, times_seen, times_correct, last_correct, last_seen_at)
       VALUES ($1, $2, 1, $3::int, $4, now())
       ON CONFLICT (user_id, question_id) DO UPDATE SET
         times_seen = practice_progress.times_seen + 1,
         times_correct = practice_progress.times_correct + EXCLUDED.times_correct,
         last_correct = EXCLUDED.last_correct,
         last_seen_at = now()`,
      [student._id, questionId, correct ? 1 : 0, correct]
    );
    await query(`INSERT INTO practice_log (user_id, question_id, correct) VALUES ($1, $2, $3)`, [student._id, questionId, correct]);
    let fixed = false;
    if (correct) fixed = await fixMistake(student._id, questionId, 'practice');
    else await recordMistake({ studentId: student._id, questionId, selectedAnswer, correctAnswer: question.correct_answer, source: 'practice' });
    res.status(200).json({ success: true, data: { correct, addedToMistakes: !correct, fixedMistake: fixed } });
  } catch (error: any) {
    console.error('Practice answer error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error saving the answer' });
  }
};

// @desc    Practice summary for the student home: totals, last 7 days, streak, Mistake Book
// @route   GET /api/student/practice/summary
export const practiceSummary = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user._id;
    const [totals] = await query(
      `SELECT count(*)::int AS answers, count(*) FILTER (WHERE correct)::int AS correct,
              count(DISTINCT question_id)::int AS questions
       FROM practice_log WHERE user_id = $1`,
      [userId]
    );
    // Days in India time, so "today" matches the student's day
    const days = await query(
      `SELECT to_char(d, 'YYYY-MM-DD') AS day, count(l.id)::int AS answers, count(l.id) FILTER (WHERE l.correct)::int AS correct
       FROM generate_series((now() AT TIME ZONE 'Asia/Kolkata')::date - 6, (now() AT TIME ZONE 'Asia/Kolkata')::date, interval '1 day') d
       LEFT JOIN practice_log l ON l.user_id = $1 AND (l.answered_at AT TIME ZONE 'Asia/Kolkata')::date = d::date
       GROUP BY d ORDER BY d`,
      [userId]
    );
    // Practice streak: days in a row up to today (or yesterday) with at least one answer
    const active = await query(
      `SELECT DISTINCT to_char((answered_at AT TIME ZONE 'Asia/Kolkata')::date, 'YYYY-MM-DD') AS day FROM practice_log
       WHERE user_id = $1 AND answered_at > now() - interval '120 days' ORDER BY day DESC`,
      [userId]
    );
    const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const key = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const activeDays = new Set(active.map((r) => r.day as string));
    let streak = 0;
    const cursor = new Date(today);
    if (!activeDays.has(key(cursor))) cursor.setDate(cursor.getDate() - 1);
    while (activeDays.has(key(cursor))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    const [mistakes] = await query(
      `SELECT count(*) FILTER (WHERE NOT is_reviewed)::int AS open, count(*) FILTER (WHERE fixed_in IS NOT NULL)::int AS fixed
       FROM mistake_book WHERE student_id = $1`,
      [userId]
    );
    res.status(200).json({
      success: true,
      data: {
        answers: totals.answers,
        correct: totals.correct,
        questions: totals.questions,
        accuracy: totals.answers ? Math.round((totals.correct / totals.answers) * 1000) / 10 : null,
        days,
        streak,
        mistakes,
      },
    });
  } catch (error: any) {
    console.error('Practice summary error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error loading practice summary' });
  }
};
