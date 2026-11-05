import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// The textbook page a question comes from, so students can study it right
// there. A side panel on wide screens, full screen on phones.

export interface TextbookRef {
  base?: string;
  page: number;
  taPage?: number | null;
  section: string | null;
  en: string | null;
  ta: string | null;
}

const SUBJECT_TA: Record<string, string> = { Science: 'அறிவியல்', Maths: 'கணிதம்', Mathematics: 'கணிதம்', 'Social Science': 'சமூக அறிவியல்', English: 'ஆங்கிலம்', Tamil: 'தமிழ்' };

const TEXT = {
  en: { prev: 'Previous page', nextPage: 'Next page', backToPage: 'Back to the question’s page', noPage: 'No page here.', title: 'Textbook', page: 'Page', close: 'Close', english: 'English book', tamil: 'Tamil book', zoomIn: 'Zoom in', zoomOut: 'Zoom out', open: 'Open full size', study: 'Read this in the textbook' },
  ta: { prev: 'முந்தைய பக்கம்', nextPage: 'அடுத்த பக்கம்', backToPage: 'கேள்வியின் பக்கத்துக்குத் திரும்பு', noPage: 'இங்கே பக்கம் இல்லை.', title: 'பாடநூல்', page: 'பக்கம்', close: 'மூடு', english: 'ஆங்கில நூல்', tamil: 'தமிழ் நூல்', zoomIn: 'பெரிதாக்கு', zoomOut: 'சிறிதாக்கு', open: 'முழு அளவில் திற', study: 'பாடநூலில் படியுங்கள்' },
};

export const TextbookViewer: React.FC<{ textbook: TextbookRef; subject?: string; onClose: () => void }> = ({ textbook, subject, onClose }) => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [medium, setMedium] = useState<'en' | 'ta'>(ta && textbook.ta ? 'ta' : textbook.en ? 'en' : 'ta');
  const [zoom, setZoom] = useState(1);
  // Pages turned away from the question's own page
  const [delta, setDelta] = useState(0);
  const [missing, setMissing] = useState(false);
  const shownMedium = textbook[medium] ? medium : textbook.en ? 'en' : 'ta';
  const startPage = shownMedium === 'ta' ? textbook.taPage || textbook.page : textbook.page;
  const pageNo = startPage + delta;
  const src = textbook.base
    ? `${textbook.base}/${shownMedium === 'ta' ? 'tm' : 'em'}/${String(pageNo).padStart(3, '0')}.webp`
    : textbook[shownMedium];
  const subjectName = ta && subject ? SUBJECT_TA[subject] || subject : subject;
  useEffect(() => setMissing(false), [src]);
  const turn = (by: number) => setDelta((d) => (pageNo + by < 1 ? d : d + by));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') turn(-1);
      if (e.key === 'ArrowRight') turn(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={`${t.title} ${t.page} ${textbook.page}`}>
      <button type="button" aria-label={t.close} className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]" onClick={onClose} />
      <div className="relative w-full md:w-[min(720px,55vw)] h-full flex flex-col bg-slate-100 dark:bg-slate-900 shadow-2xl">
        <div className="flex items-center gap-2 px-3 sm:px-4 py-3 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <span className="text-xl" aria-hidden="true">📖</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
              {subjectName ? `${subjectName} · ` : ''}
              {t.title}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.page} {pageNo}
              {delta === 0 && textbook.section && ` · ${textbook.section}`}
            </p>
          </div>
          <button type="button" onClick={onClose} className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
            ✕ {t.close}
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
          {textbook.en && textbook.ta && (
            <div className="flex gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-900/60" role="tablist">
              {(['ta', 'en'] as const).map((m) => (
                <button key={m} type="button" role="tab" aria-selected={medium === m} onClick={() => { setMedium(m); setDelta(0); }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${medium === m ? 'bg-white dark:bg-slate-700 shadow text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-300'}`}>
                  {m === 'ta' ? t.tamil : t.english}
                </button>
              ))}
            </div>
          )}
          {textbook.base && (
            <div className="flex items-center gap-1">
              <button type="button" aria-label={t.prev} onClick={() => turn(-1)} className="px-2.5 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200">◀</button>
              <button type="button" aria-label={t.nextPage} onClick={() => turn(1)} className="px-2.5 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200">▶</button>
              {delta !== 0 && (
                <button type="button" onClick={() => setDelta(0)} className="ml-1 px-2 h-8 rounded-lg text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/15">
                  ↩ {t.backToPage}
                </button>
              )}
            </div>
          )}
          <div className="ml-auto flex items-center gap-1">
            <button type="button" aria-label={t.zoomOut} disabled={zoom <= 1} onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 font-bold text-slate-700 dark:text-slate-200 disabled:opacity-40">−</button>
            <span className="w-12 text-center text-xs text-slate-500">{Math.round(zoom * 100)}%</span>
            <button type="button" aria-label={t.zoomIn} disabled={zoom >= 3} onClick={() => setZoom((z) => Math.min(3, z + 0.5))}
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 font-bold text-slate-700 dark:text-slate-200 disabled:opacity-40">+</button>
            {src && (
              <a href={src} target="_blank" rel="noreferrer" className="ml-1 px-2 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300 hover:underline">
                {t.open} ↗
              </a>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-auto p-2 sm:p-4">
          {missing ? (
            <p className="mt-10 text-center text-sm text-slate-500">{t.noPage}</p>
          ) : (
            src && (
              <img key={src} src={src} alt={`${t.title} ${t.page} ${pageNo}`} onError={() => setMissing(true)}
                className="mx-auto rounded-lg shadow bg-white max-w-none" style={{ width: `${zoom * 100}%` }} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

/** Button that opens the textbook page. Renders nothing when there is no page. */
export const TextbookButton: React.FC<{ textbook?: TextbookRef | null; subject?: string; label?: string; className?: string }> = ({ textbook, subject, label, className = '' }) => {
  const { language } = useLanguage();
  const t = TEXT[language === 'ta' ? 'ta' : 'en'];
  const [open, setOpen] = useState(false);
  if (!textbook) return null;
  // The page number in the book the student reads
  const page = language === 'ta' && textbook.ta && textbook.taPage ? textbook.taPage : textbook.page;
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/25 ${className}`}>
        📖 {label || t.study}
        <span className="text-xs font-normal opacity-75">· {t.page} {page}</span>
      </button>
      {open && <TextbookViewer textbook={textbook} subject={subject} onClose={() => setOpen(false)} />}
    </>
  );
};

export default TextbookViewer;
