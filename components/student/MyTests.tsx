import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Panel, Button, Badge, Alert, Spinner, EmptyState, apiError } from '../common/ui';
import { ClockIcon, CheckCircleIcon, XCircleIcon } from '../icons';
import QuestionImage from '../common/QuestionImage';

// The student's class tests: list → take (timed, answers saved as they go) →
// result → review with correct answers. English/Tamil follows the app language.

const TEXT = {
  en: {
    title: 'My Tests', subtitle: 'Tests your school has given your class', none: 'No tests yet. Your teachers will publish them here.',
    available: 'Ready to start', inProgress: 'Continue', upcoming: 'Opens soon', completed: 'Submitted', missed: 'Missed',
    start: 'Start test', resume: 'Continue test', view: 'View answers', questions: 'questions', marks: 'marks', minutes: 'min',
    opens: 'Opens', closes: 'Closes', question: 'Question', of: 'of', previous: 'Previous', next: 'Next', submit: 'Submit test',
    confirmSubmit: (n: number) => (n ? `You have not answered ${n} question(s). Submit anyway?` : 'Submit your answers? You cannot change them after this.'),
    timeLeft: 'Time left', saved: 'Answers saved', saving: 'Saving…', offline: 'Not saved yet — check your internet', answered: 'answered',
    resultTitle: 'Test submitted', score: 'Your score', correct: 'Correct', wrong: 'Wrong', skipped: 'Skipped', back: 'Back to my tests',
    yourAnswer: 'Your answer', correctAnswer: 'Correct answer', notAnswered: 'Not answered', explanation: 'Explanation', timeUp: 'Time is up. Submitting your answers…',
    beforeStart: (q: number, m: number) => `${q} questions · ${m} minutes. The timer starts when you press Start and keeps running if you close the app.`,
  },
  ta: {
    title: 'என் தேர்வுகள்', subtitle: 'உங்கள் வகுப்புக்கு பள்ளி வழங்கிய தேர்வுகள்', none: 'இன்னும் தேர்வுகள் இல்லை. உங்கள் ஆசிரியர்கள் இங்கே வெளியிடுவார்கள்.',
    available: 'தொடங்கலாம்', inProgress: 'தொடரவும்', upcoming: 'விரைவில் திறக்கும்', completed: 'சமர்ப்பிக்கப்பட்டது', missed: 'தவறவிட்டது',
    start: 'தேர்வைத் தொடங்கு', resume: 'தேர்வைத் தொடர்', view: 'விடைகளைப் பார்', questions: 'கேள்விகள்', marks: 'மதிப்பெண்கள்', minutes: 'நிமி',
    opens: 'திறக்கும்', closes: 'மூடும்', question: 'கேள்வி', of: '/', previous: 'முந்தையது', next: 'அடுத்தது', submit: 'தேர்வைச் சமர்ப்பி',
    confirmSubmit: (n: number) => (n ? `${n} கேள்விகளுக்கு பதிலளிக்கவில்லை. இருந்தாலும் சமர்ப்பிக்கவா?` : 'விடைகளைச் சமர்ப்பிக்கவா? பின்னர் மாற்ற முடியாது.'),
    timeLeft: 'மீதமுள்ள நேரம்', saved: 'விடைகள் சேமிக்கப்பட்டன', saving: 'சேமிக்கிறது…', offline: 'இன்னும் சேமிக்கப்படவில்லை — இணையத்தைச் சரிபார்க்கவும்', answered: 'பதிலளித்தவை',
    resultTitle: 'தேர்வு சமர்ப்பிக்கப்பட்டது', score: 'உங்கள் மதிப்பெண்', correct: 'சரி', wrong: 'தவறு', skipped: 'விடுபட்டவை', back: 'என் தேர்வுகளுக்குத் திரும்பு',
    yourAnswer: 'உங்கள் விடை', correctAnswer: 'சரியான விடை', notAnswered: 'பதிலளிக்கவில்லை', explanation: 'விளக்கம்', timeUp: 'நேரம் முடிந்தது. விடைகள் சமர்ப்பிக்கப்படுகின்றன…',
    beforeStart: (q: number, m: number) => `${q} கேள்விகள் · ${m} நிமிடங்கள். தொடங்கு அழுத்தியதும் நேரம் ஓடத் தொடங்கும்; செயலியை மூடினாலும் நிற்காது.`,
  },
};

const LETTERS = ['A', 'B', 'C', 'D'];

interface TestItem {
  _id: string;
  title: string;
  subjectName: string;
  subjectNameTa?: string;
  questionCount: number;
  totalMarks: number;
  duration: number;
  startTime: string | null;
  endTime: string | null;
  status: 'available' | 'in-progress' | 'upcoming' | 'completed' | 'missed';
  attempt?: { _id: string; percentage?: number; marksObtained?: number };
}

interface ExamQuestion {
  _id: string;
  question: { en: string; ta: string };
  options: { en: string[]; ta: string[] };
  marks: number;
  imageUrl?: string | null;
}

/** Tamil text when the app is in Tamil and the question has it. */
const pickText = (lang: string, value: { en: string; ta: string }) => (lang === 'ta' && value.ta ? value.ta : value.en);
const pickOption = (lang: string, options: { en: string[]; ta: string[] }, i: number) => (lang === 'ta' && options.ta?.[i] ? options.ta[i] : options.en[i]);

const when = (iso: string | null, lang: string) =>
  iso ? new Date(iso).toLocaleString(lang === 'ta' ? 'ta-IN' : 'en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) : '';

const MyTests: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXT[language === 'ta' ? 'ta' : 'en'];
  const [tests, setTests] = useState<TestItem[] | null>(null);
  const [error, setError] = useState('');
  const [taking, setTaking] = useState<any>(null);
  const [reviewId, setReviewId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await api.get('/student/assessments');
      setTests(res.data.data);
    } catch (err) {
      setError(apiError(err, 'Could not load your tests'));
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const start = async (test: TestItem) => {
    if (test.status === 'available' && !window.confirm(t.beforeStart(test.questionCount, test.duration))) return;
    setError('');
    try {
      const res = await api.post(`/student/assessments/${test._id}/start`);
      setTaking(res.data.data);
    } catch (err: any) {
      // Already submitted (e.g. time ran out): show the answers instead
      if (err.response?.status === 409 && err.response.data.attemptId) {
        setReviewId(err.response.data.attemptId);
        load();
      } else setError(apiError(err));
    }
  };

  if (taking) {
    return (
      <TakeTest
        data={taking}
        lang={language}
        onFinished={(attemptId) => {
          setTaking(null);
          setReviewId(attemptId);
          load();
        }}
      />
    );
  }
  if (reviewId) return <Review attemptId={reviewId} lang={language} onBack={() => setReviewId(null)} />;

  const statusBadge = (s: TestItem['status']) =>
    ({
      available: <Badge tone="green">{t.available}</Badge>,
      'in-progress': <Badge tone="amber">{t.inProgress}</Badge>,
      upcoming: <Badge tone="indigo">{t.upcoming}</Badge>,
      completed: <Badge tone="slate">{t.completed}</Badge>,
      missed: <Badge tone="red">{t.missed}</Badge>,
    })[s];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{t.title}</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}
      {!tests ? (
        <Spinner />
      ) : tests.length === 0 ? (
        <Panel>
          <EmptyState>{t.none}</EmptyState>
        </Panel>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {tests.map((test) => (
            <div key={test._id} className="flex flex-col bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                  {language === 'ta' && test.subjectNameTa ? test.subjectNameTa : test.subjectName}
                </p>
                {statusBadge(test.status)}
              </div>
              <h2 className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-100">{test.title}</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {test.questionCount} {t.questions} · {test.totalMarks} {t.marks} · {test.duration} {t.minutes}
              </p>
              {(test.status === 'upcoming' || test.status === 'available') && (test.startTime || test.endTime) && (
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {test.status === 'upcoming' && test.startTime ? `${t.opens}: ${when(test.startTime, language)}` : test.endTime ? `${t.closes}: ${when(test.endTime, language)}` : ''}
                </p>
              )}
              {test.status === 'completed' && test.attempt?.percentage !== undefined && (
                <p className="mt-2 text-2xl font-bold text-slate-800 dark:text-slate-100">{test.attempt.percentage}%</p>
              )}
              <div className="mt-auto pt-4">
                {test.status === 'available' && (
                  <Button className="w-full" onClick={() => start(test)}>
                    {t.start}
                  </Button>
                )}
                {test.status === 'in-progress' && (
                  <Button className="w-full" onClick={() => start(test)}>
                    {t.resume}
                  </Button>
                )}
                {test.status === 'completed' && test.attempt && (
                  <Button variant="secondary" className="w-full" onClick={() => setReviewId(test.attempt!._id)}>
                    {t.view}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TakeTest: React.FC<{ data: any; lang: string; onFinished: (attemptId: string) => void }> = ({ data, lang, onFinished }) => {
  const t = TEXT[lang === 'ta' ? 'ta' : 'en'];
  const questions: ExamQuestion[] = data.test.questions;
  const attemptId: string = data.attempt._id;
  const [answers, setAnswers] = useState<Record<string, number>>(() =>
    Object.fromEntries((data.attempt.answers || []).filter((a: any) => a.selectedAnswer >= 0).map((a: any) => [a.questionId, a.selectedAnswer]))
  );
  const [index, setIndex] = useState(0);
  const [saveState, setSaveState] = useState<'saved' | 'saving' | 'offline'>('saved');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  // Server and phone clocks can differ: keep the server's time
  const clockOffset = useMemo(() => new Date(data.attempt.serverTime).getTime() - Date.now(), [data]);
  const endsAt = new Date(data.attempt.endsAt).getTime();
  const [remaining, setRemaining] = useState(() => Math.max(0, endsAt - (Date.now() + clockOffset)));
  const submittedRef = useRef(false);

  const payload = useCallback(
    () => questions.map((q) => ({ questionId: q._id, selectedAnswer: answers[q._id] ?? -1 })),
    [answers, questions]
  );

  // Save shortly after each change
  useEffect(() => {
    if (submittedRef.current) return;
    setSaveState('saving');
    const timer = setTimeout(() => {
      api
        .put(`/student/attempts/${attemptId}/progress`, { answers: payload() })
        .then(() => setSaveState('saved'))
        .catch(() => setSaveState('offline'));
    }, 600);
    return () => clearTimeout(timer);
  }, [answers, attemptId, payload]);

  const submit = useCallback(
    async (auto = false) => {
      if (submittedRef.current) return;
      const unanswered = questions.length - Object.keys(answers).length;
      if (!auto && !window.confirm(t.confirmSubmit(unanswered))) return;
      submittedRef.current = true;
      setSubmitting(true);
      setError('');
      try {
        await api.post(`/student/attempts/${attemptId}/submit`, { answers: payload() });
        onFinished(attemptId);
      } catch (err: any) {
        if (err.response?.status === 409) return onFinished(attemptId);
        submittedRef.current = false;
        setSubmitting(false);
        setError(apiError(err, 'Could not submit. Check your internet and try again.'));
      }
    },
    [answers, attemptId, payload, questions.length, onFinished, t]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const left = Math.max(0, endsAt - (Date.now() + clockOffset));
      setRemaining(left);
      if (left === 0) submit(true);
    }, 1000);
    return () => clearInterval(timer);
  }, [endsAt, clockOffset, submit]);

  const q = questions[index];
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <div className="sticky top-14 z-10 flex items-center justify-between gap-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-3 shadow-sm">
        <div className="min-w-0">
          <p className="font-semibold text-slate-800 dark:text-slate-100 truncate">{data.test.title}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {answeredCount} / {questions.length} {t.answered} ·{' '}
            {saveState === 'saved' ? t.saved : saveState === 'saving' ? t.saving : <span className="text-red-600">{t.offline}</span>}
          </p>
        </div>
        <div
          role="timer"
          aria-label={t.timeLeft}
          className={`flex items-center gap-1.5 font-mono text-lg font-bold ${remaining < 60000 ? 'text-red-600' : remaining < 300000 ? 'text-amber-600' : 'text-slate-800 dark:text-slate-100'}`}
        >
          <ClockIcon className="w-5 h-5" />
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </div>

      {remaining === 0 && <Alert tone="info">{t.timeUp}</Alert>}
      {error && <Alert>{error}</Alert>}

      <Panel>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t.question} {index + 1} {t.of} {questions.length} · {q.marks} {t.marks}
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-800 dark:text-slate-100 whitespace-pre-line">{pickText(lang, q.question)}</h2>
        <QuestionImage src={q.imageUrl} />
        <div className="mt-4 space-y-2" role="radiogroup" aria-label={`${t.question} ${index + 1}`}>
          {q.options.en.map((_, i) => {
            const selected = answers[q._id] === i;
            return (
              <button
                key={i}
                type="button"
                role="radio"
                aria-checked={selected}
                disabled={submitting}
                onClick={() => setAnswers({ ...answers, [q._id]: i })}
                className={`w-full flex items-start gap-3 text-left px-4 py-3 rounded-xl border-2 transition-colors ${
                  selected
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-500/20'
                    : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                }`}
              >
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${selected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                  {LETTERS[i]}
                </span>
                <span className="pt-0.5 text-slate-800 dark:text-slate-100">{pickOption(lang, q.options, i)}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-5 flex items-center justify-between gap-2">
          <Button variant="secondary" disabled={index === 0} onClick={() => setIndex(index - 1)}>
            {t.previous}
          </Button>
          {index < questions.length - 1 ? (
            <Button onClick={() => setIndex(index + 1)}>{t.next}</Button>
          ) : (
            <Button disabled={submitting} onClick={() => submit()}>
              {t.submit}
            </Button>
          )}
        </div>
      </Panel>

      <Panel>
        <div className="flex flex-wrap gap-2" aria-label="Questions">
          {questions.map((qq, i) => (
            <button
              key={qq._id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.question} ${i + 1}${answers[qq._id] !== undefined ? ` (${t.answered})` : ''}`}
              aria-current={i === index ? 'step' : undefined}
              className={`w-9 h-9 rounded-lg text-sm font-semibold ${
                i === index
                  ? 'ring-2 ring-indigo-600 ring-offset-1 dark:ring-offset-slate-900'
                  : ''
              } ${answers[qq._id] !== undefined ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Button disabled={submitting} onClick={() => submit()}>
            {submitting ? '…' : t.submit}
          </Button>
        </div>
      </Panel>
    </div>
  );
};

const Review: React.FC<{ attemptId: string; lang: string; onBack: () => void }> = ({ attemptId, lang, onBack }) => {
  const t = TEXT[lang === 'ta' ? 'ta' : 'en'];
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get(`/student/attempts/${attemptId}/review`)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(apiError(err)));
  }, [attemptId]);

  if (error)
    return (
      <div className="space-y-3">
        <Alert>{error}</Alert>
        <Button variant="secondary" onClick={onBack}>
          {t.back}
        </Button>
      </div>
    );
  if (!data) return <Spinner />;
  const a = data.attempt;

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <Panel>
        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{t.resultTitle}</p>
        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">{data.test?.title}</h1>
        <div className="mt-4 flex flex-wrap items-end gap-6">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t.score}</p>
            <p className="text-4xl font-bold text-slate-800 dark:text-slate-100">
              {a.marksObtained}
              <span className="text-xl text-slate-500"> / {a.totalMarks}</span>
            </p>
            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{a.percentage}%</p>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="text-emerald-600">✓ {t.correct}: {a.correctAnswers}</span>
            <span className="text-red-600">✗ {t.wrong}: {a.wrongAnswers}</span>
            <span className="text-slate-500">– {t.skipped}: {a.skippedAnswers}</span>
          </div>
        </div>
        <Button variant="secondary" className="mt-4" onClick={onBack}>
          {t.back}
        </Button>
      </Panel>

      {data.questions.map((q: any, i: number) => (
        <Panel key={q._id}>
          <div className="flex items-start gap-2">
            {q.isCorrect ? <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" /> : <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
            <p className="font-medium text-slate-800 dark:text-slate-100 whitespace-pre-line">
              {i + 1}. {pickText(lang, q.question)}
            </p>
          </div>
          <QuestionImage src={q.imageUrl} />
          <ul className="mt-3 space-y-1 text-sm">
            {q.options.en.map((_: string, oi: number) => {
              const isAnswer = oi === q.correctAnswer;
              const isMine = oi === q.selectedAnswer;
              return (
                <li
                  key={oi}
                  className={`px-3 py-2 rounded-lg ${
                    isAnswer ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 font-medium' : isMine ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {LETTERS[oi]}. {pickOption(lang, q.options, oi)}
                  {isAnswer && ` — ${t.correctAnswer}`}
                  {isMine && !isAnswer && ` — ${t.yourAnswer}`}
                </li>
              );
            })}
          </ul>
          {q.selectedAnswer < 0 && <p className="mt-2 text-xs text-slate-500">{t.notAnswered}</p>}
          {(q.explanation?.en || q.explanation?.ta) && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <b>{t.explanation}:</b> {pickText(lang, q.explanation)}
            </p>
          )}
        </Panel>
      ))}
    </div>
  );
};

export default MyTests;
