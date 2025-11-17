import React from 'react';
import { TargetIcon } from './icons';

interface DailyChallengeCardProps {
    title: string;
    task: string;
    reward: string;
    progress: number; // percentage 0-100
    startText: string;
    progressText: string;
    onStart?: () => void;
}

const DailyChallengeCard: React.FC<DailyChallengeCardProps> = ({ title, task, reward, progress, startText, progressText, onStart }) => {
    return (
        <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
                <div className="hidden sm:block p-3 bg-white/20 rounded-full">
                    <TargetIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">{title}</h3>
                    <p className="text-xl font-bold">{task}</p>
                    <p className="text-sm font-semibold text-yellow-300 mt-1">{reward}</p>
                </div>
            </div>
            <div className="w-full md:w-auto flex flex-col md:items-end gap-3">
                <div className="w-full md:w-48">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-white/80">{progressText}</span>
                        <span className="text-xs font-bold">{progress}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-yellow-300 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <button
                    onClick={onStart}
                    className="w-full md:w-auto bg-white text-indigo-600 font-bold py-2 px-6 rounded-lg hover:bg-slate-100 transition-colors shadow-md"
                >
                    {startText}
                </button>
            </div>
        </div>
    );
};

export default DailyChallengeCard;
