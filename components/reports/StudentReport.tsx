import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Panel, Button, Badge, Alert, Spinner, StatTile, Table, EmptyState, apiError, classLabel, formatDate } from '../common/ui';
import { TrendChart, PercentBars } from './charts';

// One student's progress: used by school staff (any student of the school) and
// by the student (their own, at /student/progress).

const TEXT = {
  en: {
    progress: 'My Progress', testsTaken: 'Tests taken', average: 'Average', best: 'Best', last: 'Last test', missed: 'Missed tests',
    trend: 'Scores over time', you: 'Score', student: 'Student', classAvg: 'Class average', subjects: 'Average by subject',
    weak: 'Needs practice', strong: 'Strong chapters', history: 'Test history', test: 'Test', subject: 'Subject', date: 'Date',
    marks: 'Marks', percent: '%', rightWrong: 'Right / Wrong / Skipped', none: 'No tests submitted yet.', atRisk: 'Needs attention',
    missedList: 'Missed tests', chapterHint: 'Chapters answered at least 3 times', back: 'Back', accuracy: 'correct', ch: 'Ch.',
    showTable: 'Show as table', hideTable: 'Hide table',
    noStrong: 'No chapter at 60% or more yet', noWeak: 'Every chapter is at 60% or more',
    byLevel: 'Correct answers by level', levels: { easy: 'Easy', medium: 'Medium', hard: 'Hard' } as Record<string, string>,
  },
  ta: {
    progress: 'என் முன்னேற்றம்', testsTaken: 'எழுதிய தேர்வுகள்', average: 'சராசரி', best: 'அதிகபட்சம்', last: 'கடைசி தேர்வு', missed: 'தவறவிட்டவை',
    trend: 'காலப்போக்கில் மதிப்பெண்கள்', you: 'மதிப்பெண்', student: 'மாணவர்', classAvg: 'வகுப்புச் சராசரி', subjects: 'பாடவாரியான சராசரி',
    weak: 'பயிற்சி தேவை', strong: 'வலுவான பாடங்கள்', history: 'தேர்வு வரலாறு', test: 'தேர்வு', subject: 'பாடம்', date: 'தேதி',
    marks: 'மதிப்பெண்', percent: '%', rightWrong: 'சரி / தவறு / விடுபட்டவை', none: 'இன்னும் தேர்வுகள் எழுதவில்லை.', atRisk: 'கவனம் தேவை',
    missedList: 'தவறவிட்ட தேர்வுகள்', chapterHint: 'குறைந்தது 3 முறை பதிலளித்த பாடங்கள்', back: 'பின்செல்', accuracy: 'சரி', ch: 'பா.',
    showTable: 'அட்டவணையாகக் காட்டு', hideTable: 'அட்டவணையை மறை',
    noStrong: 'இன்னும் 60% எட்டிய பாடம் இல்லை', noWeak: 'எல்லா பாடங்களும் 60% அல்லது அதற்கு மேல்',
    byLevel: 'நிலைவாரியான சரியான விடைகள்', levels: { easy: 'எளிது', medium: 'நடுத்தரம்', hard: 'கடினம்' } as Record<string, string>,
  },
};

interface Report {
  passMark: number;
  student: { _id: string; name: string; admissionNumber: string | null; classGrade: number; section: string | null; phone?: string; email?: string };
  kpis: { testsTaken: number; average: number | null; best: number | null; last: number | null; missed: number; atRisk: boolean };
  history: { attemptId: string; title: string; subjectEn: string; subjectTa: string; submittedAt: string; percentage: number; marksObtained: number; totalMarks: number; correct: number; wrong: number; skipped: number; classAverage: number | null }[];
  bySubject: { subjectId: string; nameEn: string; nameTa: string; average: number | null; tests: number }[];
  byDifficulty?: { difficulty: string; accuracy: number; answered: number }[];
  weakChapters: { chapterId: string; number: number; nameEn: string; nameTa: string; subjectEn: string; subjectTa: string; accuracy: number; answered: number }[];
  strongChapters: Report['weakChapters'];
  missed: { testId: string; title: string; closedAt: string; subjectEn: string; subjectTa: string }[];
}

const StudentReport: React.FC<{ studentId?: string; onBack?: () => void }> = ({ studentId, onBack }) => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState('');
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    setReport(null);
    api
      .get(studentId ? `/reports/students/${studentId}` : '/student/progress')
      .then((res) => setReport(res.data.data))
      .catch((err) => setError(apiError(err, 'Could not load the report')));
  }, [studentId]);

  if (error) return <Alert>{error}</Alert>;
  if (!report) return <Spinner />;

  const { student, kpis } = report;
  const name = (en: string, taName?: string) => (ta && taName ? taName : en);
  const trend = report.history.map((h, i) => ({
    label: `${i + 1}. ${new Date(h.submittedAt).toLocaleDateString(ta ? 'ta-IN' : 'en-IN', { day: 'numeric', month: 'short' })}`,
    value: h.percentage,
    compare: h.classAverage,
    detail: `${h.title} · ${name(h.subjectEn, h.subjectTa)}`,
  }));

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{studentId ? student.name : t.progress}</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {student.admissionNumber && <span className="font-mono">{student.admissionNumber}</span>} · {classLabel(student.classGrade, student.section)}
            {student.phone && <> · {student.phone}</>}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {kpis.atRisk && <Badge tone="red">⚠ {t.atRisk}</Badge>}
          {onBack && (
            <Button variant="secondary" onClick={onBack}>
              {t.back}
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <StatTile label={t.testsTaken} value={kpis.testsTaken} />
        <StatTile label={t.average} value={kpis.average !== null ? `${kpis.average}%` : '—'} tone={kpis.average !== null && kpis.average < report.passMark ? 'danger' : 'default'} />
        <StatTile label={t.best} value={kpis.best !== null ? `${kpis.best}%` : '—'} />
        <StatTile label={t.last} value={kpis.last !== null ? `${kpis.last}%` : '—'} />
        <StatTile label={t.missed} value={kpis.missed} tone={kpis.missed >= 2 ? 'warn' : 'default'} />
      </div>

      {report.history.length === 0 ? (
        <Panel>
          <EmptyState>{t.none}</EmptyState>
        </Panel>
      ) : (
        <>
          <Panel
            title={t.trend}
            actions={
              <Button size="sm" variant="ghost" onClick={() => setShowTable(!showTable)}>
                {showTable ? t.hideTable : t.showTable}
              </Button>
            }
          >
            <TrendChart data={trend} valueLabel={studentId ? student.name : t.you} compareLabel={t.classAvg} passMark={report.passMark} />
            {showTable && (
              <div className="mt-4">
                <Table head={['#', t.test, t.you, t.classAvg]}>
                  {trend.map((p, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2">{p.label}</td>
                      <td className="px-4 py-2">{p.detail}</td>
                      <td className="px-4 py-2">{p.value}%</td>
                      <td className="px-4 py-2">{p.compare ?? '—'}%</td>
                    </tr>
                  ))}
                </Table>
              </div>
            )}
          </Panel>

          <div className="grid lg:grid-cols-3 gap-4">
            <Panel title={t.subjects}>
              <PercentBars passMark={report.passMark} items={report.bySubject.map((s) => ({ key: s.subjectId, label: name(s.nameEn, s.nameTa), sublabel: `${s.tests} ${ta ? 'தேர்வுகள்' : s.tests === 1 ? 'test' : 'tests'}`, value: s.average }))} />
              {report.byDifficulty && report.byDifficulty.length > 0 && (
                <>
                  <h3 className="mt-6 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{t.byLevel}</h3>
                  <PercentBars items={report.byDifficulty.map((d) => ({ key: d.difficulty, label: t.levels[d.difficulty] || d.difficulty, value: d.accuracy }))} />
                </>
              )}
            </Panel>
            <Panel title={t.weak}>
              <PercentBars
                items={report.weakChapters.map((c) => ({ key: c.chapterId, label: `${t.ch} ${c.number} ${name(c.nameEn, c.nameTa)}`, sublabel: name(c.subjectEn, c.subjectTa), value: c.accuracy }))}
                emptyText={t.noWeak}
              />
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">% {t.accuracy} · {t.chapterHint} · 60%</p>
            </Panel>
            <Panel title={t.strong}>
              <PercentBars
                items={report.strongChapters.map((c) => ({ key: c.chapterId, label: `${t.ch} ${c.number} ${name(c.nameEn, c.nameTa)}`, sublabel: name(c.subjectEn, c.subjectTa), value: c.accuracy }))}
                emptyText={t.noStrong}
              />
            </Panel>
          </div>

          <Panel title={t.history}>
            <Table head={[t.date, t.test, t.subject, t.marks, t.percent, t.classAvg, t.rightWrong]}>
              {[...report.history].reverse().map((h) => (
                <tr key={h.attemptId}>
                  <td className="px-4 py-2 whitespace-nowrap">{formatDate(h.submittedAt)}</td>
                  <td className="px-4 py-2 font-medium text-slate-800 dark:text-slate-100">{h.title}</td>
                  <td className="px-4 py-2">{name(h.subjectEn, h.subjectTa)}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {h.marksObtained} / {h.totalMarks}
                  </td>
                  <td className={`px-4 py-2 font-semibold ${h.percentage < report.passMark ? 'text-red-600 dark:text-red-400' : ''}`}>{h.percentage}%</td>
                  <td className="px-4 py-2">{h.classAverage ?? '—'}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {h.correct} / {h.wrong} / {h.skipped}
                  </td>
                </tr>
              ))}
            </Table>
          </Panel>
        </>
      )}

      {report.missed.length > 0 && (
        <Panel title={t.missedList}>
          <ul className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
            {report.missed.map((m) => (
              <li key={m.testId} className="py-2 flex justify-between gap-3">
                <span className="text-slate-700 dark:text-slate-200">
                  {m.title} <span className="text-slate-500">· {name(m.subjectEn, m.subjectTa)}</span>
                </span>
                <span className="text-slate-500 whitespace-nowrap">{formatDate(m.closedAt)}</span>
              </li>
            ))}
          </ul>
        </Panel>
      )}
    </div>
  );
};

export default StudentReport;
