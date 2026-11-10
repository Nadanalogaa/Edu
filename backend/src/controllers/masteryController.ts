import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { query } from '../config/database';
import { isUuid } from '../db/table';
import { HttpError } from '../utils/tenancy';
import { staffScopeOf, studentInScope, coversAll } from '../utils/staffScope';
import { chaptersWithBank, LEVELS, masteryStats } from '../utils/mastery';

// Chapter mastery map: for a student, every chapter of their subjects with its
// level; for staff, how many students of a class are at each level per chapter.

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) return res.status(error.status).json({ success: false, message: error.message });
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

// @desc    The signed-in student's chapters by subject, with mastery level
// @route   GET /api/student/mastery
export const myMastery = async (req: AuthRequest, res: Response) => {
  try {
    const student = req.user;
    const subjects = await query(
      `SELECT s.id, s.name_en, s.name_ta FROM subjects s JOIN schools sc ON sc.board = s.board
       WHERE sc.id = $1 AND s.class_grade = $2 AND s.is_active ORDER BY s.sort_order, s.name_en`,
      [student.schoolId, student.classGrade]
    );
    const subjectIds = subjects.map((s) => s.id);
    const chapters = await chaptersWithBank(subjectIds, student.schoolId);
    const stats = await masteryStats([student._id], subjectIds, new Map(chapters.map((c) => [c.id, c.bank])));
    const mistakes = await query(
      `SELECT q.chapter_id, count(*)::int AS open FROM mistake_book m JOIN questions q ON q.id = m.question_id
       WHERE m.student_id = $1 AND NOT m.is_reviewed GROUP BY q.chapter_id`,
      [student._id]
    );
    const openByChapter = new Map(mistakes.map((m) => [m.chapter_id, m.open]));
    res.status(200).json({
      success: true,
      data: subjects.map((s) => {
        const list = chapters
          .filter((c) => c.subject_id === s.id)
          .map((c) => {
            const st = stats.get(`${student._id}|${c.id}`);
            return {
              chapterId: c.id, number: c.number, nameEn: c.name_en, nameTa: c.name_ta, bank: c.bank,
              answers: st?.answers || 0, questions: st?.questions || 0, accuracy: st?.accuracy ?? null, recentAccuracy: st?.recentAccuracy ?? null,
              level: st?.level || 'notStarted', openMistakes: openByChapter.get(c.id) || 0,
            };
          });
        const counts = Object.fromEntries(LEVELS.map((l) => [l, list.filter((c) => c.level === l).length]));
        return { subjectId: s.id, nameEn: s.name_en, nameTa: s.name_ta, chapters: list, counts };
      }),
    });
  } catch (error: any) {
    sendError(res, error, 'My chapters');
  }
};

// @desc    For one class (and section) and subject: students at each level per chapter
// @route   GET /api/reports/mastery?subjectId=&section=
export const classMastery = async (req: AuthRequest, res: Response) => {
  try {
    if (!isUuid(req.query.subjectId)) throw new HttpError(400, 'Choose a subject');
    const [subject] = await query(
      `SELECT s.id, s.name_en, s.class_grade FROM subjects s JOIN schools sc ON sc.board = s.board WHERE s.id = $1 AND sc.id = $2`,
      [req.query.subjectId, req.user.schoolId]
    );
    if (!subject) throw new HttpError(404, 'Subject not found');
    const staff = await staffScopeOf(req);
    if (!coversAll(staff) && !staff!.some((a) => (!a.classGrade || a.classGrade === subject.class_grade) && (!a.subjectId || a.subjectId === subject.id))) {
      throw new HttpError(403, 'This subject is not one of your classes');
    }
    const params: any[] = [req.user.schoolId, subject.class_grade];
    const where = [`u.school_id = $1`, `u.role = 'student'`, 'u.is_active', 'u.class_grade = $2', studentInScope(staff, params, 'u.class_grade', 'u.section')];
    if (req.query.section) where.push(`u.section = $${params.push(String(req.query.section).toUpperCase())}`);
    const students = await query(`SELECT u.id, u.name, u.section FROM users u WHERE ${where.join(' AND ')} ORDER BY u.name`, params);
    const chapters = await chaptersWithBank([subject.id], req.user.schoolId);
    const stats = await masteryStats(students.map((s) => s.id), [subject.id], new Map(chapters.map((c) => [c.id, c.bank])));
    res.status(200).json({
      success: true,
      data: {
        subject: { _id: subject.id, nameEn: subject.name_en, classGrade: subject.class_grade },
        students: students.length,
        chapters: chapters.map((c) => {
          const levels = Object.fromEntries(LEVELS.map((l) => [l, 0])) as Record<string, number>;
          const struggling: string[] = [];
          for (const s of students) {
            const st = stats.get(`${s.id}|${c.id}`);
            levels[st?.level || 'notStarted']++;
            if (st && st.level === 'learning' && st.answers >= 8 && (st.recentAccuracy ?? 100) < 50) struggling.push(s.name);
          }
          return { chapterId: c.id, number: c.number, nameEn: c.name_en, bank: c.bank, levels, struggling };
        }),
      },
    });
  } catch (error: any) {
    sendError(res, error, 'Class mastery');
  }
};
