import express from 'express';
import { overview, students, studentReport, dashboard } from '../controllers/reportsController';
import { staffDoubts, replyDoubt } from '../controllers/doubtsController';
import { classMastery } from '../controllers/masteryController';
import { studentParentLink } from '../controllers/parentController';
import { protect, authorize } from '../middleware/auth';

// School performance reports for school admins and teachers
const router = express.Router();

router.use(protect);
router.use(authorize('admin', 'teacher'));

router.get('/dashboard', dashboard);
router.get('/doubts', staffDoubts);
router.get('/mastery', classMastery);
router.post('/doubts/:questionId/reply', replyDoubt);
router.get('/overview', overview);
router.get('/students', students);
router.get('/students/:id', studentReport);
router.post('/students/:id/parent-link', studentParentLink);

export default router;
