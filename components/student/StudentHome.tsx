import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { Panel, Button, Badge, Spinner, StatTile, EmptyState, classLabel, boardLabel } from '../common/ui';
import { PercentBars } from '../reports/charts';

// Student home: what to do next (tests), how they are doing, what to practise.

const TEXT = {
  en: {
    hello: 'Hello', next: 'Your tests', noTests: 'No tests waiting. Well done!', allTests: 'All my tests', start: 'Start', resume: 'Continue',
    upcoming: (n: number) => `${n} more test${n === 1 ? '' : 's'} coming up`, average: 'My average', taken: 'Tests written', last: 'Last test',
    subjects: 'My subjects', practise: 'Practise these chapters', practiseNow: 'Practise', progress: 'See my progress',
    noResults: 'Your results appear here after your first test.', inProgress: 'In progress', available: 'Ready', minutes: 'min', questions: 'questions',
  },
  ta: {
    hello: 'வணக்கம்', next: 'உங்கள் தேர்வுகள்', noTests: 'காத்திருக்கும் தேர்வுகள் இல்லை. நன்று!', allTests: 'என் எல்லா தேர்வுகள்', start: 'தொடங்கு', resume: 'தொடர்',
    upcoming: (n: number) => `இன்னும் ${n} தேர்வுகள் வர உள்ளன`, average: 'என் சராசரி', taken: 'எழுதிய தேர்வுகள்', last: 'கடைசி தேர்வு',
    subjects: 'என் பாடங்கள்', practise: 'இந்தப் பாடங்களைப் பயிற்சி செய்யுங்கள்', practiseNow: 'பயிற்சி', progress: 'என் முன்னேற்றம்',
    noResults: 'முதல் தேர்வுக்குப் பின் உங்கள் முடிவுகள் இங்கே தெரியும்.', inProgress: 'நடைபெறுகிறது', available: 'தயார்', minutes: 'நிமி', questions: 'கேள்விகள்',
  },
};

const StudentHome: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { currentUser } = useAuth();
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [tests, setTests] = useState<any[] | null>(null);
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    api.get('/student/assessments').then((res) => setTests(res.data.data)).catch(() => setTests([]));
    api.get('/student/progress').then((res) => setProgress(res.data.data)).catch(() => setProgress({ kpis: {}, bySubject: [], weakChapters: [] }));
  }, []);

  if (!tests || !progress) return <Spinner />;

  const todo = tests.filter((x) => x.status === 'available' || x.status === 'in-progress');
  const upcoming = tests.filter((x) => x.status === 'upcoming').length;
  const k = progress.kpis || {};
  const name = (en: string, taName?: string) => (ta && taName ? taName : en);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
          {t.hello}, {currentUser?.name?.split(' ')[0]}!
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {classLabel(currentUser?.classGrade, currentUser?.section)} · {boardLabel(currentUser?.board)}
          {currentUser?.schoolName && ` · ${currentUser.schoolName}`}
        </p>
      </div>

      <Panel
        title={t.next}
        actions={
          <Button size="sm" variant="ghost" onClick={() => onNavigate('my-tests')}>
            {t.allTests}
          </Button>
        }
      >
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
                  <Button size="sm" onClick={() => onNavigate('my-tests')}>
                    {test.status === 'in-progress' ? t.resume : t.start}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {upcoming > 0 && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{t.upcoming(upcoming)}</p>}
      </Panel>

      <div className="grid grid-cols-3 gap-3">
        <StatTile label={t.average} value={k.average != null ? `${k.average}%` : '—'} tone={k.atRisk ? 'warn' : 'default'} />
        <StatTile label={t.taken} value={k.testsTaken ?? 0} />
        <StatTile label={t.last} value={k.last != null ? `${k.last}%` : '—'} />
      </div>

      {k.testsTaken ? (
        <div className="grid lg:grid-cols-2 gap-4">
          <Panel
            title={t.subjects}
            actions={
              <Button size="sm" variant="ghost" onClick={() => onNavigate('progress')}>
                {t.progress}
              </Button>
            }
          >
            <PercentBars passMark={progress.passMark} items={progress.bySubject.map((s: any) => ({ key: s.subjectId, label: name(s.nameEn, s.nameTa), value: s.average }))} />
          </Panel>
          <Panel
            title={t.practise}
            actions={
              <Button size="sm" variant="ghost" onClick={() => onNavigate('practice')}>
                {t.practiseNow}
              </Button>
            }
          >
            <PercentBars
              items={progress.weakChapters.slice(0, 4).map((c: any) => ({
                key: c.chapterId,
                label: `${c.number}. ${name(c.nameEn, c.nameTa)}`,
                sublabel: name(c.subjectEn, c.subjectTa),
                value: c.accuracy,
                onClick: () => onNavigate('practice'),
              }))}
              emptyText="👍"
            />
          </Panel>
        </div>
      ) : (
        <Panel>
          <EmptyState>{t.noResults}</EmptyState>
        </Panel>
      )}
    </div>
  );
};

export default StudentHome;
