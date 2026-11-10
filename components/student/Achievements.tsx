import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { Alert, Spinner, apiError } from '../common/ui';

// Badges (earned in colour, the rest with their progress) and this week's
// effort board: questions practised by classmates of the same class and section.

const TEXT = {
  en: {
    title: 'Achievements', subtitle: 'Badges for steady practice, fixing mistakes and mastering chapters.',
    earned: (n: number, t: number) => `${n} of ${t} badges earned`, board: 'This week in your class', boardHint: 'Questions practised since Monday. Effort counts, not marks.',
    you: 'You', rank: (r: number, of: number) => `You are #${r} of ${of} this week`, nobody: 'Nobody has practised this week yet. Be the first!', qs: 'Qs',
    stats: { answers: 'Questions practised', fixed: 'Mistakes fixed', mastered: 'Chapters mastered', longestStreak: 'Longest streak (days)' } as Record<string, string>,
  },
  ta: {
    title: 'சாதனைகள்', subtitle: 'தொடர் பயிற்சி, தவறுகளைத் திருத்துதல், பாடத் தேர்ச்சிக்கான பதக்கங்கள்.',
    earned: (n: number, t: number) => `${t} இல் ${n} பதக்கங்கள் பெற்றீர்கள்`, board: 'இந்த வாரம் உங்கள் வகுப்பில்', boardHint: 'திங்கள் முதல் பயிற்சி செய்த கேள்விகள். மதிப்பெண் அல்ல, முயற்சியே கணக்கு.',
    you: 'நீங்கள்', rank: (r: number, of: number) => `இந்த வாரம் ${of} பேரில் நீங்கள் #${r}`, nobody: 'இந்த வாரம் இன்னும் யாரும் பயிற்சி செய்யவில்லை. முதலில் நீங்கள்!', qs: 'கேள்வி',
    stats: { answers: 'பயிற்சிக் கேள்விகள்', fixed: 'திருத்திய தவறுகள்', mastered: 'தேர்ச்சி பெற்ற பாடங்கள்', longestStreak: 'நீண்ட தொடர்ச்சி (நாட்கள்)' } as Record<string, string>,
  },
};

const Achievements: React.FC = () => {
  const { language } = useLanguage();
  const ta = language === 'ta';
  const t = TEXT[ta ? 'ta' : 'en'];
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/student/achievements')
      .then((res) => setData(res.data.data))
      .catch((err) => setError(apiError(err)));
  }, []);

  if (error) return <Alert>{error}</Alert>;
  if (!data) return <Spinner />;
  const earned = data.badges.filter((b: any) => b.earned).length;
  const medal = (rank: number) => (rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}`);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">🏅 {t.title}</h1>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {(['answers', 'fixed', 'mastered', 'longestStreak'] as const).map((k) => (
          <div key={k} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 sm:p-4">
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">{data.stats[k]}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.stats[k]}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <section className="lg:col-span-2 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-5">
          <p className="font-bold text-slate-800 dark:text-slate-100">{t.earned(earned, data.badges.length)}</p>
          <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.badges.map((b: any) => (
              <li key={b.id} className={`rounded-2xl border-2 p-3 text-center ${b.earned ? 'border-amber-300 bg-gradient-to-b from-amber-50 to-white dark:from-amber-500/15 dark:to-slate-800 dark:border-amber-500/40' : 'border-slate-200 dark:border-slate-700'}`}>
                <div className={`text-3xl ${b.earned ? '' : 'grayscale opacity-40'}`} aria-hidden="true">{b.icon}</div>
                <p className={`mt-1 text-sm font-bold ${b.earned ? 'text-slate-800 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'}`}>{ta ? b.ta : b.en}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{ta ? b.hintTa : b.hintEn}</p>
                {!b.earned && (
                  <div className="mt-2">
                    <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
                      <div className="h-full rounded-full bg-indigo-500" style={{ width: `${Math.round(b.progress * 100)}%` }} />
                    </div>
                    <p className="mt-0.5 text-[10px] text-slate-500 tabular-nums">{Math.min(b.value, b.target)} / {b.target}</p>
                  </div>
                )}
                {b.earned && <p className="mt-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300">✓</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 sm:p-5">
          <p className="font-bold text-slate-800 dark:text-slate-100">🏁 {t.board}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t.boardHint}</p>
          {data.board.top.length === 0 ? (
            <p className="mt-6 text-center text-sm text-slate-500">{t.nobody}</p>
          ) : (
            <ol className="mt-3 space-y-1">
              {data.board.top.map((r: any) => (
                <li key={r.rank} className={`flex items-center gap-3 rounded-xl px-2 py-1.5 ${r.me ? 'bg-indigo-50 dark:bg-indigo-500/15 ring-1 ring-indigo-300 dark:ring-indigo-500/40' : ''}`}>
                  <span className="w-7 text-center text-sm font-bold">{medal(r.rank)}</span>
                  <span className="flex-1 truncate text-sm text-slate-800 dark:text-slate-100">{r.me ? `${r.name} (${t.you})` : r.name}</span>
                  <span className="text-sm font-semibold tabular-nums text-slate-700 dark:text-slate-200">{r.answers} {t.qs}</span>
                </li>
              ))}
            </ol>
          )}
          {data.board.me && <p className="mt-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">{t.rank(data.board.me.rank, data.board.me.of)}</p>}
        </section>
      </div>
    </div>
  );
};

export default Achievements;
