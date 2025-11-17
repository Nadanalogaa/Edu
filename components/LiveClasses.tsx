import React from 'react';
import { PhysicsIcon, BiologyIcon, ChemistryIcon, CalendarIcon, ClockIcon } from './icons';

interface LiveClass {
    subject: string;
    exams: string;
    icon: React.ReactNode;
    gradient: string;
    batch: string;
    class: string;
    day: string;
    time: string;
}

const liveClassesData: LiveClass[] = [
    {
        subject: 'Physics',
        exams: 'NEET',
        icon: <PhysicsIcon className="w-8 h-8 text-orange-800/80" />,
        gradient: 'bg-gradient-to-br from-orange-300 to-yellow-300',
        batch: 'P3',
        class: 'Class 11',
        day: 'Saturday',
        time: '6.00 pm - 9.00 pm'
    },
    {
        subject: 'Biology',
        exams: 'NEET',
        icon: <BiologyIcon className="w-8 h-8 text-emerald-800/80" />,
        gradient: 'bg-gradient-to-br from-emerald-300 to-green-300',
        batch: 'B1',
        class: 'Class 11',
        day: 'Monday',
        time: '6.00 pm - 9.00 pm'
    },
    {
        subject: 'Chemistry',
        exams: 'NEET',
        icon: <ChemistryIcon className="w-8 h-8 text-amber-800/80" />,
        gradient: 'bg-gradient-to-br from-amber-300 to-orange-300',
        batch: 'C3',
        class: 'Class 11',
        day: 'Tuesday',
        time: '6.00 pm - 9.00 pm'
    }
];

const LiveClassCard: React.FC<{ classInfo: LiveClass }> = ({ classInfo }) => {
    const { subject, exams, icon, gradient, batch, class: className, day, time } = classInfo;
    
    return (
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <div className={`p-6 ${gradient}`}>
                <div className="flex items-center space-x-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-sm">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800">{subject}</h3>
                        <p className="font-medium text-sm text-slate-700/90">{exams}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 md:p-5 bg-white dark:bg-slate-800/50">
                 <div className="text-left mb-3">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1">Class Schedule</span>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                        <p className="font-bold text-slate-800 dark:text-slate-100">{className}</p>
                        <span className="text-xs font-bold text-white bg-blue-500 px-3 py-1 rounded-full">Batch: {batch}</span>
                    </div>
                    <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-2 text-slate-400" />
                            <span>{day}</span>
                        </div>
                        <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-2 text-slate-400" />
                            <span>{time}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex items-stretch border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <button className="w-1/2 px-4 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700/40 transition-colors">
                        View Details
                    </button>
                    <div className="w-1/2 flex items-center justify-center p-2.5 bg-slate-100 dark:bg-slate-900/40 border-l border-slate-200 dark:border-slate-700">
                        <input id={`select-${subject}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-slate-200 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-600 dark:border-slate-500 cursor-pointer" />
                        <label htmlFor={`select-${subject}`} className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">Select</label>
                    </div>
                </div>
            </div>
        </div>
    );
};


interface LiveClassesProps {
    title: string;
}

const LiveClasses: React.FC<LiveClassesProps> = ({ title }) => {
    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {liveClassesData.map(cls => <LiveClassCard key={cls.subject} classInfo={cls} />)}
            </div>
        </div>
    );
};

export default LiveClasses;