import express from 'express';
import {
  startAttempt,
  submitAttempt,
  getMyAttempts,
  getAnalytics,
  getMistakes,
  markMistakeReviewed,
  getSharedTests,
} from '../controllers/studentController';
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

export default router;
