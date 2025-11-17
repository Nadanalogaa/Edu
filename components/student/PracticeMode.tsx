import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, ClockIcon, TargetIcon, TrendingUpIcon, BookOpenIcon, AwardIcon } from '../icons';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

type PracticeState = 'dashboard' | 'test-selection' | 'practicing' | 'review';

interface Test {
  _id: string;
  title: string;
  description: string;
  type: 'practice' | 'exam';
  examType: 'NEET' | 'JEE' | 'Both';
  subjects: string[];
  duration: number;
  totalMarks: number;
  questions: Question[];
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

interface QuestionState {
  questionId: string;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
}

interface TopicProgress {
  id: string;
  subject: string;
  topic: string;
  chapter: string;
  totalQuestions: number;
  practicedQuestions: number;
  accuracy: number;
  lastPracticed: string | null;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'completed' | 'in-progress' | 'not-started';
}

// Mockup data for demo
const mockTopicProgress: TopicProgress[] = [
  // Physics
  { id: '1', subject: 'Physics', topic: 'Laws of Motion', chapter: 'Chapter 5', totalQuestions: 45, practicedQuestions: 45, accuracy: 92, lastPracticed: '2 days ago', difficulty: 'Medium', status: 'completed' },
  { id: '2', subject: 'Physics', topic: 'Work, Energy and Power', chapter: 'Chapter 6', totalQuestions: 38, practicedQuestions: 25, accuracy: 78, lastPracticed: '1 week ago', difficulty: 'Hard', status: 'in-progress' },
  { id: '3', subject: 'Physics', topic: 'Thermodynamics', chapter: 'Chapter 12', totalQuestions: 52, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Hard', status: 'not-started' },
  { id: '4', subject: 'Physics', topic: 'Electrostatics', chapter: 'Chapter 1', totalQuestions: 60, practicedQuestions: 60, accuracy: 88, lastPracticed: '3 days ago', difficulty: 'Medium', status: 'completed' },
  { id: '5', subject: 'Physics', topic: 'Current Electricity', chapter: 'Chapter 3', totalQuestions: 42, practicedQuestions: 15, accuracy: 65, lastPracticed: '5 days ago', difficulty: 'Medium', status: 'in-progress' },
  { id: '6', subject: 'Physics', topic: 'Magnetic Effects', chapter: 'Chapter 4', totalQuestions: 48, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Hard', status: 'not-started' },

  // Chemistry
  { id: '7', subject: 'Chemistry', topic: 'Atomic Structure', chapter: 'Chapter 2', totalQuestions: 40, practicedQuestions: 40, accuracy: 95, lastPracticed: '1 day ago', difficulty: 'Easy', status: 'completed' },
  { id: '8', subject: 'Chemistry', topic: 'Chemical Bonding', chapter: 'Chapter 4', totalQuestions: 55, practicedQuestions: 30, accuracy: 82, lastPracticed: '4 days ago', difficulty: 'Medium', status: 'in-progress' },
  { id: '9', subject: 'Chemistry', topic: 'Thermodynamics', chapter: 'Chapter 6', totalQuestions: 45, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Hard', status: 'not-started' },
  { id: '10', subject: 'Chemistry', topic: 'Organic Chemistry Basics', chapter: 'Chapter 12', totalQuestions: 50, practicedQuestions: 50, accuracy: 90, lastPracticed: '2 days ago', difficulty: 'Medium', status: 'completed' },
  { id: '11', subject: 'Chemistry', topic: 'Hydrocarbons', chapter: 'Chapter 13', totalQuestions: 48, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Medium', status: 'not-started' },

  // Biology
  { id: '12', subject: 'Biology', topic: 'Cell Structure', chapter: 'Chapter 8', totalQuestions: 35, practicedQuestions: 35, accuracy: 94, lastPracticed: '1 day ago', difficulty: 'Easy', status: 'completed' },
  { id: '13', subject: 'Biology', topic: 'Cell Division', chapter: 'Chapter 10', totalQuestions: 30, practicedQuestions: 20, accuracy: 75, lastPracticed: '3 days ago', difficulty: 'Medium', status: 'in-progress' },
  { id: '14', subject: 'Biology', topic: 'Genetics', chapter: 'Chapter 5', totalQuestions: 52, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Hard', status: 'not-started' },
  { id: '15', subject: 'Biology', topic: 'Evolution', chapter: 'Chapter 7', totalQuestions: 40, practicedQuestions: 40, accuracy: 88, lastPracticed: '2 days ago', difficulty: 'Medium', status: 'completed' },
  { id: '16', subject: 'Biology', topic: 'Human Physiology', chapter: 'Chapter 17', totalQuestions: 65, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Hard', status: 'not-started' },

  // Maths
  { id: '17', subject: 'Maths', topic: 'Trigonometry', chapter: 'Chapter 3', totalQuestions: 50, practicedQuestions: 50, accuracy: 96, lastPracticed: '1 day ago', difficulty: 'Easy', status: 'completed' },
  { id: '18', subject: 'Maths', topic: 'Calculus - Differentiation', chapter: 'Chapter 5', totalQuestions: 60, practicedQuestions: 45, accuracy: 85, lastPracticed: '2 days ago', difficulty: 'Medium', status: 'in-progress' },
  { id: '19', subject: 'Maths', topic: 'Integration', chapter: 'Chapter 7', totalQuestions: 55, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Hard', status: 'not-started' },
  { id: '20', subject: 'Maths', topic: 'Vectors', chapter: 'Chapter 10', totalQuestions: 42, practicedQuestions: 42, accuracy: 91, lastPracticed: '3 days ago', difficulty: 'Medium', status: 'completed' },
  { id: '21', subject: 'Maths', topic: '3D Geometry', chapter: 'Chapter 11', totalQuestions: 48, practicedQuestions: 0, accuracy: 0, lastPracticed: null, difficulty: 'Hard', status: 'not-started' },
];

const mockStats = {
  totalPracticed: 487,
  weeklyGoal: 600,
  currentStreak: 12,
  overallAccuracy: 87,
  practiceTime: 42, // hours
  topicsCompleted: 8,
};

const PracticeMode: React.FC = () => {
  const { language: currentLanguage, t } = useLanguage();
  const [practiceState, setPracticeState] = useState<PracticeState>('dashboard');
  const [tests, setTests] = useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState<QuestionState[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [topicProgress] = useState<TopicProgress[]>(mockTopicProgress);

  // Fetch practice tests on mount
  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        const response = await api.get('/student/tests');
        if (response.data.success) {
          const practiceTests = response.data.data.filter(
            (test: Test) => test.type === 'practice'
          );
          setTests(practiceTests);
        }
      } catch (error: any) {
        console.error('Error fetching practice tests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  const handleTestSelect = (test: Test) => {
    setSelectedTest(test);
    setQuestions(test.questions);
    setQuestionStates(
      test.questions.map((q) => ({
        questionId: q._id,
        selectedAnswer: null,
        isCorrect: null,
      }))
    );
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setPracticeState('practicing');
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (questionStates[currentQuestionIndex].selectedAnswer !== null) {
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswer;

    const newStates = [...questionStates];
    newStates[currentQuestionIndex] = {
      ...newStates[currentQuestionIndex],
      selectedAnswer: optionIndex,
      isCorrect,
    };
    setQuestionStates(newStates);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(questionStates[currentQuestionIndex + 1].selectedAnswer !== null);
    } else {
      setPracticeState('review');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(questionStates[currentQuestionIndex - 1].selectedAnswer !== null);
    }
  };

  const handleRestart = () => {
    setPracticeState('dashboard');
    setSelectedTest(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setQuestionStates([]);
    setShowExplanation(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'Medium':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
      case 'Hard':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50 dark:bg-green-900/10';
      case 'in-progress':
        return 'border-orange-500 bg-orange-50 dark:bg-orange-900/10';
      case 'not-started':
        return 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50';
      default:
        return 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50';
    }
  };

  const filteredTopics = selectedSubject === 'All'
    ? topicProgress
    : topicProgress.filter(t => t.subject === selectedSubject);

  const subjectStats = (subject: string) => {
    const topics = topicProgress.filter(t => t.subject === subject);
    const completed = topics.filter(t => t.status === 'completed').length;
    const total = topics.length;
    const totalQuestions = topics.reduce((sum, t) => sum + t.totalQuestions, 0);
    const practiced = topics.reduce((sum, t) => sum + t.practicedQuestions, 0);
    const avgAccuracy = topics.filter(t => t.practicedQuestions > 0)
      .reduce((sum, t, idx, arr) => sum + t.accuracy / arr.length, 0);

    return { completed, total, totalQuestions, practiced, avgAccuracy: avgAccuracy || 0 };
  };

  // Dashboard screen
  if (practiceState === 'dashboard') {
    const subjects = ['Physics', 'Chemistry', 'Biology', 'Maths'];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Practice Mode
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Master topics at your own pace with instant feedback
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <BookOpenIcon className="w-8 h-8 opacity-80" />
              <TrendingUpIcon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold">{mockStats.totalPracticed}</p>
            <p className="text-sm opacity-90">Questions Practiced</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <TargetIcon className="w-8 h-8 opacity-80" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {Math.round((mockStats.totalPracticed / mockStats.weeklyGoal) * 100)}%
              </span>
            </div>
            <p className="text-3xl font-bold">{mockStats.overallAccuracy}%</p>
            <p className="text-sm opacity-90">Overall Accuracy</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <AwardIcon className="w-8 h-8 opacity-80" />
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-3xl font-bold">{mockStats.currentStreak}</p>
            <p className="text-sm opacity-90">Day Streak</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <ClockIcon className="w-8 h-8 opacity-80" />
              <CheckCircleIcon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold">{mockStats.topicsCompleted}</p>
            <p className="text-sm opacity-90">Topics Completed</p>
          </div>
        </div>

        {/* Subject-wise Overview */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Subject Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((subject) => {
              const stats = subjectStats(subject);
              const percentage = (stats.practiced / stats.totalQuestions) * 100;

              return (
                <div
                  key={subject}
                  className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {subject}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-400">Progress</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                          {Math.round(percentage)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Topics</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">
                        {stats.completed}/{stats.total}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Accuracy</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {Math.round(stats.avgAccuracy)}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Topic Selection */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Practice by Topic
            </h2>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Filter:
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>All</option>
                {subjects.map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
              <span className="text-slate-600 dark:text-slate-400">Not Started</span>
            </div>
          </div>

          {/* Topic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className={`p-5 rounded-2xl border-2 shadow-sm hover:shadow-lg transition-all cursor-pointer ${getStatusColor(topic.status)}`}
                onClick={() => setPracticeState('test-selection')}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {topic.subject} • {topic.chapter}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                </div>

                {/* Topic Name */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {topic.topic}
                </h3>

                {/* Progress Bar (for in-progress topics) */}
                {topic.status === 'in-progress' && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        {topic.practicedQuestions}/{topic.totalQuestions} Questions
                      </span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">
                        {Math.round((topic.practicedQuestions / topic.totalQuestions) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${(topic.practicedQuestions / topic.totalQuestions) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="space-y-2 text-sm">
                  {topic.status === 'completed' && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Accuracy</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          {topic.accuracy}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Last Practiced</span>
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          {topic.lastPracticed}
                        </span>
                      </div>
                      <button className="w-full mt-2 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                        Practice Again
                      </button>
                    </>
                  )}

                  {topic.status === 'in-progress' && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Current Accuracy</span>
                        <span className="font-bold text-orange-600 dark:text-orange-400">
                          {topic.accuracy}%
                        </span>
                      </div>
                      <button className="w-full mt-2 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                        Continue Practice
                      </button>
                    </>
                  )}

                  {topic.status === 'not-started' && (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Total Questions</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">
                          {topic.totalQuestions}
                        </span>
                      </div>
                      <button className="w-full mt-2 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                        Start Practice
                      </button>
                    </>
                  )}
                </div>

                {/* Status Badge */}
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    {topic.status === 'completed' && (
                      <>
                        <CheckCircleIcon className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-semibold text-green-600">Completed</span>
                      </>
                    )}
                    {topic.status === 'in-progress' && (
                      <>
                        <ClockIcon className="w-4 h-4 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-600">In Progress</span>
                      </>
                    )}
                    {topic.status === 'not-started' && (
                      <>
                        <BookOpenIcon className="w-4 h-4 text-slate-500" />
                        <span className="text-xs font-semibold text-slate-500">Not Started</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Test selection screen
  if (practiceState === 'test-selection') {
    return (
      <div className="text-center">
        <button
          onClick={() => setPracticeState('dashboard')}
          className="mb-6 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          Select Practice Test
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Choose a practice test to begin
        </p>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
          </div>
        ) : tests.length === 0 ? (
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-400">
              No practice tests available at the moment. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tests.map((test) => (
              <button
                key={test._id}
                onClick={() => handleTestSelect(test)}
                className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    Practice
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    {test.examType}
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
    );
  }

  // Review screen
  if (practiceState === 'review') {
    const correctCount = questionStates.filter((s) => s.isCorrect === true).length;
    const incorrectCount = questionStates.filter((s) => s.isCorrect === false).length;
    const skippedCount = questionStates.filter((s) => s.selectedAnswer === null).length;
    const accuracy = questions.length > 0 ? ((correctCount / questions.length) * 100).toFixed(1) : 0;

    return (
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Practice Session Complete!
        </h1>
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="mb-8">
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-2">Your Accuracy</p>
            <p className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">{accuracy}%</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center border-t border-slate-200 dark:border-slate-700 pt-6">
            <div>
              <p className="text-2xl font-bold text-emerald-500 flex items-center justify-center gap-2">
                <CheckCircleIcon /> {correctCount}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Correct</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-500 flex items-center justify-center gap-2">
                <XCircleIcon /> {incorrectCount}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Incorrect</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-600 dark:text-slate-300">
                {skippedCount}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Skipped</p>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Practice screen
  if (!selectedTest || questions.length === 0) return null;

  const currentQuestion = questions[currentQuestionIndex];
  const currentState = questionStates[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          {selectedTest.title}
        </h1>
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="mb-6">
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="mb-2">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {currentQuestion.subject}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400 ml-4">
            {currentQuestion.marks} {currentQuestion.marks === 1 ? 'mark' : 'marks'}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
          {currentQuestion.question[currentLanguage] ||
            currentQuestion.question.en}
        </h2>

        <div className="space-y-4">
          {(currentQuestion.options[currentLanguage] || currentQuestion.options.en).map((option: string, index: number) => {
            let optionClass =
              'w-full text-left p-4 rounded-lg border-2 transition-colors duration-200 ';

            if (currentState.selectedAnswer === null) {
              optionClass +=
                'bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 hover:border-indigo-400';
            } else {
              if (index === currentQuestion.correctAnswer) {
                optionClass +=
                  'bg-emerald-100 dark:bg-emerald-500/20 border-emerald-500 text-emerald-900 dark:text-emerald-100';
              } else if (index === currentState.selectedAnswer) {
                optionClass +=
                  'bg-red-100 dark:bg-red-500/20 border-red-500 text-red-900 dark:text-red-100';
              } else {
                optionClass +=
                  'bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 opacity-60';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={currentState.selectedAnswer !== null}
                className={optionClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {currentState.selectedAnswer !== null && (
                    <>
                      {index === currentQuestion.correctAnswer && (
                        <CheckCircleIcon className="w-6 h-6 text-emerald-500" />
                      )}
                      {index === currentState.selectedAnswer &&
                        index !== currentQuestion.correctAnswer && (
                          <XCircleIcon className="w-6 h-6 text-red-500" />
                        )}
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg border border-indigo-200 dark:border-indigo-500/30">
            <h3 className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
              Explanation:
            </h3>
            <p className="text-sm text-indigo-800 dark:text-indigo-200">
              {currentQuestion.explanation[currentLanguage] ||
                currentQuestion.explanation.en}
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish Practice'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeMode;
