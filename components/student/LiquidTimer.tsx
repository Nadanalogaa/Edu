import React from 'react';

// Time on the current question as liquid filling a tube: a moving wave on the
// surface, bubbles rising, green → amber → red as it passes the suggested time.
// Freezes once the question is answered. Horizontal (phones) or a tall
// vertical tube where the liquid rises (beside the question on wide screens).

const clock = (seconds: number) => `${Math.floor(Math.max(0, seconds) / 60)}:${String(Math.max(0, seconds) % 60).padStart(2, '0')}`;

const STYLES = `
@keyframes lt-wave { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes lt-bubble-up { 0% { transform: translateY(0) scale(.5); opacity: 0; } 15% { opacity: .9; } 100% { transform: translateY(-140px) scale(1.1); opacity: 0; } }
@keyframes lt-bubble { 0% { transform: translateY(0) scale(.6); opacity: 0; } 15% { opacity: .9; } 100% { transform: translateY(-22px) scale(1); opacity: 0; } }
@keyframes lt-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(244,63,94,.45); } 50% { box-shadow: 0 0 0 7px rgba(244,63,94,0); } }
.lt-wave { animation: lt-wave 2.4s linear infinite; }
.lt-wave-slow { animation: lt-wave 4s linear infinite; }
.lt-bubble { animation: lt-bubble 2.2s ease-in infinite; }
.lt-bubble-up { animation: lt-bubble-up 3.2s ease-in infinite; }
.lt-pulse { animation: lt-pulse 1.4s ease-in-out infinite; }
.lt-paused .lt-wave, .lt-paused .lt-wave-slow, .lt-paused .lt-bubble, .lt-paused .lt-bubble-up { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .lt-wave, .lt-wave-slow, .lt-bubble, .lt-bubble-up, .lt-pulse { animation: none; } }
`;

const TONES = {
  ok: { liquid: 'from-emerald-400 to-teal-500', liquidUp: 'from-teal-500 to-emerald-300', wave: '#34d399', waveUp: '#6ee7b7', text: 'text-emerald-600 dark:text-emerald-300' },
  warn: { liquid: 'from-amber-300 to-orange-500', liquidUp: 'from-orange-500 to-amber-300', wave: '#fbbf24', waveUp: '#fcd34d', text: 'text-amber-600 dark:text-amber-300' },
  over: { liquid: 'from-rose-400 to-red-600', liquidUp: 'from-red-600 to-rose-400', wave: '#fb7185', waveUp: '#fda4af', text: 'text-rose-600 dark:text-rose-300' },
};

const waveImage = (color: string, opacity: number) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 12' preserveAspectRatio='none'><path d='M0 6 Q15 0 30 6 T60 6 T90 6 T120 6 V12 H0 Z' fill='${color}' fill-opacity='${opacity}'/></svg>`
  )}")`;

export interface LiquidTimerProps {
  seconds: number;
  target: number;
  total: number;
  paused?: boolean;
  vertical?: boolean;
  labels: { thisQuestion: string; suggested: string; total: string };
}

const LiquidTimer: React.FC<LiquidTimerProps> = ({ seconds, target, total, paused, vertical, labels }) => {
  const ratio = seconds / target;
  const toneKey = ratio >= 1 ? 'over' : ratio >= 0.75 ? 'warn' : 'ok';
  const tone = TONES[toneKey];
  const fill = Math.min(100, Math.max(4, ratio * 100));
  const pulse = ratio >= 1 && !paused ? 'lt-pulse' : '';

  if (vertical) {
    return (
      <div className={`h-full flex flex-col items-center ${paused ? 'lt-paused' : ''}`}>
        <style>{STYLES}</style>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 text-center">⏱ {labels.thisQuestion}</p>
        <p className={`mt-0.5 font-mono text-2xl font-bold ${tone.text}`}>{clock(seconds)}</p>
        <div
          className={`relative mt-3 flex-1 w-16 min-h-[220px] rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900/70 ring-1 ring-inset ring-slate-200 dark:ring-slate-700 shadow-inner ${pulse}`}
          role="timer"
          aria-label={`${labels.thisQuestion} ${clock(seconds)}`}
        >
          {/* scale marks: quarter, half, three quarters of the suggested time */}
          {[25, 50, 75].map((m) => (
            <span key={m} className="absolute right-0 w-3 h-px bg-slate-300 dark:bg-slate-600" style={{ bottom: `${m}%` }} aria-hidden="true" />
          ))}
          {/* liquid rising */}
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t ${tone.liquidUp} transition-[height] duration-1000 ease-linear`} style={{ height: `${fill}%` }}>
            <div className="absolute -top-[9px] inset-x-0 h-[10px] overflow-hidden">
              <div className="absolute top-0 left-0 h-[10px] w-[200%] lt-wave-slow" style={{ backgroundImage: waveImage('#ffffff', 0.35), backgroundSize: '50% 100%' }} />
              <div className="absolute top-[2px] left-0 h-[8px] w-[200%] lt-wave" style={{ backgroundImage: waveImage(tone.waveUp, 1), backgroundSize: '50% 100%' }} />
            </div>
            {[18, 46, 70, 32, 58].map((left, i) => (
              <span key={i} className="lt-bubble-up absolute bottom-1 rounded-full bg-white/60" style={{ left: `${left}%`, width: i % 2 ? 5 : 7, height: i % 2 ? 5 : 7, animationDelay: `${i * 0.6}s` }} />
            ))}
            <div className="absolute left-2 top-2 bottom-2 w-1 rounded-full bg-white/25" />
          </div>
          {/* glass shine */}
          <div className="absolute left-2.5 top-3 bottom-3 w-1.5 rounded-full bg-white/40 dark:bg-white/10 pointer-events-none" aria-hidden="true" />
        </div>
        <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 text-center leading-tight">
          {clock(target)} {labels.suggested}
        </p>
        <p className="mt-2 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 font-mono text-xs text-slate-600 dark:text-slate-300">
          {labels.total} {clock(total)}
        </p>
      </div>
    );
  }

  return (
    <div className={paused ? 'lt-paused' : ''}>
      <style>{STYLES}</style>
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          ⏱ {labels.thisQuestion}: <span className={`font-mono text-sm font-bold ${tone.text}`}>{clock(seconds)}</span>
          <span className="text-slate-400"> / {clock(target)} {labels.suggested}</span>
        </span>
        <span className="font-mono text-slate-500 dark:text-slate-400">
          {labels.total} {clock(total)}
        </span>
      </div>
      <div
        className={`relative mt-1.5 h-7 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900/70 ring-1 ring-inset ring-slate-200 dark:ring-slate-700 ${pulse}`}
        role="timer"
        aria-label={`${labels.thisQuestion} ${clock(seconds)}`}
      >
        <div className={`absolute bottom-0 left-0 h-[72%] rounded-r-md bg-gradient-to-r ${tone.liquid} transition-[width] duration-1000 ease-linear`} style={{ width: `${fill}%` }}>
          <div className="absolute -top-[6px] inset-x-0 h-[7px] overflow-hidden">
            <div className="absolute top-0 left-0 h-[7px] w-[200%] lt-wave-slow" style={{ backgroundImage: waveImage('#ffffff', 0.35), backgroundSize: '50% 100%' }} />
            <div className="absolute top-[1px] left-0 h-[6px] w-[200%] lt-wave" style={{ backgroundImage: waveImage(tone.wave, 0.9), backgroundSize: '50% 100%' }} />
          </div>
          {[12, 34, 58, 81].map((left, i) => (
            <span key={left} className="lt-bubble absolute bottom-0.5 w-1.5 h-1.5 rounded-full bg-white/70" style={{ left: `${left}%`, animationDelay: `${i * 0.55}s` }} />
          ))}
          <div className="absolute inset-x-1 top-1 h-0.5 bg-white/30 rounded-full" />
        </div>
        <div className="absolute inset-y-1 right-0 w-0.5 bg-slate-300 dark:bg-slate-600 rounded" aria-hidden="true" />
      </div>
    </div>
  );
};

export default LiquidTimer;
