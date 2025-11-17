import React, { useState, useEffect, useMemo } from 'react';
import DashboardCard from '../DashboardCard';
import PerformanceChart from '../PerformanceChart';
import StatDetailDrawer from '../StatDetailDrawer';
import { TargetIcon, ZapIcon, BookOpenIcon, UserIcon, ChevronDownIcon, ChevronUpIcon, VideoIcon, AudioIcon, ReadIcon, ARIcon, VRIcon } from '../icons';
import LiveClasses from '../LiveClasses';
import DailyChallengeCard from '../DailyChallengeCard';
import Video360Viewer from '../student/Video360Viewer';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

interface Attempt {
    _id: string;
    testId: {
        title: string;
        type: string;
        examType: string;
        subjects: string[];
    };
    percentage: number;
    marksObtained: number;
    totalMarks: number;
    correctAnswers: number;
    wrongAnswers: number;
    skippedAnswers: number;
    totalQuestions: number;
    createdAt: string;
}

interface Analytics {
    overview: {
        totalAttempts: number;
        totalQuestions: number;
        totalCorrect: number;
        totalWrong: number;
        totalSkipped: number;
        accuracy: string;
    };
    subjectPerformance: Array<{
        subject: string;
        percentage: string;
        attempted: number;
        correct: number;
        wrong: number;
    }>;
    userStats: {
        totalPoints: number;
        coins: number;
        streak: number;
    };
}

interface Mistake {
    _id: string;
    questionId: {
        question: { en: string; ta: string };
        options: { en: string[]; ta: string[] };
        correctAnswer: number;
        explanation: { en: string; ta: string };
        subject: string;
    };
    selectedAnswer: number;
    correctAnswer: number;
    isReviewed: boolean;
    createdAt: string;
}

const StudentDashboard: React.FC = () => {
    const { currentUser } = useAuth();
    const { language, setLanguage, t: translate } = useLanguage();
    const [expandedMistake, setExpandedMistake] = useState<number | null>(null);
    const [attempts, setAttempts] = useState<Attempt[]>([]);
    const [analytics, setAnalytics] = useState<Analytics | null>(null);
    const [mistakes, setMistakes] = useState<Mistake[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeSubjectTab, setActiveSubjectTab] = useState<string>('Overall');

    // Multimedia modal states for Mistake Book
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showVideoTypeSelection, setShowVideoTypeSelection] = useState(false);
    const [selectedVideoType, setSelectedVideoType] = useState<'2D' | '3D' | null>(null);
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);
    const [showPDFViewer, setShowPDFViewer] = useState(false);
    const [showARViewer, setShowARViewer] = useState(false);
    const [showVRExperience, setShowVRExperience] = useState(false);
    const [selectedMistake, setSelectedMistake] = useState<Mistake | null>(null);

    // Stat detail drawer state
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerType, setDrawerType] = useState<'accuracy' | 'points' | 'tests' | null>(null);

    const openDrawer = (type: 'accuracy' | 'points' | 'tests') => {
        setDrawerType(type);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setTimeout(() => setDrawerType(null), 300); // Wait for animation to finish
    };

    const td = (key: string) => translate(`studentDashboard.${key}`);
    const subjectLabel = (subject: string) => {
        if (subject === 'Overall') return translate('overall');
        return translate(subject.toLowerCase()) || subject;
    };
    const formatWithValues = (key: string, values: Record<string, string | number>) => {
        let text = td(key);
        Object.entries(values).forEach(([k, v]) => {
            text = text.replace(`{{${k}}}`, String(v));
        });
        return text;
    };

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);

                // Fetch all data in parallel
                const [attemptsRes, analyticsRes, mistakesRes] = await Promise.all([
                    api.get('/student/attempts?status=completed&limit=10'),
                    api.get('/student/analytics'),
                    api.get('/student/mistakes?limit=10'),
                ]);

                if (attemptsRes.data.success) {
                    setAttempts(attemptsRes.data.data);
                }

                if (analyticsRes.data.success) {
                    setAnalytics(analyticsRes.data.data);
                }

                if (mistakesRes.data.success) {
                    setMistakes(mistakesRes.data.data);
                }
            } catch (error: any) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const handleToggleMistake = (index: number) => {
        setExpandedMistake(expandedMistake === index ? null : index);
    };

    const performanceData = useMemo(() => {
        // If no attempts, show demo data to showcase the beautiful chart
        if (!attempts.length) {
            // Multi-subject demo data for Overall tab
            const overallDemoData = [
                { date: 'Week 1', Physics: 45, Chemistry: 50, Biology: 55 },
                { date: 'Week 2', Physics: 52, Chemistry: 58, Biology: 62 },
                { date: 'Week 3', Physics: 58, Chemistry: 64, Biology: 68 },
                { date: 'Week 4', Physics: 65, Chemistry: 70, Biology: 74 },
                { date: 'Week 5', Physics: 72, Chemistry: 76, Biology: 80 },
                { date: 'Week 6', Physics: 78, Chemistry: 82, Biology: 85 },
                { date: 'Week 7', Physics: 85, Chemistry: 88, Biology: 90 },
            ];

            const singleSubjectDemoData = {
                'Physics': [
                    { date: 'Test 1', score: 50 },
                    { date: 'Test 2', score: 60 },
                    { date: 'Test 3', score: 70 },
                    { date: 'Test 4', score: 75 },
                    { date: 'Test 5', score: 82 },
                ],
                'Chemistry': [
                    { date: 'Test 1', score: 55 },
                    { date: 'Test 2', score: 62 },
                    { date: 'Test 3', score: 68 },
                    { date: 'Test 4', score: 76 },
                    { date: 'Test 5', score: 80 },
                ],
                'Biology': [
                    { date: 'Test 1', score: 60 },
                    { date: 'Test 2', score: 65 },
                    { date: 'Test 3', score: 72 },
                    { date: 'Test 4', score: 80 },
                    { date: 'Test 5', score: 88 },
                ],
            };

            return activeSubjectTab === 'Overall'
                ? overallDemoData
                : singleSubjectDemoData[activeSubjectTab as keyof typeof singleSubjectDemoData] || overallDemoData;
        }

        if (activeSubjectTab === 'Overall') {
            // For real data with Overall tab, aggregate all subjects into multi-line chart
            const subjectMap = new Map<string, { Physics?: number; Chemistry?: number; Biology?: number }>();

            attempts.slice(0, 10).reverse().forEach((attempt, index) => {
                const date = `${td('testLabel')} ${index + 1}`;
                const entry = subjectMap.get(date) || {};

                // Check which subjects are in this attempt and aggregate
                if (attempt.testId.subjects.includes('Physics')) {
                    entry.Physics = attempt.percentage;
                }
                if (attempt.testId.subjects.includes('Chemistry')) {
                    entry.Chemistry = attempt.percentage;
                }
                if (attempt.testId.subjects.includes('Biology')) {
                    entry.Biology = attempt.percentage;
                }

                subjectMap.set(date, entry);
            });

            return Array.from(subjectMap.entries()).map(([date, scores]) => ({
                date,
                ...scores
            }));
        }

        // Filter attempts that include the selected subject
        const subjectAttempts = attempts.filter(
            (attempt) => attempt.testId.subjects.includes(activeSubjectTab)
        );

        return subjectAttempts.slice(0, 10).reverse().map((attempt, index) => ({
            date: `${td('testLabel')} ${index + 1}`,
            score: attempt.percentage,
        }));
    }, [attempts, activeSubjectTab, language]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">{td('loading')}</p>
                </div>
            </div>
        );
    }

    const accuracy = analytics?.overview.accuracy || '70';
    const totalAttempts = analytics?.overview.totalAttempts || 45;
    const totalPoints = analytics?.userStats?.totalPoints || 1250;

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard
                    title={translate('overallAccuracy')}
                    value={`${accuracy}%`}
                    icon={<TargetIcon />}
                    onClick={() => openDrawer('accuracy')}
                />
                <DashboardCard
                    title={td('totalPoints')}
                    value={String(totalPoints)}
                    icon={<ZapIcon />}
                    onClick={() => openDrawer('points')}
                />
                <DashboardCard
                    title={translate('testsTaken')}
                    value={String(totalAttempts)}
                    icon={<BookOpenIcon />}
                    onClick={() => openDrawer('tests')}
                />
            </div>

            <DailyChallengeCard
                title={td('dailyChallenge')}
                task={td('challengeTask')}
                reward={td('challengeReward')}
                progress={0}
                startText={td('startChallenge')}
                progressText={td('progress')}
                onStart={() => {
                    localStorage.setItem('navRequest', 'daily-challenge');
                    window.dispatchEvent(new Event('storage'));
                }}
            />

            <LiveClasses title={td('liveClassesTitle')} />

            <div>
                <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">
                    {td('performanceProgress')}
                </h2>
                <div className="flex border-b border-slate-200 dark:border-slate-700 mb-4 overflow-x-auto">
                    {['Overall', 'Physics', 'Chemistry', 'Biology'].map(subject => {
                        const isActive = activeSubjectTab === subject;
                        return (
                            <button
                                key={subject}
                                onClick={() => setActiveSubjectTab(subject)}
                                className={`px-4 py-2 -mb-px text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                                    isActive
                                        ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                                        : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                            >
                                {subjectLabel(subject)}
                            </button>
                        )
                    })}
                </div>
                {performanceData.length > 0 ? (
                    <PerformanceChart data={performanceData} />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-white dark:bg-slate-800/50 p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
                        <p className="text-slate-500 dark:text-slate-400">
                            {activeSubjectTab === 'Overall' ? td('noAttempts') : td('noAttemptsForSubject')}
                        </p>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4">
                        {td('subjectPerformance')}
                    </h2>
                    <div className="space-y-3">
                        {analytics?.subjectPerformance && analytics.subjectPerformance.length > 0 && analytics.subjectPerformance.some(s => s.attempted > 0) ? (
                            analytics.subjectPerformance.map((subject) => {
                                const percentage = parseFloat(subject.percentage);
                                let strengthColor = 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-500/30';

                                if (percentage >= 75) {
                                    strengthColor = 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';
                                } else if (percentage >= 50) {
                                    strengthColor = 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-500/30';
                                }

                                return (
                                    <div key={subject.subject} className={`flex justify-between items-center p-4 rounded-lg border ${strengthColor}`}>
                                        <div>
                                            <p className="font-semibold">{subjectLabel(subject.subject)}</p>
                                            <p className="text-sm opacity-80">
                                                {formatWithValues('correctSummary', { correct: subject.correct, attempted: subject.attempted })}
                                            </p>
                                        </div>
                                        <span className="text-lg font-bold">{subject.percentage}%</span>
                                    </div>
                                );
                            })
                        ) : (
                            // Demo data when no real data exists
                            [
                                { subject: 'Physics', percentage: 70, correct: 35, attempted: 50 },
                                { subject: 'Chemistry', percentage: 82, correct: 41, attempted: 50 },
                                { subject: 'Biology', percentage: 65, correct: 26, attempted: 40 },
                                { subject: 'Mathematics', percentage: 48, correct: 24, attempted: 50 }
                            ].map((subject) => {
                                // Dynamic color based on percentage
                                let strengthColor = 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-500/30';
                                if (subject.percentage >= 75) {
                                    strengthColor = 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';
                                } else if (subject.percentage >= 50) {
                                    strengthColor = 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-500/30';
                                }

                                return (
                                    <div key={subject.subject} className={`flex justify-between items-center p-4 rounded-lg border ${strengthColor}`}>
                                        <div>
                                            <p className="font-semibold">{subjectLabel(subject.subject)}</p>
                                            <p className="text-sm opacity-80">
                                                {formatWithValues('correctSummary', { correct: subject.correct, attempted: subject.attempted })}
                                            </p>
                                        </div>
                                        <span className="text-lg font-bold">{subject.percentage}%</span>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200">
                            {translate('mistakeBook')}
                        </h2>
                        <button
                            onClick={() => {
                                localStorage.setItem('navRequest', 'mistakes');
                                window.dispatchEvent(new Event('storage'));
                            }}
                            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                            {language === 'ta' ? 'அனைத்தையும் காண்க' : 'View All'}
                        </button>
                    </div>
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                        {mistakes.length > 0 ? mistakes.map((mistake, index) => (
                            <div key={mistake._id} className="border border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-300">
                                <div className="p-4">
                                    <div className="flex justify-between items-start gap-3 mb-3">
                                        <div className="flex-1">
                                            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                                {subjectLabel(mistake.questionId.subject)}
                                            </span>
                                            <p className="font-semibold text-slate-700 dark:text-slate-200 line-clamp-2 mt-1">
                                                {mistake.questionId.questionText?.[language] || mistake.questionId.questionText?.en || ''}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleToggleMistake(index)}
                                            className="flex-shrink-0 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                            aria-expanded={expandedMistake === index}
                                        >
                                            {expandedMistake === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                        </button>
                                    </div>

                                    {/* Multimedia Learning Resources - Always Visible */}
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <button
                                            title="Watch Video"
                                            className="p-2 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => { e.stopPropagation(); setSelectedMistake(mistake); setShowVideoTypeSelection(true); }}
                                        >
                                            <VideoIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="Listen Audio"
                                            className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => { e.stopPropagation(); setSelectedMistake(mistake); setShowAudioPlayer(true); }}
                                        >
                                            <AudioIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="Read Material"
                                            className="p-2 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => { e.stopPropagation(); setSelectedMistake(mistake); setShowPDFViewer(true); }}
                                        >
                                            <ReadIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="View AR"
                                            className="p-2 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => { e.stopPropagation(); setSelectedMistake(mistake); setShowARViewer(true); }}
                                        >
                                            <ARIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="Experience VR"
                                            className="p-2 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => { e.stopPropagation(); setSelectedMistake(mistake); setShowVRExperience(true); }}
                                        >
                                            <VRIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                {expandedMistake === index && (
                                    <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400">
                                        <div className="border-t border-slate-200 dark:border-slate-700 pt-3 space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">{td('youAnswered')}:</span>
                                                    <span className="font-semibold text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-500/20 px-2 py-0.5 rounded">
                                                        {(mistake.questionId.options?.[language] || mistake.questionId.options?.en)?.[mistake.selectedAnswer] || 'N/A'}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">{td('correctAnswer')}:</span>
                                                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 rounded">
                                                        {(mistake.questionId.options?.[language] || mistake.questionId.options?.en)?.[mistake.correctAnswer] || 'N/A'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-1">
                                                    {translate('explanation')}:
                                                </h4>
                                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                                    {mistake.questionId.explanation?.[language] ||
                                                     mistake.questionId.explanation?.en}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )) : (
                            // Demo data when no mistakes exist
                            [
                                {
                                    _id: 'demo1',
                                    subject: 'Physics',
                                    question: language === 'ta'
                                        ? 'ஒரு பொருளின் நிறை 2 கிலோ மற்றும் வேகம் 10 மீ/வி. அதன் இயக்க ஆற்றல் என்ன?'
                                        : 'A body of mass 2 kg is moving with velocity 10 m/s. What is its kinetic energy?',
                                    yourAnswer: '50 J',
                                    correctAnswer: '100 J',
                                    explanation: language === 'ta'
                                        ? 'இயக்க ஆற்றல் = (1/2)mv². m=2kg மற்றும் v=10m/s என்பதை பதிலீடு செய்தால்: KE = (1/2) × 2 × (10)² = 100 J'
                                        : 'Kinetic Energy = (1/2)mv². Substituting m=2kg and v=10m/s: KE = (1/2) × 2 × (10)² = 100 J'
                                },
                                {
                                    _id: 'demo2',
                                    subject: 'Chemistry',
                                    question: language === 'ta'
                                        ? 'ஒரு மோலில் உள்ள அணுக்களின் எண்ணிக்கை என்ன?'
                                        : 'What is the number of atoms in one mole of a substance?',
                                    yourAnswer: '6.022 × 10²²',
                                    correctAnswer: '6.022 × 10²³',
                                    explanation: language === 'ta'
                                        ? 'அவகாட்ரோ எண் = 6.022 × 10²³ அணுக்கள்/மோல். இது ஒரு மோலில் உள்ள அணுக்களின் எண்ணிக்கை.'
                                        : 'Avogadro\'s number = 6.022 × 10²³ atoms/mol. This is the number of particles in one mole.'
                                },
                                {
                                    _id: 'demo3',
                                    subject: 'Biology',
                                    question: language === 'ta'
                                        ? 'மனித உடலில் எத்தனை குரோமோசோம்கள் உள்ளன?'
                                        : 'How many chromosomes are in a human body cell?',
                                    yourAnswer: '23',
                                    correctAnswer: '46',
                                    explanation: language === 'ta'
                                        ? 'மனித உடல் செல்களில் 46 குரோமோசோம்கள் (23 ஜோடி) உள்ளன. கேமீட்டுகளில் மட்டும் 23 குரோமோசோம்கள் உள்ளன.'
                                        : 'Human body cells contain 46 chromosomes (23 pairs). Only gametes have 23 chromosomes.'
                                }
                            ].map((demoMistake, index) => {
                                const mockMistake: any = {
                                    _id: demoMistake._id,
                                    questionId: {
                                        subject: demoMistake.subject,
                                        questionText: { en: demoMistake.question, ta: demoMistake.question },
                                        options: { en: [demoMistake.yourAnswer, demoMistake.correctAnswer], ta: [demoMistake.yourAnswer, demoMistake.correctAnswer] },
                                        explanation: { en: demoMistake.explanation, ta: demoMistake.explanation }
                                    },
                                    selectedAnswer: 0,
                                    correctAnswer: 1
                                };

                                return (
                                    <div key={demoMistake._id} className="border border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-300">
                                        <div className="p-4">
                                            <div className="flex justify-between items-start gap-3 mb-3">
                                                <div className="flex-1">
                                                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                                        {subjectLabel(demoMistake.subject)}
                                                    </span>
                                                    <p className="font-semibold text-slate-700 dark:text-slate-200 line-clamp-2 mt-1">
                                                        {demoMistake.question}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => handleToggleMistake(index)}
                                                    className="flex-shrink-0 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                                    aria-expanded={expandedMistake === index}
                                                >
                                                    {expandedMistake === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                                </button>
                                            </div>

                                            {/* Multimedia Learning Resources - Always Visible */}
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <button
                                                    title="Watch Video"
                                                    className="p-2 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMistake(mockMistake); setShowVideoTypeSelection(true); }}
                                                >
                                                    <VideoIcon className="w-4 h-4" />
                                                </button>

                                                <button
                                                    title="Listen Audio"
                                                    className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMistake(mockMistake); setShowAudioPlayer(true); }}
                                                >
                                                    <AudioIcon className="w-4 h-4" />
                                                </button>

                                                <button
                                                    title="Read Material"
                                                    className="p-2 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMistake(mockMistake); setShowPDFViewer(true); }}
                                                >
                                                    <ReadIcon className="w-4 h-4" />
                                                </button>

                                                <button
                                                    title="View AR"
                                                    className="p-2 rounded-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMistake(mockMistake); setShowARViewer(true); }}
                                                >
                                                    <ARIcon className="w-4 h-4" />
                                                </button>

                                                <button
                                                    title="Experience VR"
                                                    className="p-2 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                                    onClick={(e) => { e.stopPropagation(); setSelectedMistake(mockMistake); setShowVRExperience(true); }}
                                                >
                                                    <VRIcon className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                        {expandedMistake === index && (
                                            <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400">
                                                <div className="border-t border-slate-200 dark:border-slate-700 pt-3 space-y-4">
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-medium">{td('youAnswered')}:</span>
                                                            <span className="font-semibold text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-500/20 px-2 py-0.5 rounded">
                                                                {demoMistake.yourAnswer}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-medium">{td('correctAnswer')}:</span>
                                                            <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 rounded">
                                                                {demoMistake.correctAnswer}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-1">
                                                            {translate('explanation')}:
                                                        </h4>
                                                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                                            {demoMistake.explanation}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>

            {/* Video Type Selection Modal */}
            {showVideoTypeSelection && selectedMistake && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md">
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <VideoIcon className="w-16 h-16 text-red-600 dark:text-red-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                                    Video Explanation
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Choose your preferred format
                                </p>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => {
                                        setSelectedVideoType('2D');
                                        setShowVideoTypeSelection(false);
                                        setShowVideoModal(true);
                                    }}
                                    className="w-full p-6 rounded-xl border-2 border-red-200 dark:border-red-700 hover:border-red-400 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 hover:shadow-lg transition-all"
                                >
                                    <div className="text-left">
                                        <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">2D Video</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">Standard video explanation</div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => {
                                        setSelectedVideoType('3D');
                                        setShowVideoTypeSelection(false);
                                        setShowVideoModal(true);
                                    }}
                                    className="w-full p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 hover:shadow-lg transition-all"
                                >
                                    <div className="text-left">
                                        <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">3D Video</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">360° immersive experience</div>
                                    </div>
                                </button>
                            </div>

                            <button
                                onClick={() => setShowVideoTypeSelection(false)}
                                className="w-full mt-4 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Video Modal */}
            {showVideoModal && selectedMistake && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <VideoIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                        {selectedVideoType} Video Explanation
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{selectedMistake.questionId.subject}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => { setShowVideoModal(false); setSelectedVideoType(null); }}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto p-6">
                            <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={selectedVideoType === '3D' ? "https://www.youtube.com/embed/URUJD5NEXC8" : "https://www.youtube.com/embed/39HTpUG1MwQ"}
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Audio Player Modal */}
            {showAudioPlayer && selectedMistake && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <AudioIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                    Audio Narration
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowAudioPlayer(false)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl">
                                <AudioIcon className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                                <p className="text-center text-lg font-semibold text-slate-800 dark:text-slate-100 mb-6">
                                    {selectedMistake.questionId.question?.[language] || selectedMistake.questionId.question?.en}
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-inner">
                                    <audio controls className="w-full">
                                        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                                    </audio>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
                                        Audio narration explaining the concept
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* PDF Viewer Modal */}
            {showPDFViewer && selectedMistake && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <ReadIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                    Study Material - {selectedMistake.questionId.subject}
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowPDFViewer(false)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 p-6">
                            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                                    {selectedMistake.questionId.subject} - Study Guide
                                </h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                        {selectedMistake.questionId.explanation?.[language] || selectedMistake.questionId.explanation?.en}
                                    </p>
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-3">
                                        Key Concepts
                                    </h3>
                                    <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                        <li>Understanding the fundamental principles</li>
                                        <li>Common misconceptions and how to avoid them</li>
                                        <li>Practice problems and solutions</li>
                                        <li>Real-world applications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* AR Viewer Modal */}
            {showARViewer && selectedMistake && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <ARIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                    Augmented Reality Experience
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowARViewer(false)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-hidden relative">
                            <Video360Viewer topic={selectedMistake.questionId.subject} subject={selectedMistake.questionId.subject} />
                        </div>
                    </div>
                </div>
            )}

            {/* VR Experience Modal */}
            {showVRExperience && selectedMistake && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <VRIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                    Virtual Reality Experience
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowVRExperience(false)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-hidden relative">
                            <Video360Viewer topic={selectedMistake.questionId.subject} subject={selectedMistake.questionId.subject} />
                        </div>
                    </div>
                </div>
            )}

            {/* Stat Detail Drawer */}
            <StatDetailDrawer
                isOpen={drawerOpen}
                onClose={closeDrawer}
                type={drawerType}
            />
        </div>
    );
};

export default StudentDashboard;
