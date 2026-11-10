import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { currentPushSubscription, isIOS, isStandalone, pushSupported, subscribePush, unsubscribePush } from '../../utils/pwa';

// Daily practice goal on the student home: a ring for today's questions, a
// choice of goal, and an evening reminder (web push) on this device.

const TEXT = {
  en: {
    title: 'Daily goal', of: (d: number, g: number) => `${d} of ${g} questions today`, met: '🎉 Goal reached! See you tomorrow.',
    left: (n: number) => `${n} more to reach today's goal`, change: 'Goal', practise: 'Practise now',
    remind: '🔔 Remind me at 7 pm', reminding: '🔔 Evening reminder on', off: 'Turn off',
    denied: 'Notifications are blocked for this site. Allow them in the browser settings, then try again.',
    iphone: 'On iPhone, add the app to your Home Screen first (Share → Add to Home Screen), then open it from there to turn on reminders.',
    unsupported: 'This browser cannot show reminders.',
  },
  ta: {
    title: 'தினசரி இலக்கு', of: (d: number, g: number) => `இன்று ${g} இல் ${d} கேள்விகள்`, met: '🎉 இலக்கை எட்டினீர்கள்! நாளை சந்திப்போம்.',
    left: (n: number) => `இன்றைய இலக்குக்கு இன்னும் ${n}`, change: 'இலக்கு', practise: 'இப்போது பயிற்சி',
    remind: '🔔 மாலை 7 மணிக்கு நினைவூட்டு', reminding: '🔔 மாலை நினைவூட்டல் இயக்கத்தில்', off: 'நிறுத்து',
    denied: 'இந்தத் தளத்துக்கு அறிவிப்புகள் தடுக்கப்பட்டுள்ளன. உலாவி அமைப்புகளில் அனுமதித்து மீண்டும் முயலுங்கள்.',
    iphone: 'iPhone இல் முதலில் செயலியை முகப்புத் திரையில் சேர்த்து (Share → Add to Home Screen), அங்கிருந்து திறந்து நினைவூட்டலை இயக்குங்கள்.',
    unsupported: 'இந்த உலாவியில் நினைவூட்டல்கள் இயங்காது.',
  },
};

interface Goal { goal: number; today: number; met: boolean; choices: number[]; reminders: { devices: number; thisDevice: boolean }; pushKey: string | null }

const Ring: React.FC<{ value: number; max: number }> = ({ value, max }) => {
  const r = 34;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, value / max);
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20 shrink-0" aria-hidden="true">
      <circle cx="40" cy="40" r={r} fill="none" strokeWidth="8" className="stroke-slate-200 dark:stroke-slate-700" />
      <circle cx="40" cy="40" r={r} fill="none" strokeWidth="8" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
        transform="rotate(-90 40 40)" className={pct >= 1 ? 'stroke-emerald-500' : 'stroke-indigo-500'} style={{ transition: 'stroke-dashoffset .6s ease' }} />
      <text x="40" y="38" textAnchor="middle" className="fill-slate-800 dark:fill-slate-100" style={{ fontSize: 18, fontWeight: 700 }}>{value}</text>
      <text x="40" y="54" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400" style={{ fontSize: 10 }}>/ {max}</text>
    </svg>
  );
};

const DailyGoal: React.FC<{ onPractise: () => void }> = ({ onPractise }) => {
  const { language } = useLanguage();
  const t = TEXT[language === 'ta' ? 'ta' : 'en'];
  const [goal, setGoal] = useState<Goal | null>(null);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);

  const load = async () => {
    const sub = await currentPushSubscription().catch(() => null);
    const res = await api.get('/student/goal', { params: { endpoint: sub?.endpoint } });
    setGoal(res.data.data);
  };
  useEffect(() => {
    load().catch(() => undefined);
  }, []);

  if (!goal) return null;

  const changeGoal = async (value: number) => {
    setGoal({ ...goal, goal: value, met: goal.today >= value });
    await api.put('/student/goal', { goal: value }).catch(() => load());
  };

  const turnOn = async () => {
    setNote('');
    if (isIOS() && !isStandalone()) return setNote(t.iphone);
    if (!pushSupported() || !goal.pushKey) return setNote(t.unsupported);
    setBusy(true);
    try {
      const sub = await subscribePush(goal.pushKey);
      await api.post('/student/reminders', { subscription: sub.toJSON() });
      await load();
    } catch (error: any) {
      setNote(error?.message === 'denied' ? t.denied : t.unsupported);
    } finally {
      setBusy(false);
    }
  };

  const turnOff = async () => {
    setBusy(true);
    try {
      const endpoint = await unsubscribePush();
      if (endpoint) await api.delete('/student/reminders', { data: { endpoint } });
      await load();
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <Ring value={goal.today} max={goal.goal} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-bold text-slate-800 dark:text-slate-100">🎯 {t.title}</h2>
            <label className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              {t.change}
              <select value={goal.goal} onChange={(e) => changeGoal(Number(e.target.value))}
                className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs py-1 pl-2 pr-6">
                {goal.choices.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </label>
          </div>
          <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{t.of(goal.today, goal.goal)}</p>
          <p className={`text-sm font-semibold ${goal.met ? 'text-emerald-700 dark:text-emerald-400' : 'text-indigo-700 dark:text-indigo-300'}`}>
            {goal.met ? t.met : t.left(goal.goal - goal.today)}
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {!goal.met && (
          <button type="button" onClick={onPractise} className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold">
            {t.practise} →
          </button>
        )}
        {goal.reminders.thisDevice ? (
          <span className="inline-flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400 font-medium">
            {t.reminding}
            <button type="button" disabled={busy} onClick={turnOff} className="text-xs underline text-slate-500">{t.off}</button>
          </span>
        ) : (
          <button type="button" disabled={busy} onClick={turnOn} className="px-3 py-2 rounded-xl text-sm font-semibold bg-amber-50 text-amber-800 dark:bg-amber-500/15 dark:text-amber-200">
            {t.remind}
          </button>
        )}
      </div>
      {note && <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{note}</p>}
    </section>
  );
};

export default DailyGoal;
