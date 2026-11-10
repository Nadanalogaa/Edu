import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Alert, Spinner, Button, apiError, formatDate } from '../common/ui';
import MockTest, { MockSession } from './MockTest';
import { LEVEL_STYLE } from './ChapterMap';

// Exam prep: the student adds an exam (subject, date, chapters); the app
// spreads the chapters over the days left (weakest first) with a daily target,
// keeps the day before the exam for a full mock test, and tracks each day.
// A timed mock test can also be started any time.

const TEXT = {
  en: {
    title: 'Exam prep', subtitle: 'Add your exam: we plan your revision day by day, weakest chapters first, and finish with a mock test.',
    add: '+ Add an exam', name: 'Exam name', namePh: 'e.g. Quarterly exam – Science', date: 'Exam date', subject: 'Subject', chapters: 'Chapters (none ticked = all)',
    target: 'Questions a day', create: 'Make my plan', cancel: 'Cancel', none: 'No exams added yet. Add your next exam to get a day-by-day revision plan.',
    daysLeft: (n: number) => (n === 0 ? 'Exam today!' : n === 1 ? '1 day left' : `${n} days left`), today: 'Today', mockDay: '📝 Full mock test day', studyTarget: (d: number, t: number) => `${d} / ${t} questions`,
    status: { done: '✓ Done', missed: 'Missed', today: 'Today', upcoming: '' } as Record<string, string>, start: 'Start', remove: 'Remove plan', removeConfirm: 'Remove this exam plan?',
    mock: 'Mock test', mockHint: 'Timed, exam style: answers only at the end.', count: 'Questions', minutes: 'Minutes', startMock: 'Start mock test', mocks: 'Mock tests taken', quick: 'Quick mock test',
    levels: { notStarted: 'Not started', learning: 'Learning', good: 'Good', mastered: 'Mastered' } as Record<string, string>,
  },
  ta: {
    title: 'தேர்வுத் தயாரிப்பு', subtitle: 'உங்கள் தேர்வைச் சேர்த்தால், பலவீனமான பாடங்கள் முதலில் என நாள்தோறும் திருப்புதல் திட்டம் அமைத்து, மாதிரித் தேர்வுடன் முடிப்போம்.',
    add: '+ தேர்வைச் சேர்', name: 'தேர்வின் பெயர்', namePh: 'எ.கா. காலாண்டுத் தேர்வு – அறிவியல்', date: 'தேர்வு நாள்', subject: 'பாடம்', chapters: 'பாடப்பகுதிகள் (தேர்வு செய்யாவிட்டால் அனைத்தும்)',
    target: 'நாளொன்றுக்குக் கேள்விகள்', create: 'திட்டம் அமை', cancel: 'ரத்து', none: 'இன்னும் தேர்வு சேர்க்கவில்லை. அடுத்த தேர்வைச் சேர்த்து நாள்வாரித் திட்டம் பெறுங்கள்.',
    daysLeft: (n: number) => (n === 0 ? 'இன்று தேர்வு!' : `இன்னும் ${n} நாட்கள்`), today: 'இன்று', mockDay: '📝 முழு மாதிரித் தேர்வு நாள்', studyTarget: (d: number, t: number) => `${t} இல் ${d} கேள்விகள்`,
    status: { done: '✓ முடிந்தது', missed: 'தவறியது', today: 'இன்று', upcoming: '' } as Record<string, string>, start: 'தொடங்கு', remove: 'திட்டத்தை நீக்கு', removeConfirm: 'இந்தத் தேர்வுத் திட்டத்தை நீக்கவா?',
    mock: 'மாதிரித் தேர்வு', mockHint: 'நேரக் கட்டுப்பாட்டுடன், தேர்வு போல: விடைகள் இறுதியில் மட்டும்.', count: 'கேள்விகள்', minutes: 'நிமிடங்கள்', startMock: 'மாதிரித் தேர்வைத் தொடங்கு', mocks: 'எழுதிய மாதிரித் தேர்வுகள்', quick: 'விரைவு மாதிரித் தேர்வு',
    levels: { notStarted: 'தொடங்கவில்லை', learning: 'கற்கிறேன்', good: 'நன்று', mastered: 'தேர்ச்சி' } as Record<string, string>,
  },
};

const inputClass = 'w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white';
const tomorrow = () => new Date(Date.now() + 5.5 * 3600000 + 86400000).toISOString().slice(0, 10);

const MockStarter: React.FC<{ subjectId: string; chapterIds: string[]; t: (typeof TEXT)['en']; onStart: (s: MockSession) => void }> = ({ subjectId, chapterIds, t, onStart }) => {
  const [count, setCount] = useState(20);
  const [minutes, setMinutes] = useState(25);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const start = async () => {
    setBusy(true);
    setError('');
    try {
      const res = await api.post('/student/mock-tests/start', { subjectId, chapterIds, count, minutes });
      onStart(res.data.data);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="flex flex-wrap items-end gap-2">
      <label className="text-xs text-slate-600 dark:text-slate-300">
        {t.count}
        <select value={count} onChange={(e) => { const n = Number(e.target.value); setCount(n); setMinutes(Math.round(n * 1.25)); }} className={`${inputClass} mt-0.5 !w-24`}>
          {[10, 20, 30, 40, 50].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>
      <label className="text-xs text-slate-600 dark:text-slate-300">
        {t.minutes}
        <select value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className={`${inputClass} mt-0.5 !w-24`}>
          {[...new Set([10, 15, 20, 25, 30, 40, 50, 60, 75, minutes])].sort((a, b) => a - b).map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>
      <Button disabled={busy} onClick={start}>📝 {t.startMock}</Button>
      {error && <p className="w-full text-xs text-rose-600">{error}</p>}
    </div>
  );
};

const ExamPrep: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [plans, setPlans] = useState<any[] | null>(null);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: '', examDate: tomorrow(), subjectId: '', chapterIds: [] as string[], dailyTarget: 15 });
  const [quickSubject, setQuickSubject] = useState('');
  const [mock, setMock] = useState<MockSession | null>(null);
  const [error, setError] = useState('');
  const name = (v: { nameEn?: string; nameTa?: string; en?: string; ta?: string }) => (ta ? v.nameTa || v.ta : v.nameEn || v.en) || v.nameEn || v.en || '';

  const load = useCallback(() => {
    api.get('/student/exam-plans').then((res) => setPlans(res.data.data)).catch((err) => setError(apiError(err)));
  }, []);
  useEffect(() => {
    load();
    api.get('/student/practice/options').then((res) => {
      setSubjects(res.data.data.subjects);
      setForm((f) => ({ ...f, subjectId: f.subjectId || res.data.data.subjects[0]?.subjectId || '' }));
      setQuickSubject(res.data.data.subjects[0]?.subjectId || '');
    }).catch(() => undefined);
  }, [load]);

  if (mock) return <MockTest session={mock} ta={ta} onExit={() => { setMock(null); load(); }} />;

  const subject = subjects.find((s) => s.subjectId === form.subjectId);
  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/student/exam-plans', form);
      setAdding(false);
      setForm({ ...form, title: '', chapterIds: [] });
      load();
    } catch (err) {
      setError(apiError(err));
    }
  };
  const practise = (subjectId: string, chapterId: string) => {
    sessionStorage.setItem('practice-pick', JSON.stringify({ subjectId, chapterId }));
    onNavigate('practice');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">📅 {t.title}</h1>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
        </div>
        {!adding && <Button onClick={() => setAdding(true)}>{t.add}</Button>}
      </div>
      {error && <Alert onClose={() => setError('')}>{error}</Alert>}

      {adding && (
        <form onSubmit={create} className="rounded-3xl bg-white dark:bg-slate-800 border-2 border-indigo-200 dark:border-indigo-500/40 p-4 sm:p-5 space-y-3">
          <div className="grid sm:grid-cols-3 gap-3">
            <label className="text-sm text-slate-700 dark:text-slate-200 sm:col-span-1">{t.name}
              <input className={`${inputClass} mt-1`} placeholder={t.namePh} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </label>
            <label className="text-sm text-slate-700 dark:text-slate-200">{t.date}
              <input type="date" required min={tomorrow()} className={`${inputClass} mt-1`} value={form.examDate} onChange={(e) => setForm({ ...form, examDate: e.target.value })} />
            </label>
            <label className="text-sm text-slate-700 dark:text-slate-200">{t.subject}
              <select className={`${inputClass} mt-1`} value={form.subjectId} onChange={(e) => setForm({ ...form, subjectId: e.target.value, chapterIds: [] })}>
                {subjects.map((s) => <option key={s.subjectId} value={s.subjectId}>{name(s)}</option>)}
              </select>
            </label>
          </div>
          {subject && (
            <fieldset>
              <legend className="text-sm text-slate-700 dark:text-slate-200 mb-1">{t.chapters}</legend>
              <div className="grid sm:grid-cols-2 gap-1 max-h-48 overflow-y-auto text-sm text-slate-700 dark:text-slate-300">
                {subject.chapters.map((c: any) => (
                  <label key={c.chapterId} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" checked={form.chapterIds.includes(c.chapterId)}
                      onChange={() => setForm({ ...form, chapterIds: form.chapterIds.includes(c.chapterId) ? form.chapterIds.filter((x) => x !== c.chapterId) : [...form.chapterIds, c.chapterId] })} />
                    {c.number}. {name(c)}
                  </label>
                ))}
              </div>
            </fieldset>
          )}
          <div className="flex flex-wrap items-end justify-between gap-2">
            <label className="text-sm text-slate-700 dark:text-slate-200">{t.target}
              <select className={`${inputClass} mt-1 !w-28`} value={form.dailyTarget} onChange={(e) => setForm({ ...form, dailyTarget: Number(e.target.value) })}>
                {[10, 15, 20, 30].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => setAdding(false)}>{t.cancel}</Button>
              <Button type="submit">{t.create}</Button>
            </div>
          </div>
        </form>
      )}

      {!plans ? (
        <Spinner />
      ) : plans.length === 0 && !adding ? (
        <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 text-center text-slate-500 dark:text-slate-400">{t.none}</div>
      ) : (
        plans.map((p) => (
          <section key={p._id} className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-100">{p.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{name(p.subject)} · {formatDate(p.examDate)}</p>
              </div>
              <span className={`px-3 py-1.5 rounded-full text-sm font-bold ${p.daysLeft <= 3 ? 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-200' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-200'}`}>
                ⏳ {t.daysLeft(p.daysLeft)}
              </span>
            </div>
            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
              {['notStarted', 'learning', 'good', 'mastered'].map((l) => (
                <li key={l} className={`px-2 py-0.5 rounded-full ${LEVEL_STYLE[l].chip}`}>{LEVEL_STYLE[l].icon} {p.levels[l]} {t.levels[l]}</li>
              ))}
            </ul>

            <ol className="mt-4 space-y-2">
              {p.schedule.map((d: any) => (
                <li key={d.date} className={`rounded-2xl border p-3 ${d.status === 'today' ? 'border-indigo-400 bg-indigo-50/70 dark:bg-indigo-500/10 ring-1 ring-indigo-300 dark:ring-indigo-500/40' : d.status === 'done' ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10' : d.status === 'missed' ? 'border-rose-200 dark:border-rose-900/60' : 'border-slate-200 dark:border-slate-700'}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {new Date(`${d.date}T00:00:00`).toLocaleDateString(ta ? 'ta-IN' : 'en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                      {d.status && t.status[d.status] && <span className={`ml-2 text-xs ${d.status === 'done' ? 'text-emerald-700 dark:text-emerald-400' : d.status === 'missed' ? 'text-rose-700 dark:text-rose-400' : 'text-indigo-700 dark:text-indigo-300'}`}>{t.status[d.status]}</span>}
                    </p>
                    {d.kind === 'study' && <span className="text-xs text-slate-500 tabular-nums">{t.studyTarget(Math.min(d.done, d.target), d.target)}</span>}
                  </div>
                  {d.kind === 'mock' ? (
                    <div className="mt-2">
                      <p className="text-sm text-slate-700 dark:text-slate-200">{t.mockDay}</p>
                      {(d.status === 'today' || p.daysLeft <= 1) && <div className="mt-2"><MockStarter subjectId={p.subject._id} chapterIds={p.chapterIds} t={t} onStart={setMock} /></div>}
                    </div>
                  ) : (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {d.chapters.map((c: any) => (
                        <button key={c.chapterId} type="button" onClick={() => practise(p.subject._id, c.chapterId)}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${LEVEL_STYLE[c.level].chip} hover:ring-2 hover:ring-indigo-300`}>
                          {c.number}. {name(c)} {d.status === 'today' && '→'}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 p-3">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">📝 {t.mock}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{t.mockHint}</p>
              <MockStarter subjectId={p.subject._id} chapterIds={p.chapterIds} t={t} onStart={setMock} />
              {p.mocks.length > 0 && (
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  {t.mocks}: {p.mocks.map((m: any) => `${m.percentage}%`).join(' · ')}
                </p>
              )}
            </div>
            <div className="mt-3 text-right">
              <button type="button" className="text-xs text-slate-500 underline" onClick={async () => { if (window.confirm(t.removeConfirm)) { await api.delete(`/student/exam-plans/${p._id}`); load(); } }}>{t.remove}</button>
            </div>
          </section>
        ))
      )}

      {subjects.length > 0 && (
        <section className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-5">
          <p className="font-bold text-slate-800 dark:text-slate-100">⚡ {t.quick}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{t.mockHint}</p>
          <div className="flex flex-wrap items-end gap-2">
            <label className="text-xs text-slate-600 dark:text-slate-300">{t.subject}
              <select className={`${inputClass} mt-0.5 !w-44`} value={quickSubject} onChange={(e) => setQuickSubject(e.target.value)}>
                {subjects.map((s) => <option key={s.subjectId} value={s.subjectId}>{name(s)}</option>)}
              </select>
            </label>
            <MockStarter key={quickSubject} subjectId={quickSubject} chapterIds={[]} t={t} onStart={setMock} />
          </div>
        </section>
      )}
    </div>
  );
};

export default ExamPrep;
