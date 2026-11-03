import express from 'express';
import {
  getOverview,
  listPeople,
  addPerson,
  updatePerson,
  resetPersonPassword,
  getSections,
  bulkUploadStudents,
} from '../controllers/schoolController';
import { uploadBulkFile } from '../config/multer';
import { protect, authorize } from '../middleware/auth';

// A school admin managing their own school's people
const router = express.Router();

router.use(protect);
router.use(authorize('admin'));

router.get('/overview', getOverview);
router.get('/sections', getSections);

router.get('/students', listPeople('student'));
router.post('/students', addPerson('student'));
router.post('/students/bulk-upload', uploadBulkFile, bulkUploadStudents);
router.patch('/students/:id', updatePerson('student'));
router.post('/students/:id/reset-password', resetPersonPassword('student'));

router.get('/teachers', listPeople('teacher'));
router.post('/teachers', addPerson('teacher'));
router.patch('/teachers/:id', updatePerson('teacher'));
router.post('/teachers/:id/reset-password', resetPersonPassword('teacher'));

export default router;
