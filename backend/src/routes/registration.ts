import express from 'express';
import {
  registerStudent,
  registerTeacher,
  registerSchool,
} from '../controllers/registrationController';
import {
  uploadStudentDocuments,
  uploadTeacherDocuments,
  uploadSchoolDocuments,
} from '../config/multer';

const router = express.Router();

// Student registration route
router.post('/student', uploadStudentDocuments, registerStudent);

// Teacher registration route
router.post('/teacher', uploadTeacherDocuments, registerTeacher);

// School registration route
router.post('/school', uploadSchoolDocuments, registerSchool);

export default router;
