import React, { useEffect, useMemo, useRef, useState } from 'react';
import api from '../../services/api';
import { Alert, Button, apiError } from '../common/ui';
import QuestionImage from '../common/QuestionImage';
import { TextbookButton } from '../common/TextbookViewer';

// A timed mock test the student starts on their own: exam style (no answers
// until the end), question palette, countdown, auto-submit at zero; then the
// score, chapters to work on and a full review.

const LETTERS = ['A', 'B', 'C', 'D'];
const clock = (s: number) => `${Math.floor(Math.max(0, s) / 60)}:${String(Math.max(0, s) % 60).padStart(2, '0')}`;

const TEXT = {
  en: {
    q: 'Question', of: 'of', prev: '← Previous', next: 'Next →', submit: 'Submit test', confirm: (n: number) => `${n} question${n === 1 ? '' : 's'} not answered. Submit anyway?`,
    left: 'Time left', answered: 'answered', timeUp: 'Time is up: your test was submitted.', result: 'Your result', score: 'Score', time: 'Time taken',
    weak: 'Chapters to work on', review: 'Review', yours: 'Your answer', correct: 'Correct answer', notAnswered: 'Not answered', why: 'Why', back: 'Back to exam prep', submitting: 'Submitting…',
  },
  ta: {
    q: 'கேள்வி', of: '/', prev: '← முந்தைய', next: 'அடுத்து →', submit: 'தேர்வைச் சமர்ப்பி', confirm: (n: number) => `${n} கேள்விகளுக்கு விடையளிக்கவில்லை. சமர்ப்பிக்கவா?`,
    left: 'மீதி நேரம்', answered: 'விடையளித்தவை', timeUp: 'நேரம் முடிந்தது: தேர்வு சமர்ப்பிக்கப்பட்டது.', result: 'உங்கள் முடிவு', score: 'மதிப்பெண்', time: 'எடுத்த நேரம்',
    weak: 'கவனிக்க வேண்டிய பாடங்கள்', review: 'மறுபார்வை', yours: 'உங்கள் விடை', correct: 'சரியான விடை', notAnswered: 'விடையளிக்கவில்லை', why: 'ஏன்', back: 'தேர்வுத் தயாரிப்புக்குத் திரும்பு', submitting: 'சமர்ப்பிக்கிறது…',
  },
};

export interface MockSession {
  subject: { _id: string; nameEn: string; nameTa: string };
  minutes: number;
  chapterIds: string[];
  questions: { _id: string; question: { en: string; ta?: string }; options: { en: string[]; ta?: string[] }; order: number[]; imageUrl?: string | null }[];
}

const MockTest: React.FC<{ session: MockSession; ta: boolean; onExit: () => void }> = ({ session, ta, onExit }) => {
  const t = TEXT[ta ? 'ta' : 'en'];
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<(number | null)[]>(() => session.questions.map(() => null));
  const [startedAt] = useState(Date.now());
  const [now, setNow] = useState(Date.now());
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const submittedRef = useRef(false);
  const left = session.minutes * 60 - Math.floor((now - startedAt) / 1000);
  const pick = (v: any) => (ta && v?.ta ? v.ta : v?.en);
  const q = session.questions[index];
  const answeredCount = picked.filter((p) => p !== null).length;

  const submit = async (auto = false) => {
    if (submittedRef.current) return;
    if (!auto && answeredCount < session.questions.length && !window.confirm(t.confirm(session.questions.length - answeredCount))) return;
    submittedRef.current = true;
    setSubmitting(true);
    setTimedOut(auto);
    try {
      const res = await api.post('/student/mock-tests/submit', {
        subjectId: session.subject._id,
        chapterIds: session.chapterIds,
        minutes: session.minutes,
        timeTaken: Math.round((Date.now() - startedAt) / 1000),
        answers: session.questions.map((x, i) => ({ questionId: x._id, selectedAnswer: picked[i] === null ? -1 : x.order[picked[i]!] })),
      });
      setResult(res.data.data);
      window.scrollTo({ top: 0 });
    } catch (err) {
      submittedRef.current = false;
      setError(apiError(err));
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (result) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [result]);
  useEffect(() => {
    if (left <= 0 && !result) submit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left <= 0]);

  // Review texts come back in stored option order
  const reviewOption = (r: any, i: number) => (i >= 0 ? `${LETTERS[i]}. ${ta && r.options.ta?.[i] ? r.options.ta[i] : r.options.en[i]}` : t.notAnswered);
  const pctTone = useMemo(() => (result ? (result.percentage >= 75 ? 'from-emerald-500 to-teal-500' : result.percentage >= 35 ? 'from-amber-500 to-orange-500' : 'from-rose-500 to-red-600') : ''), [result]);

  if (result) {
    return (
      <div className="space-y-4">
        {timedOut && <Alert tone="info">{t.timeUp}</Alert>}
        <section className={`rounded-3xl p-5 sm:p-6 text-white bg-gradient-to-br ${pctTone}`}>
          <p className="text-sm opacity-90">{t.result} · {pick({ en: session.subject.nameEn, ta: session.subject.nameTa })}</p>
          <p className="mt-1 text-4xl font-bold">{result.percentage}%</p>
          <p className="mt-1 text-sm">
            {t.score}: {result.correct} / {result.total} · {t.time}: {clock(result.timeTaken)}
          </p>
        </section>
        {result.chapters.length > 0 && (
          <section className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-5">
            <p className="font-bold text-slate-800 dark:text-slate-100">{t.weak}</p>
            <ul className="mt-2 space-y-2">
              {result.chapters.map((c: any) => {
                const p = Math.round((c.correct / c.total) * 100);
                return (
                  <li key={c.number}>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-200">{c.number}. {pick({ en: c.nameEn, ta: c.nameTa })}</span>
                      <span className="font-semibold tabular-nums">{c.correct}/{c.total}</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-slate-100 dark:bg-slate-700">
                      <div className={`h-full rounded-full ${p >= 75 ? 'bg-emerald-500' : p >= 50 ? 'bg-amber-400' : 'bg-rose-500'}`} style={{ width: `${p}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{t.review}</h2>
        {result.review.map((r: any, i: number) => (
          <article key={r._id} className={`rounded-3xl bg-white dark:bg-slate-800 border-2 p-4 ${r.correct ? 'border-emerald-200 dark:border-emerald-800' : 'border-rose-200 dark:border-rose-800'}`}>
            <p className="font-semibold text-slate-800 dark:text-slate-100 whitespace-pre-line">{i + 1}. {pick(r.question)}</p>
            <QuestionImage src={r.imageUrl} />
            <div className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
              <p className={`px-3 py-2 rounded-xl ${r.correct ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300'}`}>
                {r.correct ? '✓' : '✗'} {t.yours}: {reviewOption(r, r.selected)}
              </p>
              {!r.correct && <p className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300">✓ {t.correct}: {reviewOption(r, r.correctAnswer)}</p>}
            </div>
            {pick(r.explanation) && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><b>💡 {t.why}:</b> {pick(r.explanation)}</p>}
            {!r.correct && <div className="mt-2"><TextbookButton textbook={r.textbook} /></div>}
          </article>
        ))}
        <Button onClick={onExit}>{t.back}</Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="sticky top-0 z-10 -mx-1 px-1 py-2 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur flex flex-wrap items-center justify-between gap-2">
        <p className="font-bold text-slate-800 dark:text-slate-100">
          {pick({ en: session.subject.nameEn, ta: session.subject.nameTa })} · {t.q} {index + 1} {t.of} {session.questions.length}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">{answeredCount} {t.answered}</span>
          <span role="timer" className={`px-3 py-1 rounded-full font-mono font-bold text-sm ${left <= 60 ? 'bg-rose-600 text-white animate-pulse' : left <= 300 ? 'bg-amber-100 text-amber-900' : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100'}`}>
            ⏱ {t.left} {clock(left)}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5" aria-label="Questions">
        {session.questions.map((_, i) => (
          <button key={i} type="button" onClick={() => setIndex(i)} aria-current={i === index}
            className={`w-8 h-8 rounded-lg text-xs font-bold ${i === index ? 'ring-2 ring-indigo-500' : ''} ${picked[i] !== null ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}`}>
            {i + 1}
          </button>
        ))}
      </div>

      <section className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold leading-relaxed text-slate-800 dark:text-slate-100 whitespace-pre-line">{pick(q.question)}</h2>
        <QuestionImage src={q.imageUrl} />
        <div className="mt-4 grid gap-2">
          {(ta && q.options.ta?.length ? q.options.ta : q.options.en).map((o, i) => (
            <button key={i} type="button" onClick={() => setPicked(picked.map((p, j) => (j === index ? (p === i ? null : i) : p)))} aria-pressed={picked[index] === i}
              className={`text-left px-4 py-3 rounded-2xl border-2 text-sm sm:text-base font-medium flex gap-3 ${picked[index] === i ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-900 dark:text-indigo-100' : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 text-slate-700 dark:text-slate-200'}`}>
              <span className="font-bold">{LETTERS[i]}.</span> {o}
            </button>
          ))}
        </div>
      </section>

      {error && <Alert>{error}</Alert>}
      <div className="flex flex-wrap justify-between gap-2">
        <Button variant="secondary" disabled={index === 0} onClick={() => setIndex(index - 1)}>{t.prev}</Button>
        <div className="flex gap-2">
          {index < session.questions.length - 1 && <Button variant="secondary" onClick={() => setIndex(index + 1)}>{t.next}</Button>}
          <Button disabled={submitting} onClick={() => submit(false)}>{submitting ? t.submitting : t.submit}</Button>
        </div>
      </div>
    </div>
  );
};

export default MockTest;
