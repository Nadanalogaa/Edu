import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Alert, Spinner, apiError } from '../common/ui';

// Chapter map: every chapter of the student's subjects as not started →
// learning → good → mastered (from practice and test answers), so they see what
// is left before exams. Tapping a chapter opens Practice on it.

export const LEVEL_STYLE: Record<string, { chip: string; tile: string; icon: string }> = {
  notStarted: { chip: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300', tile: 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800', icon: '○' },
  learning: { chip: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200', tile: 'border-amber-200 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-900/10', icon: '◔' },
  good: { chip: 'bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-200', tile: 'border-sky-200 dark:border-sky-700/60 bg-sky-50/60 dark:bg-sky-900/10', icon: '◑' },
  mastered: { chip: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200', tile: 'border-emerald-300 dark:border-emerald-700/60 bg-emerald-50/70 dark:bg-emerald-900/15', icon: '●' },
};

const TEXT = {
  en: {
    title: 'Chapter map', subtitle: 'How well you know each chapter, from your practice and tests. Tap a chapter to practise it.',
    levels: { notStarted: 'Not started', learning: 'Learning', good: 'Good', mastered: 'Mastered' } as Record<string, string>,
    howTitle: 'How levels work',
    how: 'Learning: you have started. Good: 8+ different questions and 65% of your last 20 answers right. Mastered: 15+ questions and 85% right.',
    answered: (q: number, b: number) => `${q} of ${b} questions tried`, recent: (p: number) => `${p}% right lately`, mistakes: (n: number) => `${n} to fix`,
    noQuestions: 'Questions coming soon', progress: (m: number, t: number) => `${m} of ${t} chapters mastered`,
  },
  ta: {
    title: 'பாட வரைபடம்', subtitle: 'ஒவ்வொரு பாடப்பகுதியையும் எவ்வளவு அறிந்துள்ளீர்கள் (பயிற்சி, தேர்வுகளிலிருந்து). பயிற்சி செய்ய ஒரு பாடத்தைத் தட்டுங்கள்.',
    levels: { notStarted: 'தொடங்கவில்லை', learning: 'கற்கிறேன்', good: 'நன்று', mastered: 'தேர்ச்சி' } as Record<string, string>,
    howTitle: 'நிலைகள் எப்படி',
    how: 'கற்கிறேன்: தொடங்கியுள்ளீர்கள். நன்று: 8+ வெவ்வேறு கேள்விகள், கடைசி 20 விடைகளில் 65% சரி. தேர்ச்சி: 15+ கேள்விகள், 85% சரி.',
    answered: (q: number, b: number) => `${b} இல் ${q} கேள்விகள் முயன்றவை`, recent: (p: number) => `சமீபத்தில் ${p}% சரி`, mistakes: (n: number) => `${n} திருத்த வேண்டியவை`,
    noQuestions: 'கேள்விகள் விரைவில்', progress: (m: number, t: number) => `${t} இல் ${m} பாடங்களில் தேர்ச்சி`,
  },
};

const LEVEL_ORDER = ['notStarted', 'learning', 'good', 'mastered'];

const ChapterMap: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [data, setData] = useState<any[] | null>(null);
  const [subjectId, setSubjectId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/student/mastery')
      .then((res) => {
        setData(res.data.data);
        // Start on the first subject that has questions
        const first = res.data.data.find((s: any) => s.chapters.some((c: any) => c.bank > 0)) || res.data.data[0];
        setSubjectId(first?.subjectId || '');
      })
      .catch((err) => setError(apiError(err)));
  }, []);

  if (error) return <Alert>{error}</Alert>;
  if (!data) return <Spinner />;
  const subject = data.find((s) => s.subjectId === subjectId);
  const name = (en: string, taName?: string) => (ta && taName ? taName : en);

  const practise = (chapterId: string) => {
    sessionStorage.setItem('practice-pick', JSON.stringify({ subjectId, chapterId }));
    onNavigate('practice');
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">🗺️ {t.title}</h1>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.map((s) => (
          <button key={s.subjectId} type="button" aria-pressed={s.subjectId === subjectId} onClick={() => setSubjectId(s.subjectId)}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold border-2 ${s.subjectId === subjectId ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'}`}>
            {name(s.nameEn, s.nameTa)}
            {s.counts.mastered > 0 && <span className="ml-1.5 text-xs text-emerald-700 dark:text-emerald-400">● {s.counts.mastered}</span>}
          </button>
        ))}
      </div>

      {subject && (
        <>
          {/* Overall progress for the subject: one bar split by level */}
          <section className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-bold text-slate-800 dark:text-slate-100">{t.progress(subject.counts.mastered, subject.chapters.length)}</p>
              <details className="text-xs text-slate-500 dark:text-slate-400">
                <summary className="cursor-pointer">{t.howTitle}</summary>
                <p className="mt-1 max-w-md">{t.how}</p>
              </details>
            </div>
            <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full gap-[2px] bg-slate-100 dark:bg-slate-700">
              {['mastered', 'good', 'learning'].map((l) =>
                subject.counts[l] ? (
                  <div key={l} className={`h-full ${l === 'mastered' ? 'bg-emerald-500' : l === 'good' ? 'bg-sky-500' : 'bg-amber-400'}`} style={{ width: `${(subject.counts[l] / subject.chapters.length) * 100}%` }} />
                ) : null
              )}
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
              {LEVEL_ORDER.map((l) => (
                <li key={l} className="flex items-center gap-1.5">
                  <span className={`px-1.5 rounded ${LEVEL_STYLE[l].chip}`}>{LEVEL_STYLE[l].icon}</span>
                  <b className="text-slate-800 dark:text-slate-100">{subject.counts[l]}</b> <span className="text-slate-600 dark:text-slate-300">{t.levels[l]}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {subject.chapters.map((c: any) => {
              const style = LEVEL_STYLE[c.level];
              const disabled = c.bank === 0;
              return (
                <button key={c.chapterId} type="button" disabled={disabled} onClick={() => practise(c.chapterId)}
                  className={`text-left rounded-2xl border-2 p-3 sm:p-4 transition-shadow ${style.tile} ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      <span className="text-slate-400 mr-1">{c.number}.</span>
                      {name(c.nameEn, c.nameTa)}
                    </p>
                    <span className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full ${style.chip}`}>
                      {style.icon} {t.levels[c.level]}
                    </span>
                  </div>
                  {disabled ? (
                    <p className="mt-1.5 text-xs text-slate-500">{t.noQuestions}</p>
                  ) : (
                    <>
                      <div className="mt-2 h-1.5 rounded-full bg-slate-200/70 dark:bg-slate-700">
                        <div className="h-full rounded-full bg-indigo-500" style={{ width: `${Math.min(100, (c.questions / c.bank) * 100)}%` }} />
                      </div>
                      <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {t.answered(c.questions, c.bank)}
                        {c.recentAccuracy !== null && ` · ${t.recent(Math.round(c.recentAccuracy))}`}
                        {c.openMistakes > 0 && <span className="text-rose-700 dark:text-rose-300"> · {t.mistakes(c.openMistakes)}</span>}
                      </p>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ChapterMap;
