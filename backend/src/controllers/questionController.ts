import { Request, Response } from 'express';
import Question from '../models/Question';
import { AuthRequest } from '../middleware/auth';

// @desc    Get all questions with filters
// @route   GET /api/questions
// @access  Private
export const getQuestions = async (req: AuthRequest, res: Response) => {
  try {
    const { subject, topic, difficulty, examType, limit = 10, page = 1 } = req.query;

    const query: any = { isActive: true };

    if (subject) query.subject = subject;
    if (topic) query.topic = topic;
    if (difficulty) query.difficulty = difficulty;
    if (examType && examType !== 'Both') query.examType = { $in: [examType, 'Both'] };

    const skip = (Number(page) - 1) * Number(limit);

    const questions = await Question.find(query)
      .limit(Number(limit))
      .skip(skip)
      .sort({ createdAt: -1 });

    const total = await Question.countDocuments(query);

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

    const query: any = { isActive: true };

    if (subject) query.subject = subject;
    if (topic) query.topic = topic;
    if (difficulty) query.difficulty = difficulty;
    if (examType && examType !== 'Both') query.examType = { $in: [examType, 'Both'] };

    const questions = await Question.aggregate([
      { $match: query },
      { $sample: { size: Number(count) } },
    ]);

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
    const question = await Question.findById(req.params.id);

    if (!question) {
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

    const topics = await Question.distinct('topic', {
      subject,
      isActive: true,
    });

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
    const question = await Question.create(req.body);

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
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

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
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

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
