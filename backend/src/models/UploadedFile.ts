import { Table } from '../db/table';

export const UploadedFiles = new Table('uploaded_files', [
  'fileName', 'examType', 'subject', 'unit', 'chapter', 'chapterName', 'questionCount',
  'questionIds', 'uploadedBy', 'uploadDate', 'isActive', 'schoolId', 'subjectId',
  'classGrade',
]);
