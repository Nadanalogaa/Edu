import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Panel, Button, Alert, Spinner, EmptyState, apiError } from '../common/ui';
import PracticeRunner from './PracticeRunner';

// Self-practice: pick a subject and chapter (or NEET/JEE in 11th-12th), answer
// with instant feedback and explanations. Nothing is marked or reported.

const TEXT = {
  en: {
    title: 'Practice', subtitle: 'Practise any chapter as often as you like. Not marked, but your teacher can see how much you practise.', school: 'My subjects', neet: 'NEET / JEE',
    allChapters: 'All chapters', questions: 'questions', start: 'Start practice', none: 'No practice questions yet for your class.', choose: 'Choose a subject',
    question: 'Question', of: 'of', correct: 'Correct!', wrong: 'Not quite. The correct answer is', explanation: 'Explanation', next: 'Next question',
    finish: 'See my score', score: 'You got', outOf: 'out of', again: 'Practise again', change: 'Choose another chapter', noQuestions: 'No questions available here right now.',
    neetHint: 'Entrance exam practice for 11th and 12th.', pickTrack: 'Exam', pickSubject: 'Subject',
    level: 'Level', levels: { '': 'All levels', easy: 'Easy', medium: 'Medium', hard: 'Hard' } as Record<string, string>,
    howMany: 'How many questions', all: 'All', time: 'Time', timeTaken: 'Time taken', perQuestion: 'per question',
    step1: 'Subject', step2: 'Level', step3: 'Questions', chapter: 'Choose a chapter', allChaptersHint: 'A mix from the whole subject',
    hints: { '': 'A mix of every level', easy: 'Facts and definitions', medium: 'Understand and apply', hard: 'Problems and reasoning' } as Record<string, string>,
    ready: 'Ready', noneAtLevel: 'No questions at this level here yet', mins: 'about {n} min',
    isNew: 'New', retry: 'Try again', done: 'done', allDone: 'All done – practising again',
    sessionMix: '{new} new · {retry} to try again', fixed: 'You fixed {n} earlier mistakes!',
  },
  ta: {
    title: 'பயிற்சி', subtitle: 'எந்தப் பாடப்பகுதியையும் விரும்பும் அளவு பயிற்சி செய்யுங்கள். இவை மதிப்பெண்ணுக்கானவை அல்ல, ஆனால் நீங்கள் எவ்வளவு பயிற்சி செய்கிறீர்கள் என்பதை உங்கள் ஆசிரியர் பார்க்கலாம்.', school: 'என் பாடங்கள்', neet: 'NEET / JEE',
    allChapters: 'எல்லா பாடப்பகுதிகளும்', questions: 'கேள்விகள்', start: 'பயிற்சியைத் தொடங்கு', none: 'உங்கள் வகுப்புக்கு இன்னும் பயிற்சிக் கேள்விகள் இல்லை.', choose: 'பாடத்தைத் தேர்ந்தெடுங்கள்',
    question: 'கேள்வி', of: '/', correct: 'சரி!', wrong: 'தவறு. சரியான விடை', explanation: 'விளக்கம்', next: 'அடுத்த கேள்வி',
    finish: 'என் மதிப்பெண்', score: 'நீங்கள் பெற்றது', outOf: 'இல்', again: 'மீண்டும் பயிற்சி', change: 'வேறு பாடப்பகுதி', noQuestions: 'இப்போது இங்கே கேள்விகள் இல்லை.',
    neetHint: '11, 12 ஆம் வகுப்புக்கான நுழைவுத் தேர்வுப் பயிற்சி.', pickTrack: 'தேர்வு', pickSubject: 'பாடம்',
    level: 'நிலை', levels: { '': 'எல்லா நிலைகளும்', easy: 'எளிது', medium: 'நடுத்தரம்', hard: 'கடினம்' } as Record<string, string>,
    howMany: 'எத்தனை கேள்விகள்', all: 'அனைத்தும்', time: 'நேரம்', timeTaken: 'எடுத்த நேரம்', perQuestion: 'ஒரு கேள்விக்கு',
    step1: 'பாடம்', step2: 'நிலை', step3: 'கேள்விகள்', chapter: 'பாடப்பகுதியைத் தேர்ந்தெடுங்கள்', allChaptersHint: 'முழுப் பாடத்திலிருந்தும் கலவை',
    hints: { '': 'எல்லா நிலைகளின் கலவை', easy: 'உண்மைகள், வரையறைகள்', medium: 'புரிந்து பயன்படுத்துதல்', hard: 'கணக்குகள், காரணம் அறிதல்' } as Record<string, string>,
    ready: 'தயார்', noneAtLevel: 'இந்த நிலையில் இங்கே இன்னும் கேள்விகள் இல்லை', mins: 'சுமார் {n} நிமிடம்',
    isNew: 'புதியது', retry: 'மீண்டும் முயல்க', done: 'முடிந்தது', allDone: 'அனைத்தும் முடிந்தது – மீண்டும் பயிற்சி',
    sessionMix: '{new} புதியவை · {retry} மீண்டும் முயல', fixed: 'முன்பு தவறிய {n} கேள்விகளைச் சரியாக்கினீர்கள்!',
  },
};

const LETTERS = ['A', 'B', 'C', 'D'];
const pick = (ta: boolean, v: { en: string; ta: string }) => (ta && v?.ta ? v.ta : v?.en);
const pickOpt = (ta: boolean, o: { en: string[]; ta: string[] }, i: number) => (ta && o.ta?.[i] ? o.ta[i] : o.en[i]);
const LEVELS = ['', 'easy', 'medium', 'hard'];
const COUNTS = [10, 20, 30];
// Look of each subject tile and level card (full class names so Tailwind keeps them)
const SUBJECT_LOOK: Record<string, { icon: string; tone: string }> = {
  Maths: { icon: '📐', tone: 'from-sky-500 to-indigo-600' },
  Mathematics: { icon: '📐', tone: 'from-sky-500 to-indigo-600' },
  Science: { icon: '🔬', tone: 'from-emerald-500 to-teal-600' },
  'Social Science': { icon: '🌍', tone: 'from-amber-500 to-orange-600' },
  English: { icon: '📖', tone: 'from-violet-500 to-fuchsia-600' },
  Tamil: { icon: 'அ', tone: 'from-rose-500 to-pink-600' },
  Physics: { icon: '⚛️', tone: 'from-sky-500 to-indigo-600' },
  Chemistry: { icon: '⚗️', tone: 'from-emerald-500 to-teal-600' },
  Biology: { icon: '🧬', tone: 'from-lime-500 to-green-600' },
};
const subjectLook = (name: string) => SUBJECT_LOOK[name] || { icon: '📘', tone: 'from-slate-500 to-slate-700' };
const LEVEL_LOOK: Record<string, { on: string; dot: string; icon: string }> = {
  '': { on: 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/15 ring-2 ring-indigo-500/30', dot: 'bg-indigo-500', icon: '🎯' },
  easy: { on: 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 ring-2 ring-emerald-500/30', dot: 'bg-emerald-500', icon: '🌱' },
  medium: { on: 'border-amber-500 bg-amber-50 dark:bg-amber-500/15 ring-2 ring-amber-500/30', dot: 'bg-amber-500', icon: '⚡' },
  hard: { on: 'border-rose-500 bg-rose-50 dark:bg-rose-500/15 ring-2 ring-rose-500/30', dot: 'bg-rose-500', icon: '🔥' },
};
const OFF = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600';
const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

const Practice: React.FC<{ onOpenMistakes?: () => void }> = ({ onOpenMistakes }) => {
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
  // Each start gets a new key so the session screen starts fresh
  const [session, setSession] = useState<{ questions: any[]; key: number } | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const inSession = !!session;
  useEffect(() => {
    if (inSession) return;
    api
      .get('/student/practice/options')
      .then((res) => {
        setOptions(res.data.data);
        // Opened from the chapter map (or another screen) for one chapter
        let pick: { subjectId?: string; chapterId?: string } = {};
        try {
          pick = JSON.parse(sessionStorage.getItem('practice-pick') || '{}');
          sessionStorage.removeItem('practice-pick');
        } catch {
          pick = {};
        }
        if (pick.chapterId) setChapterId(pick.chapterId);
        // Keep the student's choice when coming back from a session
        setSubjectId((current) => pick.subjectId || current || res.data.data.subjects[0]?.subjectId || '');
        setNeetSubject((current) => current || res.data.data.neet?.[0]?.subject || '');
      })
      .catch((err) => setError(apiError(err)));
  }, [inSession]);

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
      else setSession({ questions: res.data.data, key: Date.now() });
    } catch (err) {
      setError(apiError(err));
    } finally {
      setLoading(false);
    }
  };

  if (!options) return error ? <Alert>{error}</Alert> : <Spinner />;

  const subject = options.subjects.find((s: any) => s.subjectId === subjectId);
  const neetRow = options.neet?.find((s: any) => s.subject === neetSubject);
  // Questions available for the chosen level
  const available = (row: any) => (difficulty ? row?.byLevel?.[difficulty] ?? 0 : row?.questions ?? 0);
  const chosenRow = chapterId ? subject?.chapters.find((c: any) => c.chapterId === chapterId) : subject;
  const neetCount = neetRow ? (track === 'NEET' ? neetRow.neet : neetRow.jee) : 0;
  const pool = mode === 'school' ? available(chosenRow) : neetCount;
  const sessionSize = count === 'all' ? pool : Math.min(count, pool);
  const subjectName = (s: any) => (ta && s.nameTa ? s.nameTa : s.nameEn);
  const chapterLabel = mode === 'school'
    ? chapterId ? `${chosenRow?.number}. ${ta && chosenRow?.nameTa ? chosenRow.nameTa : chosenRow?.nameEn}` : `${subject ? subjectName(subject) : ''} · ${t.allChapters}`
    : `${track} · ${neetSubject}`;
  if (session) {
    return (
      <PracticeRunner
        key={session.key}
        questions={session.questions}
        title={mode === 'school' ? (chapterId ? chapterLabel : t.allChapters) : `${track} · ${t.allChapters}`}
        subject={mode === 'school' ? subject?.nameEn : neetSubject}
        level={difficulty}
        onExit={() => setSession(null)}
        onAgain={start}
        onOpenMistakes={onOpenMistakes}
      />
    );
  }

  const levelCount = (level: string) =>
    mode === 'school' ? (level ? chosenRow?.byLevel?.[level] ?? 0 : chosenRow?.questions ?? 0) : level ? null : neetCount;

  const StepTitle: React.FC<{ n: number; label: string }> = ({ n, label }) => (
    <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
      <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">{n}</span>
      {label}
    </h2>
  );

  const subjectTiles = (items: { key: string; name: string; label: string; count: number; on: boolean; pick: () => void }[]) => (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
      {items.map((it) => {
        const look = subjectLook(it.name);
        return (
          <button
            key={it.key}
            type="button"
            aria-pressed={it.on}
            onClick={it.pick}
            className={`p-2.5 sm:p-3 rounded-2xl border-2 text-left transition ${it.on ? 'border-indigo-500 ring-2 ring-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/15' : OFF}`}
          >
            <span className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${look.tone} text-white text-lg font-bold flex items-center justify-center shadow-sm`}>{look.icon}</span>
            <span className="mt-2 block text-sm font-semibold text-slate-800 dark:text-slate-100 leading-tight">{it.label}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              {it.count} {t.questions}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-4 pb-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">{t.title}</h1>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}

      {options.neet && (
        <div className="flex gap-1 p-1 bg-slate-200/60 dark:bg-slate-800 rounded-xl w-fit" role="tablist">
          {(['school', 'neet'] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 text-sm rounded-lg font-semibold ${mode === m ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {m === 'school' ? t.school : t.neet}
            </button>
          ))}
        </div>
      )}

      {mode === 'school' && options.subjects.length === 0 ? (
        <Panel>
          <EmptyState>{t.none}</EmptyState>
        </Panel>
      ) : (
        <>
          {/* Set-up: subject, level and how many, all in one place at the top */}
          <section className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-4 sm:p-6 space-y-6">
            <div className="space-y-3">
              <StepTitle n={1} label={mode === 'school' ? t.step1 : `${t.pickTrack} · ${t.pickSubject}`} />
              {mode === 'school' ? (
                subjectTiles(
                  options.subjects.map((s: any) => ({
                    key: s.subjectId, name: s.nameEn, label: subjectName(s), count: s.questions, on: s.subjectId === subjectId,
                    pick: () => { setSubjectId(s.subjectId); setChapterId(''); },
                  }))
                )
              ) : (
                <>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.neetHint}</p>
                  <div className="flex gap-2">
                    {(['NEET', 'JEE'] as const).map((tr) => (
                      <button key={tr} type="button" aria-pressed={track === tr} onClick={() => setTrack(tr)}
                        className={`px-5 py-2 rounded-xl text-sm font-bold border-2 ${track === tr ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300' : OFF + ' text-slate-700 dark:text-slate-200'}`}>
                        {tr}
                      </button>
                    ))}
                  </div>
                  {subjectTiles(
                    options.neet.map((s: any) => ({
                      key: s.subject, name: s.subject, label: s.subject, count: track === 'NEET' ? s.neet : s.jee, on: neetSubject === s.subject,
                      pick: () => setNeetSubject(s.subject),
                    }))
                  )}
                </>
              )}
            </div>

            <div className="space-y-3">
              <StepTitle n={2} label={t.step2} />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {LEVELS.map((level) => {
                  const on = difficulty === level;
                  const n = levelCount(level);
                  return (
                    <button
                      key={level || 'all'}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setDifficulty(level)}
                      className={`p-3 rounded-2xl border-2 text-left transition ${on ? LEVEL_LOOK[level].on : OFF}`}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-base font-bold text-slate-800 dark:text-slate-100">
                          {LEVEL_LOOK[level].icon} {t.levels[level]}
                        </span>
                        {n !== null && <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{n}</span>}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">{t.hints[level]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <StepTitle n={3} label={t.howMany} />
              <div className="inline-flex flex-wrap gap-1 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900/60">
                {COUNTS.filter((n) => n < pool).map((n) => (
                  <button key={n} type="button" aria-pressed={count === n} onClick={() => setCount(n)}
                    className={`min-w-[3.5rem] px-4 py-2 rounded-xl text-sm font-bold ${count === n ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}>
                    {n}
                  </button>
                ))}
                <button type="button" aria-pressed={count === 'all' || pool <= Number(count)} onClick={() => setCount('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-bold ${count === 'all' || pool <= Number(count) ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}>
                  {t.all} ({pool})
                </button>
              </div>
            </div>
          </section>

          {/* Chapters */}
          {mode === 'school' && subject && (
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{t.chapter}</h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3" role="radiogroup" aria-label={t.chapter}>
                {[{ chapterId: '', number: null, nameEn: t.allChapters, nameTa: t.allChapters, questions: subject.questions, byLevel: subject.byLevel }, ...subject.chapters].map((c: any) => {
                  const n = available(c);
                  const done = Math.min(n, difficulty ? c.doneByLevel?.[difficulty] ?? 0 : c.done ?? 0);
                  const on = chapterId === c.chapterId;
                  const mix = c.byLevel || { easy: 0, medium: 0, hard: 0 };
                  const total = mix.easy + mix.medium + mix.hard || 1;
                  return (
                    <button
                      key={c.chapterId || 'all'}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      disabled={!n}
                      onClick={() => setChapterId(c.chapterId)}
                      className={`flex items-start gap-3 p-3 rounded-2xl border-2 text-left transition disabled:opacity-45 disabled:cursor-not-allowed ${on ? 'border-indigo-500 ring-2 ring-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/15' : OFF}`}
                    >
                      <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${on ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200'}`}>
                        {c.number ?? '★'}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug">{ta && c.nameTa ? c.nameTa : c.nameEn}</span>
                        <span className="block mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                          {n ? `${n} ${t.questions}` : t.noneAtLevel}
                          {!c.chapterId && n ? ` · ${t.allChaptersHint}` : ''}
                        </span>
                        {n > 0 && done > 0 && (
                          <span className={`block mt-0.5 text-xs font-semibold ${done >= n ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-300'}`}>
                            {done >= n ? `✓ ${t.allDone}` : `${done} / ${n} ${t.done}`}
                          </span>
                        )}
                        <span className="mt-2 flex h-1.5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700" aria-hidden="true">
                          <span className="bg-emerald-500" style={{ width: `${(mix.easy / total) * 100}%` }} />
                          <span className="bg-amber-500" style={{ width: `${(mix.medium / total) * 100}%` }} />
                          <span className="bg-rose-500" style={{ width: `${(mix.hard / total) * 100}%` }} />
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* Start bar stays in view while scrolling the chapters */}
          <div className="sticky bottom-[calc(4.75rem+env(safe-area-inset-bottom))] lg:bottom-3 z-10">
            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white shadow-xl">
              <span className={`flex-shrink-0 w-2.5 h-10 rounded-full ${LEVEL_LOOK[difficulty].dot}`} aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{chapterLabel}</p>
                <p className="text-xs text-slate-300">
                  {t.levels[difficulty]} · {sessionSize} {t.questions}
                  {sessionSize > 0 && ` · ${t.mins.replace('{n}', String(Math.max(1, Math.round(sessionSize * 0.75))))}`}
                </p>
              </div>
              <Button disabled={loading || !sessionSize} onClick={start}>
                {t.start} →
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Practice;
