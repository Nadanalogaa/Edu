import express from 'express';
import {
  startAttempt,
  submitAttempt,
  getMyAttempts,
  getAnalytics,
  getMistakes,
  markMistakeReviewed,
  getSharedTests,
  listAssessments,
  startAssessment,
  saveProgress,
  reviewAttempt,
} from '../controllers/studentController';
import { myProgress } from '../controllers/reportsController';
import { practiceOptions, practiceQuestions, recordPracticeAnswer } from '../controllers/practiceController';
import { protect, authorize } from '../middleware/auth';

const router = express.Router();

// All routes are protected and student-only
router.use(protect);
router.use(authorize('student'));

router.post('/attempts/start', startAttempt);
router.post('/attempts/:id/submit', submitAttempt);
router.get('/attempts', getMyAttempts);
router.get('/analytics', getAnalytics);
router.get('/mistakes', getMistakes);
router.put('/mistakes/:id/review', markMistakeReviewed);
router.get('/tests', getSharedTests);

// Class assessments
router.get('/assessments', listAssessments);
router.post('/assessments/:id/start', startAssessment);
router.put('/attempts/:id/progress', saveProgress);
router.get('/attempts/:id/review', reviewAttempt);
router.get('/progress', myProgress);
router.get('/practice/options', practiceOptions);
router.get('/practice/questions', practiceQuestions);
router.post('/practice/answers', recordPracticeAnswer);

export default router;
