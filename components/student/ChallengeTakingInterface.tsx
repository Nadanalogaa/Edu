import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface Question {
  _id: string;
  question: { en: string; ta: string };
  options: Array<{ en: string; ta: string }>;
  correctAnswer: { en: string; ta: string };
  explanation: { en: string; ta: string };
  subject: string;
  difficulty: string;
  topic: string;
}

interface ChallengeTakingInterfaceProps {
  questions: Question[];
  onComplete: (results: ChallengeResults) => void;
  onExit: () => void;
}

interface ChallengeResults {
  score: number;
  total: number;
  percentage: number;
  timeTaken: number;
  answers: Array<{
    questionId: string;
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    subject: string;
  }>;
  subjectScores: {
    Physics: { correct: number; total: number };
    Chemistry: { correct: number; total: number };
    Biology: { correct: number; total: number };
  };
}

const ChallengeTakingInterface: React.FC<ChallengeTakingInterfaceProps> = ({
  questions,
  onComplete,
  onExit
}) => {
  const { language } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredCount = Object.keys(selectedAnswers).length;

  // Timer countdown
  useEffect(() => {
    if (isPaused || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, timeRemaining]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get subject color
  const getSubjectColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'physics':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'chemistry':
        return 'bg-gradient-to-r from-cyan-500 to-blue-500';
      case 'biology':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default:
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
    }
  };

  // Get subject emoji
  const getSubjectEmoji = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'physics': return '⚡';
      case 'chemistry': return '🧪';
      case 'biology': return '🧬';
      default: return '📚';
    }
  };

  // Handle answer selection
  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer
    });
  };

  // Navigate to specific question
  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // Next question
  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Auto submit when time runs out
  const handleAutoSubmit = () => {
    handleSubmit();
  };

  // Calculate results and submit
  const handleSubmit = () => {
    const totalTime = 15 * 60 - timeRemaining;
    let score = 0;
    const answers: ChallengeResults['answers'] = [];
    const subjectScores = {
      Physics: { correct: 0, total: 0 },
      Chemistry: { correct: 0, total: 0 },
      Biology: { correct: 0, total: 0 }
    };

    questions.forEach((q, index) => {
      const selectedAnswer = selectedAnswers[index];
      const correctAnswer = language === 'ta' ? q.correctAnswer.ta : q.correctAnswer.en;
      const isCorrect = selectedAnswer === correctAnswer;

      if (isCorrect) {
        score++;
        subjectScores[q.subject as keyof typeof subjectScores].correct++;
      }
      subjectScores[q.subject as keyof typeof subjectScores].total++;

      answers.push({
        questionId: q._id,
        selectedAnswer: selectedAnswer || '',
        correctAnswer,
        isCorrect,
        subject: q.subject
      });
    });

    const results: ChallengeResults = {
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100),
      timeTaken: Math.ceil(totalTime / 60),
      answers,
      subjectScores
    };

    onComplete(results);
  };

  // Time warning color
  const getTimeColor = () => {
    if (timeRemaining <= 60) return 'text-red-600 dark:text-red-400 animate-pulse';
    if (timeRemaining <= 180) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 z-50 overflow-hidden">
      {/* Header Bar */}
      <div className="bg-white dark:bg-slate-800 shadow-lg border-b-4 border-purple-500">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Left: Progress */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {currentQuestionIndex + 1}/{questions.length}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'ta' ? 'கேள்வி' : 'Question'}
                </div>
              </div>

              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    {language === 'ta' ? 'முன்னேற்றம்' : 'Progress'}
                  </span>
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Center: Subject Badge */}
            <div className={`${getSubjectColor(currentQuestion.subject)} text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg`}>
              <span className="text-2xl">{getSubjectEmoji(currentQuestion.subject)}</span>
              <span>
                {language === 'ta'
                  ? currentQuestion.subject === 'Physics' ? 'இயற்பியல்'
                    : currentQuestion.subject === 'Chemistry' ? 'வேதியியல்'
                    : 'உயிரியல்'
                  : currentQuestion.subject}
              </span>
            </div>

            {/* Right: Timer & Controls */}
            <div className="flex items-center gap-4">
              <div className="text-center bg-slate-100 dark:bg-slate-700 px-6 py-3 rounded-xl">
                <div className={`text-3xl font-bold font-mono ${getTimeColor()}`}>
                  {formatTime(timeRemaining)}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {language === 'ta' ? 'மீதமுள்ளது' : 'Remaining'}
                </div>
              </div>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl transition-colors"
                title={isPaused ? 'Resume' : 'Pause'}
              >
                {isPaused ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setShowConfirmExit(true)}
                className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
                title="Exit"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="h-[calc(100vh-140px)] overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Question & Options */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border-2 border-slate-200 dark:border-slate-700 mb-4">
                {/* Question Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-full">
                    {currentQuestion.difficulty}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {currentQuestion.topic}
                  </span>
                </div>

                {/* Question Text */}
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed mb-6">
                  {language === 'ta' ? currentQuestion.question.ta : currentQuestion.question.en}
                </h2>

                {/* Compact Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => {
                    const optionText = language === 'ta' ? option.ta : option.en;
                    const isSelected = selectedAnswers[currentQuestionIndex] === optionText;
                    const optionLabel = String.fromCharCode(65 + index); // A, B, C, D

                    return (
                      <button
                        key={index}
                        onClick={() => handleSelectAnswer(optionText)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                          isSelected
                            ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-500 shadow-md'
                            : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            isSelected
                              ? 'bg-purple-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300'
                          }`}>
                            {optionLabel}
                          </div>
                          <span className={`flex-1 text-base ${
                            isSelected
                              ? 'text-slate-800 dark:text-slate-100 font-semibold'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}>
                            {optionText}
                          </span>
                          {isSelected && (
                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Buttons - Prominent Position */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex-1 px-6 py-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {language === 'ta' ? 'முந்தைய' : 'Previous'}
                </button>

                {isLastQuestion ? (
                  <button
                    onClick={() => setShowConfirmSubmit(true)}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {language === 'ta' ? 'சமர்ப்பிக்கவும்' : 'Submit'}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                  >
                    {language === 'ta' ? 'அடுத்தது' : 'Next'}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Navigation & Challenges - Sticky */}
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-6 lg:self-start">
              {/* Video Challenge Card */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg p-5 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl animate-pulse">📹</div>
                  <div>
                    <h4 className="font-bold text-sm">{language === 'ta' ? 'சவால்' : 'Challenge'}</h4>
                    <p className="text-xs opacity-90">
                      {language === 'ta' ? 'துல்லியம் > 80%' : 'Get > 80% accuracy'}
                    </p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-2 text-center">
                  <div className="text-2xl font-bold">{Math.round((answeredCount / questions.length) * 100)}%</div>
                  <div className="text-xs opacity-75">{language === 'ta' ? 'முன்னேற்றம்' : 'Progress'}</div>
                </div>
              </div>

              {/* Question Navigation Grid */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-5 border-2 border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span>🧭</span>
                    {language === 'ta' ? 'வழிசெலுத்தல்' : 'Navigation'}
                  </h3>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                    {answeredCount}/{questions.length}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, index) => {
                    const isAnswered = selectedAnswers.hasOwnProperty(index);
                    const isCurrent = index === currentQuestionIndex;

                    return (
                      <button
                        key={index}
                        onClick={() => goToQuestion(index)}
                        className={`aspect-square rounded-lg font-semibold text-xs transition-all duration-200 ${
                          isCurrent
                            ? 'bg-purple-600 text-white shadow-md scale-110 ring-2 ring-purple-300'
                            : isAnswered
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Progress Stats */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <span>✅</span> {language === 'ta' ? 'பதிலளித்தது' : 'Answered'}
                    </span>
                    <span className="font-bold text-green-600">{answeredCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <span>⏭️</span> {language === 'ta' ? 'தவிர்க்கப்பட்டது' : 'Skipped'}
                    </span>
                    <span className="font-bold text-slate-600">{questions.length - answeredCount}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>

      {/* Pause Overlay */}
      {isPaused && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl text-center max-w-md">
            <div className="text-6xl mb-6">⏸️</div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              {language === 'ta' ? 'இடைநிறுத்தப்பட்டது' : 'Paused'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              {language === 'ta'
                ? 'தொடர தயாராகும் போது இடைநிறுத்தத்தைக் கிளிக் செய்யவும்'
                : 'Click resume when you\'re ready to continue'}
            </p>
            <button
              onClick={() => setIsPaused(false)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:shadow-lg transition-all duration-200"
            >
              {language === 'ta' ? 'தொடரவும்' : 'Resume Challenge'}
            </button>
          </div>
        </div>
      )}

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              {language === 'ta' ? 'சவாலை சமர்ப்பிக்கவா?' : 'Submit Challenge?'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {language === 'ta'
                ? `நீங்கள் ${answeredCount} / ${questions.length} கேள்விகளுக்கு பதிலளித்துள்ளீர்கள். உறுதியாக சமர்ப்பிக்க விரும்புகிறீர்களா?`
                : `You have answered ${answeredCount} out of ${questions.length} questions. Are you sure you want to submit?`}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                {language === 'ta' ? 'ரத்து செய்' : 'Cancel'}
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
              >
                {language === 'ta' ? 'சமர்ப்பிக்கவும்' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Exit Modal */}
      {showConfirmExit && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
              {language === 'ta' ? 'சவாலை விட்டு வெளியேறவா?' : 'Exit Challenge?'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {language === 'ta'
                ? 'உங்கள் முன்னேற்றம் சேமிக்கப்படாது. நீங்கள் உறுதியாக இருக்கிறீர்களா?'
                : 'Your progress will not be saved. Are you sure you want to exit?'}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirmExit(false)}
                className="flex-1 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
              >
                {language === 'ta' ? 'ரத்து செய்' : 'Cancel'}
              </button>
              <button
                onClick={onExit}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                {language === 'ta' ? 'வெளியேறு' : 'Exit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeTakingInterface;
