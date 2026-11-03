import React, { useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Panel, Button, Alert, Spinner, EmptyState, SelectInput, apiError, formatDate } from '../common/ui';

// Wrong answers from the student's submitted tests, for revision.

const TEXT = {
  en: {
    title: 'Mistake Book', subtitle: 'Questions you got wrong in your tests, with the right answers.', allSubjects: 'All subjects', toReview: 'To revise',
    reviewed: 'Understood', all: 'All', none: 'No mistakes here. Keep it up!', yours: 'Your answer', correct: 'Correct answer', explanation: 'Explanation',
    markDone: 'I understand it now', more: 'Show more',
  },
  ta: {
    title: 'தவறுப் புத்தகம்', subtitle: 'தேர்வுகளில் தவறாகப் பதிலளித்த கேள்விகள், சரியான விடைகளுடன்.', allSubjects: 'எல்லா பாடங்களும்', toReview: 'திருப்புதலுக்கு',
    reviewed: 'புரிந்தது', all: 'அனைத்தும்', none: 'இங்கே தவறுகள் இல்லை. தொடருங்கள்!', yours: 'உங்கள் விடை', correct: 'சரியான விடை', explanation: 'விளக்கம்',
    markDone: 'இப்போது புரிந்தது', more: 'மேலும் காட்டு',
  },
};

const LETTERS = ['A', 'B', 'C', 'D'];

const Mistakes: React.FC = () => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [items, setItems] = useState<any[] | null>(null);
  const [status, setStatus] = useState<'open' | 'done' | 'all'>('open');
  const [subject, setSubject] = useState('');
  const [limit, setLimit] = useState(30);
  const [error, setError] = useState('');

  useEffect(() => {
    setItems(null);
    api
      .get('/student/mistakes', { params: { limit, isReviewed: status === 'all' ? undefined : String(status === 'done') } })
      .then((res) => setItems(res.data.data.filter((m: any) => m.questionId)))
      .catch((err) => setError(apiError(err)));
  }, [status, limit]);

  const subjects = useMemo(() => [...new Set((items || []).map((m) => m.questionId.subject))].sort(), [items]);
  const shown = (items || []).filter((m) => !subject || m.questionId.subject === subject);
  const text = (v: { en: string; ta: string }) => (ta && v?.ta ? v.ta : v?.en);
  const option = (q: any, i: number) => (i >= 0 ? `${LETTERS[i]}. ${ta && q.options.ta?.[i] ? q.options.ta[i] : q.options.en[i]}` : '—');

  const markDone = async (id: string) => {
    try {
      await api.put(`/student/mistakes/${id}/review`, {});
      setItems((list) => (list || []).filter((m) => status !== 'open' || m._id !== id).map((m) => (m._id === id ? { ...m, isReviewed: true } : m)));
    } catch (err) {
      setError(apiError(err));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{t.title}</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      <div className="flex flex-wrap gap-2">
        <SelectInput aria-label="Status" className="!w-auto" value={status} onChange={(e) => setStatus(e.target.value as any)}>
          <option value="open">{t.toReview}</option>
          <option value="done">{t.reviewed}</option>
          <option value="all">{t.all}</option>
        </SelectInput>
        <SelectInput aria-label="Subject" className="!w-auto" value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">{t.allSubjects}</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </SelectInput>
      </div>

      {!items ? (
        <Spinner />
      ) : shown.length === 0 ? (
        <Panel>
          <EmptyState>{t.none}</EmptyState>
        </Panel>
      ) : (
        <>
          {shown.map((m) => {
            const q = m.questionId;
            return (
              <Panel key={m._id}>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {q.subject}
                  {q.topic && q.topic !== q.subject && ` · ${q.topic}`} · {formatDate(m.createdAt)}
                </p>
                <p className="mt-1 font-medium text-slate-800 dark:text-slate-100 whitespace-pre-line">{text(q.question)}</p>
                <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                  <p className="px-3 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300">
                    ✗ {t.yours}: {option(q, m.selectedAnswer)}
                  </p>
                  <p className="px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300">
                    ✓ {t.correct}: {option(q, q.correctAnswer)}
                  </p>
                </div>
                {text(q.explanation) && (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    <b>{t.explanation}:</b> {text(q.explanation)}
                  </p>
                )}
                {!m.isReviewed && (
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="secondary" onClick={() => markDone(m._id)}>
                      {t.markDone}
                    </Button>
                  </div>
                )}
              </Panel>
            );
          })}
          {items.length >= limit && (
            <div className="flex justify-center">
              <Button variant="secondary" onClick={() => setLimit(limit + 30)}>
                {t.more}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Mistakes;
