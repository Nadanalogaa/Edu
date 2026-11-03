import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

// Chart colours from the validated reference palette (categorical slots 1 and 2),
// stepped separately for light and dark surfaces. Text never uses series colours.
const PALETTE = {
  light: { primary: '#2a78d6', compare: '#eb6834', grid: '#e2e8f0', axis: '#64748b', reference: '#94a3b8', surface: '#ffffff' },
  dark: { primary: '#3987e5', compare: '#d95926', grid: '#334155', axis: '#94a3b8', reference: '#64748b', surface: '#1e293b' },
};

/** Follows the app's dark-mode class (set on <html>). */
export const useChartColors = () => {
  const read = () => (document.documentElement.classList.contains('dark') ? PALETTE.dark : PALETTE.light);
  const [colors, setColors] = useState(read);
  useEffect(() => {
    const observer = new MutationObserver(() => setColors(read()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return colors;
};

export interface TrendPoint {
  label: string;
  value: number | null;
  compare?: number | null;
  detail?: string;
}

/**
 * Percentages over time on one 0–100 axis, with a dashed pass-mark line.
 * `compareLabel` adds a second line (e.g. class average) with a legend.
 */
export const TrendChart: React.FC<{
  data: TrendPoint[];
  valueLabel: string;
  compareLabel?: string;
  passMark?: number;
  height?: number;
}> = ({ data, valueLabel, compareLabel, passMark, height = 240 }) => {
  const c = useChartColors();
  if (data.length === 0) return null;

  const TooltipBox = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null;
    const p: TrendPoint = payload[0].payload;
    return (
      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs shadow-lg text-slate-700 dark:text-slate-200">
        <p className="font-semibold text-slate-800 dark:text-slate-100">{p.label}</p>
        {p.detail && <p className="text-slate-500 dark:text-slate-400">{p.detail}</p>}
        <p className="mt-1 flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: c.primary }} />
          {valueLabel}: <b>{p.value ?? '—'}%</b>
        </p>
        {compareLabel && (
          <p className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-0.5" style={{ background: c.compare }} />
            {compareLabel}: <b>{p.compare ?? '—'}%</b>
          </p>
        )}
      </div>
    );
  };

  return (
    <div>
      {compareLabel && (
        <div className="mb-2 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-300" aria-hidden="true">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-4 h-0.5 rounded" style={{ background: c.primary }} />
            {valueLabel}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-4 border-t-2 border-dashed" style={{ borderColor: c.compare }} />
            {compareLabel}
          </span>
        </div>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 4, left: -16 }}>
            <CartesianGrid stroke={c.grid} vertical={false} />
            <XAxis dataKey="label" tick={{ fill: c.axis, fontSize: 11 }} tickLine={false} axisLine={{ stroke: c.grid }} interval="preserveStartEnd" minTickGap={16} />
            <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tick={{ fill: c.axis, fontSize: 11 }} tickLine={false} axisLine={false} unit="%" />
            {passMark !== undefined && (
              <ReferenceLine
                y={passMark}
                stroke={c.reference}
                strokeDasharray="4 4"
                label={{ value: `Pass ${passMark}%`, position: 'insideBottomRight', fill: c.axis, fontSize: 11 }}
              />
            )}
            <Tooltip content={<TooltipBox />} cursor={{ stroke: c.axis, strokeWidth: 1 }} />
            {compareLabel && (
              <Line type="linear" dataKey="compare" stroke={c.compare} strokeWidth={2} strokeDasharray="5 4" dot={false} activeDot={{ r: 4 }} isAnimationActive={false} connectNulls />
            )}
            <Line type="linear" dataKey="value" stroke={c.primary} strokeWidth={2} dot={{ r: 4, fill: c.primary, strokeWidth: 2, stroke: c.surface }} activeDot={{ r: 6 }} isAnimationActive={false} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export interface BarItem {
  key: string;
  label: string;
  sublabel?: string;
  value: number | null;
  onClick?: () => void;
}

/** Labelled horizontal bars (0–100%), value written beside each bar; a tick marks the pass mark. */
export const PercentBars: React.FC<{ items: BarItem[]; passMark?: number; emptyText?: string }> = ({ items, passMark, emptyText = 'No results yet' }) => {
  const c = useChartColors();
  if (items.length === 0) return <p className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">{emptyText}</p>;
  return (
    <ul className="space-y-3">
      {items.map((item) => {
        const pct = Math.max(0, Math.min(100, item.value ?? 0));
        const below = passMark !== undefined && item.value !== null && item.value < passMark;
        const Row = item.onClick ? 'button' : 'div';
        return (
          <li key={item.key}>
            <Row
              {...(item.onClick && { type: 'button', onClick: item.onClick })}
              className={`w-full text-left ${item.onClick ? 'rounded-lg -mx-1 px-1 hover:bg-slate-50 dark:hover:bg-slate-700/40' : ''}`}
              title={`${item.label}: ${item.value ?? '—'}%`}
            >
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="text-slate-700 dark:text-slate-200 truncate">
                  {item.label}
                  {item.sublabel && <span className="ml-1.5 text-xs text-slate-500 dark:text-slate-400">{item.sublabel}</span>}
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                  {item.value !== null ? `${item.value}%` : '—'}
                  {below && <span className="ml-1 text-xs font-medium text-red-600 dark:text-red-400">below pass</span>}
                </span>
              </div>
              <div className="relative mt-1 h-2 rounded-full bg-slate-100 dark:bg-slate-700/60">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: c.primary }} />
                {passMark !== undefined && (
                  <span className="absolute -top-0.5 h-3 w-0.5 bg-slate-500 dark:bg-slate-300" style={{ left: `${passMark}%` }} aria-hidden="true" />
                )}
              </div>
            </Row>
          </li>
        );
      })}
    </ul>
  );
};

export const weekLabel = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
