import express from 'express';
import {
  listQuestions,
  questionCounts,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  questionTemplate,
  uploadQuestions,
  listTests,
  listReadyMade,
  createTest,
  copyReadyMade,
  getTest,
  updateTest,
  deleteTest,
  testResults,
} from '../controllers/assessmentController';
import { getSections } from '../controllers/schoolController';
import { uploadQuestionFile } from '../config/multer';
import { protect, authorize } from '../middleware/auth';

// Class-wise questions and tests: school admins and teachers for their school,
// the owner for ready-made content.
const router = express.Router();

router.use(protect);
router.use(authorize('admin', 'teacher', 'owner'));

router.get('/questions', listQuestions);
router.get('/questions/counts', questionCounts);
router.get('/questions/template', questionTemplate);
router.post('/questions/upload', uploadQuestionFile, uploadQuestions);
router.post('/questions', createQuestion);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

// Classes and sections with students, for choosing who takes a test
router.get('/sections', authorize('admin', 'teacher'), getSections);

router.get('/tests', listTests);
router.get('/ready-made', authorize('admin', 'teacher'), listReadyMade);
router.post('/tests', createTest);
router.post('/tests/:id/copy', authorize('admin', 'teacher'), copyReadyMade);
router.get('/tests/:id', getTest);
router.patch('/tests/:id', updateTest);
router.delete('/tests/:id', deleteTest);
router.get('/tests/:id/results', testResults);

export default router;
