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
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                <FlameIcon className="w-5 h-5 text-orange-500" />
                <div className="flex items-baseline">
                    <span className="font-bold text-slate-800 dark:text-slate-100">{streak}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">{t.streak}</span>
                </div>
            </div>
             <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                <CoinIcon className="w-5 h-5 text-yellow-500" />
                 <div className="flex items-baseline">
                    <span className="font-bold text-slate-800 dark:text-slate-100">{coins}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">{t.coins}</span>
                </div>
            </div>
        </div>
    );
};

export default GamificationStats;
