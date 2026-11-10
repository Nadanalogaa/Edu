import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Panel, Alert, Spinner, EmptyState, apiError } from '../common/ui';

// For one class and subject: how many students are at each mastery level in
// every chapter, with the students stuck on it (practising, under 50% right).

const LEVELS = [
  { key: 'mastered', label: 'Mastered', bar: 'bg-emerald-500', dot: 'bg-emerald-500' },
  { key: 'good', label: 'Good', bar: 'bg-sky-500', dot: 'bg-sky-500' },
  { key: 'learning', label: 'Learning', bar: 'bg-amber-400', dot: 'bg-amber-400' },
  { key: 'notStarted', label: 'Not started', bar: 'bg-slate-200 dark:bg-slate-700', dot: 'bg-slate-300 dark:bg-slate-600' },
];

const ClassMastery: React.FC<{ subjectId: string; section?: string }> = ({ subjectId, section }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!subjectId) return;
    setData(null);
    setError('');
    api
      .get('/reports/mastery', { params: { subjectId, section: section || undefined } })
      .then((res) => setData(res.data.data))
      .catch((err) => setError(apiError(err, 'Could not load chapter mastery')));
  }, [subjectId, section]);

  if (!subjectId) return <Panel><EmptyState>Choose a class and a subject above to see how the class is doing in each chapter.</EmptyState></Panel>;
  if (error) return <Alert>{error}</Alert>;
  if (!data) return <Spinner />;

  return (
    <Panel title={`${data.subject.nameEn} ${data.subject.classGrade}th · ${data.students} students`}>
      <p className="-mt-2 mb-3 text-sm text-slate-500 dark:text-slate-400">
        From every practice and test answer. Good: 8+ questions and 65% of the last 20 right. Mastered: 15+ questions and 85% right.
      </p>
      <ul className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-300">
        {LEVELS.map((l) => (
          <li key={l.key} className="flex items-center gap-1.5">
            <span className={`w-3 h-3 rounded-sm ${l.dot}`} aria-hidden="true" /> {l.label}
          </li>
        ))}
      </ul>
      <ul className="space-y-3">
        {data.chapters.map((c: any) => (
          <li key={c.chapterId}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <span className="font-medium text-slate-800 dark:text-slate-100">
                Ch. {c.number} {c.nameEn}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                {c.levels.mastered} mastered · {c.levels.good} good · {c.levels.learning} learning · {c.levels.notStarted} not started
              </span>
            </div>
            <div className="mt-1 flex h-3 w-full overflow-hidden rounded-full gap-[2px]" role="img"
              aria-label={LEVELS.map((l) => `${l.label} ${c.levels[l.key]}`).join(', ')}>
              {data.students > 0 &&
                LEVELS.map((l) =>
                  c.levels[l.key] ? <div key={l.key} className={`h-full ${l.bar}`} style={{ width: `${(c.levels[l.key] / data.students) * 100}%` }} title={`${l.label}: ${c.levels[l.key]}`} /> : null
                )}
            </div>
            {c.struggling.length > 0 && (
              <p className="mt-1 text-xs text-red-700 dark:text-red-300">⚠ Stuck (under 50% right): {c.struggling.join(', ')}</p>
            )}
            {c.bank === 0 && <p className="mt-1 text-xs text-slate-500">No questions in this chapter yet.</p>}
          </li>
        ))}
      </ul>
    </Panel>
  );
};

export default ClassMastery;
