import { Table, Doc, pick } from '../db/table';
import { Users } from './User';
import { questionsInOrder } from './Question';

export const Tests = new Table('tests', [
  'title', 'description', 'createdBy', 'schoolId', 'type', 'examType', 'subjects', 'duration',
  'totalMarks', 'questions', 'startTime', 'endTime', 'isPublished', 'isActive',
  'sharedWithStudents', 'sharedWithGrades', 'sharedAt', 'board', 'classGrade', 'subjectId', 'chapterIds',
  'sections', 'copiedFrom',
]);

/**
 * Replaces `createdBy` with the creator's {_id, ...creatorFields} and, if asked,
 * `questions` with the full question documents (like Mongoose populate).
 */
export const populateTests = async (
  tests: Doc[],
  { creatorFields = ['name', 'email'], withQuestions = false } = {}
): Promise<Doc[]> => {
  const creators = await Users.findByIds(tests.map((t) => t.createdBy).filter(Boolean));
  return Promise.all(
    tests.map(async (test) => ({
      ...test,
      createdBy: pick(creators.get(test.createdBy), creatorFields),
      ...(withQuestions && { questions: await questionsInOrder(test.questions) }),
    }))
  );
};
