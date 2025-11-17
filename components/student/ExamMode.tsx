import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ClockIcon, CheckCircleIcon, XCircleIcon, TargetIcon, TrendingUpIcon, AwardIcon, BookOpenIcon, AlertCircleIcon } from '../icons';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

type ExamState = 'selection' | 'briefing' | 'ongoing' | 'results';

interface Test {
  _id: string;
  title: string;
  description: string;
  type: 'practice' | 'exam' | 'daily-challenge';
  examType: 'NEET' | 'JEE' | 'Both';
  subjects: string[];
  duration: number;
  totalMarks: number;
  questions: Question[];
  isPublished: boolean;
  createdBy: {
    name: string;
  };
}

interface Question {
  _id: string;
  question: { en: string; ta: string };
  options: { en: string[]; ta: string[] };
  correctAnswer: number;
  explanation: { en: string; ta: string };
  subject: string;
  marks: number;
}

interface Answer {
  questionId: string;
  selectedAnswer: number;
  timeTaken: number;
}

interface PreviousAttempt {
  testId: string;
  testTitle: string;
  attemptCount: number;
  bestScore: number;
  averageScore: number;
  lastAttemptDate: string;
}

// Mockup data for demo
const mockPreviousAttempts: PreviousAttempt[] = [
  { testId: '1', testTitle: 'NEET Physics Mock Test 1', attemptCount: 3, bestScore: 85, averageScore: 78, lastAttemptDate: '2 days ago' },
  { testId: '2', testTitle: 'JEE Maths Full Test', attemptCount: 2, bestScore: 92, averageScore: 88, lastAttemptDate: '1 week ago' },
  { testId: '3', testTitle: 'Chemistry Chapter Test', attemptCount: 1, bestScore: 75, averageScore: 75, lastAttemptDate: '3 days ago' },
];

const mockRecommendations = [
  { subject: 'Physics', reason: 'Low accuracy in Mechanics', priority: 'High' },
  { subject: 'Chemistry', reason: 'Organic Chemistry needs improvement', priority: 'Medium' },
];

const mockScheduledExams = [
  { title: 'NEET Mock Test - Final Prep', date: 'Tomorrow, 10:00 AM', duration: 180, subjects: ['Physics', 'Chemistry', 'Biology'] },
  { title: 'JEE Advanced Practice', date: 'Dec 15, 2024', duration: 180, subjects: ['Physics', 'Chemistry', 'Maths'] },
];

const ExamMode: React.FC = () => {
  const { language: currentLanguage } = useLanguage();
  const [examState, setExamState] = useState<ExamState>('selection');
  const [tests, setTests] = useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [results, setResults] = useState<any>(null);
  const [examTypeFilter, setExamTypeFilter] = useState<'All' | 'NEET' | 'JEE' | 'Both'>('All');
  const [testTypeFilter, setTestTypeFilter] = useState<'All' | 'exam' | 'daily-challenge'>('All');

  // Fetch shared tests on mount
  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        const response = await api.get('/student/tests');
        if (response.data.success) {
          setTests(response.data.data);
        }
      } catch (error: any) {
        console.error('Error fetching tests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (examState !== 'ongoing') return;
    if (timeLeft <= 0) {
      handleSubmitExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [examState, timeLeft]);

  const handleTestSelect = (test: Test) => {
    setSelectedTest(test);
    setExamState('briefing');
  };

  const handleStartExam = async () => {
    if (!selectedTest) return;

    try {
      setLoading(true);

      const response = await api.post('/student/attempts/start', {
        testId: selectedTest._id,
        questionIds: selectedTest.questions.map((q) => q._id),
        totalMarks: selectedTest.totalMarks,
      });

      if (response.data.success) {
        setAttemptId(response.data.data._id);
        setAnswers(
          selectedTest.questions.map((q) => ({
            questionId: q._id,
            selectedAnswer: -1,
            timeTaken: 0,
          }))
        );
        setTimeLeft(selectedTest.duration * 60);
        setCurrentQuestionIndex(0);
        setQuestionStartTime(Date.now());
        setExamState('ongoing');
      }
    } catch (error: any) {
      console.error('Error starting test:', error);
      alert(error.response?.data?.message || 'Failed to start test');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      selectedAnswer: optionIndex,
      timeTaken,
    };
    setAnswers(newAnswers);
  };

  const handleGoToNext = () => {
    if (currentQuestionIndex < (selectedTest?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionStartTime(Date.now());
    }
  };

  const handleGoToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setQuestionStartTime(Date.now());
    }
  };

  const handleSubmitExam = async () => {
    if (examState !== 'ongoing') return;

    if (!window.confirm('Are you sure you want to submit the exam?')) {
      return;
    }

    try {
      setLoading(true);

      const totalTimeTaken = (selectedTest?.duration || 0) * 60 - timeLeft;

      const response = await api.post(`/student/attempts/${attemptId}/submit`, {
        answers,
        timeTaken: totalTimeTaken,
      });

      if (response.data.success) {
        setResults(response.data.data.attempt);
        setExamState('results');
      }
    } catch (error: any) {
      console.error('Error submitting exam:', error);
      alert(error.response?.data?.message || 'Failed to submit exam');
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setExamState('selection');
    setSelectedTest(null);
    setAttemptId(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults(null);
  };

  const filteredTests = useMemo(() => {
    return tests.filter((test) => {
      const matchesExamType = examTypeFilter === 'All' || test.examType === examTypeFilter;
      const matchesTestType = testTypeFilter === 'All' || test.type === testTypeFilter;
      return matchesExamType && matchesTestType;
    });
  }, [tests, examTypeFilter, testTypeFilter]);

  // Selection screen
  if (examState === 'selection') {
    const recentTests = filteredTests.slice(0, 3);
    const upcomingTests = mockScheduledExams;
    const recommendedTests = filteredTests.filter(t =>
      mockRecommendations.some(r => t.subjects.includes(r.subject))
    ).slice(0, 3);
    const previouslyAttempted = filteredTests.filter(t =>
      mockPreviousAttempts.some(a => a.testTitle === t.title)
    );

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Take an Exam
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Challenge yourself with timed assessments and track your progress
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <BookOpenIcon className="w-8 h-8 opacity-80" />
              <TrendingUpIcon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold">{tests.length}</p>
            <p className="text-sm opacity-90">Available Tests</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <AwardIcon className="w-8 h-8 opacity-80" />
              <CheckCircleIcon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold">{mockPreviousAttempts.length}</p>
            <p className="text-sm opacity-90">Tests Attempted</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <ClockIcon className="w-8 h-8 opacity-80" />
              <span className="text-2xl">📅</span>
            </div>
            <p className="text-3xl font-bold">{upcomingTests.length}</p>
            <p className="text-sm opacity-90">Scheduled Exams</p>
          </div>
        </div>

        {/* Upcoming Scheduled Exams */}
        {upcomingTests.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              📅 Upcoming Scheduled Exams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingTests.map((exam, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {exam.title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full">
                      Scheduled
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <ClockIcon className="w-4 h-4" />
                      <span>{exam.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <TargetIcon className="w-4 h-4" />
                      <span>{exam.duration} minutes</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exam.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-white dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Tests */}
        {recommendedTests.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                💡 Recommended for You
              </h2>
              <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                Based on weak areas
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendedTests.map((test) => {
                const recommendation = mockRecommendations.find(r => test.subjects.includes(r.subject));
                return (
                  <div
                    key={test._id}
                    className="p-5 bg-white dark:bg-slate-800/50 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => handleTestSelect(test)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                        {test.examType}
                      </span>
                      <span className="px-2 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full">
                        {recommendation?.priority} Priority
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                      {test.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                      💡 {recommendation?.reason}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">
                        {test.questions.length} Questions
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {test.duration} min
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Previously Attempted */}
        {previouslyAttempted.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              🔄 Previously Attempted
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {previouslyAttempted.map((test) => {
                const attempt = mockPreviousAttempts.find(a => a.testTitle === test.title);
                return (
                  <div
                    key={test._id}
                    className="p-5 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => handleTestSelect(test)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                        {test.examType}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {attempt?.attemptCount}x attempted
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                      {test.title}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Best Score</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          {attempt?.bestScore}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Avg Score</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {attempt?.averageScore}%
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700">
                        Last attempt: {attempt?.lastAttemptDate}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Available Tests */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              All Available Tests
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Exam Type:
                </label>
                <select
                  value={examTypeFilter}
                  onChange={(e) => setExamTypeFilter(e.target.value as any)}
                  className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-slate-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>All</option>
                  <option>NEET</option>
                  <option>JEE</option>
                  <option>Both</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Type:
                </label>
                <select
                  value={testTypeFilter}
                  onChange={(e) => setTestTypeFilter(e.target.value as any)}
                  className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-slate-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>All</option>
                  <option value="exam">Exam</option>
                  <option value="daily-challenge">Daily Challenge</option>
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
            </div>
          ) : filteredTests.length === 0 ? (
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-600 dark:text-slate-400 text-center">
                No tests available matching your filters. Try adjusting the filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map((test) => (
                <button
                  key={test._id}
                  onClick={() => handleTestSelect(test)}
                  className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-left"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      {test.examType}
                    </span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      test.type === 'daily-challenge'
                        ? 'bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400'
                        : 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400'
                    }`}>
                      {test.type === 'daily-challenge' ? 'Challenge' : 'Exam'}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {test.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {test.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      {test.questions.length} Questions
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {test.duration} min
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {test.totalMarks} marks
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Subjects: {test.subjects.join(', ')}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Briefing screen
  if (examState === 'briefing' && selectedTest) {
    const previousAttempt = mockPreviousAttempts.find(a => a.testTitle === selectedTest.title);
    const subjectBreakdown = selectedTest.subjects.map(subject => ({
      subject,
      count: selectedTest.questions.filter(q => q.subject === subject).length,
    }));

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => setExamState('selection')}
          className="mb-4 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
        >
          ← Back to Test Selection
        </button>

        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {selectedTest.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {selectedTest.description}
              </p>
            </div>
            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
              {selectedTest.examType}
            </span>
          </div>

          {/* Test Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <BookOpenIcon className="w-6 h-6 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {selectedTest.questions.length}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Questions</p>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <ClockIcon className="w-6 h-6 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {selectedTest.duration}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Minutes</p>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <TargetIcon className="w-6 h-6 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {selectedTest.totalMarks}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Total Marks</p>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <AwardIcon className="w-6 h-6 mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {Math.round((selectedTest.totalMarks / selectedTest.questions.length) * 10) / 10}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Marks/Q</p>
            </div>
          </div>

          {/* Subject Breakdown */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
              Subject-wise Distribution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {subjectBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700"
                >
                  <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                    {item.subject}
                  </p>
                  <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    {item.count} questions
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Attempts */}
          {previousAttempt && (
            <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <TrendingUpIcon className="w-5 h-5 text-amber-600" />
                Your Previous Performance
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Attempts</p>
                  <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    {previousAttempt.attemptCount}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Best Score</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {previousAttempt.bestScore}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Average</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {previousAttempt.averageScore}%
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-amber-200 dark:border-amber-700">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  💡 Target Score: Aim for <span className="font-bold text-amber-700 dark:text-amber-300">{previousAttempt.bestScore + 10}%</span> to beat your best!
                </p>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
              <AlertCircleIcon className="w-5 h-5 text-blue-600" />
              Instructions
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>The exam will be timed. Make sure you have a stable internet connection.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>You can navigate between questions using Next/Previous buttons.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>All unanswered questions will be marked as skipped.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>The exam will auto-submit when time runs out.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Manage your time wisely - spend approximately {Math.round((selectedTest.duration / selectedTest.questions.length) * 10) / 10} minutes per question.</span>
              </li>
            </ul>
          </div>

          {/* Start Button */}
          <div className="flex justify-center">
            <button
              onClick={handleStartExam}
              disabled={loading}
              className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-bold rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 transition-all shadow-lg hover:shadow-xl"
            >
              {loading ? 'Starting...' : 'Start Exam Now'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (examState === 'results' && results && selectedTest) {
    const chartData = [
      { name: 'Correct', value: results.correctAnswers || 0 },
      { name: 'Wrong', value: results.wrongAnswers || 0 },
      { name: 'Skipped', value: results.skippedAnswers || 0 },
    ];
    const COLORS = ['#10b981', '#ef4444', '#64748b'];

    // Subject-wise breakdown
    const subjectPerformance = selectedTest.subjects.map(subject => {
      const subjectQuestions = selectedTest.questions
        .map((q, idx) => ({ ...q, answerIndex: idx }))
        .filter(q => q.subject === subject);

      const correctInSubject = subjectQuestions.filter((q) =>
        answers[q.answerIndex]?.selectedAnswer === q.correctAnswer
      ).length;

      return {
        subject,
        correct: correctInSubject,
        total: subjectQuestions.length,
        percentage: Math.round((correctInSubject / subjectQuestions.length) * 100),
      };
    });

    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const colors = {
      dark: {
        tooltip: '#1e293b',
        grid: '#334155',
        text: '#e2e8f0',
      },
      light: {
        tooltip: '#ffffff',
        grid: '#e2e8f0',
        text: '#1e293b',
      },
    };
    const currentColors = colors[theme];

    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Exam Results
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {selectedTest.title}
          </p>
        </div>

        {/* Score Overview */}
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Score */}
            <div className="text-center">
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-2">Your Score</p>
              <p className="text-7xl font-bold text-indigo-600 dark:text-indigo-400 my-2">
                {results.marksObtained}/{results.totalMarks}
              </p>
              <p className="text-3xl font-semibold text-slate-600 dark:text-slate-300 mt-2">
                {results.percentage?.toFixed(1)}%
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                {results.percentage >= 90 ? (
                  <>
                    <span className="text-2xl">🏆</span>
                    <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                      Excellent Performance!
                    </span>
                  </>
                ) : results.percentage >= 75 ? (
                  <>
                    <span className="text-2xl">🎯</span>
                    <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                      Great Job!
                    </span>
                  </>
                ) : results.percentage >= 60 ? (
                  <>
                    <span className="text-2xl">👍</span>
                    <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                      Good Effort!
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-2xl">📚</span>
                    <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                      Keep Practicing!
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Pie Chart */}
            <div className="h-64 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData.filter((d) => d.value > 0)}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {chartData
                      .filter((d) => d.value > 0)
                      .map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[chartData.indexOf(entry)]}
                        />
                      ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: currentColors.tooltip,
                      borderColor: currentColors.grid,
                      borderRadius: '0.75rem',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center border-t border-slate-200 dark:border-slate-700 pt-6 mt-8">
            <div>
              <p className="text-2xl font-bold text-emerald-500 flex items-center justify-center gap-2">
                <CheckCircleIcon /> {results.correctAnswers}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Correct</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-500 flex items-center justify-center gap-2">
                <XCircleIcon /> {results.wrongAnswers}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Wrong</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2">
                <TargetIcon /> {results.skippedAnswers}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Skipped</p>
            </div>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Subject-wise Performance
          </h2>
          <div className="space-y-4">
            {subjectPerformance.map((subject, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {subject.subject}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {subject.correct}/{subject.total} ({subject.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      subject.percentage >= 75
                        ? 'bg-emerald-500'
                        : subject.percentage >= 50
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${subject.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison & Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Percentile (mockup) */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AwardIcon className="w-5 h-5" />
              Your Rank
            </h3>
            <p className="text-5xl font-bold mb-2">85th</p>
            <p className="text-sm opacity-90">Percentile among all students</p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs opacity-75">
                You performed better than 85% of students who took this test
              </p>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <TrendingUpIcon className="w-5 h-5 text-indigo-600" />
              Areas to Improve
            </h3>
            <ul className="space-y-3">
              {subjectPerformance
                .filter(s => s.percentage < 75)
                .map((subject, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-orange-500">📌</span>
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        {subject.subject}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Focus on practice tests for this subject
                      </p>
                    </div>
                  </li>
                ))}
              {subjectPerformance.every(s => s.percentage >= 75) && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  🎉 Great performance across all subjects! Keep it up!
                </p>
              )}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Take Another Exam
          </button>
          <button
            onClick={() => handleTestSelect(selectedTest)}
            className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Retry This Exam
          </button>
        </div>
      </div>
    );
  }

  // Exam ongoing screen
  if (!selectedTest) return null;

  const currentQuestion = selectedTest.questions[currentQuestionIndex];
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const answeredCount = answers.filter(a => a.selectedAnswer !== -1).length;

  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {selectedTest.title}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {answeredCount}/{selectedTest.questions.length} answered
          </p>
        </div>
        <div className="flex items-center gap-2 font-semibold text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-500/20 px-4 py-2 rounded-full">
          <ClockIcon className="w-5 h-5" />
          <span>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
            <span>
              Question {currentQuestionIndex + 1} of {selectedTest.questions.length}
            </span>
            <span className="font-semibold">
              {currentQuestion.marks} {currentQuestion.marks === 1 ? 'mark' : 'marks'}
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / selectedTest.questions.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        <div className="mb-2">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {currentQuestion.subject}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
          {currentQuestion.question[currentLanguage] ||
            currentQuestion.question.en}
        </h2>

        <div className="space-y-4">
          {(currentQuestion.options[currentLanguage] || currentQuestion.options.en).map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-200 ${
                answers[currentQuestionIndex]?.selectedAnswer === index
                  ? 'bg-indigo-100 dark:bg-indigo-500/30 border-indigo-500'
                  : 'bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 hover:border-indigo-400'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handleGoToPrevious}
            disabled={currentQuestionIndex === 0 || loading}
            className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {currentQuestionIndex < selectedTest.questions.length - 1 ? (
            <button
              onClick={handleGoToNext}
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmitExam}
              disabled={loading}
              className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Exam'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamMode;
