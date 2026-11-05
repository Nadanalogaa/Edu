import express from 'express';
import {
  getOverview,
  listPeople,
  addPerson,
  updatePerson,
  resetPersonPassword,
  getSections,
  bulkUploadStudents,
  getImportTemplate,
  setTeacherAssignments,
  getTeacherImportTemplate,
  bulkUploadTeachers,
} from '../controllers/schoolController';
import { uploadBulkFile } from '../config/multer';
import { protect, authorize } from '../middleware/auth';

// A school admin managing their own school's students, teachers and admins
const router = express.Router();

router.use(protect);
router.use(authorize('admin'));

router.get('/overview', getOverview);
router.get('/sections', getSections);

router.get('/students', listPeople('student'));
router.post('/students', addPerson('student'));
router.get('/students/import-template', getImportTemplate);
router.post('/students/bulk-upload', uploadBulkFile, bulkUploadStudents);
router.patch('/students/:id', updatePerson('student'));
router.post('/students/:id/reset-password', resetPersonPassword('student'));

router.get('/teachers', listPeople('teacher'));
router.get('/teachers/import-template', getTeacherImportTemplate);
router.post('/teachers/bulk-upload', uploadBulkFile, bulkUploadTeachers);
router.post('/teachers', addPerson('teacher'));
router.patch('/teachers/:id', updatePerson('teacher'));
router.post('/teachers/:id/reset-password', resetPersonPassword('teacher'));
router.put('/teachers/:id/assignments', setTeacherAssignments);

router.get('/admins', listPeople('admin'));
router.post('/admins', addPerson('admin'));
router.patch('/admins/:id', updatePerson('admin'));
router.post('/admins/:id/reset-password', resetPersonPassword('admin'));

export default router;
