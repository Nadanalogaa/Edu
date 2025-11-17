import express from 'express';
import {
  uploadQuestions,
  getQuestions,
  deleteQuestion,
  updateQuestionProperties,
  getUploadedFiles,
  deleteUploadedFile,
  createTest,
  getTests,
  getTestById,
  updateTest,
  deleteTest,
  createDailyChallenge,
  getTodayChallenge,
  shareTest,
  getShareOptions,
} from '../controllers/adminController';
import { getRandomQuestions } from '../controllers/questionController';
import { uploadQuestionFile } from '../config/multer';
import { protect, authorize } from '../middleware/auth';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// Question Management
router.post('/questions/upload', uploadQuestionFile, uploadQuestions);
router.get('/questions/random', getRandomQuestions);
router.get('/questions', getQuestions);
router.patch('/questions/bulk-update', updateQuestionProperties);
router.delete('/questions/:id', deleteQuestion);

// Uploaded File Management
router.get('/uploaded-files', getUploadedFiles);
router.delete('/uploaded-files/:id', deleteUploadedFile);

// Test/Exam Management
router.post('/tests', createTest);
router.get('/tests', getTests);
router.get('/tests/:id', getTestById);
router.put('/tests/:id', updateTest);
router.delete('/tests/:id', deleteTest);
router.post('/tests/:id/share', shareTest);
router.get('/share-options', getShareOptions);

// Daily Challenge Management
router.post('/daily-challenges', createDailyChallenge);
router.get('/daily-challenges/today', getTodayChallenge);

export default router;
