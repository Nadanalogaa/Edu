import { Table } from '../db/table';

export const StudentAttempts = new Table(
  'student_attempts',
  [
    'studentId', 'testId', 'answers', 'totalQuestions', 'correctAnswers', 'wrongAnswers',
    'skippedAnswers', 'totalMarks', 'marksObtained', 'percentage', 'timeTaken', 'startTime',
    'endTime', 'status',
  ],
  ['answers']
);
