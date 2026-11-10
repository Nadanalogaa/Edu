import api from '../services/api';

// Practice without internet: chapters saved on the device, and answers given
// offline kept in a queue that is sent when the connection comes back.

export interface OfflineSet {
  key: string;
  subjectId: string;
  chapterId: string;
  title: { en: string; ta: string };
  subject: string;
  questions: any[];
  savedAt: string;
}

const SETS = 'offline-sets';
const QUEUE = 'offline-answers';
const MAX_SETS = 6;

const read = <T,>(key: string, fallback: T): T => {
  try {
    return JSON.parse(localStorage.getItem(key) || '') as T;
  } catch {
    return fallback;
  }
};

export const offlineSets = (): OfflineSet[] => read<OfflineSet[]>(SETS, []);

export const saveOfflineSet = (set: Omit<OfflineSet, 'key' | 'savedAt'>) => {
  const key = `${set.subjectId}|${set.chapterId}`;
  const others = offlineSets().filter((s) => s.key !== key);
  const next = [{ ...set, key, savedAt: new Date().toISOString() }, ...others].slice(0, MAX_SETS);
  localStorage.setItem(SETS, JSON.stringify(next));
  return next;
};

export const removeOfflineSet = (key: string) => {
  const next = offlineSets().filter((s) => s.key !== key);
  localStorage.setItem(SETS, JSON.stringify(next));
  return next;
};

export const queuedAnswers = () => read<{ questionId: string; selectedAnswer: number; at: string }[]>(QUEUE, []);

export const queueAnswer = (questionId: string, selectedAnswer: number) => {
  localStorage.setItem(QUEUE, JSON.stringify([...queuedAnswers(), { questionId, selectedAnswer, at: new Date().toISOString() }]));
};

let flushing = false;
/** Sends answers given offline; keeps the ones that could not be sent yet. */
export const flushAnswers = async () => {
  if (flushing || !navigator.onLine) return 0;
  const queue = queuedAnswers();
  if (!queue.length) return 0;
  flushing = true;
  let sent = 0;
  const left: typeof queue = [];
  try {
    for (const a of queue) {
      try {
        await api.post('/student/practice/answers', { questionId: a.questionId, selectedAnswer: a.selectedAnswer });
        sent++;
      } catch (error: any) {
        // A server answer (e.g. 404) means the item cannot be sent: drop it. No answer at all: try again later.
        if (!error?.response || error.response.status === 401) left.push(a);
      }
    }
    localStorage.setItem(QUEUE, JSON.stringify(left));
  } finally {
    flushing = false;
  }
  return sent;
};

/** Sends queued answers now and whenever the device comes back online. */
export const startOfflineSync = () => {
  window.addEventListener('online', () => flushAnswers().catch(() => undefined));
  flushAnswers().catch(() => undefined);
};
