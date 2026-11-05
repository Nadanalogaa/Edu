import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Panel, Button, Alert, Spinner, EmptyState, apiError } from '../common/ui';
import QuestionImage from '../common/QuestionImage';

// Self-practice: pick a subject and chapter (or NEET/JEE in 11th-12th), answer
// with instant feedback and explanations. Nothing is marked or reported.

const TEXT = {
  en: {
    title: 'Practice', subtitle: 'Practise any chapter as often as you like. These answers are not marked.', school: 'My subjects', neet: 'NEET / JEE',
    allChapters: 'All chapters', questions: 'questions', start: 'Start practice', none: 'No practice questions yet for your class.', choose: 'Choose a subject',
    question: 'Question', of: 'of', correct: 'Correct!', wrong: 'Not quite. The correct answer is', explanation: 'Explanation', next: 'Next question',
    finish: 'See my score', score: 'You got', outOf: 'out of', again: 'Practise again', change: 'Choose another chapter', noQuestions: 'No questions available here right now.',
    neetHint: 'Entrance exam practice for 11th and 12th.', pickTrack: 'Exam', pickSubject: 'Subject',
    level: 'Level', levels: { '': 'All levels', easy: 'Easy', medium: 'Medium', hard: 'Hard' } as Record<string, string>,
    howMany: 'How many questions', all: 'All', time: 'Time', timeTaken: 'Time taken', perQuestion: 'per question',
  },
  ta: {
    title: 'பயிற்சி', subtitle: 'எந்தப் பாடப்பகுதியையும் விரும்பும் அளவு பயிற்சி செய்யுங்கள். இவை மதிப்பெண்ணுக்கானவை அல்ல.', school: 'என் பாடங்கள்', neet: 'NEET / JEE',
    allChapters: 'எல்லா பாடப்பகுதிகளும்', questions: 'கேள்விகள்', start: 'பயிற்சியைத் தொடங்கு', none: 'உங்கள் வகுப்புக்கு இன்னும் பயிற்சிக் கேள்விகள் இல்லை.', choose: 'பாடத்தைத் தேர்ந்தெடுங்கள்',
    question: 'கேள்வி', of: '/', correct: 'சரி!', wrong: 'தவறு. சரியான விடை', explanation: 'விளக்கம்', next: 'அடுத்த கேள்வி',
    finish: 'என் மதிப்பெண்', score: 'நீங்கள் பெற்றது', outOf: 'இல்', again: 'மீண்டும் பயிற்சி', change: 'வேறு பாடப்பகுதி', noQuestions: 'இப்போது இங்கே கேள்விகள் இல்லை.',
    neetHint: '11, 12 ஆம் வகுப்புக்கான நுழைவுத் தேர்வுப் பயிற்சி.', pickTrack: 'தேர்வு', pickSubject: 'பாடம்',
    level: 'நிலை', levels: { '': 'எல்லா நிலைகளும்', easy: 'எளிது', medium: 'நடுத்தரம்', hard: 'கடினம்' } as Record<string, string>,
    howMany: 'எத்தனை கேள்விகள்', all: 'அனைத்தும்', time: 'நேரம்', timeTaken: 'எடுத்த நேரம்', perQuestion: 'ஒரு கேள்விக்கு',
  },
};

const LETTERS = ['A', 'B', 'C', 'D'];
const pick = (ta: boolean, v: { en: string; ta: string }) => (ta && v?.ta ? v.ta : v?.en);
const pickOpt = (ta: boolean, o: { en: string[]; ta: string[] }, i: number) => (ta && o.ta?.[i] ? o.ta[i] : o.en[i]);
const LEVELS = ['', 'easy', 'medium', 'hard'];
const COUNTS = [10, 20, 30];
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

const Practice: React.FC = () => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [options, setOptions] = useState<any>(null);
  const [mode, setMode] = useState<'school' | 'neet'>('school');
  const [subjectId, setSubjectId] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [track, setTrack] = useState<'NEET' | 'JEE'>('NEET');
  const [neetSubject, setNeetSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [count, setCount] = useState<number | 'all'>(10);
  const [session, setSession] = useState<{ questions: any[]; index: number; picked: (number | null)[]; startedAt: number; endedAt?: number } | null>(null);
  const [now, setNow] = useState(Date.now());
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get('/student/practice/options')
      .then((res) => {
        setOptions(res.data.data);
        setSubjectId(res.data.data.subjects[0]?.subjectId || '');
        setNeetSubject(res.data.data.neet?.[0]?.subject || '');
      })
      .catch((err) => setError(apiError(err)));
  }, []);

  // Ticking clock while a practice is running
  const running = !!session && !session.endedAt;
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [running]);

  const start = async () => {
    setLoading(true);
    setError('');
    try {
      const params = {
        ...(mode === 'neet' ? { track, subject: neetSubject } : { subjectId, chapterId: chapterId || undefined }),
        difficulty: difficulty || undefined,
        count,
      };
      const res = await api.get('/student/practice/questions', { params });
      if (!res.data.data.length) setError(t.noQuestions);
      else {
        setNow(Date.now());
        setSession({ questions: res.data.data, index: 0, picked: res.data.data.map(() => null), startedAt: Date.now() });
      }
    } catch (err) {
      setError(apiError(err));
    } finally {
      setLoading(false);
    }
  };

  if (!options) return error ? <Alert>{error}</Alert> : <Spinner />;

  if (session) {
    const done = session.index >= session.questions.length;
    const elapsed = Math.round(((session.endedAt || now) - session.startedAt) / 1000);
    if (done) {
      const score = session.questions.filter((q, i) => session.picked[i] === q.correctAnswer).length;
      return (
        <div className="max-w-xl mx-auto space-y-4">
          <Panel>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t.score}</p>
            <p className="text-5xl font-bold text-slate-800 dark:text-slate-100">
              {score}
              <span className="text-2xl text-slate-500">
                {' '}
                {t.outOf} {session.questions.length}
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              ⏱ {t.timeTaken}: <b>{clock(elapsed)}</b> ({clock(Math.round(elapsed / session.questions.length))} {t.perQuestion})
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button onClick={start} disabled={loading}>
                {t.again}
              </Button>
              <Button variant="secondary" onClick={() => setSession(null)}>
                {t.change}
              </Button>
            </div>
          </Panel>
        </div>
      );
    }

    const q = session.questions[session.index];
    const picked = session.picked[session.index];
    const answered = picked !== null;
    const choose = (i: number) => {
      if (answered) return;
      const next = [...session.picked];
      next[session.index] = i;
      setSession({ ...session, picked: next });
    };

    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <Panel>
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t.question} {session.index + 1} {t.of} {session.questions.length}
              {q.topic && ` · ${q.topic}`}
              {q.difficulty && ` · ${t.levels[q.difficulty] || q.difficulty}`}
            </p>
            <span className="flex-shrink-0 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-sm font-mono text-slate-700 dark:text-slate-200" aria-label={t.time}>
              ⏱ {clock(elapsed)}
            </span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
            <div className="h-full bg-indigo-500" style={{ width: `${(session.index / session.questions.length) * 100}%` }} />
          </div>
          <h2 className="mt-2 text-lg font-semibold text-slate-800 dark:text-slate-100 whitespace-pre-line">{pick(ta, q.question)}</h2>
          <QuestionImage src={q.imageUrl} />
          <div className="mt-4 space-y-2" role="radiogroup">
            {q.options.en.map((_: string, i: number) => {
              const isAnswer = i === q.correctAnswer;
              const isPicked = i === picked;
              const tone = !answered
                ? 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                : isAnswer
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                  : isPicked
                    ? 'border-red-400 bg-red-50 dark:bg-red-900/20'
                    : 'border-slate-200 dark:border-slate-700 opacity-60';
              return (
                <button
                  key={i}
                  type="button"
                  role="radio"
                  aria-checked={isPicked}
                  disabled={answered}
                  onClick={() => choose(i)}
                  className={`w-full flex items-start gap-3 text-left px-4 py-3 rounded-xl border-2 transition-colors ${tone}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {LETTERS[i]}
                  </span>
                  <span className="pt-0.5 text-slate-800 dark:text-slate-100">
                    {pickOpt(ta, q.options, i)}
                    {answered && isAnswer && ' ✓'}
                  </span>
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="mt-4 space-y-3" role="status">
              {picked === q.correctAnswer ? (
                <p className="font-semibold text-emerald-700 dark:text-emerald-400">✓ {t.correct}</p>
              ) : (
                <p className="font-semibold text-red-600 dark:text-red-400">
                  ✗ {t.wrong} {LETTERS[q.correctAnswer]}.
                </p>
              )}
              {pick(ta, q.explanation) && (
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <b>{t.explanation}:</b> {pick(ta, q.explanation)}
                </p>
              )}
              <div className="flex justify-end">
                <Button
                  onClick={() =>
                    setSession({ ...session, index: session.index + 1, endedAt: session.index === session.questions.length - 1 ? Date.now() : undefined })
                  }
                >
                  {session.index === session.questions.length - 1 ? t.finish : t.next}
                </Button>
              </div>
            </div>
          )}
        </Panel>
      </div>
    );
  }

  const subject = options.subjects.find((s: any) => s.subjectId === subjectId);
  const neetRow = options.neet?.find((s: any) => s.subject === neetSubject);
  // Questions available for the chosen level
  const available = (row: any) => (difficulty ? row?.byLevel?.[difficulty] ?? 0 : row?.questions ?? 0);
  const chosenRow = chapterId ? subject?.chapters.find((c: any) => c.chapterId === chapterId) : subject;
  const pillClass = (on: boolean) =>
    `px-4 py-1.5 rounded-full text-sm font-medium border-2 ${on ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'}`;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{t.title}</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}

      {options.neet && (
        <div className="flex gap-1 p-1 bg-slate-200/60 dark:bg-slate-800 rounded-lg w-fit" role="tablist">
          {(['school', 'neet'] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 text-sm rounded-md font-medium ${mode === m ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {m === 'school' ? t.school : t.neet}
            </button>
          ))}
        </div>
      )}

      <Panel>
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">{t.level}</legend>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((level) => (
              <button key={level || 'all'} type="button" aria-pressed={difficulty === level} onClick={() => setDifficulty(level)} className={pillClass(difficulty === level)}>
                {t.levels[level]}
                {mode === 'school' && subject && <span className="ml-1 text-xs opacity-70">({level ? subject.byLevel?.[level] ?? 0 : subject.questions})</span>}
              </button>
            ))}
          </div>
        </fieldset>
      </Panel>

      {mode === 'school' ? (
        options.subjects.length === 0 ? (
          <Panel>
            <EmptyState>{t.none}</EmptyState>
          </Panel>
        ) : (
          <Panel>
            <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">{t.choose}</p>
            <div className="flex flex-wrap gap-2">
              {options.subjects.map((s: any) => (
                <button
                  key={s.subjectId}
                  type="button"
                  onClick={() => {
                    setSubjectId(s.subjectId);
                    setChapterId('');
                  }}
                  aria-pressed={s.subjectId === subjectId}
                  className={`px-4 py-2 rounded-xl text-sm font-medium border-2 ${s.subjectId === subjectId ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'}`}
                >
                  {ta && s.nameTa ? s.nameTa : s.nameEn}
                </button>
              ))}
            </div>
            {subject && (
              <ul className="mt-4 space-y-1">
                {[{ chapterId: '', number: null, nameEn: t.allChapters, nameTa: t.allChapters, questions: subject.questions, byLevel: subject.byLevel }, ...subject.chapters].map((c: any) => (
                  <li key={c.chapterId || 'all'}>
                    <label className={`flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer ${available(c) ? '' : 'opacity-50'} ${chapterId === c.chapterId ? 'bg-indigo-50 dark:bg-indigo-500/20' : 'hover:bg-slate-50 dark:hover:bg-slate-700/40'}`}>
                      <span className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <input type="radio" name="chapter" disabled={!available(c)} checked={chapterId === c.chapterId} onChange={() => setChapterId(c.chapterId)} />
                        {c.number ? `${c.number}. ` : ''}
                        {ta && c.nameTa ? c.nameTa : c.nameEn}
                      </span>
                      <span className="text-xs text-slate-500 whitespace-nowrap">
                        {available(c)} {t.questions}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
            <fieldset className="mt-4">
              <legend className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">{t.howMany}</legend>
              <div className="flex flex-wrap gap-2">
                {COUNTS.filter((n) => n < available(chosenRow)).map((n) => (
                  <button key={n} type="button" aria-pressed={count === n} onClick={() => setCount(n)} className={pillClass(count === n)}>
                    {n}
                  </button>
                ))}
                <button
                  type="button"
                  aria-pressed={count === 'all' || available(chosenRow) <= Number(count)}
                  onClick={() => setCount('all')}
                  className={pillClass(count === 'all' || available(chosenRow) <= Number(count))}
                >
                  {t.all} ({available(chosenRow)})
                </button>
              </div>
            </fieldset>
            <div className="mt-4">
              <Button disabled={loading || !subjectId || !available(chosenRow)} onClick={start}>
                {t.start}
              </Button>
            </div>
          </Panel>
        )
      ) : (
        <Panel>
          <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{t.neetHint}</p>
          <div className="flex flex-wrap gap-6">
            <fieldset>
              <legend className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">{t.pickTrack}</legend>
              <div className="flex gap-2">
                {(['NEET', 'JEE'] as const).map((tr) => (
                  <button key={tr} type="button" aria-pressed={track === tr} onClick={() => setTrack(tr)} className={`px-4 py-2 rounded-xl text-sm font-medium border-2 ${track === tr ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'}`}>
                    {tr}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-300">{t.pickSubject}</legend>
              <div className="flex flex-wrap gap-2">
                {options.neet.map((s: any) => (
                  <button key={s.subject} type="button" aria-pressed={neetSubject === s.subject} onClick={() => setNeetSubject(s.subject)} className={`px-4 py-2 rounded-xl text-sm font-medium border-2 ${neetSubject === s.subject ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'}`}>
                    {s.subject} <span className="text-xs text-slate-500">({track === 'NEET' ? s.neet : s.jee})</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="mt-4">
            <Button disabled={loading || !neetRow || !(track === 'NEET' ? neetRow.neet : neetRow.jee)} onClick={start}>
              {t.start}
            </Button>
          </div>
        </Panel>
      )}
    </div>
  );
};

export default Practice;
