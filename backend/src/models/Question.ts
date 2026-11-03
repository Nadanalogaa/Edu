import { Table, Doc } from '../db/table';

export const Questions = new Table(
  'questions',
  [
    'externalId', 'subject', 'unit', 'chapter', 'chapterName', 'topic', 'difficulty', 'question',
    'options', 'correctAnswer', 'explanation', 'videoUrl', 'marks', 'examType', 'isActive', 'createdBy',
    'schoolId',
  ],
  ['chapterName', 'question', 'options', 'explanation']
);

/** Returns the questions for the given ids, in the order of the ids (missing ones dropped). */
export const questionsInOrder = async (ids: string[] = []): Promise<Doc[]> => {
  const byId = await Questions.findByIds(ids);
  return ids.map((id) => byId.get(String(id))).filter((q): q is Doc => Boolean(q));
};
