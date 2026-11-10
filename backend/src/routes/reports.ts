import express from 'express';
import { overview, students, studentReport, dashboard } from '../controllers/reportsController';
import { staffDoubts, replyDoubt } from '../controllers/doubtsController';
import { protect, authorize } from '../middleware/auth';

// School performance reports for school admins and teachers
const router = express.Router();

router.use(protect);
router.use(authorize('admin', 'teacher'));

router.get('/dashboard', dashboard);
router.get('/doubts', staffDoubts);
router.post('/doubts/:questionId/reply', replyDoubt);
router.get('/overview', overview);
router.get('/students', students);
router.get('/students/:id', studentReport);

export default router;
