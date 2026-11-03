import express from 'express';
import {
  getQuestions,
  getRandomQuestions,
  getQuestionById,
  getTopicsBySubject,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from '../controllers/questionController';
import { protect, authorize } from '../middleware/auth';

const router = express.Router();

router.get('/', protect, getQuestions);
router.get('/random', protect, getRandomQuestions);
router.get('/topics/:subject', protect, getTopicsBySubject);
router.get('/:id', protect, getQuestionById);

router.post('/', protect, authorize('teacher', 'admin', 'owner'), createQuestion);
router.put('/:id', protect, authorize('teacher', 'admin', 'owner'), updateQuestion);
router.delete('/:id', protect, authorize('admin', 'owner'), deleteQuestion);

export default router;
