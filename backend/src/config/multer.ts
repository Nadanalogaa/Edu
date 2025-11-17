import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Create subdirectories for different document types
const documentDirs = ['students', 'teachers', 'schools', 'bulk', 'questions'];
documentDirs.forEach(dir => {
  const dirPath = path.join(uploadsDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = uploadsDir;

    // Determine subdirectory based on field name or route
    if (file.fieldname.includes('student') || req.path.includes('student')) {
      uploadPath = path.join(uploadsDir, 'students');
    } else if (file.fieldname.includes('teacher') || req.path.includes('teacher')) {
      uploadPath = path.join(uploadsDir, 'teachers');
    } else if (file.fieldname.includes('school') || req.path.includes('school')) {
      uploadPath = path.join(uploadsDir, 'schools');
    } else if (file.fieldname.includes('bulk')) {
      uploadPath = path.join(uploadsDir, 'bulk');
    } else if (file.fieldname.includes('questions') || req.path.includes('questions')) {
      uploadPath = path.join(uploadsDir, 'questions');
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const nameWithoutExt = path.basename(file.originalname, ext);
    cb(null, `${nameWithoutExt}-${uniqueSuffix}${ext}`);
  }
});

// File filter for allowed file types
const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'application/pdf',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv'
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, PDF, Excel, and CSV files are allowed.'));
  }
};

// Create multer upload instance
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  }
});

// Multiple file upload configurations
export const uploadStudentDocuments = upload.fields([
  { name: 'birthCertificate', maxCount: 1 },
  { name: 'transferCertificate', maxCount: 1 },
  { name: 'previousMarksCard', maxCount: 1 },
  { name: 'studentAadhaar', maxCount: 1 },
  { name: 'parentAadhaar', maxCount: 1 },
  { name: 'studentPhoto', maxCount: 1 },
  { name: 'parentPhoto', maxCount: 1 }
]);

export const uploadTeacherDocuments = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'resume', maxCount: 1 },
  { name: 'aadhaar', maxCount: 1 },
  { name: 'educationCertificates', maxCount: 5 },
  { name: 'experienceCertificates', maxCount: 5 },
  { name: 'panCard', maxCount: 1 }
]);

export const uploadSchoolDocuments = upload.fields([
  { name: 'registrationCertificate', maxCount: 1 },
  { name: 'affiliationCertificate', maxCount: 1 },
  { name: 'taxDocument', maxCount: 1 },
  { name: 'principalIdProof', maxCount: 1 }
]);

export const uploadBulkFile = upload.single('bulkFile');

export const uploadQuestionFile = upload.single('questionsFile');

export default upload;
