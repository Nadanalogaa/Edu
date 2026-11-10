import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

// The weekly report a parent opens from a link (no login): this week's
// practice, tests, mistakes fixed, strong and weak chapters, what to do next.
// English or Tamil, printable.

const T = {
  en: {
    title: 'Weekly progress report', week: 'This week', practised: 'questions practised', days: 'days practised (of 7)', right: 'answered correctly',
    goal: (n: number, g: number) => `Met the daily goal of ${g} questions on ${n} day${n === 1 ? '' : 's'}`, tests: 'Recent tests', classAvg: 'class average',
    avg30: 'Test average (last 30 days)', overall: 'Overall test average', mistakes: 'Mistake Book', fixed: 'fixed this week', open: 'still to fix',
    strong: 'Doing well in', weak: 'Needs more practice', next: 'What would help next', noTests: 'No tests written yet.', print: '🖨 Print / save PDF',
    nextText: {
      openTest: (v: any) => `A test is open now: “${v}”. Please remind your child to finish it before it closes.`,
      practiseMore: () => 'Practised on fewer than 3 days this week. 15 minutes a day in the app makes a big difference.',
      weakChapter: (v: any) => `Practise the chapter “${v}” a little every day this week.`,
      mistakes: (v: any) => `${v} questions are waiting in the Mistake Book. Fixing a few each day helps.`,
      keepGoing: () => 'Great week! Encourage your child to keep the daily practice going.',
    } as Record<string, (v: any) => string>,
    footer: 'This report comes from EduCore, the school’s assessment app. Only your child’s first name and class are shown.', invalid: 'This link is not valid.',
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  ta: {
    title: 'வாராந்திர முன்னேற்ற அறிக்கை', week: 'இந்த வாரம்', practised: 'பயிற்சி செய்த கேள்விகள்', days: 'பயிற்சி செய்த நாட்கள் (7 இல்)', right: 'சரியான விடைகள்',
    goal: (n: number, g: number) => `${g} கேள்விகள் என்ற தினசரி இலக்கை ${n} நாட்கள் எட்டினார்`, tests: 'சமீபத்திய தேர்வுகள்', classAvg: 'வகுப்புச் சராசரி',
    avg30: 'தேர்வுச் சராசரி (கடந்த 30 நாட்கள்)', overall: 'மொத்தத் தேர்வுச் சராசரி', mistakes: 'தவறுப் புத்தகம்', fixed: 'இந்த வாரம் திருத்தியவை', open: 'இன்னும் திருத்த வேண்டியவை',
    strong: 'நன்றாகச் செய்யும் பாடங்கள்', weak: 'கூடுதல் பயிற்சி தேவை', next: 'அடுத்து உதவுவது', noTests: 'இன்னும் தேர்வுகள் எழுதவில்லை.', print: '🖨 அச்சிடு / PDF',
    nextText: {
      openTest: (v: any) => `“${v}” தேர்வு இப்போது திறந்துள்ளது. முடிவதற்குள் எழுத நினைவூட்டுங்கள்.`,
      practiseMore: () => 'இந்த வாரம் 3 நாட்களுக்கும் குறைவாகப் பயிற்சி. தினமும் 15 நிமிடம் பயிற்சி பெரிய மாற்றம் தரும்.',
      weakChapter: (v: any) => `இந்த வாரம் “${v}” பாடத்தைத் தினமும் சிறிது பயிற்சி செய்யச் சொல்லுங்கள்.`,
      mistakes: (v: any) => `தவறுப் புத்தகத்தில் ${v} கேள்விகள் காத்திருக்கின்றன. தினமும் சிலவற்றைத் திருத்தலாம்.`,
      keepGoing: () => 'சிறந்த வாரம்! தினசரிப் பயிற்சியைத் தொடர ஊக்கப்படுத்துங்கள்.',
    } as Record<string, (v: any) => string>,
    footer: 'இந்த அறிக்கை பள்ளியின் EduCore மதிப்பீட்டுச் செயலியிலிருந்து. உங்கள் குழந்தையின் முதல் பெயரும் வகுப்பும் மட்டுமே காட்டப்படும்.', invalid: 'இந்த இணைப்பு செல்லாது.',
    dayNames: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  },
};

const Stat: React.FC<{ value: React.ReactNode; label: string }> = ({ value, label }) => (
  <div className="rounded-2xl bg-white border border-slate-200 p-3 text-center">
    <p className="text-2xl font-bold text-slate-800 tabular-nums">{value}</p>
    <p className="text-xs text-slate-500">{label}</p>
  </div>
);

const ParentReport: React.FC = () => {
  const { token } = useParams();
  const [lang, setLang] = useState<'en' | 'ta'>(() => (navigator.language?.startsWith('ta') ? 'ta' : 'en'));
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');
  const t = T[lang];

  useEffect(() => {
    api.get(`/public/parent-report/${token}`).then((res) => setData(res.data.data)).catch((err) => setError(err?.response?.data?.message || T.en.invalid));
  }, [token]);

  if (error) return <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 text-center text-slate-600">{error}</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-600 border-t-transparent" /></div>;

  const s = data.student;
  const max = Math.max(1, ...data.week.days.map((d: any) => d.answers));
  const pick = (en?: string, ta?: string) => (lang === 'ta' && ta ? ta : en);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 print:bg-white">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-4">
        <header className="rounded-3xl bg-gradient-to-br from-indigo-700 to-violet-600 text-white p-5 print:bg-none print:text-black print:border">
          <div className="flex items-center justify-between gap-2">
            <img src="/icons/icon-192.png" alt="" className="w-10 h-10 rounded-xl bg-white/15 p-0.5" />
            <div className="flex gap-1 print:hidden">
              {(['en', 'ta'] as const).map((l) => (
                <button key={l} type="button" onClick={() => setLang(l)} className={`px-3 py-1 rounded-lg text-sm font-semibold ${lang === l ? 'bg-white text-indigo-700' : 'bg-white/15'}`}>
                  {l === 'en' ? 'English' : 'தமிழ்'}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm opacity-90">{t.title}</p>
          <h1 className="text-2xl font-bold">{s.firstName}</h1>
          <p className="text-sm opacity-90">{s.classGrade}th{s.section ? ` – ${s.section}` : ''} · {s.school}</p>
        </header>

        <section>
          <h2 className="font-bold mb-2">{t.week}</h2>
          <div className="grid grid-cols-3 gap-2">
            <Stat value={data.week.answers} label={t.practised} />
            <Stat value={data.week.days} label={t.days} />
            <Stat value={data.week.accuracy !== null ? `${data.week.accuracy}%` : '—'} label={t.right} />
          </div>
          <div className="mt-3 rounded-2xl bg-white border border-slate-200 p-3">
            <div className="flex items-end justify-between gap-1 h-24">
              {data.week.days.map((d: any) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-slate-500 tabular-nums">{d.answers || ''}</span>
                  <div className={`w-full max-w-[28px] rounded-t ${d.answers >= data.week.goal ? 'bg-emerald-500' : 'bg-indigo-400'}`} style={{ height: `${(d.answers / max) * 64 + (d.answers ? 4 : 1)}px` }} />
                  <span className="text-[10px] text-slate-500">{t.dayNames[new Date(`${d.day}T00:00:00`).getDay()]}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-600">{t.goal(data.week.goalDays, data.week.goal)}</p>
          </div>
        </section>

        <section className="rounded-2xl bg-white border border-slate-200 p-4">
          <h2 className="font-bold">{t.tests}</h2>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <p>{t.avg30}: <b>{data.tests.recentAverage ?? '—'}{data.tests.recentAverage !== null && '%'}</b></p>
            <p>{t.overall}: <b>{data.tests.overallAverage ?? '—'}{data.tests.overallAverage !== null && '%'}</b></p>
          </div>
          {data.tests.latest.length === 0 ? (
            <p className="mt-2 text-sm text-slate-500">{t.noTests}</p>
          ) : (
            <ul className="mt-2 divide-y divide-slate-100 text-sm">
              {data.tests.latest.map((x: any, i: number) => (
                <li key={i} className="py-1.5 flex justify-between gap-2">
                  <span className="truncate">{x.title} <span className="text-slate-500">· {x.subject}</span></span>
                  <span className="shrink-0">
                    <b className={x.percentage < data.passMark ? 'text-red-600' : ''}>{x.percentage}%</b>
                    <span className="text-xs text-slate-500"> ({t.classAvg} {x.classAverage}%)</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="grid sm:grid-cols-2 gap-3">
          <section className="rounded-2xl bg-white border border-slate-200 p-4">
            <h2 className="font-bold">{t.mistakes}</h2>
            <p className="mt-1 text-sm">✅ <b>{data.mistakes.fixedThisWeek}</b> {t.fixed}</p>
            <p className="text-sm">📕 <b>{data.mistakes.open}</b> {t.open}</p>
          </section>
          <section className="rounded-2xl bg-white border border-slate-200 p-4">
            {data.strong.length > 0 && (
              <>
                <h2 className="font-bold text-emerald-700">💪 {t.strong}</h2>
                <ul className="text-sm">{data.strong.map((c: any, i: number) => <li key={i}>{pick(c.nameEn, c.nameTa)} <span className="text-xs text-slate-500">· {pick(c.subjectEn, c.subjectTa)}</span></li>)}</ul>
              </>
            )}
            {data.weak.length > 0 && (
              <>
                <h2 className="mt-2 font-bold text-amber-700">🎯 {t.weak}</h2>
                <ul className="text-sm">{data.weak.map((c: any, i: number) => <li key={i}>{pick(c.nameEn, c.nameTa)} <span className="text-xs text-slate-500">· {pick(c.subjectEn, c.subjectTa)}</span></li>)}</ul>
              </>
            )}
          </section>
        </div>

        <section className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-4">
          <h2 className="font-bold text-indigo-900">👪 {t.next}</h2>
          <ul className="mt-1 list-disc pl-5 text-sm text-indigo-950 space-y-1">
            {data.next.map((n: any, i: number) => <li key={i}>{t.nextText[n.code]?.(n.value)}</li>)}
          </ul>
        </section>

        <div className="flex justify-center print:hidden">
          <button type="button" onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-sm font-semibold">{t.print}</button>
        </div>
        <p className="text-center text-xs text-slate-500">{t.footer}</p>
      </div>
    </div>
  );
};

export default ParentReport;
