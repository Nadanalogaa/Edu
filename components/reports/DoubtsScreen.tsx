import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { PageHeader, Panel, Alert, Spinner, EmptyState, Button, apiError, classLabel, formatDate } from '../common/ui';
import QuestionImage from '../common/QuestionImage';

// Students' doubts for teachers and school admins: grouped by question, most
// asked first, limited to the teacher's classes and subjects. One answer goes
// to every student of the school who asked about that question.

const LETTERS = ['A', 'B', 'C', 'D'];

const DoubtCard: React.FC<{ item: any; onSaved: (message: string) => void }> = ({ item, onSaved }) => {
  const q = item.question;
  const [reply, setReply] = useState(item.reply || '');
  const [editing, setEditing] = useState(!item.reply);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [showAll, setShowAll] = useState(false);
  const askers = showAll ? item.askers : item.askers.slice(0, 4);

  const save = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await api.post(`/reports/doubts/${q._id}/reply`, { reply });
      onSaved(res.data.message);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Panel>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="px-2 py-0.5 rounded-full font-bold bg-violet-600 text-white">🙋 {item.students} student{item.students === 1 ? '' : 's'}</span>
        <span className="text-slate-500 dark:text-slate-400">
          {q.subject}
          {q.chapter && ` · Ch. ${q.chapter.number} ${q.chapter.en}`} · {q.difficulty} · last asked {formatDate(item.lastAt)}
        </span>
      </div>
      <p className="mt-2 font-semibold text-slate-800 dark:text-slate-100 whitespace-pre-line">{q.question.en}</p>
      {q.question.ta && q.question.ta !== q.question.en && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">{q.question.ta}</p>}
      <QuestionImage src={q.imageUrl} />
      <ul className="mt-2 grid sm:grid-cols-2 gap-1.5 text-sm">
        {q.options.en.map((o: string, i: number) => (
          <li key={i} className={`px-3 py-1.5 rounded-lg ${i === q.correctAnswer ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 font-semibold' : 'bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300'}`}>
            {LETTERS[i]}. {o} {i === q.correctAnswer && '✓'}
          </li>
        ))}
      </ul>
      {q.explanation?.en && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">💡 Explanation students already see: {q.explanation.en}</p>}

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Asked by</p>
        <ul className="mt-1.5 space-y-1.5">
          {askers.map((a: any, i: number) => (
            <li key={i} className="text-sm">
              <span className="font-medium text-slate-800 dark:text-slate-100">{a.name}</span>
              <span className="text-xs text-slate-500"> · {classLabel(a.classGrade, a.section)} · {formatDate(a.at)}</span>
              {a.message && <span className="block text-slate-600 dark:text-slate-300">“{a.message}”</span>}
            </li>
          ))}
        </ul>
        {item.askers.length > 4 && (
          <button type="button" className="mt-1 text-xs font-semibold text-indigo-600" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show fewer' : `Show all ${item.askers.length}`}
          </button>
        )}
      </div>

      <div className="mt-4 border-t border-slate-100 dark:border-slate-700 pt-4">
        {editing ? (
          <>
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor={`reply-${q._id}`}>
              Your answer (sent to every student who asked)
            </label>
            <textarea
              id={`reply-${q._id}`}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              rows={3}
              maxLength={2000}
              placeholder="Explain it simply, step by step. You can write in Tamil or English."
              className="mt-1 w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
            {error && <div className="mt-2"><Alert>{error}</Alert></div>}
            <div className="mt-2 flex justify-end gap-2">
              {item.reply && (
                <Button variant="secondary" size="sm" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
              )}
              <Button size="sm" disabled={saving || !reply.trim()} onClick={save}>
                {saving ? 'Sending…' : 'Send answer'}
              </Button>
            </div>
          </>
        ) : (
          <div className="rounded-xl bg-violet-50 dark:bg-violet-500/10 px-4 py-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-violet-800 dark:text-violet-200">
                Answered by {item.teacherName || 'a teacher'} · {formatDate(item.repliedAt)}
              </p>
              <Button variant="ghost" size="sm" onClick={() => setEditing(true)}>
                Edit
              </Button>
            </div>
            <p className="mt-1 text-sm text-slate-800 dark:text-slate-100 whitespace-pre-line">{item.reply}</p>
          </div>
        )}
      </div>
    </Panel>
  );
};

const DoubtsScreen: React.FC = () => {
  const [status, setStatus] = useState<'open' | 'answered'>('open');
  const [items, setItems] = useState<any[] | null>(null);
  const [counts, setCounts] = useState<{ questions: number; doubts: number } | null>(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const load = useCallback(() => {
    setItems(null);
    api
      .get('/reports/doubts', { params: { status } })
      .then((res) => {
        setItems(res.data.data);
        setCounts(res.data.counts);
      })
      .catch((err) => setError(apiError(err, 'Could not load doubts')));
  }, [status]);

  useEffect(load, [load]);

  return (
    <div className="space-y-4">
      <PageHeader title="Students' doubts" subtitle="Questions your students asked about, most asked first. Answer once: everyone who asked sees it." />
      <div className="inline-flex gap-1 p-1 rounded-xl bg-slate-200/60 dark:bg-slate-800" role="tablist">
        {([['open', `Waiting${counts ? ` (${counts.questions})` : ''}`], ['answered', 'Answered']] as const).map(([v, label]) => (
          <button key={v} type="button" role="tab" aria-selected={status === v} onClick={() => setStatus(v)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${status === v ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}>
            {label}
          </button>
        ))}
      </div>
      {notice && <Alert tone="success" onClose={() => setNotice('')}>{notice}</Alert>}
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      {!items ? (
        <Spinner />
      ) : items.length === 0 ? (
        <Panel>
          <EmptyState>{status === 'open' ? '✓ No doubts waiting. Students ask from any question with "🙋 Ask my teacher".' : 'No answered doubts yet.'}</EmptyState>
        </Panel>
      ) : (
        items.map((item) => (
          <DoubtCard
            key={item.question._id + (item.repliedAt || '')}
            item={item}
            onSaved={(message) => {
              setNotice(message);
              load();
            }}
          />
        ))
      )}
    </div>
  );
};

export default DoubtsScreen;
