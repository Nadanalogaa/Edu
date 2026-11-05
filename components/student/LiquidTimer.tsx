import React from 'react';

// Time on the current question as a tube filling with liquid: a moving wave on
// top, bubbles rising, green → amber → red as it passes the suggested time.
// Freezes once the question is answered.

const clock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.max(0, seconds) % 60).padStart(2, '0')}`;

const STYLES = `
@keyframes lt-wave { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes lt-bubble { 0% { transform: translateY(0) scale(.6); opacity: 0; } 15% { opacity: .9; } 100% { transform: translateY(-26px) scale(1); opacity: 0; } }
@keyframes lt-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(244,63,94,.45); } 50% { box-shadow: 0 0 0 6px rgba(244,63,94,0); } }
.lt-wave { animation: lt-wave 2.4s linear infinite; }
.lt-wave-slow { animation: lt-wave 4s linear infinite; }
.lt-bubble { animation: lt-bubble 2.2s ease-in infinite; }
.lt-pulse { animation: lt-pulse 1.4s ease-in-out infinite; }
.lt-paused .lt-wave, .lt-paused .lt-wave-slow, .lt-paused .lt-bubble { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .lt-wave, .lt-wave-slow, .lt-bubble, .lt-pulse { animation: none; } }
`;

const TONES = {
  ok: { liquid: 'from-emerald-400 to-teal-500', wave: '#34d399', text: 'text-emerald-700 dark:text-emerald-300' },
  warn: { liquid: 'from-amber-300 to-orange-500', wave: '#fbbf24', text: 'text-amber-700 dark:text-amber-300' },
  over: { liquid: 'from-rose-400 to-red-600', wave: '#fb7185', text: 'text-rose-700 dark:text-rose-300' },
};

const LiquidTimer: React.FC<{
  seconds: number;
  target: number;
  total: number;
  paused?: boolean;
  labels: { thisQuestion: string; suggested: string; total: string };
}> = ({ seconds, target, total, paused, labels }) => {
  const ratio = seconds / target;
  const tone = TONES[ratio >= 1 ? 'over' : ratio >= 0.75 ? 'warn' : 'ok'];
  const fill = Math.min(100, Math.max(4, ratio * 100));
  const wave = (color: string, opacity: number) =>
    `url("data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 12' preserveAspectRatio='none'><path d='M0 6 Q15 0 30 6 T60 6 T90 6 T120 6 V12 H0 Z' fill='${color}' fill-opacity='${opacity}'/></svg>`
    )}")`;

  return (
    <div className={paused ? 'lt-paused' : ''}>
      <style>{STYLES}</style>
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          ⏱ {labels.thisQuestion}:{' '}
          <span className={`font-mono text-sm font-bold ${tone.text}`}>{clock(seconds)}</span>
          <span className="text-slate-400"> / {clock(target)} {labels.suggested}</span>
        </span>
        <span className="font-mono text-slate-500 dark:text-slate-400">
          {labels.total} {clock(total)}
        </span>
      </div>
      <div
        className={`relative mt-1.5 h-7 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900/70 ring-1 ring-inset ring-slate-200 dark:ring-slate-700 ${ratio >= 1 && !paused ? 'lt-pulse' : ''}`}
        role="timer"
        aria-label={`${labels.thisQuestion} ${clock(seconds)}`}
      >
        {/* liquid */}
        <div className={`absolute bottom-0 left-0 h-[72%] rounded-r-md bg-gradient-to-r ${tone.liquid} transition-[width] duration-1000 ease-linear`} style={{ width: `${fill}%` }}>
          {/* wave surface moving across the top (clipped to the liquid) */}
          <div className="absolute -top-[6px] inset-x-0 h-[7px] overflow-hidden">
          <div className="absolute top-0 left-0 h-[7px] w-[200%] lt-wave-slow" style={{ backgroundImage: wave('#ffffff', 0.35), backgroundSize: '50% 100%' }} />
          <div className="absolute top-[1px] left-0 h-[6px] w-[200%] lt-wave" style={{ backgroundImage: wave(tone.wave, 0.9), backgroundSize: '50% 100%' }} />
          </div>
          {/* bubbles */}
          {[12, 34, 58, 81].map((left, i) => (
            <span key={left} className="lt-bubble absolute bottom-0.5 w-1.5 h-1.5 rounded-full bg-white/70" style={{ left: `${left}%`, animationDelay: `${i * 0.55}s` }} />
          ))}
          {/* shine */}
          <div className="absolute inset-x-1 top-1 h-0.5 bg-white/30 rounded-full" />
        </div>
        {/* tick at the suggested time */}
        <div className="absolute inset-y-1 right-0 w-0.5 bg-slate-300 dark:bg-slate-600 rounded" aria-hidden="true" />
      </div>
    </div>
  );
};

export default LiquidTimer;
