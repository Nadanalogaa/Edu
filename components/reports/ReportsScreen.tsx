import React, { useEffect, useMemo, useState } from 'react';
import api from '../../services/api';
import { PageHeader, Panel, Button, SelectInput, TextInput, Badge, Alert, Spinner, StatTile, Table, EmptyState, apiError, classLabel, CLASS_GRADES } from '../common/ui';
import { useSubjects } from '../assessments/syllabus';
import { TrendChart, PercentBars, weekLabel } from './charts';
import StudentReport from './StudentReport';

interface StudentRow {
  _id: string;
  name: string;
  admissionNumber: string | null;
  classGrade: number;
  section: string | null;
  testsTaken: number;
  assigned: number;
  missed: number;
  average: number | null;
  lastPercentage: number | null;
  trend: number | null;
  atRisk: boolean;
}

interface Overview {
  passMark: number;
  kpis: { tests: number; attempts: number; studentsTested: number; students: number; average: number | null; passRate: number | null; participation: number | null; atRisk: number };
  trend: { week: string; average: number; attempts: number }[];
  bySubject: { subjectId: string; nameEn: string; average: number; attempts: number; tests: number }[];
  byClass: { classGrade: number; section: string | null; average: number; students: number }[];
  weakChapters: { chapterId: string; number: number; nameEn: string; subjectEn: string; accuracy: number; answered: number }[];
  recentTests: { testId: string; title: string; classGrade: number; average: number; submitted: number; lastSubmitted: string }[];
  atRisk: StudentRow[];
  top: StudentRow[];
}

const PERIODS: Record<string, number | null> = { all: null, '30': 30, '90': 90 };

const trendBadge = (trend: number | null) => {
  if (trend === null) return <span className="text-slate-400">—</span>;
  if (trend >= 5) return <span className="text-emerald-700 dark:text-emerald-400">▲ {trend}</span>;
  if (trend <= -5) return <span className="text-red-600 dark:text-red-400">▼ {Math.abs(trend)}</span>;
  return <span className="text-slate-500">● steady</span>;
};

/** School performance reports for school admins and teachers. */
const ReportsScreen: React.FC = () => {
  const [tab, setTab] = useState<'overview' | 'students'>('overview');
  const [filters, setFilters] = useState({ classGrade: '' as number | '', section: '', subjectId: '', period: 'all' });
  const [sections, setSections] = useState<{ classGrade: number; section: string | null }[]>([]);
  const [overview, setOverview] = useState<Overview | null>(null);
  const [students, setStudents] = useState<StudentRow[] | null>(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<{ key: keyof StudentRow; dir: 1 | -1 }>({ key: 'average', dir: 1 });
  const [error, setError] = useState('');
  const [openStudent, setOpenStudent] = useState<string | null>(null);
  const subjects = useSubjects(filters.classGrade);

  useEffect(() => {
    api.get('/assessments/sections').then((res) => setSections(res.data.data)).catch(() => setSections([]));
  }, []);

  const params = useMemo(() => {
    const days = PERIODS[filters.period];
    return {
      classGrade: filters.classGrade || undefined,
      section: filters.section || undefined,
      subjectId: filters.subjectId || undefined,
      from: days ? new Date(Date.now() - days * 86400000).toISOString() : undefined,
    };
  }, [filters]);

  useEffect(() => {
    setError('');
    setOverview(null);
    setStudents(null);
    api.get('/reports/overview', { params }).then((res) => setOverview(res.data.data)).catch((err) => setError(apiError(err, 'Could not load reports')));
    api.get('/reports/students', { params }).then((res) => setStudents(res.data.data)).catch(() => setStudents([]));
  }, [params]);

  const sortedStudents = useMemo(() => {
    const q = search.trim().toLowerCase();
    const rows = (students || []).filter((s) => !q || s.name.toLowerCase().includes(q) || (s.admissionNumber || '').toLowerCase().includes(q));
    return [...rows].sort((a, b) => {
      const av = a[sort.key] as any;
      const bv = b[sort.key] as any;
      if (av === null || av === undefined) return 1;
      if (bv === null || bv === undefined) return -1;
      return (av > bv ? 1 : av < bv ? -1 : 0) * sort.dir;
    });
  }, [students, search, sort]);

  if (openStudent) return <StudentReport studentId={openStudent} onBack={() => setOpenStudent(null)} />;

  const sectionOptions = sections.filter((s) => s.section && (!filters.classGrade || s.classGrade === filters.classGrade));
  const uniqueSections = [...new Set(sectionOptions.map((s) => s.section!))];

  const exportStudents = () => {
    const escape = (v: any) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const lines = [
      ['Admission no.', 'Name', 'Class', 'Section', 'Tests taken', 'Tests given', 'Missed', 'Average %', 'Last %', 'Trend', 'Needs attention'],
      ...sortedStudents.map((s) => [s.admissionNumber, s.name, s.classGrade, s.section, s.testsTaken, s.assigned, s.missed, s.average, s.lastPercentage, s.trend, s.atRisk ? 'Yes' : '']),
    ];
    const url = URL.createObjectURL(new Blob(['﻿' + lines.map((l) => l.map(escape).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student-report.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const SortHeader: React.FC<{ k: keyof StudentRow; children: React.ReactNode }> = ({ k, children }) => (
    <button type="button" className="uppercase font-semibold" onClick={() => setSort({ key: k, dir: sort.key === k ? ((-sort.dir) as 1 | -1) : 1 })}>
      {children}
      {sort.key === k ? (sort.dir === 1 ? ' ↑' : ' ↓') : ''}
    </button>
  );

  const k = overview?.kpis;

  return (
    <div className="space-y-4">
      <PageHeader title="Reports" subtitle={`Results of class tests. Pass mark ${overview?.passMark ?? 35}%.`} />

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex gap-1 p-1 bg-slate-200/60 dark:bg-slate-800 rounded-lg" role="tablist">
          {(['overview', 'students'] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 text-sm rounded-md font-medium ${tab === t ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {t === 'overview' ? 'Overview' : 'All students'}
            </button>
          ))}
        </div>
        <SelectInput aria-label="Class" className="!w-auto" value={filters.classGrade} onChange={(e) => setFilters({ ...filters, classGrade: e.target.value ? Number(e.target.value) : '', section: '', subjectId: '' })}>
          <option value="">All classes</option>
          {CLASS_GRADES.map((g) => (
            <option key={g} value={g}>
              {g}th
            </option>
          ))}
        </SelectInput>
        <SelectInput aria-label="Section" className="!w-auto" value={filters.section} onChange={(e) => setFilters({ ...filters, section: e.target.value })}>
          <option value="">All sections</option>
          {uniqueSections.map((s) => (
            <option key={s} value={s}>
              Section {s}
            </option>
          ))}
        </SelectInput>
        <SelectInput aria-label="Subject" className="!w-auto" value={filters.subjectId} disabled={!filters.classGrade} onChange={(e) => setFilters({ ...filters, subjectId: e.target.value })}>
          <option value="">{filters.classGrade ? 'All subjects' : 'Subject (pick a class)'}</option>
          {subjects.map((s) => (
            <option key={s._id} value={s._id}>
              {s.nameEn}
            </option>
          ))}
        </SelectInput>
        <SelectInput aria-label="Period" className="!w-auto" value={filters.period} onChange={(e) => setFilters({ ...filters, period: e.target.value })}>
          <option value="all">All time</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </SelectInput>
      </div>

      {error && <Alert>{error}</Alert>}

      {tab === 'overview' &&
        (!overview ? (
          !error && <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <StatTile label="Average score" value={k!.average !== null ? `${k!.average}%` : '—'} hint={`${k!.attempts} answer sheets · ${k!.tests} tests`} />
              <StatTile label="Passed" value={k!.passRate !== null ? `${k!.passRate}%` : '—'} hint={`of answer sheets scored ${overview.passMark}% or more`} />
              <StatTile label="Took the tests" value={k!.participation !== null ? `${k!.participation}%` : '—'} hint="of students each open test was for" tone={k!.participation !== null && k!.participation < 75 ? 'warn' : 'default'} />
              <StatTile label="Need attention" value={k!.atRisk} hint={`of ${k!.students} students`} tone={k!.atRisk > 0 ? 'warn' : 'default'} />
            </div>

            {k!.attempts === 0 ? (
              <Panel>
                <EmptyState>No test results for this selection yet. Results appear here as students submit tests.</EmptyState>
              </Panel>
            ) : (
              <>
                <Panel title="Average score by week">
                  <TrendChart
                    passMark={overview.passMark}
                    valueLabel="Average"
                    data={overview.trend.map((w) => ({ label: weekLabel(w.week), value: w.average, detail: `Week of ${weekLabel(w.week)} · ${w.attempts} answer sheets` }))}
                  />
                </Panel>

                <div className="grid lg:grid-cols-2 gap-4">
                  <Panel title="Average by subject">
                    <PercentBars passMark={overview.passMark} items={overview.bySubject.map((s) => ({ key: s.subjectId, label: s.nameEn, sublabel: `${s.tests} tests`, value: s.average }))} />
                  </Panel>
                  <Panel title="Average by class and section">
                    <PercentBars
                      passMark={overview.passMark}
                      items={overview.byClass.map((c) => ({
                        key: `${c.classGrade}-${c.section}`,
                        label: classLabel(c.classGrade, c.section),
                        sublabel: `${c.students} students`,
                        value: c.average,
                        onClick: () => setFilters({ ...filters, classGrade: c.classGrade, section: c.section || '' }),
                      }))}
                    />
                  </Panel>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  <Panel title="Chapters to teach again">
                    <PercentBars
                      items={overview.weakChapters.map((c) => ({ key: c.chapterId, label: `Ch. ${c.number} ${c.nameEn}`, sublabel: c.subjectEn, value: c.accuracy }))}
                      emptyText="Not enough answers yet"
                    />
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">% of answers correct, weakest chapters first.</p>
                  </Panel>
                  <Panel title="Students who need attention">
                    {overview.atRisk.length === 0 ? (
                      <EmptyState>Nobody is below the pass mark. 🎉</EmptyState>
                    ) : (
                      <ul className="divide-y divide-slate-200 dark:divide-slate-700">
                        {overview.atRisk.map((s) => (
                          <li key={s._id}>
                            <button type="button" onClick={() => setOpenStudent(s._id)} className="w-full flex items-center justify-between gap-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700/40 rounded-lg px-1">
                              <span>
                                <span className="font-medium text-slate-800 dark:text-slate-100">{s.name}</span>
                                <span className="ml-2 text-xs text-slate-500">
                                  {s.admissionNumber} · {classLabel(s.classGrade, s.section)}
                                </span>
                              </span>
                              <span className="text-right">
                                <span className="font-semibold text-red-600 dark:text-red-400">{s.average !== null ? `${s.average}%` : 'no tests'}</span>
                                {s.missed > 0 && <span className="block text-xs text-slate-500">missed {s.missed}</span>}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Panel>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  <Panel title="Top students">
                    <ol className="divide-y divide-slate-200 dark:divide-slate-700">
                      {overview.top.map((s, i) => (
                        <li key={s._id}>
                          <button type="button" onClick={() => setOpenStudent(s._id)} className="w-full flex items-center justify-between gap-3 py-2 text-left text-sm hover:bg-slate-50 dark:hover:bg-slate-700/40 rounded-lg px-1">
                            <span>
                              <span className="mr-2 text-slate-500">{i + 1}.</span>
                              <span className="font-medium text-slate-800 dark:text-slate-100">{s.name}</span>
                              <span className="ml-2 text-xs text-slate-500">{classLabel(s.classGrade, s.section)}</span>
                            </span>
                            <span className="font-semibold text-slate-800 dark:text-slate-100">{s.average}%</span>
                          </button>
                        </li>
                      ))}
                    </ol>
                  </Panel>
                  <Panel title="Recent tests">
                    <PercentBars passMark={overview.passMark} items={overview.recentTests.map((t) => ({ key: t.testId, label: t.title, sublabel: `${t.classGrade}th · ${t.submitted} submitted`, value: t.average }))} />
                  </Panel>
                </div>
              </>
            )}
          </>
        ))}

      {tab === 'students' && (
        <Panel>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <TextInput aria-label="Search" placeholder="Search name or admission no." className="!w-64" value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button variant="secondary" disabled={!sortedStudents.length} onClick={exportStudents}>
              Download
            </Button>
          </div>
          {!students ? (
            <Spinner />
          ) : sortedStudents.length === 0 ? (
            <EmptyState>No students for this selection.</EmptyState>
          ) : (
            <Table
              head={[
                <SortHeader k="admissionNumber">Adm. no.</SortHeader>,
                <SortHeader k="name">Name</SortHeader>,
                <SortHeader k="section">Class</SortHeader>,
                <SortHeader k="testsTaken">Tests</SortHeader>,
                <SortHeader k="average">Average</SortHeader>,
                <SortHeader k="lastPercentage">Last</SortHeader>,
                <SortHeader k="trend">Trend</SortHeader>,
                '',
              ]}
            >
              {sortedStudents.map((s) => (
                <tr key={s._id} className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/40" onClick={() => setOpenStudent(s._id)}>
                  <td className="px-4 py-2 font-mono">{s.admissionNumber || '—'}</td>
                  <td className="px-4 py-2 font-medium text-slate-800 dark:text-slate-100">{s.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{classLabel(s.classGrade, s.section)}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {s.testsTaken} / {s.assigned}
                    {s.missed > 0 && <span className="ml-1 text-xs text-amber-700 dark:text-amber-400">({s.missed} missed)</span>}
                  </td>
                  <td className={`px-4 py-2 font-semibold ${s.average !== null && s.average < (overview?.passMark ?? 35) ? 'text-red-600 dark:text-red-400' : ''}`}>
                    {s.average !== null ? `${s.average}%` : '—'}
                  </td>
                  <td className="px-4 py-2">{s.lastPercentage !== null ? `${s.lastPercentage}%` : '—'}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs">{trendBadge(s.trend)}</td>
                  <td className="px-4 py-2">{s.atRisk && <Badge tone="red">⚠ Attention</Badge>}</td>
                </tr>
              ))}
            </Table>
          )}
        </Panel>
      )}
    </div>
  );
};

export default ReportsScreen;
