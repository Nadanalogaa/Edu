import express from 'express';
import {
  registerStudent,
  registerTeacher,
  registerSchool,
  bulkUploadStudents,
} from '../controllers/registrationController';
import {
  uploadStudentDocuments,
  uploadTeacherDocuments,
  uploadSchoolDocuments,
  uploadBulkFile,
} from '../config/multer';

const router = express.Router();

// Student registration route
router.post('/student', uploadStudentDocuments, registerStudent);

// Teacher registration route
router.post('/teacher', uploadTeacherDocuments, registerTeacher);

// School registration route
router.post('/school', uploadSchoolDocuments, registerSchool);

// Bulk upload students route
router.post('/school/bulk-upload', uploadBulkFile, bulkUploadStudents);

export default router;
