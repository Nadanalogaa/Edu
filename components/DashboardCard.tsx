
import React from 'react';
import { ChevronUpIcon, ChevronDownIcon, ChevronRightIcon } from './icons';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: number; // e.g., 5.2 for +5.2% or -3 for -3%
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, change, onClick }) => {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${onClick ? 'cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-600' : ''}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
        </div>
        <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 rounded-full">
          {icon}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        {change !== undefined ? (
          <div className="flex items-center text-sm">
            <span className={`flex items-center font-semibold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
              {isPositive ? <ChevronUpIcon /> : <ChevronDownIcon />}
              {Math.abs(change)}%
            </span>
            <span className="ml-2 text-slate-500 dark:text-slate-400">vs last month</span>
          </div>
        ) : (
          <div></div>
        )}
        {onClick && (
          <button className="flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group">
            <span>Details</span>
            <ChevronRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
