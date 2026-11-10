import React, { useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

// "Ask my teacher" under a question: the student says they do not understand
// it, optionally with a note. The answer appears in My doubts (and straight
// away if a teacher has already answered this question for the school).

const TEXT = {
  en: {
    ask: '🙋 Ask my teacher', placeholder: 'What is not clear? (optional)', send: 'Send', cancel: 'Cancel', sending: 'Sending…',
    sent: '✓ Sent to your teacher. The answer will come in My doubts.', already: 'Your teacher has already answered this:',
  },
  ta: {
    ask: '🙋 ஆசிரியரிடம் கேள்', placeholder: 'எது புரியவில்லை? (விருப்பம்)', send: 'அனுப்பு', cancel: 'ரத்து', sending: 'அனுப்புகிறது…',
    sent: '✓ ஆசிரியருக்கு அனுப்பப்பட்டது. பதில் "என் சந்தேகங்கள்" பகுதியில் வரும்.', already: 'உங்கள் ஆசிரியர் ஏற்கெனவே பதிலளித்துள்ளார்:',
  },
};

const AskTeacher: React.FC<{ questionId: string; className?: string }> = ({ questionId, className = '' }) => {
  const { language } = useLanguage();
  const t = TEXT[language === 'ta' ? 'ta' : 'en'];
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [reply, setReply] = useState<string | null>(null);
  const [error, setError] = useState('');

  const send = async () => {
    setState('sending');
    setError('');
    try {
      const res = await api.post('/student/doubts', { questionId, message });
      setReply(res.data.data.reply);
      setState('sent');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Could not send');
      setState('idle');
    }
  };

  if (state === 'sent') {
    return reply ? (
      <div className={`rounded-xl bg-indigo-50 dark:bg-indigo-500/10 px-3 py-2 text-sm text-indigo-900 dark:text-indigo-100 ${className}`}>
        <p className="text-xs font-semibold">{t.already}</p>
        <p className="mt-0.5 whitespace-pre-line">{reply}</p>
      </div>
    ) : (
      <p className={`text-xs font-medium text-indigo-700 dark:text-indigo-300 ${className}`}>{t.sent}</p>
    );
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-500/15 hover:bg-violet-100 dark:hover:bg-violet-500/25 ${className}`}>
        {t.ask}
      </button>
    );
  }

  return (
    <div className={`w-full space-y-2 ${className}`}>
      <textarea
        value={message}
        maxLength={500}
        rows={2}
        autoFocus
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t.placeholder}
        className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
      />
      {error && <p className="text-xs text-rose-600">{error}</p>}
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={() => setOpen(false)} className="px-3 py-1.5 rounded-lg text-sm text-slate-600 dark:text-slate-300">
          {t.cancel}
        </button>
        <button type="button" disabled={state === 'sending'} onClick={send} className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-violet-600 text-white disabled:opacity-60">
          {state === 'sending' ? t.sending : t.send}
        </button>
      </div>
    </div>
  );
};

export default AskTeacher;
