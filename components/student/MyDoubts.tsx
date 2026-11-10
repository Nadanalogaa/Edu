import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Alert, Spinner, apiError, formatDate } from '../common/ui';
import QuestionImage from '../common/QuestionImage';
import { TextbookButton } from '../common/TextbookViewer';

// The questions a student asked their teacher about, with the teacher's answer
// (newly answered ones first). Opening the page marks the answers as seen.

const TEXT = {
  en: {
    title: 'My doubts', subtitle: 'Questions you asked your teacher about. Tap "🙋 Ask my teacher" under any question in practice, tests or the Mistake Book.',
    none: 'No doubts yet. When something is not clear, ask your teacher from the question itself.',
    waiting: '⏳ Waiting for your teacher', answered: '✓ Answered', isNew: 'New', yourNote: 'You asked', teacher: 'Teacher', correct: 'Correct answer',
  },
  ta: {
    title: 'என் சந்தேகங்கள்', subtitle: 'ஆசிரியரிடம் கேட்ட கேள்விகள். பயிற்சி, தேர்வு அல்லது தவறுப் புத்தகத்தில் எந்தக் கேள்விக்குக் கீழும் "🙋 ஆசிரியரிடம் கேள்" ஐத் தட்டலாம்.',
    none: 'இன்னும் சந்தேகங்கள் இல்லை. புரியாதபோது அந்தக் கேள்வியிலிருந்தே ஆசிரியரிடம் கேளுங்கள்.',
    waiting: '⏳ ஆசிரியரின் பதிலுக்காகக் காத்திருக்கிறது', answered: '✓ பதில் வந்தது', isNew: 'புதியது', yourNote: 'நீங்கள் கேட்டது', teacher: 'ஆசிரியர்', correct: 'சரியான விடை',
  },
};
const LETTERS = ['A', 'B', 'C', 'D'];

const MyDoubts: React.FC = () => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [items, setItems] = useState<any[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/student/doubts')
      .then((res) => setItems(res.data.data))
      .catch((err) => setError(apiError(err)));
  }, []);

  const pick = (v: any) => (ta && v?.ta ? v.ta : v?.en);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">🙋 {t.title}</h1>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>
      {error && <Alert>{error}</Alert>}
      {!items ? (
        <Spinner />
      ) : items.length === 0 ? (
        <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-10 text-center text-slate-500 dark:text-slate-400">{t.none}</div>
      ) : (
        items.map((d) => {
          const q = d.question;
          return (
            <article key={d._id} className={`rounded-3xl bg-white dark:bg-slate-800 border p-4 sm:p-5 ${d.isNew ? 'border-violet-400 ring-2 ring-violet-200 dark:ring-violet-500/30' : 'border-slate-200 dark:border-slate-700'}`}>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className={`px-2 py-0.5 rounded-full font-semibold ${d.status === 'answered' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300'}`}>
                  {d.status === 'answered' ? t.answered : t.waiting}
                </span>
                {d.isNew && <span className="px-2 py-0.5 rounded-full font-bold bg-violet-600 text-white">{t.isNew}</span>}
                <span className="text-slate-500 dark:text-slate-400">
                  {ta && q.subjectTa ? q.subjectTa : q.subject}
                  {q.chapter && ` · ${q.chapter.number}. ${pick(q.chapter)}`} · {formatDate(d.askedAt)}
                </span>
              </div>
              <p className="mt-2 font-semibold text-slate-800 dark:text-slate-100 whitespace-pre-line">{pick(q.question)}</p>
              <QuestionImage src={q.imageUrl} />
              <p className="mt-2 text-sm px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300">
                ✓ {t.correct}: {LETTERS[q.correctAnswer]}. {ta && q.options.ta?.[q.correctAnswer] ? q.options.ta[q.correctAnswer] : q.options.en[q.correctAnswer]}
              </p>
              {d.message && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  <b>{t.yourNote}:</b> “{d.message}”
                </p>
              )}
              {d.reply && (
                <div className="mt-3 rounded-2xl bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/30 px-4 py-3">
                  <p className="text-xs font-semibold text-violet-800 dark:text-violet-200">
                    👩‍🏫 {d.teacherName || t.teacher} · {formatDate(d.repliedAt)}
                  </p>
                  <p className="mt-1 text-sm text-slate-800 dark:text-slate-100 whitespace-pre-line">{d.reply}</p>
                </div>
              )}
              <div className="mt-3">
                <TextbookButton textbook={q.textbook} subject={ta && q.subjectTa ? q.subjectTa : q.subject} />
              </div>
            </article>
          );
        })
      )}
    </div>
  );
};

export default MyDoubts;
