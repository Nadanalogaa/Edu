import { Response } from 'express';
import { Questions } from '../models/Question';
import { query } from '../config/database';
import { AuthRequest } from '../middleware/auth';
import { visibleTo, contentSchoolId, canRead, canChange } from '../utils/tenancy';

/** Filters shared by the list and random endpoints (only questions the user's school can see). */
const questionFilters = (
  user: any,
  filters: { subject?: any; topic?: any; difficulty?: any; examType?: any }
) => {
  const params: any[] = [];
  const where = ['is_active = true', visibleTo(user, params)];
  const add = (column: string, value: any) => {
    params.push(value);
    where.push(`${column} = $${params.length}`);
  };

  if (filters.subject) add('subject', filters.subject);
  if (filters.topic) add('topic', filters.topic);
  if (filters.difficulty) add('difficulty', filters.difficulty);
  if (filters.examType && filters.examType !== 'Both') {
    params.push(filters.examType);
    where.push(`exam_type IN ($${params.length}, 'Both')`);
  }

  return { where: `WHERE ${where.join(' AND ')}`, params };
};

// @desc    Get all questions with filters
// @route   GET /api/questions
// @access  Private
export const getQuestions = async (req: AuthRequest, res: Response) => {
  try {
    const { subject, topic, difficulty, examType, limit = 10, page = 1 } = req.query;

    const { where, params } = questionFilters(req.user, { subject, topic, difficulty, examType });

    const skip = (Number(page) - 1) * Number(limit);

    const questions = await Questions.select(
      `SELECT * FROM questions ${where} ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`,
      [...params, Number(limit), skip]
    );

    const [{ total }] = await query(`SELECT count(*)::int AS total FROM questions ${where}`, params);

    res.status(200).json({
      success: true,
      count: questions.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: questions,
    });
  } catch (error: any) {
    console.error('Get questions error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching questions',
    });
  }
};

// @desc    Get random questions for practice/test
// @route   GET /api/questions/random
// @access  Private
export const getRandomQuestions = async (req: AuthRequest, res: Response) => {
  try {
    const { subject, topic, difficulty, count = 10, examType } = req.query;

    const { where, params } = questionFilters(req.user, { subject, topic, difficulty, examType });

    const questions = await Questions.select(
      `SELECT * FROM questions ${where} ORDER BY random() LIMIT $${params.length + 1}`,
      [...params, Number(count)]
    );

    res.status(200).json({
      success: true,
      count: questions.length,
      data: questions,
    });
  } catch (error: any) {
    console.error('Get random questions error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching random questions',
    });
  }
};

// @desc    Get question by ID
// @route   GET /api/questions/:id
// @access  Private
export const getQuestionById = async (req: AuthRequest, res: Response) => {
  try {
    const question = await Questions.findById(req.params.id);

    if (!question || !canRead(req.user, question)) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    res.status(200).json({
      success: true,
      data: question,
    });
  } catch (error: any) {
    console.error('Get question error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching question',
    });
  }
};

// @desc    Get unique topics by subject
// @route   GET /api/questions/topics/:subject
// @access  Private
export const getTopicsBySubject = async (req: AuthRequest, res: Response) => {
  try {
    const { subject } = req.params;

    const params: any[] = [subject];
    const rows = await query(
      `SELECT DISTINCT topic FROM questions WHERE subject = $1 AND is_active = true AND ${visibleTo(req.user, params)} ORDER BY topic`,
      params
    );
    const topics = rows.map((row) => row.topic);

    res.status(200).json({
      success: true,
      data: topics,
    });
  } catch (error: any) {
    console.error('Get topics error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching topics',
    });
  }
};

// @desc    Create question (Teacher/Admin only)
// @route   POST /api/questions
// @access  Private (Teacher, Admin)
export const createQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const schoolId = contentSchoolId(req.user);
    if (req.user.role !== 'owner' && !schoolId) {
      return res.status(403).json({
        success: false,
        message: 'Your account is not linked to a school',
      });
    }

    const question = await Questions.insert({ ...req.body, schoolId, createdBy: req.user._id });

    res.status(201).json({
      success: true,
      message: 'Question created successfully',
      data: question,
    });
  } catch (error: any) {
    console.error('Create question error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error creating question',
    });
  }
};

// @desc    Update question (Teacher/Admin only)
// @route   PUT /api/questions/:id
// @access  Private (Teacher, Admin)
export const updateQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const existing = await Questions.findById(req.params.id);
    if (!existing || !canChange(req.user, existing)) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    const { schoolId, createdBy, ...updates } = req.body;
    const question = await Questions.updateById(existing._id, updates);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Question updated successfully',
      data: question,
    });
  } catch (error: any) {
    console.error('Update question error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating question',
    });
  }
};

// @desc    Delete question (Admin only)
// @route   DELETE /api/questions/:id
// @access  Private (Admin)
export const deleteQuestion = async (req: AuthRequest, res: Response) => {
  try {
    const existing = await Questions.findById(req.params.id);
    const question = existing && canChange(req.user, existing)
      ? await Questions.updateById(existing._id, { isActive: false })
      : null;

    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Question not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Question deleted successfully',
    });
  } catch (error: any) {
    console.error('Delete question error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting question',
    });
  }
};
