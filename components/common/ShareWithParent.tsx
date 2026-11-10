import React, { useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

// Shares the private weekly parent report link: WhatsApp, the phone's share
// sheet, or copy. Students share their own; staff pass a studentId.

const TEXT = {
  en: { share: '👪 Share report with parent', making: 'Preparing…', whatsapp: 'WhatsApp', more: 'Share…', copy: 'Copy link', copied: '✓ Copied',
    message: (url: string) => `Weekly progress report from school: ${url}` , hint: 'Anyone with this link can see the weekly report (first name and class only).' },
  ta: { share: '👪 பெற்றோருடன் அறிக்கையைப் பகிர்', making: 'தயாராகிறது…', whatsapp: 'WhatsApp', more: 'பகிர்…', copy: 'இணைப்பை நகலெடு', copied: '✓ நகலெடுக்கப்பட்டது',
    message: (url: string) => `பள்ளியின் வாராந்திர முன்னேற்ற அறிக்கை: ${url}`, hint: 'இந்த இணைப்பு உள்ள எவரும் வாராந்திர அறிக்கையைப் பார்க்கலாம் (முதல் பெயர், வகுப்பு மட்டும்).' },
};

const ShareWithParent: React.FC<{ studentId?: string; className?: string }> = ({ studentId, className = '' }) => {
  const { language } = useLanguage();
  const t = TEXT[language === 'ta' ? 'ta' : 'en'];
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const make = async () => {
    setBusy(true);
    try {
      const res = await api.post(studentId ? `/reports/students/${studentId}/parent-link` : '/student/parent-link', {});
      setUrl(`${window.location.origin}/parent/${res.data.data.token}`);
    } finally {
      setBusy(false);
    }
  };

  if (!url) {
    return (
      <button type="button" disabled={busy} onClick={make} className={`px-3 py-2 rounded-xl text-sm font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-200 hover:bg-emerald-100 ${className}`}>
        {busy ? t.making : t.share}
      </button>
    );
  }
  return (
    <div className={`rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-900/15 p-3 space-y-2 ${className}`}>
      <div className="flex flex-wrap gap-2">
        <a href={`https://wa.me/?text=${encodeURIComponent(t.message(url))}`} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-emerald-600 text-white">{t.whatsapp}</a>
        {'share' in navigator && (
          <button type="button" onClick={() => navigator.share({ title: 'EduCore', text: t.message(url), url }).catch(() => undefined)} className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600">{t.more}</button>
        )}
        <button type="button" onClick={() => navigator.clipboard?.writeText(url).then(() => setCopied(true))} className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600">{copied ? t.copied : t.copy}</button>
      </div>
      <p className="text-xs text-slate-600 dark:text-slate-300 break-all">{url}</p>
      <p className="text-[11px] text-slate-500">{t.hint}</p>
    </div>
  );
};

export default ShareWithParent;
