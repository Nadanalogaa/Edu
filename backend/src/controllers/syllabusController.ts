import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { Subjects, Chapters, isBoard, isClassGrade } from '../models/Syllabus';
import { HttpError } from '../utils/tenancy';

// The syllabus catalogue: board -> class -> subject -> chapter. Everyone signed
// in can read it; only the owner changes it.

const sendError = (res: Response, error: any, label: string) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({ success: false, message: error.message });
  }
  if (error.code === '23505') {
    return res.status(400).json({ success: false, message: 'This number or code is already used' });
  }
  console.error(`${label} error:`, error);
  res.status(500).json({ success: false, message: error.message || `Error: ${label}` });
};

/** A school user only sees their school's board. */
const boardFor = (req: AuthRequest, requested: any) => {
  if (req.user.role !== 'owner' && req.school?.board) return req.school.board;
  return requested;
};

// @desc    Subjects of a board and class, with chapter counts
// @route   GET /api/syllabus/subjects?board=state_board&classGrade=9
export const listSubjects = async (req: AuthRequest, res: Response) => {
  try {
    const board = boardFor(req, req.query.board);
    const classGrade = Number(req.query.classGrade);
    if (!isBoard(board)) throw new HttpError(400, 'Board must be state_board or cbse');
    if (!isClassGrade(classGrade)) throw new HttpError(400, 'Class must be between 6 and 12');

    const subjects = await Subjects.select(
      `SELECT s.*, (SELECT count(*)::int FROM chapters c WHERE c.subject_id = s.id AND c.is_active) AS chapter_count
       FROM subjects s WHERE s.board = $1 AND s.class_grade = $2 AND s.is_active
       ORDER BY s.sort_order, s.name_en`,
      [board, classGrade]
    );
    res.status(200).json({ success: true, data: subjects });
  } catch (error: any) {
    sendError(res, error, 'List subjects');
  }
};

// @desc    Add a subject to a board and class (owner)
// @route   POST /api/syllabus/subjects
export const createSubject = async (req: AuthRequest, res: Response) => {
  try {
    const { board, classGrade, nameEn, nameTa } = req.body;
    if (!isBoard(board)) throw new HttpError(400, 'Board must be state_board or cbse');
    if (!isClassGrade(classGrade)) throw new HttpError(400, 'Class must be between 6 and 12');
    if (!nameEn || !String(nameEn).trim()) throw new HttpError(400, 'Subject name is required');

    const code = String(req.body.code || nameEn).trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    const subject = await Subjects.insert({
      board,
      classGrade: Number(classGrade),
      code,
      nameEn: String(nameEn).trim(),
      nameTa: String(nameTa || nameEn).trim(),
      sortOrder: Number(req.body.sortOrder) || 100,
    });
    res.status(201).json({ success: true, message: 'Subject added', data: subject });
  } catch (error: any) {
    sendError(res, error, 'Create subject');
  }
};

// @desc    Chapters of a subject
// @route   GET /api/syllabus/subjects/:id/chapters
export const listChapters = async (req: AuthRequest, res: Response) => {
  try {
    const subject = await Subjects.findById(req.params.id);
    if (!subject || subject.board !== boardFor(req, subject.board)) throw new HttpError(404, 'Subject not found');

    const chapters = await Chapters.select(
      'SELECT * FROM chapters WHERE subject_id = $1 AND is_active ORDER BY number',
      [subject._id]
    );
    res.status(200).json({ success: true, data: { subject, chapters } });
  } catch (error: any) {
    sendError(res, error, 'List chapters');
  }
};

const chapterFields = (body: any) => {
  const fields: Record<string, any> = {};
  if (body.number !== undefined) {
    const number = Number(body.number);
    if (!Number.isInteger(number) || number < 1) throw new HttpError(400, 'Chapter number must be 1 or more');
    fields.number = number;
  }
  if (body.nameEn !== undefined) {
    if (!String(body.nameEn).trim()) throw new HttpError(400, 'Chapter name is required');
    fields.nameEn = String(body.nameEn).trim();
  }
  if (body.nameTa !== undefined) fields.nameTa = String(body.nameTa).trim();
  return fields;
};

// @desc    Add a chapter (owner)
// @route   POST /api/syllabus/subjects/:id/chapters
export const createChapter = async (req: AuthRequest, res: Response) => {
  try {
    const subject = await Subjects.findById(req.params.id);
    if (!subject) throw new HttpError(404, 'Subject not found');
    const fields = chapterFields(req.body);
    if (!fields.number || !fields.nameEn) throw new HttpError(400, 'Chapter number and name are required');

    // Re-adding a removed chapter number brings it back
    const [removed] = await Chapters.select(
      'SELECT * FROM chapters WHERE subject_id = $1 AND number = $2 AND NOT is_active',
      [subject._id, fields.number]
    );
    const chapter = removed
      ? await Chapters.updateById(removed._id, { ...fields, isActive: true })
      : await Chapters.insert({ subjectId: subject._id, nameTa: '', ...fields });
    res.status(201).json({ success: true, message: 'Chapter added', data: chapter });
  } catch (error: any) {
    sendError(res, error, 'Create chapter');
  }
};

// @desc    Rename or renumber a chapter (owner)
// @route   PATCH /api/syllabus/chapters/:id
export const updateChapter = async (req: AuthRequest, res: Response) => {
  try {
    const chapter = await Chapters.updateById(req.params.id, chapterFields(req.body));
    if (!chapter) throw new HttpError(404, 'Chapter not found');
    res.status(200).json({ success: true, message: 'Chapter saved', data: chapter });
  } catch (error: any) {
    sendError(res, error, 'Update chapter');
  }
};

// @desc    Remove a chapter (owner; kept in the database for existing questions)
// @route   DELETE /api/syllabus/chapters/:id
export const deleteChapter = async (req: AuthRequest, res: Response) => {
  try {
    const chapter = await Chapters.updateById(req.params.id, { isActive: false });
    if (!chapter) throw new HttpError(404, 'Chapter not found');
    res.status(200).json({ success: true, message: 'Chapter removed' });
  } catch (error: any) {
    sendError(res, error, 'Delete chapter');
  }
};
