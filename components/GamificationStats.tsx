import React from 'react';
import { FlameIcon, CoinIcon } from './icons';

interface GamificationStatsProps {
    streak: number;
    coins: number;
    t: {
        streak: string;
        coins: string;
    }
}

const GamificationStats: React.FC<GamificationStatsProps> = ({ streak, coins, t }) => {
    return (
        <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:p-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                <FlameIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                <div className="flex items-baseline">
                    <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">{streak}</span>
                    <span className="hidden md:inline text-xs text-slate-500 dark:text-slate-400 ml-1">{t.streak}</span>
                </div>
            </div>
             <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:p-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                <CoinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                 <div className="flex items-baseline">
                    <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">{coins}</span>
                    <span className="hidden md:inline text-xs text-slate-500 dark:text-slate-400 ml-1">{t.coins}</span>
                </div>
            </div>
        </div>
    );
};

export default GamificationStats;
