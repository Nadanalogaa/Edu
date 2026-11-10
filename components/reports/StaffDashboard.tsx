import React, { useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { Panel, Alert, Spinner, Button, SelectInput, EmptyState, UsageBar, apiError, classLabel, formatDate } from '../common/ui';
import { DailyBars, PercentBars, useChartColors } from './charts';
import StudentReport from './StudentReport';
import QuestionImage from '../common/QuestionImage';

// Home screen for teachers and school admins. Opens with the students who need
// help (most serious first), then how the classes are doing: practice this
// week, test averages, performance mix, best and most improved students,
// chapters to teach again and the questions most students get wrong. Admins
// also see every teacher's classes and any subject no teacher looks after.

interface Reason { code: string; severity: 'high' | 'medium'; text: string }
interface Student {
  _id: string; name: string; admissionNumber: string | null; classGrade: number | null; section: string | null;
  average: number | null; trend: number | null; testsTaken: number; missed: number;
  practice: { week: number; lastWeek: number; month: number; accuracy: number | null; daysThisWeek: number; lastAt: string | null };
  mistakes: { open: number; fixedThisWeek: number };
  lastActiveAt: string | null; band: string; attention: Reason[]; attentionScore: number;
}
interface Data {
  passMark: number;
  role: 'admin' | 'teacher';
  assignments: { classGrade: number | null; section: string | null; subjectEn: string | null }[] | null;
  kpis: {
    students: number; activeThisWeek: number; testAverage: number | null; testAverageRecent: number | null; testAverageEarlier: number | null;
    testsSubmitted30: number; practiceWeek: number; practiceLastWeek: number; practiceAccuracyWeek: number | null;
    openMistakes: number; fixedThisWeek: number; needAttention: number; watch: number; openDoubts?: number;
  };
  bands: Record<string, number>;
  activity: { day: string; practice: number; practiceAccuracy: number | null; practiceStudents: number; tests: number }[];
  attention: Student[];
  attentionTotal: number;
  top: { best: Student[]; improved: Student[]; practice: Student[] };
  classes: { classGrade: number | null; section: string | null; students: number; testAverage: number | null; practicePerStudent: number; activeRate: number | null; openMistakes: number; needAttention: number }[];
  subjects: { subjectId: string; nameEn: string; classGrade: number; testAverage: number | null; practiceAccuracy: number | null; practiceWeek: number; openMistakes: number; fixedThisWeek: number }[];
  weakChapters: { chapterId: string; number: number; nameEn: string; subjectEn: string; accuracy: number; testAccuracy: number | null; practiceAccuracy: number | null; answered: number }[];
  missedQuestions: { questionId: string; text: string; imageUrl: string | null; chapter: string | null; subjectEn: string; students: number; wrong: number }[];
  teachers?: { _id: string; name: string; email: string; wholeSchool: boolean; assignments: { classGrade: number | null; section: string | null; subjectEn: string | null }[]; testsLast30Days: number; lastTestAt: string | null; students: number; testAverage: number | null; practiceWeek: number; needAttention: number }[];
  gaps?: { classGrade: number; section: string | null; subjects: string[] }[];
}
interface SchoolInfo {
  school: { name: string; code: string; board: string; subscriptionExpiresAt: string | null };
  activeStudents: number; inactiveStudents: number; inactiveTeachers: number; studentLimit: number;
}

const BANDS = [
  { key: 'excellent', label: 'Excellent', range: '80% and above' },
  { key: 'good', label: 'Good', range: '60–79%' },
  { key: 'average', label: 'Average', range: '35–59%' },
  { key: 'struggling', label: 'Struggling', range: 'below 35%' },
  { key: 'notStarted', label: 'No tests yet', range: '' },
];
// Diverging blue ↔ red with a neutral middle (validated); "no tests yet" is a hatched outline
const BAND_COLORS = {
  light: { excellent: '#184f95', good: '#5598e7', average: '#d6d4cc', struggling: '#e34948' },
  dark: { excellent: '#86b6ef', good: '#3987e5', average: '#4a4945', struggling: '#e66767' },
} as Record<string, Record<string, string>>;

const fmt = (n: number) => n.toLocaleString('en-IN');
const dayLabel = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
const weekday = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { weekday: 'long' });
const ago = (iso: string | null) => {
  if (!iso) return 'never';
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  return days <= 0 ? 'today' : days === 1 ? 'yesterday' : `${days} days ago`;
};
const assignmentLabel = (a: { classGrade: number | null; section: string | null; subjectEn: string | null }) =>
  !a.classGrade && !a.section && !a.subjectEn ? 'Whole school' : [a.classGrade ? classLabel(a.classGrade, a.section) : 'All classes', a.subjectEn || 'all subjects'].join(' · ');
const initials = (name: string) => name.split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase();
const greeting = () => {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
};

/** Change against an earlier value, with an arrow and a word (not colour alone). */
const Delta: React.FC<{ now: number | null; before: number | null; unit?: string; percent?: boolean }> = ({ now, before, unit = '', percent }) => {
  if (now === null || before === null || before === undefined) return null;
  const diff = percent ? (before ? Math.round(((now - before) / before) * 100) : null) : Math.round((now - before) * 10) / 10;
  if (diff === null) return null;
  const up = diff > 0;
  const flat = diff === 0;
  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-semibold ${flat ? 'text-slate-500' : up ? 'text-emerald-700 dark:text-emerald-400' : 'text-red-700 dark:text-red-400'}`}>
      {flat ? '■' : up ? '▲' : '▼'} {flat ? 'no change' : `${up ? '+' : ''}${diff}${percent ? '%' : unit}`}
    </span>
  );
};

const Kpi: React.FC<{ label: string; value: React.ReactNode; sub?: React.ReactNode; icon: string; tone?: 'default' | 'danger' | 'good'; onClick?: () => void }> = ({
  label, value, sub, icon, tone = 'default', onClick,
}) => {
  const ring =
    tone === 'danger'
      ? 'border-red-300 dark:border-red-800 bg-gradient-to-br from-red-50 to-white dark:from-red-950/40 dark:to-slate-800/50'
      : tone === 'good'
        ? 'border-emerald-200 dark:border-emerald-900 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-slate-800/50'
        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50';
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag {...(onClick && { type: 'button', onClick })} className={`text-left p-4 rounded-2xl border shadow-sm ${ring} ${onClick ? 'hover:shadow-md transition-shadow' : ''}`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
        <span className="text-lg" aria-hidden="true">{icon}</span>
      </div>
      <p className="mt-1.5 text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">{value}</p>
      {sub && <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sub}</div>}
    </Tag>
  );
};

const Avatar: React.FC<{ name: string; tone?: 'red' | 'amber' | 'indigo' | 'emerald' }> = ({ name, tone = 'indigo' }) => {
  const tones = {
    red: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
    indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300',
    emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  };
  return <span className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${tones[tone]}`}>{initials(name)}</span>;
};

/** One student who needs help: why, and the numbers behind it. */
const AttentionCard: React.FC<{ s: Student; passMark: number; onOpen: () => void }> = ({ s, passMark, onOpen }) => {
  const high = s.attention.some((r) => r.severity === 'high');
  return (
    <li className={`rounded-xl border p-3 sm:p-4 bg-white dark:bg-slate-800/60 ${high ? 'border-red-200 dark:border-red-900/70' : 'border-amber-200 dark:border-amber-900/60'}`}>
      <div className="flex items-start gap-3">
        <Avatar name={s.name} tone={high ? 'red' : 'amber'} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <p className="font-semibold text-slate-800 dark:text-slate-100">{s.name}</p>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {classLabel(s.classGrade, s.section)} · {s.admissionNumber}
            </span>
            <span className={`ml-auto text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${high ? 'bg-red-600 text-white' : 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200'}`}>
              {high ? '⚠ Act now' : '● Watch'}
            </span>
          </div>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {s.attention.map((r) => (
              <li key={r.code} className={`text-xs px-2 py-1 rounded-lg ${r.severity === 'high' ? 'bg-red-50 text-red-800 dark:bg-red-950/50 dark:text-red-200' : 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200'}`}>
                {r.text}
              </li>
            ))}
          </ul>
          <dl className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {[
              ['Test average', s.average !== null ? `${s.average}%` : '—', s.average !== null && s.average < passMark],
              ['Practice this week', `${s.practice.week} Qs`, s.practice.week === 0],
              ['Open mistakes', String(s.mistakes.open), s.mistakes.open >= 15],
              ['Last active', ago(s.lastActiveAt), !s.lastActiveAt],
            ].map(([k, v, bad]) => (
              <div key={k as string} className="rounded-lg bg-slate-50 dark:bg-slate-900/50 px-2 py-1.5">
                <dt className="text-slate-500 dark:text-slate-400">{k}</dt>
                <dd className={`font-semibold tabular-nums ${bad ? 'text-red-700 dark:text-red-300' : 'text-slate-800 dark:text-slate-100'}`}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <Button size="sm" variant="secondary" onClick={onOpen}>
          Open full report →
        </Button>
      </div>
    </li>
  );
};

/** How many students are in each performance band, as one segmented bar with labelled counts. */
const BandsBar: React.FC<{ bands: Record<string, number>; total: number }> = ({ bands, total }) => {
  const c = useChartColors();
  const palette = BAND_COLORS[c.surface === '#ffffff' ? 'light' : 'dark'];
  if (!total) return <EmptyState>No students yet.</EmptyState>;
  return (
    <div>
      <div className="flex h-9 w-full overflow-hidden rounded-lg gap-[2px]" role="img" aria-label={BANDS.map((b) => `${b.label} ${bands[b.key] || 0}`).join(', ')}>
        {BANDS.filter((b) => bands[b.key]).map((b) => (
          <div
            key={b.key}
            title={`${b.label}: ${bands[b.key]} students`}
            className="h-full first:rounded-l-lg last:rounded-r-lg"
            style={{
              width: `${(bands[b.key] / total) * 100}%`,
              background:
                b.key === 'notStarted'
                  ? `repeating-linear-gradient(45deg, transparent 0 4px, ${c.grid} 4px 6px)`
                  : palette[b.key],
              ...(b.key === 'notStarted' && { boxShadow: `inset 0 0 0 1px ${c.axis}` }),
            }}
          />
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {BANDS.map((b) => (
          <li key={b.key} className="flex items-start gap-2">
            <span
              className="mt-1 w-3 h-3 rounded-sm shrink-0"
              style={b.key === 'notStarted' ? { boxShadow: `inset 0 0 0 1px ${c.axis}`, background: `repeating-linear-gradient(45deg, transparent 0 2px, ${c.grid} 2px 3px)` } : { background: palette[b.key] }}
              aria-hidden="true"
            />
            <span className="text-sm leading-tight">
              <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums">{bands[b.key] || 0}</span>{' '}
              <span className="text-slate-700 dark:text-slate-200">{b.label}</span>
              {b.range && <span className="block text-xs text-slate-500 dark:text-slate-400">{b.range}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopList: React.FC<{ students: Student[]; metric: (s: Student) => React.ReactNode; empty: string; onOpen: (id: string) => void }> = ({ students, metric, empty, onOpen }) =>
  students.length === 0 ? (
    <p className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">{empty}</p>
  ) : (
    <ol className="space-y-1">
      {students.map((s, i) => (
        <li key={s._id}>
          <button type="button" onClick={() => onOpen(s._id)} className="w-full flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/40 text-left">
            <span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-amber-400 text-amber-950' : i === 1 ? 'bg-slate-300 text-slate-800' : i === 2 ? 'bg-orange-300 text-orange-950' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
              {i + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium text-slate-800 dark:text-slate-100">{s.name}</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{classLabel(s.classGrade, s.section)}</span>
            </span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-100 tabular-nums">{metric(s)}</span>
          </button>
        </li>
      ))}
    </ol>
  );

const StaffDashboard: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const [data, setData] = useState<Data | null>(null);
  const [school, setSchool] = useState<SchoolInfo | null>(null);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ classKey: '', subjectId: '' });
  const [openStudent, setOpenStudent] = useState<string | null>(null);
  const [showAllAttention, setShowAllAttention] = useState(false);
  const [topTab, setTopTab] = useState<'best' | 'improved' | 'practice'>('best');
  // Class and subject choices come from the unfiltered data
  const [choices, setChoices] = useState<{ classes: Data['classes']; subjects: Data['subjects'] } | null>(null);
  const isAdmin = currentUser?.role === 'admin';

  useEffect(() => {
    if (isAdmin) api.get('/school/overview').then((res) => setSchool(res.data.data)).catch(() => undefined);
  }, [isAdmin]);

  useEffect(() => {
    const [classGrade, section] = filters.classKey.split('|');
    setError('');
    api
      .get('/reports/dashboard', { params: { classGrade: classGrade || undefined, section: section || undefined, subjectId: filters.subjectId || undefined } })
      .then((res) => {
        setData(res.data.data);
        if (!filters.classKey && !filters.subjectId) setChoices({ classes: res.data.data.classes, subjects: res.data.data.subjects });
      })
      .catch((err) => setError(apiError(err, 'Could not load the dashboard')));
  }, [filters]);

  const activity = useMemo(
    () =>
      (data?.activity || []).map((d) => ({
        label: dayLabel(d.day),
        value: d.practice,
        detail: `${weekday(d.day)} · ${d.practiceStudents} students practised${d.practiceAccuracy !== null ? ` · ${d.practiceAccuracy}% correct` : ''}${d.tests ? ` · ${d.tests} test papers` : ''}`,
      })),
    [data]
  );

  if (openStudent) return <StudentReport studentId={openStudent} onBack={() => setOpenStudent(null)} />;
  if (error) return <Alert>{error}</Alert>;
  if (!data) return <Spinner />;

  const k = data.kpis;
  const noAssignments = data.role === 'teacher' && data.assignments?.length === 0;
  const activeRate = k.students ? Math.round((k.activeThisWeek / k.students) * 100) : 0;
  const attentionList = showAllAttention ? data.attention : data.attention.slice(0, 4);
  const firstName = (currentUser?.name || '').split(' ')[0];
  const seatsLeft = school ? school.studentLimit - school.activeStudents : null;
  const expiresIn = school?.school.subscriptionExpiresAt ? Math.ceil((new Date(`${school.school.subscriptionExpiresAt}T23:59:59`).getTime() - Date.now()) / 86400000) : null;

  return (
    <div className="space-y-5">
      {/* Welcome banner with this week's headline numbers */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 text-white p-5 sm:p-7 shadow-lg shadow-indigo-600/20">
        <div className="absolute -right-16 -top-20 w-72 h-72 rounded-full bg-white/10" aria-hidden="true" />
        <div className="absolute right-24 -bottom-24 w-56 h-56 rounded-full bg-white/5" aria-hidden="true" />
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div>
            <p className="text-indigo-100 text-sm">{school ? `${school.school.name} · code ${school.school.code}` : isAdmin ? 'School admin' : 'Teacher'}</p>
            <h1 className="mt-1 text-2xl sm:text-3xl font-bold">
              {greeting()}, {firstName} 👋
            </h1>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {data.assignments === null ? (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/15">Whole school</span>
              ) : (
                data.assignments.map((a, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/15">
                    {assignmentLabel(a)}
                  </span>
                ))
              )}
            </div>
          </div>
          {!noAssignments && (
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:min-w-[30rem]">
              {[
                [fmt(k.practiceWeek), 'questions practised this week'],
                [fmt(k.fixedThisWeek), 'mistakes fixed this week'],
                [`${activeRate}%`, 'students active this week'],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white/12 backdrop-blur px-3 py-3 ring-1 ring-white/20">
                  <p className="text-xl sm:text-2xl font-bold tabular-nums">{v}</p>
                  <p className="text-[11px] sm:text-xs text-indigo-100 leading-tight">{l}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {noAssignments && (
        <Alert tone="info">No classes are assigned to you yet. Ask your school admin to assign your classes and subjects on the Teachers page.</Alert>
      )}

      {/* School admin: licence and approvals */}
      {school && (
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 px-4 py-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-200">Student licence</span>
              <span className="text-slate-500 dark:text-slate-400">{Math.max(0, seatsLeft!)} seats left</span>
            </div>
            <div className="mt-2">
              <UsageBar used={school.activeStudents} limit={school.studentLimit} />
            </div>
          </div>
          {(school.inactiveStudents > 0 || school.inactiveTeachers > 0) && (
            <button type="button" onClick={() => onNavigate(school.inactiveStudents ? 'students' : 'teachers')} className="sm:w-72 text-left rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-4 py-3 text-sm">
              <span className="font-semibold text-amber-900 dark:text-amber-200">Waiting for approval</span>
              <span className="block text-amber-800 dark:text-amber-300">
                {school.inactiveStudents} students, {school.inactiveTeachers} teachers · Review →
              </span>
            </button>
          )}
          {expiresIn !== null && expiresIn <= 30 && (
            <div className="sm:w-72 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
              Subscription ends {formatDate(school.school.subscriptionExpiresAt)} ({expiresIn} days). Contact support to renew.
            </div>
          )}
        </div>
      )}

      {!noAssignments && (
        <>
          {/* Filters */}
          {choices && (choices.classes.length > 1 || choices.subjects.length > 1) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-500 dark:text-slate-400">Show</span>
              {choices.classes.length > 1 && (
                <SelectInput aria-label="Class" className="!w-auto" value={filters.classKey} onChange={(e) => setFilters({ ...filters, classKey: e.target.value })}>
                  <option value="">{isAdmin ? "All classes" : "All my classes"}</option>
                  {choices.classes.map((c) => (
                    <option key={`${c.classGrade}|${c.section}`} value={`${c.classGrade ?? ''}|${c.section ?? ''}`}>
                      {classLabel(c.classGrade, c.section)}
                    </option>
                  ))}
                </SelectInput>
              )}
              {choices.subjects.length > 1 && (
                <SelectInput aria-label="Subject" className="!w-auto" value={filters.subjectId} onChange={(e) => setFilters({ ...filters, subjectId: e.target.value })}>
                  <option value="">All subjects</option>
                  {choices.subjects.map((s) => (
                    <option key={s.subjectId} value={s.subjectId}>
                      {s.nameEn} ({s.classGrade}th)
                    </option>
                  ))}
                </SelectInput>
              )}
              {(filters.classKey || filters.subjectId) && (
                <Button size="sm" variant="ghost" onClick={() => setFilters({ classKey: '', subjectId: '' })}>
                  Clear
                </Button>
              )}
            </div>
          )}

          {/* Key numbers */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
            <Kpi
              label="Need attention"
              icon="🚨"
              tone={k.needAttention ? 'danger' : 'good'}
              value={k.needAttention}
              sub={k.needAttention ? `${k.watch} more to watch` : 'Everyone is on track'}
              onClick={() => document.getElementById('attention')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <Kpi label="Students" icon="👩‍🎓" value={k.students} sub={`${k.activeThisWeek} active this week`} />
            <Kpi
              label="Test average"
              icon="📝"
              value={k.testAverage !== null ? `${k.testAverage}%` : '—'}
              sub={
                k.testAverageRecent !== null ? (
                  <span>
                    Last 30 days {k.testAverageRecent}% <Delta now={k.testAverageRecent} before={k.testAverageEarlier} unit=" pts" />
                  </span>
                ) : (
                  `${k.testsSubmitted30} papers in 30 days`
                )
              }
            />
            <Kpi
              label="Practice this week"
              icon="🎯"
              value={fmt(k.practiceWeek)}
              sub={
                <span>
                  questions <Delta now={k.practiceWeek} before={k.practiceLastWeek} percent /> vs last week
                </span>
              }
            />
            <Kpi label="Practice accuracy" icon="✅" value={k.practiceAccuracyWeek !== null ? `${k.practiceAccuracyWeek}%` : '—'} sub="correct this week" />
            <Kpi label="Open mistakes" icon="📕" value={fmt(k.openMistakes)} sub={`${fmt(k.fixedThisWeek)} fixed this week`} />
          </div>

          {!!k.openDoubts && (
            <button type="button" onClick={() => onNavigate('doubts')}
              className="w-full text-left rounded-2xl border-2 border-violet-300 dark:border-violet-600/60 bg-violet-50 dark:bg-violet-900/20 px-4 py-3 flex flex-wrap items-center gap-3 hover:shadow-md transition-shadow">
              <span className="text-2xl" aria-hidden="true">🙋</span>
              <span className="flex-1 min-w-[12rem]">
                <span className="block font-bold text-violet-900 dark:text-violet-200">
                  Students asked about {k.openDoubts} question{k.openDoubts === 1 ? '' : 's'}
                </span>
                <span className="block text-sm text-violet-800/80 dark:text-violet-300/80">Answer once and every student who asked gets it.</span>
              </span>
              <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">Answer now →</span>
            </button>
          )}

          {/* Students who need help */}
          <section id="attention" className="rounded-3xl border border-red-200 dark:border-red-900/60 bg-gradient-to-b from-red-50/80 to-white dark:from-red-950/30 dark:to-slate-900/20 p-4 sm:p-6 scroll-mt-20">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-bold text-red-900 dark:text-red-200">🚨 Students who need your help</h2>
                <p className="text-sm text-red-800/80 dark:text-red-300/80">Most serious first. A quick word or extra practice this week can turn it around.</p>
              </div>
              {data.attentionTotal > 0 && (
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-red-600 text-white">{data.attentionTotal} students</span>
              )}
            </div>
            {data.attention.length === 0 ? (
              <p className="mt-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 px-4 py-3 text-sm">
                ✓ No student needs attention right now: everyone is taking tests, practising and above the pass mark.
              </p>
            ) : (
              <>
                <ul className="mt-4 grid lg:grid-cols-2 gap-3">
                  {attentionList.map((s) => (
                    <AttentionCard key={s._id} s={s} passMark={data.passMark} onOpen={() => setOpenStudent(s._id)} />
                  ))}
                </ul>
                {data.attention.length > 4 && (
                  <div className="mt-3 text-center">
                    <Button size="sm" variant="ghost" onClick={() => setShowAllAttention(!showAllAttention)}>
                      {showAllAttention ? 'Show fewer' : `Show all ${data.attention.length}`}
                    </Button>
                  </div>
                )}
              </>
            )}
          </section>

          <div className="grid lg:grid-cols-5 gap-5 [&>*]:min-w-0">
            <Panel title="Practice in the last 14 days" className="lg:col-span-3">
              <p className="-mt-2 mb-3 text-sm text-slate-500 dark:text-slate-400">Questions answered each day. Hover a bar for details.</p>
              <DailyBars data={activity} valueLabel="Questions practised" />
            </Panel>
            <Panel title="Performance mix" className="lg:col-span-2">
              <p className="-mt-2 mb-4 text-sm text-slate-500 dark:text-slate-400">Students by test average</p>
              <BandsBar bands={data.bands} total={k.students} />
            </Panel>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 [&>*]:min-w-0">
            <Panel title="🏆 Top students" className="lg:col-span-1">
              <div role="tablist" className="-mt-1 mb-3 inline-flex rounded-xl bg-slate-100 dark:bg-slate-900/60 p-1 text-xs font-semibold">
                {([['best', 'Best scores'], ['improved', 'Most improved'], ['practice', 'Practice stars']] as const).map(([key, label]) => (
                  <button key={key} type="button" role="tab" aria-selected={topTab === key} onClick={() => setTopTab(key)}
                    className={`px-2.5 py-1.5 rounded-lg ${topTab === key ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
                    {label}
                  </button>
                ))}
              </div>
              {topTab === 'best' && <TopList students={data.top.best} metric={(s) => `${s.average}%`} empty="No test results yet" onOpen={setOpenStudent} />}
              {topTab === 'improved' && <TopList students={data.top.improved} metric={(s) => `▲ ${s.trend} pts`} empty="Needs at least two tests per student" onOpen={setOpenStudent} />}
              {topTab === 'practice' && <TopList students={data.top.practice} metric={(s) => `${s.practice.week} Qs`} empty="No practice this week yet" onOpen={setOpenStudent} />}
            </Panel>
            <Panel title="📚 Chapters to teach again" className="lg:col-span-2">
              <p className="-mt-2 mb-3 text-sm text-slate-500 dark:text-slate-400">Lowest share of correct answers in tests and practice together.</p>
              <PercentBars
                passMark={data.passMark}
                emptyText="Not enough answers yet"
                items={data.weakChapters.map((c) => ({
                  key: c.chapterId,
                  label: `Ch. ${c.number} ${c.nameEn}`,
                  sublabel: `${c.subjectEn} · tests ${c.testAccuracy ?? '—'}% · practice ${c.practiceAccuracy ?? '—'}%`,
                  value: c.accuracy,
                }))}
              />
            </Panel>
          </div>

          {data.missedQuestions.length > 0 && (
            <Panel title="❓ Questions most students get wrong">
              <p className="-mt-2 mb-4 text-sm text-slate-500 dark:text-slate-400">Still open in students' Mistake Books. Worth going over in class.</p>
              <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                {data.missedQuestions.map((q) => (
                  <li key={q.questionId} className="rounded-xl border border-slate-200 dark:border-slate-700 p-3 flex flex-col">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="text-slate-500 dark:text-slate-400 truncate">
                        {q.subjectEn}
                        {q.chapter && ` · ${q.chapter}`}
                      </span>
                      <span className="shrink-0 font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-800 dark:bg-red-950/50 dark:text-red-200">{q.students} students</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-800 dark:text-slate-100 line-clamp-3">{q.text}</p>
                    {q.imageUrl && <QuestionImage src={q.imageUrl} />}
                  </li>
                ))}
              </ul>
            </Panel>
          )}

          <div className="grid lg:grid-cols-2 gap-5 [&>*]:min-w-0">
            {data.classes.length > 0 && (
              <Panel title="Classes side by side">
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="w-full text-sm min-w-[30rem]">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        <th className="px-3 py-2 font-semibold">Class</th>
                        <th className="px-3 py-2 font-semibold text-right">Students</th>
                        <th className="px-3 py-2 font-semibold text-right">Test avg</th>
                        <th className="px-3 py-2 font-semibold text-right">Practice / student</th>
                        <th className="px-3 py-2 font-semibold text-right">Active</th>
                        <th className="px-3 py-2 font-semibold text-right">Need help</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                      {data.classes.map((c) => (
                        <tr key={`${c.classGrade}-${c.section}`}>
                          <td className="px-3 py-2.5 font-medium text-slate-800 dark:text-slate-100 whitespace-nowrap">{classLabel(c.classGrade, c.section)}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{c.students}</td>
                          <td className={`px-3 py-2.5 text-right tabular-nums font-semibold ${c.testAverage !== null && c.testAverage < data.passMark ? 'text-red-700 dark:text-red-300' : ''}`}>{c.testAverage !== null ? `${c.testAverage}%` : '—'}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{c.practicePerStudent} Qs</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{c.activeRate ?? 0}%</td>
                          <td className="px-3 py-2.5 text-right">
                            {c.needAttention ? <span className="font-bold text-red-700 dark:text-red-300">{c.needAttention}</span> : <span className="text-emerald-700 dark:text-emerald-400">✓ 0</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Panel>
            )}
            {data.subjects.length > 0 && (
              <Panel title="Subjects">
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="w-full text-sm min-w-[30rem]">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        <th className="px-3 py-2 font-semibold">Subject</th>
                        <th className="px-3 py-2 font-semibold text-right">Test avg</th>
                        <th className="px-3 py-2 font-semibold text-right">Practice correct</th>
                        <th className="px-3 py-2 font-semibold text-right">Practised this week</th>
                        <th className="px-3 py-2 font-semibold text-right">Open mistakes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                      {data.subjects.map((s) => (
                        <tr key={s.subjectId}>
                          <td className="px-3 py-2.5 font-medium text-slate-800 dark:text-slate-100">
                            {s.nameEn} <span className="text-xs text-slate-500">{s.classGrade}th</span>
                          </td>
                          <td className={`px-3 py-2.5 text-right tabular-nums font-semibold ${s.testAverage !== null && s.testAverage < data.passMark ? 'text-red-700 dark:text-red-300' : ''}`}>{s.testAverage !== null ? `${s.testAverage}%` : '—'}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{s.practiceAccuracy !== null ? `${s.practiceAccuracy}%` : '—'}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{fmt(s.practiceWeek)}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">
                            {fmt(s.openMistakes)}
                            {s.fixedThisWeek > 0 && <span className="block text-[11px] text-emerald-700 dark:text-emerald-400 whitespace-nowrap">{s.fixedThisWeek} fixed this week</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Panel>
            )}
          </div>

          {data.teachers && (
            <Panel
              title="👩‍🏫 Teachers"
              actions={
                <Button size="sm" variant="ghost" onClick={() => onNavigate('teachers')}>
                  Assign classes
                </Button>
              }
            >
              {data.gaps && data.gaps.length > 0 && (
                <div className="mb-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
                  <p className="font-semibold">⚠ No teacher looks after:</p>
                  <ul className="mt-1 list-disc pl-5">
                    {data.gaps.map((g) => (
                      <li key={`${g.classGrade}-${g.section}`}>
                        {classLabel(g.classGrade, g.section)}: {g.subjects.join(', ')}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.teachers.length === 0 ? (
                <EmptyState>No teachers yet. Add them on the Teachers page.</EmptyState>
              ) : (
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="w-full text-sm min-w-[40rem]">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        <th className="px-3 py-2 font-semibold">Teacher</th>
                        <th className="px-3 py-2 font-semibold">Looks after</th>
                        <th className="px-3 py-2 font-semibold text-right">Students</th>
                        <th className="px-3 py-2 font-semibold text-right">Test avg</th>
                        <th className="px-3 py-2 font-semibold text-right">Practice this week</th>
                        <th className="px-3 py-2 font-semibold text-right">Need help</th>
                        <th className="px-3 py-2 font-semibold text-right">Tests set (30 days)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                      {data.teachers.map((t) => (
                        <tr key={t._id}>
                          <td className="px-3 py-2.5">
                            <p className="font-medium text-slate-800 dark:text-slate-100">{t.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{t.email}</p>
                          </td>
                          <td className="px-3 py-2.5">
                            <div className="flex flex-wrap gap-1">
                              {t.assignments.length === 0 ? (
                                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">Not assigned</span>
                              ) : (
                                t.assignments.map((a, i) => (
                                  <span key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-200">
                                    {assignmentLabel(a)}
                                  </span>
                                ))
                              )}
                            </div>
                          </td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{t.students}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums font-semibold">{t.testAverage !== null ? `${t.testAverage}%` : '—'}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{fmt(t.practiceWeek)} Qs</td>
                          <td className="px-3 py-2.5 text-right">{t.needAttention ? <span className="font-bold text-red-700 dark:text-red-300">{t.needAttention}</span> : '0'}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">
                            {t.testsLast30Days}
                            {t.lastTestAt && <span className="block text-[11px] text-slate-500">last {ago(t.lastTestAt)}</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Panel>
          )}

          <div className="flex flex-wrap gap-2 justify-center pb-2">
            <Button variant="secondary" onClick={() => onNavigate('reports')}>
              Full reports →
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('tests')}>
              Set a test →
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default StaffDashboard;
