import express from 'express';
import { askDoubt, myDoubts } from '../controllers/doubtsController';
import { myMastery } from '../controllers/masteryController';
import { achievements } from '../controllers/achievementsController';
import { myPlans, createPlan, deletePlan, startMock, submitMock } from '../controllers/examPrepController';
import { getGoal, setGoal, subscribeReminders, unsubscribeReminders } from '../controllers/goalController';
import {
  startAttempt,
  submitAttempt,
  getMyAttempts,
  getAnalytics,
  getMistakes,
  checkMistake,
  getSharedTests,
  listAssessments,
  startAssessment,
  saveProgress,
  reviewAttempt,
} from '../controllers/studentController';
import { myProgress } from '../controllers/reportsController';
import { practiceOptions, practiceQuestions, recordPracticeAnswer, practiceSummary } from '../controllers/practiceController';
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
router.post('/mistakes/:id/check', checkMistake);
router.post('/doubts', askDoubt);
router.get('/doubts', myDoubts);
router.get('/goal', getGoal);
router.get('/mastery', myMastery);
router.get('/achievements', achievements);
router.get('/exam-plans', myPlans);
router.post('/exam-plans', createPlan);
router.delete('/exam-plans/:id', deletePlan);
router.post('/mock-tests/start', startMock);
router.post('/mock-tests/submit', submitMock);
router.put('/goal', setGoal);
router.post('/reminders', subscribeReminders);
router.delete('/reminders', unsubscribeReminders);
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
router.get('/practice/summary', practiceSummary);

export default router;
