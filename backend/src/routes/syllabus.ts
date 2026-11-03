import express from 'express';
import {
  listSubjects,
  createSubject,
  listChapters,
  createChapter,
  updateChapter,
  deleteChapter,
} from '../controllers/syllabusController';
import { protect, authorize } from '../middleware/auth';

const router = express.Router();

router.use(protect);

router.get('/subjects', listSubjects);
router.get('/subjects/:id/chapters', listChapters);

router.post('/subjects', authorize('owner'), createSubject);
router.post('/subjects/:id/chapters', authorize('owner'), createChapter);
router.patch('/chapters/:id', authorize('owner'), updateChapter);
router.delete('/chapters/:id', authorize('owner'), deleteChapter);

export default router;
