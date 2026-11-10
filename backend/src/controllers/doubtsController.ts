import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';
import { StaffScope, staffScopeOf, studentInScope, workInScope } from '../utils/staffScope';
import { textbookFor } from '../utils/textbook';

// "Ask my teacher": a student flags a question they do not understand, with an
// optional note. Teachers see the doubts grouped by question (most asked
// first) for their own classes and subjects, and answer once; every student of
// the school who asked about that question sees the answer.

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) return res.status(error.status).json({ success: false, message: error.message });
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

const clean = (v: any) => (v === undefined || v === null ? '' : String(v).trim());

const questionView = (r: any) => ({
  _id: r.question_id,
  question: r.question,
  options: r.options,
  correctAnswer: r.correct_answer,
  explanation: r.explanation,
  imageUrl: r.image_url || null,
  difficulty: r.difficulty,
  subject: r.subject_en,
  subjectTa: r.subject_ta,
  chapter: r.chapter_number ? { number: r.chapter_number, en: r.chapter_en, ta: r.chapter_ta } : null,
  textbook: textbookFor({ board: r.board, classGrade: r.class_grade, subject: r.subject, source: r.source }),
});

// @desc    Ask a teacher about a question (or add a note to the open doubt)
// @route   POST /api/student/doubts  { questionId, message? }
export const askDoubt = async (req: AuthRequest, res: Response) => {
  try {
    const { questionId } = req.body || {};
    const message = clean(req.body?.message).slice(0, 500) || null;
    if (!isUuid(questionId)) throw new HttpError(400, 'questionId is required');
    if (!req.user.schoolId) throw new HttpError(403, 'Your account is not linked to a school');
    const [question] = await query(
      'SELECT id FROM questions WHERE id = $1 AND is_active AND (school_id IS NULL OR school_id = $2)',
      [questionId, req.user.schoolId]
    );
    if (!question) throw new HttpError(404, 'Question not found');

    // Already answered for this school: show the answer straight away
    const [answer] = await query('SELECT reply, updated_at FROM doubt_answers WHERE school_id = $1 AND question_id = $2', [req.user.schoolId, questionId]);
    const [doubt] = await query(
      `INSERT INTO doubts (school_id, student_id, question_id, message, status, answer_seen_at)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (student_id, question_id) WHERE status = 'open'
       DO UPDATE SET message = COALESCE(EXCLUDED.message, doubts.message), updated_at = now()
       RETURNING id, status`,
      [req.user.schoolId, req.user._id, questionId, message, answer ? 'answered' : 'open', answer ? new Date() : null]
    );
    res.status(201).json({ success: true, data: { _id: doubt.id, status: doubt.status, reply: answer?.reply || null } });
  } catch (error: any) {
    sendError(res, error, 'Ask doubt');
  }
};

// @desc    The student's doubts with teachers' answers; marks answers as seen
// @route   GET /api/student/doubts
export const myDoubts = async (req: AuthRequest, res: Response) => {
  try {
    const rows = await query(
      `SELECT d.id, d.message, d.status, d.created_at, d.answer_seen_at, a.reply, a.updated_at AS replied_at, t.name AS teacher_name,
              q.id AS question_id, q.question, q.options, q.correct_answer, q.explanation, q.image_url, q.difficulty, q.board, q.class_grade,
              q.subject, q.source, s.name_en AS subject_en, s.name_ta AS subject_ta, c.number AS chapter_number, c.name_en AS chapter_en, c.name_ta AS chapter_ta
       FROM doubts d JOIN questions q ON q.id = d.question_id
       LEFT JOIN doubt_answers a ON a.school_id = d.school_id AND a.question_id = d.question_id
       LEFT JOIN users t ON t.id = a.teacher_id
       LEFT JOIN subjects s ON s.id = q.subject_id LEFT JOIN chapters c ON c.id = q.chapter_id
       WHERE d.student_id = $1
       ORDER BY (d.status = 'answered' AND d.answer_seen_at IS NULL) DESC, d.updated_at DESC LIMIT 100`,
      [req.user._id]
    );
    await query(`UPDATE doubts SET answer_seen_at = now() WHERE student_id = $1 AND status = 'answered' AND answer_seen_at IS NULL`, [req.user._id]);
    res.status(200).json({
      success: true,
      data: rows.map((r) => ({
        _id: r.id,
        message: r.message,
        status: r.status,
        askedAt: r.created_at,
        isNew: r.status === 'answered' && !r.answer_seen_at,
        reply: r.reply,
        repliedAt: r.replied_at,
        teacherName: r.teacher_name,
        question: questionView(r),
      })),
    });
  } catch (error: any) {
    sendError(res, error, 'My doubts');
  }
};

/** Doubts (alias d) of students (u) on questions (q) the staff member looks after. */
const scopeWhere = (staff: StaffScope, params: any[]) =>
  `${studentInScope(staff, params, 'u.class_grade', 'u.section')} AND ${workInScope(staff, params, 'u.class_grade', 'u.section', 'q.subject_id')}`;

/** Open doubts in the staff member's classes and subjects (for the dashboard). */
export const openDoubtCount = async (schoolId: string, staff: StaffScope) => {
  const params: any[] = [schoolId];
  const [row] = await query(
    `SELECT count(DISTINCT d.question_id)::int AS questions, count(*)::int AS doubts
     FROM doubts d JOIN users u ON u.id = d.student_id JOIN questions q ON q.id = d.question_id
     WHERE d.school_id = $1 AND d.status = 'open' AND u.is_active AND ${scopeWhere(staff, params)}`,
    params
  );
  return row;
};

// @desc    Students' doubts grouped by question, most asked first
// @route   GET /api/reports/doubts?status=open|answered
export const staffDoubts = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user.schoolId) throw new HttpError(403, 'Your account is not linked to a school');
    const status = req.query.status === 'answered' ? 'answered' : 'open';
    const staff = await staffScopeOf(req);
    const params: any[] = [req.user.schoolId, status];
    const rows = await query(
      `SELECT q.id AS question_id, q.question, q.options, q.correct_answer, q.explanation, q.image_url, q.difficulty, q.board, q.class_grade,
              q.subject, q.source, s.name_en AS subject_en, s.name_ta AS subject_ta, c.number AS chapter_number, c.name_en AS chapter_en, c.name_ta AS chapter_ta,
              a.reply, a.updated_at AS replied_at, t.name AS teacher_name,
              count(*)::int AS students, max(d.updated_at) AS last_at,
              json_agg(json_build_object('name', u.name, 'admissionNumber', u.admission_number, 'classGrade', u.class_grade, 'section', u.section,
                                         'message', d.message, 'at', d.updated_at) ORDER BY d.updated_at DESC) AS askers
       FROM doubts d JOIN users u ON u.id = d.student_id JOIN questions q ON q.id = d.question_id
       LEFT JOIN subjects s ON s.id = q.subject_id LEFT JOIN chapters c ON c.id = q.chapter_id
       LEFT JOIN doubt_answers a ON a.school_id = d.school_id AND a.question_id = d.question_id
       LEFT JOIN users t ON t.id = a.teacher_id
       WHERE d.school_id = $1 AND d.status = $2 AND u.is_active AND ${scopeWhere(staff, params)}
       GROUP BY q.id, s.name_en, s.name_ta, c.number, c.name_en, c.name_ta, a.reply, a.updated_at, t.name
       ORDER BY ${status === 'open' ? 'count(*) DESC, max(d.updated_at) DESC' : 'a.updated_at DESC'} LIMIT 200`,
      params
    );
    const counts = await openDoubtCount(req.user.schoolId, staff);
    res.status(200).json({
      success: true,
      counts,
      data: rows.map((r) => ({
        question: questionView(r),
        students: r.students,
        lastAt: r.last_at,
        askers: r.askers,
        reply: r.reply,
        repliedAt: r.replied_at,
        teacherName: r.teacher_name,
      })),
    });
  } catch (error: any) {
    sendError(res, error, 'Doubts');
  }
};

// @desc    Answer the doubts on a question (once, for every student who asked)
// @route   POST /api/reports/doubts/:questionId/reply  { reply }
export const replyDoubt = async (req: AuthRequest, res: Response) => {
  try {
    const reply = clean(req.body?.reply).slice(0, 2000);
    if (!isUuid(req.params.questionId)) throw new HttpError(404, 'Question not found');
    if (!reply) throw new HttpError(400, 'Please write your answer');
    const staff = await staffScopeOf(req);
    // Only questions a student in the teacher's classes asked about
    const params: any[] = [req.user.schoolId, req.params.questionId];
    const [asked] = await query(
      `SELECT 1 FROM doubts d JOIN users u ON u.id = d.student_id JOIN questions q ON q.id = d.question_id
       WHERE d.school_id = $1 AND d.question_id = $2 AND ${scopeWhere(staff, params)} LIMIT 1`,
      params
    );
    if (!asked) throw new HttpError(404, 'No doubt on this question in your classes');
    await query(
      `INSERT INTO doubt_answers (school_id, question_id, teacher_id, reply) VALUES ($1, $2, $3, $4)
       ON CONFLICT (school_id, question_id) DO UPDATE SET reply = EXCLUDED.reply, teacher_id = EXCLUDED.teacher_id, updated_at = now()`,
      [req.user.schoolId, req.params.questionId, req.user._id, reply]
    );
    const answered = await query(
      `UPDATE doubts SET status = 'answered', answer_seen_at = NULL, updated_at = now()
       WHERE school_id = $1 AND question_id = $2 AND status = 'open' RETURNING id`,
      [req.user.schoolId, req.params.questionId]
    );
    // An edited answer shows as new again to those who already saw it
    await query(`UPDATE doubts SET answer_seen_at = NULL WHERE school_id = $1 AND question_id = $2 AND status = 'answered'`, [req.user.schoolId, req.params.questionId]);
    res.status(200).json({ success: true, message: `Answer sent to ${answered.length || 'the'} student${answered.length === 1 ? '' : 's'}`, data: { answered: answered.length } });
  } catch (error: any) {
    sendError(res, error, 'Reply to doubt');
  }
};
