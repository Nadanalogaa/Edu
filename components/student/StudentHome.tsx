import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { Panel, Button, Badge, Spinner, EmptyState, classLabel, boardLabel } from '../common/ui';
import { PercentBars } from '../reports/charts';
import DailyGoal from './DailyGoal';

// Student home: how they are doing at a glance (tests, practice, mistakes),
// the one best thing to do next, this week's practice, and what to practise.

const TEXT = {
  en: {
    hello: 'Hello', next: 'Your tests', noTests: 'No tests waiting. Well done!', allTests: 'All my tests', start: 'Start', resume: 'Continue',
    upcoming: (n: number) => `${n} more test${n === 1 ? '' : 's'} coming up`, details: 'Details',
    testAverage: 'Test average', lastTest: (v: string) => `Last test ${v}`, testsWritten: 'Tests written', openNow: (n: number) => `${n} open now`,
    practiceAccuracy: 'Practice accuracy', practised: (n: number) => `${n} questions practised`, mistakes: 'Mistakes to revise', fixed: (n: number) => `${n} fixed`,
    noPractice: 'Not started', streak: (n: number) => `${n}-day practice streak`, startStreak: 'Practise today to start a streak',
    nextStep: 'Your next step', testOpen: (t: string) => `“${t}” is open now`, testOpenHint: 'Finish it before it closes.',
    weak: (c: string) => `Practise ${c}`, weakHint: (v: number) => `Your score here is ${v}%. A few minutes of practice will help.`,
    newAnswers: (n: number) => `👩‍🏫 Your teacher answered ${n} of your doubt${n === 1 ? '' : 's'}`, seeAnswers: 'See the answers →',
    recheck: (n: number) => `Check ${n} mistake${n === 1 ? '' : 's'} you fixed last week`, recheckHint: 'Show you still remember them.',
    revise: (n: number) => `Revise ${n} mistake${n === 1 ? '' : 's'}`, reviseHint: 'Answer them correctly to clear your Mistake Book.',
    begin: 'Start practising', beginHint: 'Pick a subject, a level and go. Every answer is saved.', go: 'Go',
    week: 'This week', weekHint: (a: number, acc: number | null) => `${a} answers${acc != null ? ` · ${acc}% correct` : ''}`, noWeek: 'No practice yet this week.',
    subjects: 'Test scores by subject', practise: 'Practise these chapters', practiseNow: 'Practise', progress: 'See my progress',
    coverage: 'Textbook covered', coverageHint: 'Questions you have practised from each subject.', of: 'of',
    noResults: 'Your test results appear here after your first test.', inProgress: 'In progress', available: 'Ready', minutes: 'min', questions: 'questions',
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], today: 'Today',
  },
  ta: {
    hello: 'வணக்கம்', next: 'உங்கள் தேர்வுகள்', noTests: 'காத்திருக்கும் தேர்வுகள் இல்லை. நன்று!', allTests: 'என் எல்லா தேர்வுகள்', start: 'தொடங்கு', resume: 'தொடர்',
    upcoming: (n: number) => `இன்னும் ${n} தேர்வுகள் வர உள்ளன`, details: 'விவரம்',
    testAverage: 'தேர்வு சராசரி', lastTest: (v: string) => `கடைசி தேர்வு ${v}`, testsWritten: 'எழுதிய தேர்வுகள்', openNow: (n: number) => `${n} இப்போது திறந்துள்ளது`,
    practiceAccuracy: 'பயிற்சித் துல்லியம்', practised: (n: number) => `${n} கேள்விகள் பயிற்சி`, mistakes: 'திருப்ப வேண்டிய தவறுகள்', fixed: (n: number) => `${n} சரியாக்கியவை`,
    noPractice: 'இன்னும் தொடங்கவில்லை', streak: (n: number) => `${n} நாள் தொடர் பயிற்சி`, startStreak: 'இன்று பயிற்சி செய்து தொடரைத் தொடங்குங்கள்',
    nextStep: 'உங்கள் அடுத்த படி', testOpen: (t: string) => `“${t}” இப்போது திறந்துள்ளது`, testOpenHint: 'மூடுவதற்கு முன் முடியுங்கள்.',
    weak: (c: string) => `${c} பயிற்சி செய்யுங்கள்`, weakHint: (v: number) => `இங்கே உங்கள் மதிப்பெண் ${v}%. சிறிது பயிற்சி உதவும்.`,
    newAnswers: (n: number) => `👩‍🏫 உங்கள் ${n} சந்தேகங்களுக்கு ஆசிரியர் பதிலளித்துள்ளார்`, seeAnswers: 'பதில்களைப் பார் →',
    recheck: (n: number) => `கடந்த வாரம் சரியாக்கிய ${n} தவறுகளைச் சரிபார்க்கவும்`, recheckHint: 'இன்னும் நினைவிருக்கிறதா என்று காட்டுங்கள்.',
    revise: (n: number) => `${n} தவறுகளைத் திருப்புங்கள்`, reviseHint: 'சரியாக விடையளித்தால் தவறுப் புத்தகத்திலிருந்து நீங்கும்.',
    begin: 'பயிற்சியைத் தொடங்குங்கள்', beginHint: 'பாடம், நிலையைத் தேர்ந்தெடுத்துத் தொடங்குங்கள்.', go: 'செல்',
    week: 'இந்த வாரம்', weekHint: (a: number, acc: number | null) => `${a} விடைகள்${acc != null ? ` · ${acc}% சரி` : ''}`, noWeek: 'இந்த வாரம் இன்னும் பயிற்சி இல்லை.',
    subjects: 'பாடவாரி தேர்வு மதிப்பெண்', practise: 'இந்தப் பாடப்பகுதிகளைப் பயிற்சி செய்யுங்கள்', practiseNow: 'பயிற்சி', progress: 'என் முன்னேற்றம்',
    coverage: 'பாடநூல் பயிற்சி', coverageHint: 'ஒவ்வொரு பாடத்திலும் பயிற்சி செய்த கேள்விகள்.', of: '/',
    noResults: 'முதல் தேர்வுக்குப் பின் உங்கள் முடிவுகள் இங்கே தெரியும்.', inProgress: 'நடைபெறுகிறது', available: 'தயார்', minutes: 'நிமி', questions: 'கேள்விகள்',
    days: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'], today: 'இன்று',
  },
};

const KpiCard: React.FC<{ label: string; value: React.ReactNode; sub?: string; icon: string; tone: string; onClick: () => void; details: string }> = ({
  label, value, sub, icon, tone, onClick, details,
}) => (
  <button type="button" onClick={onClick}
    className="text-left rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-5 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-500/40 transition">
    <div className="flex items-start justify-between gap-2">
      <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <span className={`flex-shrink-0 w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-base sm:text-lg ${tone}`} aria-hidden="true">{icon}</span>
    </div>
    <p className="mt-1 sm:-mt-2 text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
    <div className="mt-1 flex items-end justify-between gap-2">
      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{sub}</p>
      <span className="hidden sm:inline text-xs font-semibold text-indigo-600 dark:text-indigo-300 whitespace-nowrap">{details} ›</span>
    </div>
  </button>
);

const StudentHome: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [tests, setTests] = useState<any[] | null>(null);
  const [progress, setProgress] = useState<any>(null);
  const [summary, setSummary] = useState<any>(null);
  const [bank, setBank] = useState<any[] | null>(null);

  useEffect(() => {
    api.get('/student/assessments').then((res) => setTests(res.data.data)).catch(() => setTests([]));
    api.get('/student/progress').then((res) => setProgress(res.data.data)).catch(() => setProgress({ kpis: {}, bySubject: [], weakChapters: [] }));
    api.get('/student/practice/summary').then((res) => setSummary(res.data.data)).catch(() => setSummary({ days: [], mistakes: {} }));
    api.get('/student/practice/options').then((res) => setBank(res.data.data.subjects || [])).catch(() => setBank([]));
  }, []);

  if (!tests || !progress || !summary || !bank) return <Spinner />;

  const todo = tests.filter((x) => x.status === 'available' || x.status === 'in-progress');
  const upcoming = tests.filter((x) => x.status === 'upcoming').length;
  const k = progress.kpis || {};
  const name = (en: string, taName?: string) => (ta && taName ? taName : en);
  const weakest = progress.weakChapters?.[0];
  const openMistakes = summary.mistakes?.open || 0;
  const dueMistakes = summary.mistakes?.due || 0;
  const weekAnswers = summary.days.reduce((a: number, d: any) => a + d.answers, 0);
  const weekCorrect = summary.days.reduce((a: number, d: any) => a + d.correct, 0);
  const weekMax = Math.max(1, ...summary.days.map((d: any) => d.answers));

  // The single most useful thing to do now
  const step = todo.length
    ? { icon: '📝', title: t.testOpen(todo[0].title), hint: t.testOpenHint, view: 'my-tests' }
    : dueMistakes
      ? { icon: '🔁', title: t.recheck(dueMistakes), hint: t.recheckHint, view: 'mistakes' }
    : weakest
      ? { icon: '🎯', title: t.weak(`${weakest.number}. ${name(weakest.nameEn, weakest.nameTa)}`), hint: t.weakHint(weakest.accuracy), view: 'practice' }
      : openMistakes
        ? { icon: '📕', title: t.revise(openMistakes), hint: t.reviseHint, view: 'mistakes' }
        : { icon: '🚀', title: t.begin, hint: t.beginHint, view: 'practice' };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
            {t.hello}, {currentUser?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {classLabel(currentUser?.classGrade, currentUser?.section)} · {boardLabel(currentUser?.board)}
            {currentUser?.schoolName && ` · ${currentUser.schoolName}`}
          </p>
        </div>
        <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${summary.streak ? 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
          🔥 {summary.streak ? t.streak(summary.streak) : t.startStreak}
        </span>
      </div>

      {summary.doubts?.newAnswers > 0 && (
        <button type="button" onClick={() => onNavigate('doubts')}
          className="w-full text-left rounded-2xl border-2 border-violet-300 dark:border-violet-600/60 bg-violet-50 dark:bg-violet-900/20 px-4 py-3 flex flex-wrap items-center justify-between gap-2">
          <span className="font-bold text-violet-900 dark:text-violet-200">{t.newAnswers(summary.doubts.newAnswers)}</span>
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">{t.seeAnswers}</span>
        </button>
      )}

      <DailyGoal onPractise={() => onNavigate('practice')} />

      {/* At a glance */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard label={t.testAverage} value={k.average != null ? `${k.average}%` : '—'} sub={k.last != null ? t.lastTest(`${k.last}%`) : undefined}
          icon="🎯" tone="bg-indigo-50 dark:bg-indigo-500/15" onClick={() => onNavigate('progress')} details={t.details} />
        <KpiCard label={t.testsWritten} value={k.testsTaken ?? 0} sub={todo.length ? t.openNow(todo.length) : upcoming ? t.upcoming(upcoming) : undefined}
          icon="📝" tone="bg-sky-50 dark:bg-sky-500/15" onClick={() => onNavigate('my-tests')} details={t.details} />
        <KpiCard label={t.practiceAccuracy} value={summary.accuracy != null ? `${summary.accuracy}%` : '—'} sub={summary.questions ? t.practised(summary.questions) : t.noPractice}
          icon="🧠" tone="bg-emerald-50 dark:bg-emerald-500/15" onClick={() => onNavigate('practice')} details={t.details} />
        <KpiCard label={t.mistakes} value={openMistakes} sub={summary.mistakes?.fixed ? t.fixed(summary.mistakes.fixed) : undefined}
          icon="📕" tone="bg-rose-50 dark:bg-rose-500/15" onClick={() => onNavigate('mistakes')} details={t.details} />
      </div>

      {/* Next step */}
      <button type="button" onClick={() => onNavigate(step.view)}
        className="w-full text-left rounded-3xl p-4 sm:p-5 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-600/20 flex items-center gap-4">
        <span className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">{step.icon}</span>
        <span className="flex-1 min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-indigo-100">{t.nextStep}</span>
          <span className="block text-base sm:text-lg font-bold truncate">{step.title}</span>
          <span className="block text-sm text-indigo-100">{step.hint}</span>
        </span>
        <span className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-bold">{t.go} →</span>
      </button>

      <div className="grid lg:grid-cols-2 gap-4">
        <Panel title={t.next} actions={<Button size="sm" variant="ghost" onClick={() => onNavigate('my-tests')}>{t.allTests}</Button>}>
          {todo.length === 0 ? (
            <EmptyState>{t.noTests}</EmptyState>
          ) : (
            <ul className="divide-y divide-slate-200 dark:divide-slate-700">
              {todo.slice(0, 4).map((test) => (
                <li key={test._id} className="flex items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="font-medium text-slate-800 dark:text-slate-100 truncate">{test.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {name(test.subjectName, test.subjectNameTa)} · {test.questionCount} {t.questions} · {test.duration} {t.minutes}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge tone={test.status === 'in-progress' ? 'amber' : 'green'}>{test.status === 'in-progress' ? t.inProgress : t.available}</Badge>
                    <Button size="sm" onClick={() => onNavigate('my-tests')}>{test.status === 'in-progress' ? t.resume : t.start}</Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {upcoming > 0 && todo.length > 0 && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{t.upcoming(upcoming)}</p>}
        </Panel>

        <Panel title={t.week} actions={<span className="text-xs text-slate-500 dark:text-slate-400">{t.weekHint(weekAnswers, weekAnswers ? Math.round((weekCorrect / weekAnswers) * 100) : null)}</span>}>
          <div className="flex items-end gap-2 h-36" role="img" aria-label={t.weekHint(weekAnswers, null)}>
            {summary.days.map((d: any, i: number) => {
              const isToday = i === summary.days.length - 1;
              const day = new Date(`${d.day}T00:00:00`);
              const h = d.answers ? Math.max(8, (d.answers / weekMax) * 100) : 4;
              const rightShare = d.answers ? (d.correct / d.answers) * 100 : 0;
              return (
                <div key={d.day} className="flex-1 h-full flex flex-col items-center justify-end gap-1">
                  {d.answers > 0 && <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">{d.answers}</span>}
                  <div className={`w-full max-w-[2.5rem] rounded-lg overflow-hidden flex flex-col-reverse ${d.answers ? 'bg-rose-300/70 dark:bg-rose-500/40' : 'bg-slate-100 dark:bg-slate-700'}`} style={{ height: `${h}%` }}>
                    <div className="bg-gradient-to-t from-emerald-500 to-teal-400" style={{ height: `${rightShare}%` }} />
                  </div>
                  <span className={`text-[11px] ${isToday ? 'font-bold text-indigo-600 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400'}`}>{isToday ? t.today : t.days[day.getDay()]}</span>
                </div>
              );
            })}
          </div>
          {!weekAnswers && <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">{t.noWeek}</p>}
        </Panel>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Panel title={t.subjects} actions={<Button size="sm" variant="ghost" onClick={() => onNavigate('progress')}>{t.progress}</Button>}>
          {k.testsTaken ? (
            <PercentBars passMark={progress.passMark} items={progress.bySubject.map((s: any) => ({ key: s.subjectId, label: name(s.nameEn, s.nameTa), value: s.average }))} />
          ) : (
            <EmptyState>{t.noResults}</EmptyState>
          )}
        </Panel>
        <Panel title={t.practise} actions={<Button size="sm" variant="ghost" onClick={() => onNavigate('practice')}>{t.practiseNow}</Button>}>
          <PercentBars
            items={(progress.weakChapters || []).slice(0, 5).map((c: any) => ({
              key: c.chapterId,
              label: `${c.number}. ${name(c.nameEn, c.nameTa)}`,
              sublabel: name(c.subjectEn, c.subjectTa),
              value: c.accuracy,
              onClick: () => onNavigate('practice'),
            }))}
            emptyText="👍"
          />
        </Panel>
        <Panel title={t.coverage}>
          <p className="-mt-1 mb-3 text-xs text-slate-500 dark:text-slate-400">{t.coverageHint}</p>
          <ul className="space-y-3">
            {bank.map((s: any) => {
              const pct = s.questions ? Math.round((s.done / s.questions) * 100) : 0;
              return (
                <li key={s.subjectId}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700 dark:text-slate-200">{name(s.nameEn, s.nameTa)}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {s.done} {t.of} {s.questions}
                    </span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${Math.max(pct, s.done ? 2 : 0)}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>
    </div>
  );
};

export default StudentHome;
