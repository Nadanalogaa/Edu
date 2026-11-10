import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/ui';
import QuestionImage from '../common/QuestionImage';
import { TextbookButton } from '../common/TextbookViewer';
import AskTeacher from '../common/AskTeacher';
import ExplainAnother from '../common/ExplainAnother';
import ReadAloud, { spokenQuestion } from '../common/ReadAloud';
import { queueAnswer } from '../../utils/offline';
import LiquidTimer from './LiquidTimer';

// One practice session: a question at a time with instant feedback, the
// explanation and the textbook page to study. Used by Practice and by
// "Practise my mistakes" in the Mistake Book. Answers are saved so wrong ones
// go to the Mistake Book and right ones fix earlier mistakes.

const TEXT = {
  en: {
    question: 'Question', of: 'of', exit: 'Exit', correct: 'Correct!', wrong: 'Not quite', rightAnswer: 'The correct answer is', explanation: 'Why',
    next: 'Next question', finish: 'See my score', time: 'Time', notSure: 'Not sure? Study it first in the textbook', study: 'Study this in the textbook',
    addedToMistakes: 'Saved to your Mistake Book so you can revise it.', fixedMistake: 'Fixed! Removed from your Mistake Book.',
    isNew: 'New', retry: 'Try again', keys: 'Tip: press 1–4 to answer and Enter for the next question.',
    score: 'Your score', outOf: 'out of', timeTaken: 'Time taken', perQuestion: 'per question', fixed: 'You fixed {n} earlier mistakes!',
    again: 'Practise again', change: 'Choose another chapter', toMistakes: 'Open Mistake Book', reviewWrong: 'Questions to revise', yourAnswer: 'Your answer',
    great: 'Excellent work!', good: 'Good effort, keep going!', keepTrying: 'Keep practising, you will get there!', allRight: 'You answered every question correctly.',
    levels: { easy: 'Easy', medium: 'Medium', hard: 'Hard' } as Record<string, string>,
    sessionLevels: { '': 'All levels', easy: 'Easy', medium: 'Medium', hard: 'Hard' } as Record<string, string>,
    thisQuestion: 'This question', suggested: 'suggested', total: 'Total', practice: 'Practice', mistakes: 'Mistake practice', right: 'right', wrongShort: 'wrong',
    timeUp: '⏰ Time up!', movingOn: 'Next question in a moment…', notAnswered: 'Time up – not answered',
  },
  ta: {
    question: 'கேள்வி', of: '/', exit: 'வெளியேறு', correct: 'சரி!', wrong: 'தவறு', rightAnswer: 'சரியான விடை', explanation: 'ஏன்',
    next: 'அடுத்த கேள்வி', finish: 'என் மதிப்பெண்', time: 'நேரம்', notSure: 'உறுதியில்லையா? முதலில் பாடநூலில் படியுங்கள்', study: 'பாடநூலில் படியுங்கள்',
    addedToMistakes: 'திருப்புதலுக்காக உங்கள் தவறுப் புத்தகத்தில் சேர்க்கப்பட்டது.', fixedMistake: 'சரியாக்கினீர்கள்! தவறுப் புத்தகத்திலிருந்து நீக்கப்பட்டது.',
    isNew: 'புதியது', retry: 'மீண்டும் முயல்க', keys: 'குறிப்பு: விடையளிக்க 1–4, அடுத்த கேள்விக்கு Enter அழுத்தவும்.',
    score: 'உங்கள் மதிப்பெண்', outOf: 'இல்', timeTaken: 'எடுத்த நேரம்', perQuestion: 'ஒரு கேள்விக்கு', fixed: 'முன்பு தவறிய {n} கேள்விகளைச் சரியாக்கினீர்கள்!',
    again: 'மீண்டும் பயிற்சி', change: 'வேறு பாடப்பகுதி', toMistakes: 'தவறுப் புத்தகம்', reviewWrong: 'திருப்ப வேண்டிய கேள்விகள்', yourAnswer: 'உங்கள் விடை',
    great: 'மிகச் சிறப்பு!', good: 'நல்ல முயற்சி, தொடருங்கள்!', keepTrying: 'தொடர்ந்து பயிற்சி செய்யுங்கள், வெற்றி பெறுவீர்கள்!', allRight: 'எல்லாக் கேள்விகளுக்கும் சரியாக விடையளித்தீர்கள்.',
    levels: { easy: 'எளிது', medium: 'நடுத்தரம்', hard: 'கடினம்' } as Record<string, string>,
    sessionLevels: { '': 'எல்லா நிலைகளும்', easy: 'எளிது', medium: 'நடுத்தரம்', hard: 'கடினம்' } as Record<string, string>,
    thisQuestion: 'இந்தக் கேள்வி', suggested: 'பரிந்துரை', total: 'மொத்தம்', practice: 'பயிற்சி', mistakes: 'தவறுகள் பயிற்சி', right: 'சரி', wrongShort: 'தவறு',
    timeUp: '⏰ நேரம் முடிந்தது!', movingOn: 'சிறிது நேரத்தில் அடுத்த கேள்வி…', notAnswered: 'நேரம் முடிந்தது – விடையளிக்கவில்லை',
  },
};

/** Marks a question whose time ran out before it was answered. */
const TIME_UP = -1;

// Suggested time per question by level, in seconds
const SUGGESTED: Record<string, number> = { easy: 45, medium: 60, hard: 90 };
const SUBJECT_ICON: Record<string, string> = {
  Maths: '📐', Mathematics: '📐', Science: '🔬', 'Social Science': '🌍', English: '📖', Tamil: 'அ', Physics: '⚛️', Chemistry: '⚗️', Biology: '🧬',
};
const SUBJECT_TA: Record<string, string> = { Science: 'அறிவியல்', Maths: 'கணிதம்', Mathematics: 'கணிதம்', 'Social Science': 'சமூக அறிவியல்', English: 'ஆங்கிலம்', Tamil: 'தமிழ்' };
const SESSION_LEVEL_CHIP: Record<string, string> = {
  '': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300',
  easy: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300',
  medium: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
  hard: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300',
};
const LEVEL_ICON: Record<string, string> = { '': '🎯', easy: '🌱', medium: '⚡', hard: '🔥' };

const LETTERS = ['A', 'B', 'C', 'D'];
const LEVEL_CHIP: Record<string, string> = {
  easy: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300',
  medium: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
  hard: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300',
};
const text = (ta: boolean, v: { en: string; ta?: string }) => (ta && v?.ta ? v.ta : v?.en);
const option = (ta: boolean, o: { en: string[]; ta?: string[] }, i: number) => (ta && o.ta?.[i] ? o.ta[i] : o.en[i]);
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

type Feedback = { addedToMistakes?: boolean; fixedMistake?: boolean };

const PracticeRunner: React.FC<{
  questions: any[];
  title: string;
  onExit: () => void;
  onAgain?: () => void;
  againLabel?: string;
  exitLabel?: string;
  onOpenMistakes?: () => void;
  /** Subject name in English (shown in the student's language) */
  subject?: string;
  /** Level the student chose for the session ('' = all levels) */
  level?: string;
  mode?: 'practice' | 'mistakes';
}> = ({ questions, title, onExit, onAgain, againLabel, exitLabel, onOpenMistakes, subject, level = '', mode = 'practice' }) => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const [feedback, setFeedback] = useState<Feedback[]>(() => questions.map(() => ({})));
  const [startedAt] = useState(Date.now());
  const [endedAt, setEndedAt] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());
  // When the current question was shown, and how long each answered one took
  const [shownAt, setShownAt] = useState(Date.now());
  const [spent, setSpent] = useState<number[]>(() => questions.map(() => 0));

  useEffect(() => {
    if (endedAt) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [endedAt]);

  const done = index >= questions.length;
  const q = questions[index];
  const answer = picked[index];
  const answered = answer !== null && answer !== undefined;

  const choose = useCallback(
    (i: number) => {
      if (done || answered) return;
      setPicked((list) => list.map((v, k) => (k === index ? i : v)));
      setSpent((list) => list.map((v, k) => (k === index ? Math.round((Date.now() - shownAt) / 1000) : v)));
      // Saved with the stored option order (options are shuffled for each session)
      const stored = q.order ? q.order[i] : i;
      api
        .post('/student/practice/answers', { questionId: q._id, selectedAnswer: stored })
        .then((res) => setFeedback((list) => list.map((v, k) => (k === index ? res.data.data || {} : v))))
        // No connection: keep the answer and send it when the device is back online
        .catch((error) => {
          if (!error?.response) queueAnswer(q._id, stored);
        });
    },
    [done, answered, index, q, shownAt]
  );

  const next = useCallback(() => {
    if (!answered) return;
    if (index === questions.length - 1) setEndedAt(Date.now());
    setIndex((i) => i + 1);
    setShownAt(Date.now());
    setNow(Date.now());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [answered, index, questions.length]);

  // When the liquid timer turns red (suggested time over), the question counts as
  // not answered: show the right answer briefly, then move on by itself. Not while
  // the student is reading the textbook page (a dialog is open).
  const timeUp = answer === TIME_UP;
  const target = q ? SUGGESTED[q.difficulty] || 60 : 60;
  const seconds = Math.max(0, Math.round((now - shownAt) / 1000));
  useEffect(() => {
    if (done || answered || seconds < target || document.querySelector('[role=dialog]')) return;
    setPicked((list) => list.map((v, k) => (k === index ? TIME_UP : v)));
    setSpent((list) => list.map((v, k) => (k === index ? target : v)));
  }, [done, answered, seconds, target, index]);
  useEffect(() => {
    if (!timeUp) return;
    const timer = setTimeout(next, 3000);
    return () => clearTimeout(timer);
  }, [timeUp, next]);

  // Keyboard: 1-4 or A-D to answer, Enter for the next question
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done || (e.target as HTMLElement)?.closest?.('[role=dialog], input, textarea, select')) return;
      const k = e.key.toLowerCase();
      const pos = ['1', '2', '3', '4'].indexOf(k) >= 0 ? Number(k) - 1 : ['a', 'b', 'c', 'd'].indexOf(k);
      if (pos >= 0 && pos < (q?.options?.en?.length || 4)) choose(pos);
      else if (e.key === 'Enter') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [choose, next, done, q]);

  const elapsed = Math.round(((endedAt || now) - startedAt) / 1000);

  // On phones the feedback sits below the options: bring it into view
  useEffect(() => {
    if (answered) document.getElementById('practice-feedback')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [answered, index]);

  // ------------------------------------------------------------------ score
  if (done) {
    const score = questions.filter((x, i) => picked[i] === x.correctAnswer).length;
    const pct = Math.round((score / questions.length) * 100);
    const fixed = feedback.filter((f) => f.fixedMistake).length;
    const wrong = questions.map((x, i) => ({ x, i })).filter(({ x, i }) => picked[i] !== x.correctAnswer);
    const ring = pct >= 80 ? 'text-emerald-500' : pct >= 50 ? 'text-amber-500' : 'text-rose-500';
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-5 sm:p-6">
          <div className="flex items-center gap-5">
            <div className="relative w-28 h-28 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-28 h-28 -rotate-90" aria-hidden="true">
                <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3.2" className="stroke-slate-100 dark:stroke-slate-700" />
                <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3.2" strokeLinecap="round" className={`stroke-current ${ring}`} strokeDasharray={`${pct} 100`} />
              </svg>
              <span className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">{pct}%</span>
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.score}</p>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                {score} <span className="text-lg text-slate-500">{t.outOf} {questions.length}</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{pct >= 80 ? t.great : pct >= 50 ? t.good : t.keepTrying}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                ⏱ {t.timeTaken}: <b>{clock(elapsed)}</b> ({clock(Math.round(elapsed / questions.length))} {t.perQuestion})
              </p>
              {fixed > 0 && <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">🎉 {t.fixed.replace('{n}', String(fixed))}</p>}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {onAgain && <Button onClick={onAgain}>{againLabel || t.again}</Button>}
            <Button variant="secondary" onClick={onExit}>
              {exitLabel || t.change}
            </Button>
            {onOpenMistakes && wrong.length > 0 && (
              <Button variant="secondary" onClick={onOpenMistakes}>
                📕 {t.toMistakes}
              </Button>
            )}
          </div>
        </div>

        {wrong.length > 0 ? (
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{t.reviewWrong}</h2>
            {wrong.map(({ x, i }) => (
              <div key={x._id} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4">
                <p className="font-medium text-slate-800 dark:text-slate-100 whitespace-pre-line">{text(ta, x.question)}</p>
                <QuestionImage src={x.imageUrl} />
                <div className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
                  <p className="px-3 py-2 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300">
                    {picked[i] === TIME_UP ? `⏰ ${t.notAnswered}` : `✗ ${t.yourAnswer}: ${LETTERS[picked[i] as number]}. ${option(ta, x.options, picked[i] as number)}`}
                  </p>
                  <p className="px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300">
                    ✓ {LETTERS[x.correctAnswer]}. {option(ta, x.options, x.correctAnswer)}
                  </p>
                </div>
                {text(ta, x.explanation) && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">💡 {text(ta, x.explanation)}</p>}
                <TextbookButton textbook={x.textbook} subject={x.subject} className="mt-3" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm font-semibold text-emerald-700 dark:text-emerald-400">✓ {t.allRight}</p>
        )}
      </div>
    );
  }

  // ------------------------------------------------------------------ question
  const isRight = answered && answer === q.correctAnswer;
  const subjectEn = subject || q.subject || '';
  const subjectShown = ta ? SUBJECT_TA[subjectEn] || subjectEn : subjectEn;
  const rightSoFar = questions.filter((x, i) => picked[i] !== null && picked[i] !== undefined && picked[i] === x.correctAnswer).length;
  const wrongSoFar = questions.filter((x, i) => picked[i] !== null && picked[i] !== undefined && picked[i] !== x.correctAnswer).length;
  const fb = feedback[index];
  const timerProps = {
    seconds: answered ? spent[index] : Math.max(0, Math.round((now - shownAt) / 1000)),
    target: SUGGESTED[q.difficulty] || 60,
    total: elapsed,
    paused: answered,
    labels: { thisQuestion: t.thisQuestion, suggested: t.suggested, total: t.total },
  };
  // Short options sit two per row on wide screens
  const shortOptions = q.options.en.every((o: string, i: number) => o.length <= 48 && (option(ta, q.options, i) || '').length <= 48);
  return (
    <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_8.5rem] lg:gap-5 lg:items-start">
     <div className="min-w-0 space-y-3">
      {/* Session header: subject, chapter, level, progress, score and the liquid timer */}
      <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 sm:px-4 py-3 space-y-3">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-xl flex items-center justify-center shadow-sm" aria-hidden="true">
            {mode === 'mistakes' ? '📕' : SUBJECT_ICON[subjectEn] || '📘'}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-slate-800 dark:text-slate-100 truncate">
              {subjectShown}
              <span className="ml-2 text-xs font-semibold text-slate-400">{mode === 'mistakes' ? t.mistakes : t.practice}</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 truncate">{title}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs">
              <span className={`px-2 py-0.5 rounded-full font-semibold ${SESSION_LEVEL_CHIP[level] || SESSION_LEVEL_CHIP['']}`}>
                {LEVEL_ICON[level] || '🎯'} {t.sessionLevels[level] ?? t.sessionLevels['']}
              </span>
              <span className="px-2 py-0.5 rounded-full font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                {t.question} {index + 1} {t.of} {questions.length}
              </span>
              <span className="px-2 py-0.5 rounded-full font-semibold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">✓ {rightSoFar} {t.right}</span>
              <span className="px-2 py-0.5 rounded-full font-semibold bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300">✗ {wrongSoFar} {t.wrongShort}</span>
            </div>
          </div>
          <button type="button" onClick={onExit} className="flex-shrink-0 px-2.5 py-1 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
            ✕ <span className="hidden sm:inline">{t.exit}</span>
          </button>
        </div>
        {/* On phones and tablets the timer sits here; on wide screens it is the tube on the right */}
        <div className="lg:hidden">
          <LiquidTimer {...timerProps} />
        </div>
        <div className="flex gap-1" aria-hidden="true">
          {questions.map((x, i) => {
            const p = picked[i];
            const tone = i === index ? 'bg-indigo-500' : p === null || p === undefined ? 'bg-slate-200 dark:bg-slate-700' : p === x.correctAnswer ? 'bg-emerald-500' : 'bg-rose-500';
            return <span key={x._id} className={`h-1.5 flex-1 rounded-full transition-colors ${tone}`} />;
          })}
        </div>
      </div>

      {/* Question */}
      <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="w-7 h-7 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">{index + 1}</span>
          {/* With "All levels" each question's own level is worth showing */}
          {!level && q.difficulty && <span className={`px-2 py-0.5 rounded-full font-semibold ${LEVEL_CHIP[q.difficulty] || ''}`}>{t.levels[q.difficulty] || q.difficulty}</span>}
          {q.status === 'new' && <span className="px-2 py-0.5 rounded-full font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300">{t.isNew}</span>}
          {q.status === 'retry' && <span className="px-2 py-0.5 rounded-full font-semibold bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300">↺ {t.retry}</span>}
          {q.topic && <span className="text-slate-400 dark:text-slate-500 truncate">· {q.topic}</span>}
        </div>
        <div className="mt-3 flex items-start gap-2">
          <h2 className="flex-1 text-lg sm:text-xl font-semibold leading-relaxed text-slate-800 dark:text-slate-100 whitespace-pre-line">{text(ta, q.question)}</h2>
          <ReadAloud lang={ta ? 'ta' : 'en'} text={spokenQuestion(text(ta, q.question), (ta && q.options.ta?.length ? q.options.ta : q.options.en) as string[])} />
        </div>
        <QuestionImage src={q.imageUrl} />

        <div className={`mt-4 grid gap-2.5 ${shortOptions ? 'lg:grid-cols-2' : ''}`} role="radiogroup">
          {q.options.en.map((_: string, i: number) => {
            const isAnswer = i === q.correctAnswer;
            const isPicked = i === answer;
            const tone = !answered
              ? 'border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10'
              : isAnswer
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                : isPicked
                  ? 'border-rose-400 bg-rose-50 dark:bg-rose-900/20'
                  : 'border-slate-200 dark:border-slate-700 opacity-55';
            const letterTone = answered && isAnswer ? 'bg-emerald-500 text-white' : answered && isPicked ? 'bg-rose-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300';
            return (
              <button
                key={i}
                type="button"
                role="radio"
                aria-checked={isPicked}
                disabled={answered}
                onClick={() => choose(i)}
                className={`w-full flex items-start gap-3 text-left px-4 py-3.5 rounded-2xl border-2 transition ${tone}`}
              >
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${letterTone}`}>
                  {answered && isAnswer ? '✓' : answered && isPicked ? '✗' : LETTERS[i]}
                </span>
                <span className="pt-1 text-slate-800 dark:text-slate-100">{option(ta, q.options, i)}</span>
              </button>
            );
          })}
        </div>

        {!answered && q.textbook && (
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>🤔 {t.notSure}</span>
            <TextbookButton textbook={q.textbook} subject={q.subject} label={t.study} />
          </div>
        )}
        {!answered && <p className="mt-3 hidden sm:block text-xs text-slate-400">{t.keys}</p>}
      </div>

      {/* Feedback with explanation and the textbook page */}
      {answered && (
        <div
          id="practice-feedback"
          role="status"
          className={`rounded-3xl border-2 p-4 sm:p-5 ${isRight ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-900/20' : 'border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20'}`}
        >
          <p className={`text-lg font-bold ${isRight ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
            {isRight ? `🎉 ${t.correct}` : timeUp ? `${t.timeUp} ${t.rightAnswer} ${LETTERS[q.correctAnswer]}.` : `${t.wrong} – ${t.rightAnswer} ${LETTERS[q.correctAnswer]}.`}
          </p>
          {timeUp && <p className="mt-1 text-sm font-medium text-rose-700 dark:text-rose-300 animate-pulse">{t.movingOn}</p>}
          {text(ta, q.explanation) && (
            <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-slate-200">
              <b>💡 {t.explanation}:</b> {text(ta, q.explanation)}
            </p>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <TextbookButton textbook={q.textbook} subject={q.subject} />
            {q.source && !q.textbook && <span className="text-xs text-slate-500">📖 {q.source}</span>}
            <AskTeacher key={q._id} questionId={q._id} />
            {!isRight && !timeUp && <ExplainAnother key={`x${q._id}`} questionId={q._id} selectedAnswer={q.order ? q.order[picked[index]!] : picked[index]!} />}
          </div>
          {fb.addedToMistakes && <p className="mt-3 text-xs font-medium text-rose-700 dark:text-rose-300">📕 {t.addedToMistakes}</p>}
          {fb.fixedMistake && <p className="mt-3 text-xs font-medium text-emerald-700 dark:text-emerald-300">✅ {t.fixedMistake}</p>}
          <div className="mt-4 flex justify-end">
            <Button onClick={next} className="w-full sm:w-auto !px-6 !py-3 !text-base">
              {index === questions.length - 1 ? t.finish : t.next} →
            </Button>
          </div>
        </div>
      )}
     </div>

      {/* Vertical liquid timer beside the question (wide screens) */}
      <aside className="hidden lg:block sticky top-24 h-[calc(100vh-8rem)] max-h-[640px] rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm px-3 py-4">
        <LiquidTimer {...timerProps} vertical />
      </aside>
    </div>
  );
};

export default PracticeRunner;
