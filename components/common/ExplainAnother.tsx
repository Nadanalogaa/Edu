import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

// ✨ "Explain it another way": a short AI explanation of a question the student
// got wrong, in Tamil or English. Shown only when the school has it switched on.

let status: Promise<boolean> | null = null;
const enabled = () => (status ||= api.get('/student/explain/status').then((r) => !!r.data.data.enabled).catch(() => false));

const TEXT = {
  en: { button: '✨ Explain it another way', loading: 'Thinking…', note: 'AI explanation. If something still seems wrong, ask your teacher.' },
  ta: { button: '✨ வேறு விதமாக விளக்கு', loading: 'யோசிக்கிறது…', note: 'AI விளக்கம். இன்னும் சந்தேகம் இருந்தால் ஆசிரியரிடம் கேளுங்கள்.' },
};

const ExplainAnother: React.FC<{ questionId: string; selectedAnswer: number; className?: string }> = ({ questionId, selectedAnswer, className = '' }) => {
  const { language } = useLanguage();
  const lang = language === 'ta' ? 'ta' : 'en';
  const t = TEXT[lang];
  const [on, setOn] = useState(false);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let live = true;
    enabled().then((v) => live && setOn(v));
    return () => {
      live = false;
    };
  }, []);

  if (!on) return null;

  const ask = async () => {
    setBusy(true);
    setError('');
    try {
      const res = await api.post('/student/explain', { questionId, selectedAnswer, language: lang });
      setText(res.data.data.text);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Could not get an explanation right now.');
    } finally {
      setBusy(false);
    }
  };

  if (text) {
    return (
      <div className={`w-full rounded-2xl border border-fuchsia-200 dark:border-fuchsia-500/30 bg-fuchsia-50/70 dark:bg-fuchsia-500/10 px-4 py-3 ${className}`}>
        <p className="text-sm text-slate-800 dark:text-slate-100 whitespace-pre-line">{text}</p>
        <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">{t.note}</p>
      </div>
    );
  }
  return (
    <span className={className}>
      <button type="button" disabled={busy} onClick={ask}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold text-fuchsia-700 dark:text-fuchsia-300 bg-fuchsia-50 dark:bg-fuchsia-500/15 hover:bg-fuchsia-100 disabled:opacity-60">
        {busy ? t.loading : t.button}
      </button>
      {error && <span className="block mt-1 text-xs text-rose-600">{error}</span>}
    </span>
  );
};

export default ExplainAnother;
