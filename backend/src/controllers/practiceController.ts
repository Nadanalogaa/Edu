import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { Questions } from '../models/Question';
import { Subjects } from '../models/Syllabus';
import { isUuid } from '../db/table';

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
      const rows = await query(
        `SELECT s.id AS subject_id, s.name_en AS subject_en, s.name_ta AS subject_ta, s.sort_order,
                c.id AS chapter_id, c.number, c.name_en, c.name_ta, count(q.id)::int AS questions
         FROM subjects s
         JOIN chapters c ON c.subject_id = s.id AND c.is_active
         LEFT JOIN questions q ON q.chapter_id = c.id AND ${condition}
         WHERE s.board = $${boardParam} AND s.class_grade = $${classParam} AND s.is_active
         GROUP BY s.id, s.name_en, s.name_ta, s.sort_order, c.id, c.number, c.name_en, c.name_ta
         ORDER BY s.sort_order, c.number`,
        params
      );
      const bySubject = new Map<string, any>();
      for (const r of rows) {
        if (!bySubject.has(r.subject_id)) {
          bySubject.set(r.subject_id, { subjectId: r.subject_id, nameEn: r.subject_en, nameTa: r.subject_ta, questions: 0, chapters: [] });
        }
        const subject = bySubject.get(r.subject_id);
        subject.questions += r.questions;
        subject.chapters.push({ chapterId: r.chapter_id, number: r.number, nameEn: r.name_en, nameTa: r.name_ta, questions: r.questions });
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
    const count = Math.min(30, Math.max(1, Number(req.query.count) || 10));
    const params: any[] = [];
    const where = [practisable(student, params)];
    const { subjectId, chapterId, track, subject } = req.query;

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

    params.push(count);
    const questions = await Questions.select(
      `SELECT q.* FROM questions q WHERE ${where.join(' AND ')} ORDER BY random() LIMIT $${params.length}`,
      params
    );
    res.status(200).json({
      success: true,
      data: questions.map((q) => ({
        _id: q._id,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        chapter: q.chapter,
        topic: q.topic,
        difficulty: q.difficulty,
      })),
    });
  } catch (error: any) {
    console.error('Practice questions error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error loading practice questions' });
  }
};
