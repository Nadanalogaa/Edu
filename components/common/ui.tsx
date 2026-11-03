import React from 'react';
import { XIcon } from '../icons';

// Shared building blocks for the school-admin and owner screens.

export const BOARD_LABELS: Record<string, string> = {
  state_board: 'Tamil Nadu State Board',
  cbse: 'CBSE',
};
export const boardLabel = (board?: string) => (board ? BOARD_LABELS[board] || board : '—');

export const CLASS_GRADES = [6, 7, 8, 9, 10, 11, 12];
export const classLabel = (grade?: number | null, section?: string | null) =>
  grade ? `${grade}th${section ? ` – ${section}` : ''}` : '—';

/** The message from an API error response, or a fallback. */
export const apiError = (err: any, fallback = 'Something went wrong. Please try again.') =>
  err?.response?.data?.message || fallback;

export const formatDate = (value?: string | null) =>
  value ? new Date(value.length === 10 ? `${value}T00:00:00` : value).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—';

export const PageHeader: React.FC<{ title: string; subtitle?: string; actions?: React.ReactNode }> = ({
  title,
  subtitle,
  actions,
}) => (
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
    {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
  </div>
);

export const Panel: React.FC<{ title?: string; actions?: React.ReactNode; children: React.ReactNode; className?: string }> = ({
  title,
  actions,
  children,
  className = '',
}) => (
  <section className={`bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm ${className}`}>
    {(title || actions) && (
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 pt-4 sm:pt-5">
        {title && <h2 className="text-lg font-bold text-slate-700 dark:text-slate-200">{title}</h2>}
        {actions}
      </div>
    )}
    <div className="p-4 sm:p-6">{children}</div>
  </section>
);

export const StatTile: React.FC<{ label: string; value: React.ReactNode; hint?: React.ReactNode; tone?: 'default' | 'warn' | 'danger' }> = ({
  label,
  value,
  hint,
  tone = 'default',
}) => {
  const toneClass =
    tone === 'danger'
      ? 'border-red-300 dark:border-red-800'
      : tone === 'warn'
        ? 'border-amber-300 dark:border-amber-700'
        : 'border-slate-200 dark:border-slate-800';
  return (
    <div className={`bg-white dark:bg-slate-800/50 p-4 sm:p-5 rounded-2xl border shadow-sm ${toneClass}`}>
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>}
    </div>
  );
};

/** A usage bar, e.g. 142 of 200 students. */
export const UsageBar: React.FC<{ used: number; limit: number }> = ({ used, limit }) => {
  const pct = limit > 0 ? Math.min(100, Math.round((used / limit) * 100)) : 100;
  const color = pct >= 100 ? 'bg-red-500' : pct >= 85 ? 'bg-amber-500' : 'bg-indigo-600';
  return (
    <div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {used} of {limit} students ({pct}%)
      </p>
    </div>
  );
};

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
const BUTTON_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400',
  secondary:
    'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700',
  danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400',
  ghost: 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700',
};

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: 'sm' | 'md' }> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => (
  <button
    type="button"
    {...props}
    className={`inline-flex items-center justify-center gap-1.5 font-medium rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
      size === 'sm' ? 'px-2.5 py-1.5 text-xs' : 'px-4 py-2 text-sm'
    } ${BUTTON_CLASSES[variant]} ${className}`}
  />
);

const inputClass =
  'w-full px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500';

export const Field: React.FC<{ label: string; hint?: string; children: React.ReactNode }> = ({ label, hint, children }) => (
  <label className="block">
    <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</span>
    {children}
    {hint && <span className="block mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</span>}
  </label>
);

export const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input {...props} className={`${inputClass} ${className}`} />
);

export const SelectInput: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ className = '', ...props }) => (
  <select {...props} className={`${inputClass} ${className}`} />
);

export const Badge: React.FC<{ tone?: 'green' | 'amber' | 'red' | 'slate' | 'indigo'; children: React.ReactNode }> = ({
  tone = 'slate',
  children,
}) => {
  const tones = {
    green: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
    indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300',
  };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${tones[tone]}`}>{children}</span>;
};

export const Alert: React.FC<{ tone?: 'error' | 'success' | 'info'; children: React.ReactNode; onClose?: () => void }> = ({
  tone = 'error',
  children,
  onClose,
}) => {
  const tones = {
    error: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800',
    info: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800',
  };
  return (
    <div role={tone === 'error' ? 'alert' : 'status'} className={`flex items-start justify-between gap-3 px-4 py-3 rounded-lg border text-sm ${tones[tone]}`}>
      <div>{children}</div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Dismiss" className="opacity-70 hover:opacity-100">
          <XIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export const Modal: React.FC<{ title: string; onClose: () => void; children: React.ReactNode; wide?: boolean }> = ({
  title,
  onClose,
  children,
  wide,
}) => (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/50 backdrop-blur-sm p-0 sm:p-4" onClick={onClose}>
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => e.stopPropagation()}
      className={`w-full ${wide ? 'sm:max-w-2xl' : 'sm:max-w-md'} max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700`}
    >
      <div className="sticky top-0 flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close" className="p-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
          <XIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="p-5">{children}</div>
    </div>
  </div>
);

export const EmptyState: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">{children}</p>
);

export const Spinner: React.FC = () => (
  <div className="flex justify-center py-10">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
  </div>
);

/** Table wrapper that scrolls sideways on phones. */
export const Table: React.FC<{ head: React.ReactNode[]; children: React.ReactNode }> = ({ head, children }) => (
  <div className="overflow-x-auto -mx-4 sm:mx-0">
    <table className="w-full text-sm text-left">
      <thead className="text-xs uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50">
        <tr>
          {head.map((h, i) => (
            <th key={i} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">{children}</tbody>
    </table>
  </div>
);
