import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon, XCircleIcon, ClockIcon, TargetIcon, FireIcon, BookOpenIcon, AwardIcon } from '../icons';
import { useLanguage } from '../../context/LanguageContext';
import { questions, exams, generateAIInsights, leaderboard, type Question, type Exam, type AIInsight, type LeaderboardEntry } from '../../data/mockDataBilingual';

type ExamView = 'exam-list' | 'instructions' | 'taking-exam' | 'results';
type QuestionStatus = 'not-visited' | 'not-answered' | 'answered' | 'marked-review' | 'answered-marked';

interface Answer {
  questionId: string;
  selectedAnswer: number | null;
  markedForReview: boolean;
  timeTaken: number;
}

const ExamModeNew: React.FC = () => {
  const { language, t } = useLanguage();
  const [view, setView] = useState<ExamView>('exam-list');
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0); // in seconds
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([]);
  const [showQuestionPalette, setShowQuestionPalette] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Timer countdown
  useEffect(() => {
    if (view === 'taking-exam' && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [view, timeRemaining]);

  // Format time (MM:SS)
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Start exam
  const handleStartExam = (exam: Exam) => {
    setSelectedExam(exam);
    const filtered = questions.filter(q => exam.questionIds.includes(q.id));
    setExamQuestions(filtered);
    setView('instructions');
  };

  const handleBeginExam = () => {
    setAnswers(examQuestions.map(q => ({
      questionId: q.id,
      selectedAnswer: null,
      markedForReview: false,
      timeTaken: 0
    })));
    setCurrentQuestionIndex(0);
    setTimeRemaining((selectedExam?.duration || 60) * 60);
    setQuestionStartTime(Date.now());
    setView('taking-exam');
  };

  // Get question status
  const getQuestionStatus = (index: number): QuestionStatus => {
    if (index > currentQuestionIndex && answers[index]?.selectedAnswer === null) {
      return 'not-visited';
    }
    const answer = answers[index];
    if (!answer) return 'not-visited';

    if (answer.selectedAnswer !== null && answer.markedForReview) {
      return 'answered-marked';
    }
    if (answer.selectedAnswer !== null) {
      return 'answered';
    }
    if (answer.markedForReview) {
      return 'marked-review';
    }
    return 'not-answered';
  };

  // Handle answer selection
  const handleAnswerSelect = (optionIndex: number) => {
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      selectedAnswer: optionIndex,
      timeTaken: newAnswers[currentQuestionIndex].timeTaken + timeTaken
    };
    setAnswers(newAnswers);
    setQuestionStartTime(Date.now());
  };

  // Clear response
  const handleClearResponse = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      selectedAnswer: null
    };
    setAnswers(newAnswers);
  };

  // Mark for review
  const handleMarkForReview = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      markedForReview: !newAnswers[currentQuestionIndex].markedForReview
    };
    setAnswers(newAnswers);
  };

  // Navigate to question
  const handleNavigateToQuestion = (index: number) => {
    if (index >= 0 && index < examQuestions.length) {
      setCurrentQuestionIndex(index);
      setQuestionStartTime(Date.now());
    }
  };

  // Save and next
  const handleSaveAndNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      handleNavigateToQuestion(currentQuestionIndex + 1);
    }
  };

  // Submit exam
  const handleSubmitExam = () => {
    setShowSubmitConfirm(true);
  };

  const confirmSubmit = () => {
    finishExam();
  };

  const handleAutoSubmit = () => {
    finishExam();
  };

  // Finish exam and generate results
  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Calculate results
    const answeredQuestions = examQuestions.map((q, idx) => ({
      ...q,
      answer: answers[idx]
    }));

    const correct = answeredQuestions.filter(
      (q, idx) => answers[idx]?.selectedAnswer === q.correctAnswer
    ).length;

    const totalTime = (selectedExam?.duration || 60) * 60 - timeRemaining;
    const percentage = Math.round((correct / examQuestions.length) * 100);
    const score = correct * 4;

    const mockAttempt = {
      id: 'temp',
      examId: selectedExam?.id || '',
      studentId: 'student123',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      timeTaken: totalTime,
      score,
      totalMarks: examQuestions.length * 4,
      percentage,
      answers: answers.map((a, idx) => ({
        ...a,
        isCorrect: a.selectedAnswer === examQuestions[idx].correctAnswer
      })),
      rank: 15,
      percentile: 85
    };

    setAiInsights(generateAIInsights(mockAttempt));
    setView('results');
  };

  const resetExam = () => {
    setView('exam-list');
    setSelectedExam(null);
    setExamQuestions([]);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setTimeRemaining(0);
    setShowSubmitConfirm(false);
    setAiInsights([]);
  };

  // Exam List View
  if (view === 'exam-list') {
    const availableExams = exams.filter(e => e.type === 'exam');

    return (
      <div className="space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
            {t('practiceExam.selectExamTest')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t('practiceExam.chooseTest')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableExams.map((exam) => {
            const examQs = questions.filter(q => exam.questionIds.includes(q.id));
            return (
              <div
                key={exam.id}
                className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-600 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {exam.examType}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    exam.status === 'available'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      : exam.status === 'completed'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                  }`}>
                    {t(`practiceExam.${exam.status}`)}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {exam.title[language]}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {exam.description[language]}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <BookOpenIcon className="w-4 h-4" />
                      {examQs.length} {t('practiceExam.questionsLabel')}
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {exam.totalMarks} {t('practiceExam.marksLabel')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      {exam.duration} {t('minutes')}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">{exam.subject}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleStartExam(exam)}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  {t('practiceExam.startExam')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Instructions View
  if (view === 'instructions') {
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {t('practiceExam.examInstructions')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {selectedExam?.title[language]}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg">
          <ul className="space-y-4 mb-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <li key={num} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {num}
                </span>
                <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(`practiceExam.instruction${num}`)}
                </span>
              </li>
            ))}
          </ul>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800 mb-6">
            <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">
              {t('practiceExam.examInstructions')}:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-600 dark:text-slate-400">{t('duration')}:</span>
                <span className="font-bold text-slate-800 dark:text-slate-100 ml-2">
                  {selectedExam?.duration} {t('minutes')}
                </span>
              </div>
              <div>
                <span className="text-slate-600 dark:text-slate-400">{t('practiceExam.questionsLabel')}:</span>
                <span className="font-bold text-slate-800 dark:text-slate-100 ml-2">
                  {examQuestions.length}
                </span>
              </div>
              <div>
                <span className="text-slate-600 dark:text-slate-400">{t('practiceExam.marksLabel')}:</span>
                <span className="font-bold text-slate-800 dark:text-slate-100 ml-2">
                  {selectedExam?.totalMarks}
                </span>
              </div>
              <div>
                <span className="text-slate-600 dark:text-slate-400">{t('subject')}:</span>
                <span className="font-bold text-slate-800 dark:text-slate-100 ml-2">
                  {selectedExam?.subject}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setView('exam-list')}
              className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              {t('back')}
            </button>
            <button
              onClick={handleBeginExam}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              {t('practiceExam.startNow')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Taking Exam View
  if (view === 'taking-exam' && examQuestions.length > 0) {
    const currentQuestion = examQuestions[currentQuestionIndex];
    const currentAnswer = answers[currentQuestionIndex];
    const answeredCount = answers.filter(a => a.selectedAnswer !== null).length;
    const markedCount = answers.filter(a => a.markedForReview).length;

    return (
      <div className="flex gap-4 animate-fade-in">
        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Header with Timer */}
          <div className="bg-white dark:bg-slate-800/50 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                {selectedExam?.title[language]}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {answeredCount}/{examQuestions.length} {t('practiceExam.answered')}
              </p>
            </div>
            <div className={`flex items-center gap-2 px-5 py-3 rounded-lg ${
              timeRemaining < 300
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
            }`}>
              <ClockIcon className="w-6 h-6" />
              <span className="text-2xl font-bold tabular-nums">{formatTime(timeRemaining)}</span>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                {t('practiceExam.questionOf')
                  .replace('{{current}}', String(currentQuestionIndex + 1))
                  .replace('{{total}}', String(examQuestions.length))}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {currentQuestion.marks} {currentQuestion.marks === 1 ? t('practiceExam.mark') : t('practiceExam.marks')}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6 leading-relaxed">
              {currentQuestion.question[language]}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options[language].map((option, index) => {
                const isSelected = currentAnswer?.selectedAnswer === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium ${
                      isSelected
                        ? 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-500 text-indigo-900 dark:text-indigo-100 shadow-md'
                        : 'bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected
                          ? 'bg-indigo-600 border-indigo-600'
                          : 'border-slate-400 dark:border-slate-500'
                      }`}>
                        {isSelected && <span className="w-3 h-3 bg-white rounded-full"></span>}
                      </span>
                      <span className="flex-1">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleMarkForReview}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  currentAnswer?.markedForReview
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {currentAnswer?.markedForReview ? '⭐ ' : ''}
                {t('practiceExam.markForReview')}
              </button>
              <button
                onClick={handleClearResponse}
                disabled={currentAnswer?.selectedAnswer === null}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {t('practiceExam.clearResponse')}
              </button>
              <button
                onClick={handleSaveAndNext}
                className="ml-auto px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {t('practiceExam.saveAndNext')}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmitExam}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {t('practiceExam.submitExam')}
            </button>
          </div>
        </div>

        {/* Question Palette Sidebar */}
        {showQuestionPalette && (
          <div className="w-80 bg-white dark:bg-slate-800/50 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg space-y-4 h-fit sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-800 dark:text-slate-100">
                {t('practiceExam.questionPalette')}
              </h3>
              <button
                onClick={() => setShowQuestionPalette(false)}
                className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              >
                ✕
              </button>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-500 rounded"></span>
                <span className="text-slate-600 dark:text-slate-400">{t('practiceExam.answered')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded"></span>
                <span className="text-slate-600 dark:text-slate-400">{t('practiceExam.notAnswered')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-amber-500 rounded"></span>
                <span className="text-slate-600 dark:text-slate-400">{t('practiceExam.markedForReview')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-slate-100 dark:bg-slate-800 rounded border-2 border-slate-300 dark:border-slate-600"></span>
                <span className="text-slate-600 dark:text-slate-400">{t('practiceExam.notVisited')}</span>
              </div>
            </div>

            {/* Question Grid */}
            <div className="grid grid-cols-5 gap-2">
              {examQuestions.map((_, index) => {
                const status = getQuestionStatus(index);
                const isCurrent = index === currentQuestionIndex;

                let bgClass = '';
                if (status === 'answered') bgClass = 'bg-emerald-500 text-white';
                else if (status === 'answered-marked') bgClass = 'bg-emerald-500 text-white';
                else if (status === 'marked-review') bgClass = 'bg-amber-500 text-white';
                else if (status === 'not-answered') bgClass = 'bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-slate-100';
                else bgClass = 'bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400';

                return (
                  <button
                    key={index}
                    onClick={() => handleNavigateToQuestion(index)}
                    className={`w-full aspect-square rounded-lg font-semibold text-sm flex items-center justify-center transition-all ${bgClass} ${
                      isCurrent ? 'ring-4 ring-indigo-400 scale-110' : 'hover:scale-105'
                    }`}
                  >
                    {answers[index]?.markedForReview && <span className="absolute top-0 right-0 text-xs">⭐</span>}
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {!showQuestionPalette && (
          <button
            onClick={() => setShowQuestionPalette(true)}
            className="fixed right-4 top-1/2 -translate-y-1/2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-l-xl shadow-lg transition-colors writing-mode-vertical-rl"
          >
            {t('practiceExam.questionPalette')} →
          </button>
        )}

        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                {t('practiceExam.confirmSubmit')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {t('practiceExam.answered')}: {answeredCount}/{examQuestions.length}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 px-4 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={confirmSubmit}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  {t('submit')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Results View
  if (view === 'results') {
    const correct = answers.filter((a, idx) => a.selectedAnswer === examQuestions[idx].correctAnswer).length;
    const incorrect = answers.filter((a, idx) => a.selectedAnswer !== null && a.selectedAnswer !== examQuestions[idx].correctAnswer).length;
    const unattempted = answers.filter(a => a.selectedAnswer === null).length;
    const percentage = Math.round((correct / examQuestions.length) * 100);
    const score = correct * 4;
    const totalMarks = examQuestions.length * 4;

    return (
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        {/* Results Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            {t('practiceExam.examComplete')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {selectedExam?.title[language]}
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-3xl shadow-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-lg opacity-90 mb-2">{t('practiceExam.yourScore')}</p>
              <p className="text-6xl font-bold mb-2">{score}/{totalMarks}</p>
              <p className="text-2xl font-semibold">{percentage}%</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-3xl font-bold">{correct}</p>
                <p className="text-sm opacity-90">{t('practiceExam.correct')}</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <XCircleIcon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-3xl font-bold">{incorrect}</p>
                <p className="text-sm opacity-90">{t('practiceExam.incorrect')}</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-3xl font-bold">{unattempted}</p>
                <p className="text-sm opacity-90">{t('practiceExam.unattempted')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <span>🏆</span> {t('practiceExam.leaderboard')}
          </h2>
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-100 dark:bg-slate-700/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {t('practiceExam.yourRank')}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {t('studentDashboard.studentName')}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {t('score')}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {t('duration')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr
                    key={entry.rank}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      entry.studentName.en === 'You'
                        ? 'bg-indigo-50 dark:bg-indigo-900/20 font-bold'
                        : ''
                    }`}
                  >
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
                      {entry.badge && <span className="mr-2">{entry.badge}</span>}
                      #{entry.rank}
                    </td>
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
                      {entry.studentName[language]}
                    </td>
                    <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
                      {entry.score}%
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                      {entry.timeTaken} min
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                    : insight.color === 'red'
                    ? 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-red-200 dark:border-red-800'
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
            onClick={resetExam}
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

export default ExamModeNew;
