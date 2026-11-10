import React, { useEffect, useState } from 'react';

// Text size for weaker readers and small phones: normal, large, larger. Scales
// the root font size, so the whole app (sized in rem) grows with it.

const SIZES = [100, 112.5, 125];
const KEY = 'text-size';

export const applyTextSize = (pct: number) => {
  document.documentElement.style.fontSize = pct === 100 ? '' : `${pct}%`;
};

/** Call once at start-up so the saved size applies before the first screen. */
export const restoreTextSize = () => {
  const saved = Number(localStorage.getItem(KEY));
  if (SIZES.includes(saved)) applyTextSize(saved);
};

const TextSize: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [size, setSize] = useState(() => (SIZES.includes(Number(localStorage.getItem(KEY))) ? Number(localStorage.getItem(KEY)) : 100));
  useEffect(() => {
    applyTextSize(size);
    localStorage.setItem(KEY, String(size));
  }, [size]);
  const next = SIZES[(SIZES.indexOf(size) + 1) % SIZES.length];
  return (
    <button type="button" onClick={() => setSize(next)} aria-label={`Text size ${Math.round(size)}%. Change text size`} title="Text size"
      className={`p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-bold leading-none ${className}`}>
      <span className="text-sm">A</span>
      <span className={size > 100 ? 'text-lg' : 'text-base'}>A</span>
      {size > 100 && <span className="ml-0.5 text-[10px] align-top">{size === 125 ? '++' : '+'}</span>}
    </button>
  );
};

export default TextSize;
