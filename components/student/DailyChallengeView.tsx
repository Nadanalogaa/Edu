import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface Test {
  _id: string;
  title: string;
  description: string;
  type: 'daily-challenge';
  examType: 'NEET' | 'JEE' | 'Both';
  subjects: string[];
  duration: number;
  totalMarks: number;
  questions: any[];
  createdAt: string;
}

const DailyChallengeView: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'All' | 'NEET' | 'JEE' | 'Both'>('All');

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      setLoading(true);
      const response = await api.get('/student/tests');

      if (response.data.success) {
        // Filter only daily-challenge type tests
        const dailyChallenges = response.data.data.filter(
          (test: Test) => test.type === 'daily-challenge'
        );
        setChallenges(dailyChallenges);
      }
    } catch (err: any) {
      console.error('Error fetching challenges:', err);
      setError(err.response?.data?.message || 'Failed to fetch challenges');
    } finally {
      setLoading(false);
    }
  };

  const handleStartChallenge = async (test: Test) => {
    try {
      // Start attempt
      const response = await api.post('/student/attempts/start', {
        testId: test._id,
        questionIds: test.questions.map((q: any) => q._id),
        totalMarks: test.totalMarks,
      });

      if (response.data.success) {
        // Navigate to exam mode with the attempt ID
        // Store test data in localStorage for the exam interface
        localStorage.setItem('currentTest', JSON.stringify(test));
        localStorage.setItem('attemptId', response.data.data._id);
        localStorage.setItem('navRequest', 'exam');
        window.dispatchEvent(new Event('storage'));
      }
    } catch (err: any) {
      console.error('Error starting challenge:', err);
      setError(err.response?.data?.message || 'Failed to start challenge');
    }
  };

  const filteredChallenges = challenges.filter(challenge =>
    filter === 'All' || challenge.examType === filter
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('loading')}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {t('dailyChallenge') || 'Daily Challenges'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete daily challenges to earn coins and improve your skills
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4">
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* Exam Type Filter */}
        <div className="mb-6 flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('examType') || 'Exam Type'}:
          </label>
          <div className="flex space-x-2">
            {['All', 'NEET', 'JEE', 'Both'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === type
                    ? 'bg-orange-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        {filteredChallenges.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {t('noChallengesAvailable') || 'No Challenges Available'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {filter !== 'All'
                ? 'Try changing the exam type filter'
                : 'Check back later for new challenges'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <div
                key={challenge._id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {challenge.examType}
                    </span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold line-clamp-2">
                    {challenge.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {challenge.description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {challenge.description}
                    </p>
                  )}

                  {/* Subjects */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {challenge.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {t(subject.toLowerCase()) || subject}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {challenge.questions.length}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t('questions') || 'Questions'}
                      </p>
                    </div>
                    <div className="text-center border-x border-gray-200 dark:border-gray-700">
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {challenge.totalMarks}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t('marks') || 'Marks'}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {challenge.duration}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t('minutes') || 'Min'}
                      </p>
                    </div>
                  </div>

                  {/* Start Button */}
                  <button
                    onClick={() => handleStartChallenge(challenge)}
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('startChallenge') || 'Start Challenge'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyChallengeView;
