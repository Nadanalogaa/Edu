import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, ClockIcon, TargetIcon, TrendingUpIcon, BookOpenIcon, AwardIcon, FireIcon, VideoIcon, AudioIcon, ReadIcon, ARIcon, VRIcon } from '../icons';
import { useLanguage } from '../../context/LanguageContext';
import { questions, exams, generateAIInsights, getGeneralInsights, topicAnalytics, type Question, type Exam, type AIInsight } from '../../data/mockDataBilingual';
import ARViewer from './ARViewer';
import SimpleARViewer from './SimpleARViewer';
import UltraSimpleARViewer from './UltraSimpleARViewer';
import Video360Viewer from './Video360Viewer';
import VRViewer from './VRViewer';
import Lesson3DViewer from './Lesson3DViewer';

type PracticeView = 'dashboard' | 'exam-selection' | 'practicing' | 'results';

interface Answer {
  questionId: string;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  timeTaken: number;
}

const PracticeModeNew: React.FC = () => {
  const { language, t } = useLanguage();
  const [view, setView] = useState<PracticeView>('dashboard');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [practiceQuestions, setPracticeQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [aiInsights, setAiInsights] = useState<AIInsight[]>(getGeneralInsights());

  // Multimedia modal states
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showVideoTypeSelection, setShowVideoTypeSelection] = useState(false);
  const [selectedVideoType, setSelectedVideoType] = useState<'2D' | '3D' | null>(null);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [showARViewer, setShowARViewer] = useState(false);
  const [showVRExperience, setShowVRExperience] = useState(false);
  const [modalQuestion, setModalQuestion] = useState<Question | null>(null);

  // Mock stats for dashboard
  const mockStats = {
    totalPracticed: 487,
    weeklyGoal: 600,
    currentStreak: 12,
    overallAccuracy: 87,
    practiceTime: 42,
    topicsCompleted: 8,
  };

  // Start practice session
  const handleStartPractice = (exam: Exam) => {
    const examQuestions = questions.filter(q => exam.questionIds.includes(q.id));
    setSelectedExam(exam);
    setPracticeQuestions(examQuestions);
    setAnswers(examQuestions.map(q => ({
      questionId: q.id,
      selectedAnswer: null,
      isCorrect: null,
      timeTaken: 0
    })));
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setQuestionStartTime(Date.now());
    setView('practicing');
  };

  // Handle answer selection
  const handleAnswerSelect = (optionIndex: number) => {
    if (answers[currentQuestionIndex].selectedAnswer !== null) return;

    const currentQuestion = practiceQuestions[currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      selectedAnswer: optionIndex,
      isCorrect,
      timeTaken
    };
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  // Navigate questions
  const handleNext = () => {
    if (currentQuestionIndex < practiceQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(answers[currentQuestionIndex + 1].selectedAnswer !== null);
      setQuestionStartTime(Date.now());
    } else {
      finishPractice();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(answers[currentQuestionIndex - 1].selectedAnswer !== null);
      setQuestionStartTime(Date.now());
    }
  };

  // Finish practice and generate insights
  const finishPractice = () => {
    const correct = answers.filter(a => a.isCorrect === true).length;
    const totalTime = answers.reduce((sum, a) => sum + a.timeTaken, 0);
    const percentage = Math.round((correct / practiceQuestions.length) * 100);

    const mockAttempt = {
      id: 'temp',
      examId: selectedExam?.id || '',
      studentId: 'student123',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      timeTaken: totalTime,
      score: correct * 4,
      totalMarks: practiceQuestions.length * 4,
      percentage,
      answers,
      rank: 15,
      percentile: 85
    };

    setAiInsights(generateAIInsights(mockAttempt));
    setView('results');
  };

  const resetPractice = () => {
    setView('dashboard');
    setSelectedExam(null);
    setPracticeQuestions([]);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setAiInsights(getGeneralInsights());
  };

  // Render the appropriate view content
  const renderViewContent = () => {
    // Dashboard View
    if (view === 'dashboard') {
      return (
        <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
              {t('practiceExam.practiceDashboardTitle')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('practiceExam.practiceDashboardSubtitle')}
            </p>
          </div>
          <button
            onClick={() => setView('exam-selection')}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 whitespace-nowrap"
          >
            {t('practiceExam.startPractice')}
          </button>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <BookOpenIcon className="w-10 h-10 opacity-90" />
              <TrendingUpIcon className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold mb-1">{mockStats.totalPracticed}</p>
            <p className="text-sm opacity-90">{t('practiceExam.questionsPracticed')}</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <TargetIcon className="w-10 h-10 opacity-90" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-semibold">
                {Math.round((mockStats.totalPracticed / mockStats.weeklyGoal) * 100)}%
              </span>
            </div>
            <p className="text-3xl font-bold mb-1">{mockStats.overallAccuracy}%</p>
            <p className="text-sm opacity-90">{t('practiceExam.accuracy')}</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <FireIcon className="w-10 h-10 opacity-90" />
              <span className="text-3xl">🔥</span>
            </div>
            <p className="text-3xl font-bold mb-1">{mockStats.currentStreak}</p>
            <p className="text-sm opacity-90">{t('practiceExam.dayStreak')}</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-rose-600 p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <AwardIcon className="w-10 h-10 opacity-90" />
              <CheckCircleIcon className="w-7 h-7" />
            </div>
            <p className="text-3xl font-bold mb-1">{mockStats.topicsCompleted}</p>
            <p className="text-sm opacity-90">{t('practiceExam.topicsCompleted')}</p>
          </div>
        </div>

        {/* AI Insights Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <span>✨</span> {t('practiceExam.aiInsights')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiInsights.map((insight, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border-2 shadow-sm hover:shadow-md transition-all bg-gradient-to-br ${
                  insight.color === 'green'
                    ? 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800'
                    : insight.color === 'blue'
                    ? 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800'
                    : insight.color === 'orange'
                    ? 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200 dark:border-orange-800'
                    : insight.color === 'purple'
                    ? 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800'
                    : 'from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{insight.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">
                      {insight.title[language]}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {insight.message[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Analytics */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            {t('practiceExam.topicWise')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topicAnalytics.map((topic, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                      {topic.topic[language]}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{topic.subject}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      topic.strength === 'strong'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                        : topic.strength === 'average'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                    }`}
                  >
                    {topic.accuracy}%
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      {topic.attempted}/{topic.totalQuestions} {t('practiceExam.questionsLabel')}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {topic.avgTimeTaken}s avg
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        topic.strength === 'strong'
                          ? 'bg-emerald-500'
                          : topic.strength === 'average'
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${(topic.attempted / topic.totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      );
    }

    // Exam Selection View
    if (view === 'exam-selection') {
      const practiceExams = exams.filter(e => e.type === 'practice');

      return (
        <div className="space-y-6 animate-fade-in">
        <button
          onClick={() => setView('dashboard')}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          ← {t('practiceExam.backToDashboard')}
        </button>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {t('practiceExam.selectPracticeTest')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">{t('practiceExam.chooseTest')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceExams.map((exam) => {
            const examQuestions = questions.filter(q => exam.questionIds.includes(q.id));
            return (
              <button
                key={exam.id}
                onClick={() => handleStartPractice(exam)}
                className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-600 hover:-translate-y-1 transition-all text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      exam.difficulty === 'Easy'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : exam.difficulty === 'Medium'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                    }`}
                  >
                    {exam.difficulty}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {exam.examType}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {exam.title[language]}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {exam.description[language]}
                </p>
                <div className="flex items-center justify-between text-sm border-t border-slate-200 dark:border-slate-700 pt-3">
                  <span className="text-slate-500 dark:text-slate-400">
                    {examQuestions.length} {t('practiceExam.questionsLabel')}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {exam.duration} {t('minutes')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      );
    }

    // Practicing View
    if (view === 'practicing' && practiceQuestions.length > 0) {
      const currentQuestion = practiceQuestions[currentQuestionIndex];
      const currentAnswer = answers[currentQuestionIndex];
      const progress = ((currentQuestionIndex + 1) / practiceQuestions.length) * 100;

      return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        {/* Progress Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {selectedExam?.title[language]}
          </h1>
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
            {t('practiceExam.questionOf')
              .replace('{{current}}', String(currentQuestionIndex + 1))
              .replace('{{total}}', String(practiceQuestions.length))}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-300 shadow-md"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg">
          {/* Question Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
              {currentQuestion.subject}
            </span>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              {currentQuestion.marks} {currentQuestion.marks === 1 ? t('practiceExam.mark') : t('practiceExam.marks')}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6 leading-relaxed">
            {currentQuestion.question[language]}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options[language].map((option, index) => {
              let optionClass =
                'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium ';

              if (currentAnswer.selectedAnswer === null) {
                optionClass +=
                  'bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:shadow-md';
              } else {
                if (index === currentQuestion.correctAnswer) {
                  optionClass +=
                    'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-500 text-emerald-900 dark:text-emerald-100 shadow-md';
                } else if (index === currentAnswer.selectedAnswer) {
                  optionClass +=
                    'bg-red-100 dark:bg-red-900/30 border-red-500 text-red-900 dark:text-red-100 shadow-md';
                } else {
                  optionClass +=
                    'bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 opacity-60';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={currentAnswer.selectedAnswer !== null}
                  className={optionClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex-1">{option}</span>
                    {currentAnswer.selectedAnswer !== null && (
                      <>
                        {index === currentQuestion.correctAnswer && (
                          <CheckCircleIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        )}
                        {index === currentAnswer.selectedAnswer &&
                          index !== currentQuestion.correctAnswer && (
                            <XCircleIcon className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                          )}
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 animate-fade-in">
              <h3 className="text-sm font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                <span>💡</span> {t('practiceExam.explanation')}
              </h3>
              <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed">
                {currentQuestion.explanation[language]}
              </p>
            </div>
          )}

          {/* Multimedia Learning Buttons */}
          <div className="mt-6 mb-4">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setModalQuestion(currentQuestion);
                  setShowVideoTypeSelection(true);
                }}
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <VideoIcon className="w-5 h-5" />
                <span>{t('practiceExam.watch')}</span>
              </button>
              <button
                onClick={() => {
                  setModalQuestion(currentQuestion);
                  setShowAudioPlayer(true);
                }}
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <AudioIcon className="w-5 h-5" />
                <span>{t('practiceExam.listen')}</span>
              </button>
              <button
                onClick={() => {
                  setModalQuestion(currentQuestion);
                  setShowPDFViewer(true);
                }}
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <ReadIcon className="w-5 h-5" />
                <span>{t('practiceExam.read')}</span>
              </button>
              <button
                onClick={() => {
                  setModalQuestion(currentQuestion);
                  setShowARViewer(true);
                }}
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <ARIcon className="w-5 h-5" />
                <span>{t('practiceExam.ar')}</span>
              </button>
              <button
                onClick={() => {
                  setModalQuestion(currentQuestion);
                  setShowVRExperience(true);
                }}
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <VRIcon className="w-5 h-5" />
                <span>{t('practiceExam.vr')}</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {t('practiceExam.previous')}
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              {currentQuestionIndex < practiceQuestions.length - 1
                ? t('practiceExam.next')
                : t('practiceExam.finishPractice')}
            </button>
          </div>
        </div>
      </div>
      );
    }

    // Results View
    if (view === 'results') {
      const correct = answers.filter(a => a.isCorrect === true).length;
      const incorrect = answers.filter(a => a.isCorrect === false).length;
      const skipped = answers.filter(a => a.selectedAnswer === null).length;
      const accuracy = practiceQuestions.length > 0 ? ((correct / practiceQuestions.length) * 100).toFixed(1) : 0;

      return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
        {/* Results Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {t('practiceExam.practiceComplete')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {selectedExam?.title[language]}
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl shadow-2xl text-white">
          <p className="text-lg opacity-90 mb-2">{t('practiceExam.yourAccuracy')}</p>
          <p className="text-7xl font-bold mb-6">{accuracy}%</p>

          <div className="grid grid-cols-3 gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircleIcon className="w-6 h-6" />
                <p className="text-3xl font-bold">{correct}</p>
              </div>
              <p className="text-sm opacity-90">{t('practiceExam.correct')}</p>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <XCircleIcon className="w-6 h-6" />
                <p className="text-3xl font-bold">{incorrect}</p>
              </div>
              <p className="text-sm opacity-90">{t('practiceExam.incorrect')}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">{skipped}</p>
              <p className="text-sm opacity-90">{t('practiceExam.skipped')}</p>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <span>✨</span> {t('practiceExam.aiInsights')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiInsights.map((insight, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border-2 shadow-md bg-gradient-to-br ${
                  insight.color === 'green'
                    ? 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800'
                    : insight.color === 'blue'
                    ? 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800'
                    : insight.color === 'orange'
                    ? 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200 dark:border-orange-800'
                    : insight.color === 'purple'
                    ? 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800'
                    : insight.color === 'yellow'
                    ? 'from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-200 dark:border-yellow-800'
                    : 'from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-4xl">{insight.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2">
                      {insight.title[language]}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {insight.message[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={resetPractice}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            {t('practiceExam.backToDashboard')}
          </button>
        </div>
      </div>
      );
    }

    return null;
  };

  return (
    <>
      {renderViewContent()}

      {/* Video Type Selection Modal */}
      {showVideoTypeSelection && modalQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-auto">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <VideoIcon className="w-16 h-16 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {t('practiceExam.videoExplanation')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {modalQuestion.topic}
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSelectedVideoType('2D');
                    setShowVideoTypeSelection(false);
                    setShowVideoModal(true);
                  }}
                  className="w-full p-6 rounded-xl border-2 border-red-200 dark:border-red-700 hover:border-red-400 dark:hover:border-red-500 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">2D Video</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Standard video explanation</div>
                    </div>
                    <svg className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setSelectedVideoType('3D');
                    setShowVideoTypeSelection(false);
                    setShowVideoModal(true);
                  }}
                  className="w-full p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">3D Animation</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Interactive 3D visualization</div>
                    </div>
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <button
                onClick={() => setShowVideoTypeSelection(false)}
                className="w-full mt-4 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal with YouTube Embed */}
      {showVideoModal && modalQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <VideoIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {selectedVideoType} {t('practiceExam.videoExplanation')}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{modalQuestion.topic}</p>
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
            <div className="flex-1 overflow-auto p-4 sm:p-6">
              <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden">
                {/* Embedded YouTube Video - Sample Biology Video */}
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideoType === '3D'
                    ? "https://www.youtube.com/embed/URUJD5NEXC8"  // 3D Cell Animation
                    : "https://www.youtube.com/embed/39HTpUG1MwQ"  // 2D Cell Biology
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Topic:</strong> {modalQuestion.topic} - {selectedVideoType} Visualization
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audio Player Modal */}
      {showAudioPlayer && modalQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <AudioIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                    {t('practiceExam.audioNarration')}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{modalQuestion.topic}</p>
                </div>
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
            <div className="flex-1 overflow-auto p-4 sm:p-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 sm:p-8 rounded-xl">
                <AudioIcon className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                <p className="text-center text-lg font-semibold text-slate-800 dark:text-slate-100 mb-6">
                  {modalQuestion.question[language]}
                </p>

                {/* Embedded Audio Player */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-inner">
                  <audio controls className="w-full">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-3">
                    Audio narration explaining the concept in detail
                  </p>
                </div>

                <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {modalQuestion.explanation[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer Modal */}
      {showPDFViewer && modalQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <ReadIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {t('practiceExam.studyMaterial')}
                </h3>
              </div>
              <button
                onClick={() => setShowPDFViewer(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Content - Redesigned */}
            <div className="flex-1 overflow-auto bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
              {/* PDF Viewer - Scrollable Multi-Page Content */}
              <div className="max-w-4xl mx-auto p-6 space-y-8">
                {/* === PAGE 1 === */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 min-h-[800px]">
                  <div className="text-right text-xs text-slate-500 dark:text-slate-400 mb-4">Page 1 of 5</div>

                  <h3 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300 mb-2 text-center">
                    {modalQuestion.topic}
                  </h3>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-400 mb-8">
                    {modalQuestion.subject} • Comprehensive Study Guide
                  </p>
                  <hr className="border-t-2 border-emerald-300 dark:border-emerald-700 mb-8" />

                  {/* Introduction */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                      <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Introduction</h4>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed ml-11">
                      {modalQuestion.explanation[language]}
                    </p>
                  </div>

                  {/* Visual Diagram */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                      <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Visual Diagram</h4>
                    </div>
                    <div className="ml-11 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-emerald-300 dark:border-emerald-700">
                      <div className="grid grid-cols-3 gap-6 text-center items-center">
                        <div>
                          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                            A
                          </div>
                          <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Component A</p>
                        </div>
                        <div className="flex justify-center">
                          <svg className="w-16 h-16 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div>
                          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                            B
                          </div>
                          <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Component B</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mathematical Formulas */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                      <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Key Formulas</h4>
                    </div>
                    <div className="ml-11 space-y-4">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-4 border-emerald-500">
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Primary Formula:</p>
                        <div className="text-center py-2 font-mono text-2xl text-emerald-700 dark:text-emerald-400">
                          E = mc²
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Where: E = Energy, m = mass, c = speed of light</p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500">
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Secondary Formula:</p>
                        <div className="text-center py-2 font-mono text-2xl text-blue-700 dark:text-blue-400">
                          F = ma
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Where: F = Force, m = mass, a = acceleration</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* === PAGE 2 === */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 min-h-[800px]">
                  <div className="text-right text-xs text-slate-500 dark:text-slate-400 mb-4">Page 2 of 5</div>

                  <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-6">Key Concepts</h3>
                  <hr className="border-t-2 border-emerald-300 dark:border-emerald-700 mb-8" />

                  <div className="space-y-4">
                    {['Fundamental principles and theories', 'Mathematical derivations and proofs', 'Practical applications and examples', 'Common misconceptions and pitfalls'].map((concept, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-emerald-200 dark:border-emerald-700">
                        <div className="flex items-start gap-3">
                          <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">{idx + 1}</span>
                          <div>
                            <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2">{concept}</h5>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Detailed explanation of {concept.toLowerCase()}. This section covers the essential aspects and provides in-depth knowledge.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* === PAGE 3 === */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 min-h-[800px]">
                  <div className="text-right text-xs text-slate-500 dark:text-slate-400 mb-4">Page 3 of 5</div>

                  <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-6">Practice Problems</h3>
                  <hr className="border-t-2 border-emerald-300 dark:border-emerald-700 mb-8" />

                  <div className="space-y-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-300 dark:border-blue-700">
                      <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">Problem 1</h5>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Calculate the energy when mass = 2kg and c = 3×10⁸ m/s using E = mc²
                      </p>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded border-l-4 border-blue-500">
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Solution:</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">E = 2 × (3×10⁸)² = 1.8 × 10¹⁷ J</p>
                      </div>
                    </div>

                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-300 dark:border-blue-700">
                      <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">Problem 2</h5>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Calculate the force when mass = 5kg and acceleration = 2 m/s² using F = ma
                      </p>
                      <div className="bg-white dark:bg-slate-800 p-4 rounded border-l-4 border-blue-500">
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Solution:</p>
                        <p className="text-sm text-slate-700 dark:text-slate-300">F = 5 × 2 = 10 N</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* === PAGE 4 === */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 min-h-[800px]">
                  <div className="text-right text-xs text-slate-500 dark:text-slate-400 mb-4">Page 4 of 5</div>

                  <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-6">Real-World Applications</h3>
                  <hr className="border-t-2 border-emerald-300 dark:border-emerald-700 mb-8" />

                  <div className="space-y-6">
                    <div className="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-300 dark:border-purple-700">
                      <h5 className="font-bold text-purple-800 dark:text-purple-300 mb-3">📱 Technology</h5>
                      <p className="text-slate-700 dark:text-slate-300">
                        Applications in modern technology including semiconductors, circuits, and digital systems.
                      </p>
                    </div>
                    <div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-300 dark:border-orange-700">
                      <h5 className="font-bold text-orange-800 dark:text-orange-300 mb-3">🏥 Medicine</h5>
                      <p className="text-slate-700 dark:text-slate-300">
                        Medical imaging, diagnostics, and therapeutic applications in healthcare.
                      </p>
                    </div>
                    <div className="p-5 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-300 dark:border-teal-700">
                      <h5 className="font-bold text-teal-800 dark:text-teal-300 mb-3">🌍 Environment</h5>
                      <p className="text-slate-700 dark:text-slate-300">
                        Environmental monitoring, renewable energy, and sustainability applications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* === PAGE 5 === */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 min-h-[800px]">
                  <div className="text-right text-xs text-slate-500 dark:text-slate-400 mb-4">Page 5 of 5</div>

                  <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-6">Summary & Review</h3>
                  <hr className="border-t-2 border-emerald-300 dark:border-emerald-700 mb-8" />

                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-lg mb-6">
                    <h4 className="text-xl font-bold mb-4">💡 Key Takeaways</h4>
                    <ul className="space-y-2">
                      <li>✓ Understanding fundamental principles is essential</li>
                      <li>✓ Practice with formulas and derivations regularly</li>
                      <li>✓ Connect theory to real-world applications</li>
                      <li>✓ Review and revise concepts periodically</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-emerald-300 dark:border-emerald-700">
                    <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3">📚 Further Reading</h5>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Advanced {modalQuestion.topic} concepts</li>
                      <li>• Related topics in {modalQuestion.subject}</li>
                      <li>• Practice question banks</li>
                      <li>• Video lectures and tutorials</li>
                    </ul>
                  </div>

                  <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
                    <p>End of Study Material • {modalQuestion.topic}</p>
                    <p className="mt-2">Generated for {modalQuestion.subject} Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AR Viewer Modal */}
      {showARViewer && modalQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0">
          <div className="w-full h-full relative">
            <button
              onClick={() => setShowARViewer(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Lesson3DViewer
              topic={modalQuestion.topic}
              subject={modalQuestion.subject}
              mode="ar"
              onClose={() => setShowARViewer(false)}
            />
          </div>
        </div>
      )}

      {/* VR Experience Modal */}
      {showVRExperience && modalQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0">
          <div className="w-full h-full relative">
            <button
              onClick={() => setShowVRExperience(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Lesson3DViewer
              topic={modalQuestion.topic}
              subject={modalQuestion.subject}
              mode="vr"
              onClose={() => setShowVRExperience(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeModeNew;
