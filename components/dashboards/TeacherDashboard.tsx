
import React from 'react';
import DashboardCard from '../DashboardCard';
import PerformanceChart from '../PerformanceChart';
import { UsersIcon, BookOpenIcon, TargetIcon, ZapIcon } from '../icons';
import { PerformanceDataPoint, Student, Topic } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

const teacherPerformanceData: PerformanceDataPoint[] = [
  { date: 'Week 1', score: 68 }, { date: 'Week 2', score: 71 }, { date: 'Week 3', score: 70 },
  { date: 'Week 4', score: 74 }, { date: 'Week 5', score: 76 }, { date: 'Week 6', score: 75 },
];

const studentsAtRisk: Student[] = [
    { id: 'ST05', name: 'K. Ravi', class: 12, school: '', overallScore: 58, performanceTrend: 'down', attemptRate: 65, riskLevel: 'high' },
    { id: 'ST12', name: 'L. Meena', class: 12, school: '', overallScore: 62, performanceTrend: 'stable', attemptRate: 70, riskLevel: 'medium' },
    { id: 'ST08', name: 'P. Arun', class: 12, school: '', overallScore: 65, performanceTrend: 'down', attemptRate: 80, riskLevel: 'low' },
];

const classTopics: Topic[] = [
    { name: 'Electrostatics', subject: 'Physics', strength: 'strong' },
    { name: 'Organic Chemistry', subject: 'Chemistry', strength: 'weak' },
    { name: 'Human Physiology', subject: 'Biology', strength: 'average' },
    { name: 'Calculus', subject: 'Maths', strength: 'strong' },
    { name: 'Thermodynamics', subject: 'Physics', strength: 'average' },
    { name: 'P-Block Elements', subject: 'Chemistry', strength: 'weak' },
];

const TopicHeatmap: React.FC<{ topics: Topic[]; translateSubject: (subject: string) => string }> = ({ topics, translateSubject }) => {
    const strengthColorMap = {
        weak: 'bg-red-200 dark:bg-red-500/30 text-red-800 dark:text-red-300',
        average: 'bg-yellow-100 dark:bg-yellow-500/30 text-yellow-800 dark:text-yellow-300',
        strong: 'bg-emerald-100 dark:bg-emerald-500/30 text-emerald-800 dark:text-emerald-300',
    };
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {topics.map(topic => (
                <div key={topic.name} className={`p-4 rounded-lg text-center ${strengthColorMap[topic.strength]}`}>
                    <p className="font-semibold text-sm">{topic.name}</p>
                    <p className="text-xs opacity-80">{translateSubject(topic.subject)}</p>
                </div>
            ))}
        </div>
    );
};


const TeacherDashboard: React.FC = () => {
    const { t } = useLanguage();
    const translateSubject = (subject: string) => {
        const key = subject.toLowerCase();
        return t(key) || subject;
    };
    const trendLabel = (trend: string) => t(`dashboards.trends.${trend}`) || trend;

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{t('dashboards.teacherTitle')}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title={t('dashboards.cards.totalStudents')} value="45" icon={<UsersIcon />} />
                <DashboardCard title={t('dashboards.cards.classAverage')} value="74%" icon={<TargetIcon />} change={1.8} />
                <DashboardCard title={t('dashboards.cards.pendingReviews')} value="8" icon={<BookOpenIcon />} />
                <DashboardCard title={t('dashboards.cards.topPerformer')} value="S. Anjali (96%)" icon={<ZapIcon />} />
            </div>

            <div>
                <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">{t('dashboards.sections.classPerformanceTrend')}</h2>
                <PerformanceChart data={teacherPerformanceData} type="bar" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">{t('dashboards.sections.studentsAtRisk')}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
                                <tr>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.studentName')}</th>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.score')}</th>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.trend')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentsAtRisk.map((student) => (
                                    <tr key={student.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{student.name}</th>
                                        <td className="px-6 py-4">{student.overallScore}%</td>
                                        <td className={`px-6 py-4 font-semibold ${student.performanceTrend === 'down' ? 'text-red-500' : 'text-slate-500'}`}>{trendLabel(student.performanceTrend)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">{t('dashboards.sections.topicHeatmap')}</h2>
                    <TopicHeatmap topics={classTopics} translateSubject={translateSubject} />
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
