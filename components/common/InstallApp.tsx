import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { canPromptInstall, isIOS, isStandalone, onInstallChange, promptInstall } from '../../utils/pwa';

// "Install app" for the side menu: the browser's install dialog on Android and
// desktop Chrome, step-by-step help on iPhone/iPad. Hidden once installed.

const TEXT = {
  en: { install: 'Install the app', hint: 'Open it from your home screen like any app.', iosTitle: 'Add to your iPhone', ios1: 'Tap the Share button', ios2: 'Choose “Add to Home Screen”', close: 'Got it' },
  ta: { install: 'செயலியை நிறுவுக', hint: 'முகப்புத் திரையிலிருந்து மற்ற செயலிகள் போலத் திறக்கலாம்.', iosTitle: 'iPhone இல் சேர்க்க', ios1: 'பகிர் (Share) பொத்தானைத் தட்டவும்', ios2: '“Add to Home Screen” ஐத் தேர்ந்தெடுக்கவும்', close: 'சரி' },
};

const InstallApp: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXT[language === 'ta' ? 'ta' : 'en'];
  const [, refresh] = useState(0);
  const [iosHelp, setIosHelp] = useState(false);
  useEffect(() => onInstallChange(() => refresh((n) => n + 1)), []);

  if (isStandalone()) return null;
  const ios = isIOS();
  if (!ios && !canPromptInstall()) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => (ios ? setIosHelp(true) : promptInstall())}
        className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-left shadow-md shadow-indigo-600/20"
      >
        <img src="/icons/icon-192.png" alt="" className="w-9 h-9 rounded-lg bg-white/15 p-0.5" />
        <span className="min-w-0">
          <span className="block text-sm font-semibold">📲 {t.install}</span>
          <span className="block text-[11px] text-indigo-100 leading-tight">{t.hint}</span>
        </span>
      </button>
      {iosHelp && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-slate-900/60 p-3" role="dialog" aria-modal="true" onClick={() => setIosHelp(false)}>
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-800 p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <img src="/icons/apple-touch-icon.png" alt="" className="w-12 h-12 rounded-xl" />
              <p className="text-lg font-bold text-slate-800 dark:text-slate-100">{t.iosTitle}</p>
            </div>
            <ol className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center">1</span>
                <span>
                  {t.ios1}{' '}
                  <svg viewBox="0 0 24 24" className="inline w-5 h-5 -mt-1 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 3v12M8 7l4-4 4 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center">2</span>
                <span>{t.ios2} ➕</span>
              </li>
            </ol>
            <button type="button" onClick={() => setIosHelp(false)} className="mt-5 w-full py-2.5 rounded-xl bg-indigo-600 text-white font-semibold">
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InstallApp;
