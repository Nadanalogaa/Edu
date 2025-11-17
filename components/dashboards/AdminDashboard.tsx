
import React from 'react';
import DashboardCard from '../DashboardCard';
import PerformanceChart from '../PerformanceChart';
import { UsersIcon, BookOpenIcon, UserIcon } from '../icons';
import { PerformanceDataPoint, School, Student } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

const adminPerformanceData: PerformanceDataPoint[] = [
  { date: 'Jan', score: 65 }, { date: 'Feb', score: 68 }, { date: 'Mar', score: 72 },
  { date: 'Apr', score: 70 }, { date: 'May', score: 75 }, { date: 'Jun', score: 78 },
];

const topSchools: School[] = [
    { id: 'S01', name: 'Alpha Matriculation Hr. Sec. School, Chennai', avgScore: 88, topStudent: 'R. Priya' },
    { id: 'S02', name: 'Beta Public School, Coimbatore', avgScore: 85, topStudent: 'S. Kumar' },
    { id: 'S03', name: 'Gamma Model School, Madurai', avgScore: 82, topStudent: 'K. Anitha' },
];

const lowPerformingStudents: Student[] = [
    { id: 'ST011', name: 'M. Suresh', class: 12, school: 'Delta Hr. Sec. School', overallScore: 45, performanceTrend: 'down', attemptRate: 60, riskLevel: 'high' },
    { id: 'ST023', name: 'V. Divya', class: 11, school: 'Epsilon Public School', overallScore: 52, performanceTrend: 'stable', attemptRate: 75, riskLevel: 'high' },
];

const AdminDashboard: React.FC = () => {
    const { t } = useLanguage();
    const trendLabel = (trend: string) => t(`dashboards.trends.${trend}`) || trend;

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{t('dashboards.adminTitle')}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title={t('dashboards.cards.totalStudents')} value="12,540" icon={<UsersIcon />} change={2.5} />
                <DashboardCard title={t('dashboards.cards.activeTeachers')} value="850" icon={<UserIcon />} change={1.2} />
                <DashboardCard title={t('dashboards.cards.testsConducted')} value="2,120" icon={<BookOpenIcon />} change={-0.5} />
                <DashboardCard title={t('dashboards.cards.avgPerformance')} value="72%" icon={<UsersIcon />} change={3.1} />
            </div>

            <div>
                <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">{t('dashboards.sections.statePerformance')}</h2>
                <PerformanceChart data={adminPerformanceData} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">{t('dashboards.sections.topSchools')}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
                                <tr>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.schoolName')}</th>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.avgScore')}</th>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.topStudent')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topSchools.map((school) => (
                                    <tr key={school.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{school.name}</th>
                                        <td className="px-6 py-4">{school.avgScore}%</td>
                                        <td className="px-6 py-4">{school.topStudent}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">{t('dashboards.sections.lowPerforming')}</h2>
                     <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
                                <tr>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.studentName')}</th>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.school')}</th>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.score')}</th>
                                    <th scope="col" className="px-6 py-3">{t('dashboards.table.trend')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lowPerformingStudents.map((student) => (
                                    <tr key={student.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">{student.name}</th>
                                        <td className="px-6 py-4">{student.school}</td>
                                        <td className="px-6 py-4">{student.overallScore}%</td>
                                        <td className="px-6 py-4">{trendLabel(student.performanceTrend)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
