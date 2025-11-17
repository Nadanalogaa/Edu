import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TargetIcon, ZapIcon, BookOpenIcon, TrendingUpIcon } from './icons';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StatDetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'accuracy' | 'points' | 'tests' | null;
}

const StatDetailDrawer: React.FC<StatDetailDrawerProps> = ({ isOpen, onClose, type }) => {
  const { language } = useLanguage();

  // Mock data for accuracy breakdown
  const accuracyBySubject = [
    { subject: 'Physics', accuracy: 65, correct: 130, total: 200, color: 'text-red-600 dark:text-red-400' },
    { subject: 'Chemistry', accuracy: 72, correct: 144, total: 200, color: 'text-cyan-600 dark:text-cyan-400' },
    { subject: 'Biology', accuracy: 73, correct: 146, total: 200, color: 'text-green-600 dark:text-green-400' }
  ];

  const accuracyTrend = [
    { day: 'Mon', accuracy: 68 },
    { day: 'Tue', accuracy: 65 },
    { day: 'Wed', accuracy: 71 },
    { day: 'Thu', accuracy: 69 },
    { day: 'Fri', accuracy: 72 },
    { day: 'Sat', accuracy: 70 },
    { day: 'Sun', accuracy: 70 }
  ];

  const strongTopics = [
    { name: 'Organic Chemistry', accuracy: 85 },
    { name: 'Cell Biology', accuracy: 82 },
    { name: 'Thermodynamics', accuracy: 80 }
  ];

  const weakTopics = [
    { name: 'Electrostatics', accuracy: 55 },
    { name: 'Genetics', accuracy: 58 },
    { name: 'Chemical Bonding', accuracy: 60 }
  ];

  // Mock data for points breakdown
  const pointsSources = [
    { source: 'Daily Challenges', points: 520, percentage: 41.6, color: 'bg-gradient-to-r from-orange-500 to-red-600' },
    { source: 'Practice Tests', points: 380, percentage: 30.4, color: 'bg-gradient-to-r from-blue-500 to-cyan-600' },
    { source: 'Exams', points: 200, percentage: 16, color: 'bg-gradient-to-r from-purple-500 to-indigo-600' },
    { source: 'Streak Bonuses', points: 150, percentage: 12, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' }
  ];

  const pointsHistory = [
    { date: 'Jan 14', points: 80, source: 'Daily Challenge' },
    { date: 'Jan 13', points: 50, source: 'Practice Test' },
    { date: 'Jan 12', points: 90, source: 'Daily Challenge + Bonus' },
    { date: 'Jan 11', points: 70, source: 'Daily Challenge' },
    { date: 'Jan 10', points: 100, source: 'Exam Performance' }
  ];

  const pointsTrend = [
    { day: 'Mon', points: 150 },
    { day: 'Tue', points: 180 },
    { day: 'Wed', points: 200 },
    { day: 'Thu', points: 170 },
    { day: 'Fri', points: 220 },
    { day: 'Sat', points: 250 },
    { day: 'Sun', points: 280 }
  ];

  // Mock data for tests breakdown
  const recentTests = [
    { name: 'NEET Mock Test 15', date: 'Jan 14, 2025', score: '145/180', percentage: 81, time: '3h 10m', subjects: { physics: 45, chemistry: 50, biology: 50 } },
    { name: 'Physics Practice 8', date: 'Jan 13, 2025', score: '38/45', percentage: 84, time: '45m', subjects: { physics: 38, chemistry: 0, biology: 0 } },
    { name: 'NEET Mock Test 14', date: 'Jan 12, 2025', score: '158/180', percentage: 88, time: '2h 55m', subjects: { physics: 50, chemistry: 54, biology: 54 } },
    { name: 'Chemistry Quick Test', date: 'Jan 11, 2025', score: '34/45', percentage: 76, time: '40m', subjects: { physics: 0, chemistry: 34, biology: 0 } },
    { name: 'Biology Practice 5', date: 'Jan 10, 2025', score: '40/45', percentage: 89, time: '50m', subjects: { physics: 0, chemistry: 0, biology: 40 } }
  ];

  const testPerformanceTrend = [
    { test: 'Test 1', score: 72 },
    { test: 'Test 2', score: 68 },
    { test: 'Test 3', score: 75 },
    { test: 'Test 4', score: 81 },
    { test: 'Test 5', score: 88 }
  ];

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 85) return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
    if (percentage >= 70) return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
    if (percentage >= 60) return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30';
    return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30';
  };

  const renderAccuracyDetails = () => (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            {language === 'ta' ? 'சரியான பதில்கள்' : 'Correct Answers'}
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">420</div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            {language === 'ta' ? 'தவறான பதில்கள்' : 'Wrong Answers'}
          </div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">180</div>
        </div>
      </div>

      {/* Subject-wise Breakdown */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <TargetIcon className="w-5 h-5 text-indigo-600" />
          {language === 'ta' ? 'பாட வாரியான துல்லியம்' : 'Subject-wise Accuracy'}
        </h3>
        <div className="space-y-3">
          {accuracyBySubject.map((subject, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {language === 'ta'
                    ? (subject.subject === 'Physics' ? 'இயற்பியல்' : subject.subject === 'Chemistry' ? 'வேதியியல்' : 'உயிரியல்')
                    : subject.subject}
                </span>
                <span className={`font-bold ${subject.color}`}>{subject.accuracy}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full ${subject.color.replace('text', 'bg')}`}
                  style={{ width: `${subject.accuracy}%` }}
                />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {subject.correct} / {subject.total} {language === 'ta' ? 'சரியானவை' : 'correct'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accuracy Trend */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <TrendingUpIcon className="w-5 h-5 text-indigo-600" />
          {language === 'ta' ? '7 நாள் போக்கு' : '7-Day Trend'}
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={accuracyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
            <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis domain={[0, 100]} stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Line type="monotone" dataKey="accuracy" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Strong Topics */}
      <div>
        <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">
          🎯 {language === 'ta' ? 'வலுவான தலைப்புகள்' : 'Strong Topics'}
        </h3>
        <div className="space-y-2">
          {strongTopics.map((topic, index) => (
            <div key={index} className="flex justify-between items-center bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{topic.name}</span>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">{topic.accuracy}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weak Topics */}
      <div>
        <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-3">
          📉 {language === 'ta' ? 'மேம்படுத்த வேண்டிய பகுதிகள்' : 'Topics to Improve'}
        </h3>
        <div className="space-y-2">
          {weakTopics.map((topic, index) => (
            <div key={index} className="flex justify-between items-center bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{topic.name}</span>
              <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{topic.accuracy}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPointsDetails = () => (
    <div className="space-y-6">
      {/* Points Breakdown */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <ZapIcon className="w-5 h-5 text-yellow-600" />
          {language === 'ta' ? 'புள்ளிகள் பிரிவு' : 'Points Breakdown'}
        </h3>
        <div className="space-y-3">
          {pointsSources.map((source, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{source.source}</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{source.points}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-1">
                <div
                  className={`h-2 rounded-full ${source.color}`}
                  style={{ width: `${source.percentage}%` }}
                />
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {source.percentage}% {language === 'ta' ? 'மொத்தத்தில்' : 'of total'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Points Trend */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <TrendingUpIcon className="w-5 h-5 text-indigo-600" />
          {language === 'ta' ? 'புள்ளிகள் போக்கு' : 'Points Trend'}
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={pointsTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
            <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Bar dataKey="points" fill="#6366f1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Points History */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
          📅 {language === 'ta' ? 'சமீபத்திய வரலாறு' : 'Recent History'}
        </h3>
        <div className="space-y-3">
          {pointsHistory.map((entry, index) => (
            <div key={index} className="flex items-center justify-between bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-800/50 dark:to-indigo-900/20 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-semibold text-slate-700 dark:text-slate-300">{entry.source}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{entry.date}</div>
              </div>
              <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                +{entry.points} 🪙
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Milestone */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-3">
          🏆 {language === 'ta' ? 'அடுத்த மைல்கல்' : 'Next Milestone'}
        </h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-700 dark:text-slate-300">2000 Points Badge</span>
          <span className="font-bold text-purple-600 dark:text-purple-400">750 more needed</span>
        </div>
        <div className="w-full bg-purple-200 dark:bg-purple-900/50 rounded-full h-3">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full" style={{ width: '62.5%' }} />
        </div>
      </div>
    </div>
  );

  const renderTestsDetails = () => (
    <div className="space-y-6">
      {/* Performance Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            {language === 'ta' ? 'சிறந்த மதிப்பெண்' : 'Best Score'}
          </div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">88%</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
          <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
            {language === 'ta' ? 'சராசரி மதிப்பெண்' : 'Average Score'}
          </div>
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">79%</div>
        </div>
      </div>

      {/* Performance Trend */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <TrendingUpIcon className="w-5 h-5 text-indigo-600" />
          {language === 'ta' ? 'செயல்திறன் போக்கு' : 'Performance Trend'}
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={testPerformanceTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3} />
            <XAxis dataKey="test" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis domain={[0, 100]} stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Tests */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
          <BookOpenIcon className="w-5 h-5 text-indigo-600" />
          {language === 'ta' ? 'சமீபத்திய தேர்வுகள்' : 'Recent Tests'}
        </h3>
        <div className="space-y-3">
          {recentTests.map((test, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-100">{test.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{test.date}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getPerformanceColor(test.percentage)}`}>
                  {test.percentage}%
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-2">
                <span>📊 {test.score}</span>
                <span>⏱️ {test.time}</span>
              </div>
              {/* Subject Distribution */}
              <div className="flex gap-2 text-xs">
                {test.subjects.physics > 0 && (
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-2 py-1 rounded">
                    ⚡ {test.subjects.physics}
                  </span>
                )}
                {test.subjects.chemistry > 0 && (
                  <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 px-2 py-1 rounded">
                    🧪 {test.subjects.chemistry}
                  </span>
                )}
                {test.subjects.biology > 0 && (
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                    🧬 {test.subjects.biology}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (!isOpen || !type) return null;

  const titles = {
    accuracy: language === 'ta' ? 'ஒட்டுமொத்த துல்லியம்' : 'Overall Accuracy',
    points: language === 'ta' ? 'மொத்த புள்ளிகள்' : 'Total Points',
    tests: language === 'ta' ? 'மேற்கொண்ட தேர்வுகள்' : 'Tests Taken'
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{titles[type]}</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100%-88px)] overflow-y-auto p-6">
          {type === 'accuracy' && renderAccuracyDetails()}
          {type === 'points' && renderPointsDetails()}
          {type === 'tests' && renderTestsDetails()}
        </div>
      </div>
    </>
  );
};

export default StatDetailDrawer;
