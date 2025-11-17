import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import confetti from 'canvas-confetti';

interface ChallengeResultsProps {
  results: {
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
  };
  onClose: () => void;
  onReview: () => void;
}

const ChallengeResults: React.FC<ChallengeResultsProps> = ({
  results,
  onClose,
  onReview
}) => {
  const { language } = useLanguage();
  const [showStats, setShowStats] = useState(false);
  const [coinsEarned, setCoinsEarned] = useState(0);

  // Calculate coins
  const baseCoins = 50;
  const perfectScoreBonus = results.percentage === 100 ? 20 : 0;
  const speedBonus = results.timeTaken <= 10 ? 10 : 0;
  const totalCoins = baseCoins + perfectScoreBonus + speedBonus;

  // Get performance message
  const getPerformanceMessage = () => {
    if (results.percentage === 100) {
      return language === 'ta' ? '🌟 சரியான மதிப்பெண்! நீங்கள் அற்புதமானவர்!' : '🌟 Perfect Score! You\'re Amazing!';
    } else if (results.percentage >= 90) {
      return language === 'ta' ? '🎉 சிறப்பானது! நீங்கள் சிறப்பாக செய்தீர்கள்!' : '🎉 Excellent! You Did Great!';
    } else if (results.percentage >= 75) {
      return language === 'ta' ? '👏 நல்லது! நன்றாக இருக்கிறது!' : '👏 Good Job! Well Done!';
    } else if (results.percentage >= 60) {
      return language === 'ta' ? '👍 நல்ல முயற்சி! தொடர்ந்து முயற்சி செய்யுங்கள்!' : '👍 Nice Try! Keep Practicing!';
    } else {
      return language === 'ta' ? '💪 தொடர்ந்து முயற்சி செய்யுங்கள்!' : '💪 Keep Going! You\'ll Improve!';
    }
  };

  // Get strongest subject
  const getStrongestSubject = () => {
    let strongest = { subject: '', percentage: 0 };
    Object.entries(results.subjectScores).forEach(([subject, scores]) => {
      const percentage = (scores.correct / scores.total) * 100;
      if (percentage > strongest.percentage) {
        strongest = { subject, percentage };
      }
    });
    return strongest.subject;
  };

  // Get weakest subject
  const getWeakestSubject = () => {
    let weakest = { subject: '', percentage: 100 };
    Object.entries(results.subjectScores).forEach(([subject, scores]) => {
      const percentage = (scores.correct / scores.total) * 100;
      if (percentage < weakest.percentage) {
        weakest = { subject, percentage };
      }
    });
    return weakest.subject;
  };

  // Trigger confetti for good scores
  useEffect(() => {
    if (results.percentage >= 75) {
      const duration = results.percentage === 100 ? 5000 : 3000;
      const end = Date.now() + duration;

      const colors = ['#a855f7', '#ec4899', '#f97316', '#22c55e'];

      (function frame() {
        confetti({
          particleCount: results.percentage === 100 ? 7 : 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: results.percentage === 100 ? 7 : 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }

    // Show stats with delay
    setTimeout(() => setShowStats(true), 500);

    // Animate coins
    const interval = setInterval(() => {
      setCoinsEarned(prev => {
        if (prev >= totalCoins) {
          clearInterval(interval);
          return totalCoins;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Get subject emoji
  const getSubjectEmoji = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'physics': return '⚡';
      case 'chemistry': return '🧪';
      case 'biology': return '🧬';
      default: return '📚';
    }
  };

  // Get subject name in Tamil
  const getSubjectName = (subject: string) => {
    if (language === 'ta') {
      switch (subject.toLowerCase()) {
        case 'physics': return 'இயற்பியல்';
        case 'chemistry': return 'வேதியியல்';
        case 'biology': return 'உயிரியல்';
        default: return subject;
      }
    }
    return subject;
  };

  // Get performance color
  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'from-green-500 to-emerald-500';
    if (percentage >= 75) return 'from-blue-500 to-cyan-500';
    if (percentage >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 z-50 overflow-y-auto">
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Results Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden mb-8">
            {/* Header */}
            <div className={`bg-gradient-to-r ${getPerformanceColor(results.percentage)} text-white py-12 px-8 text-center`}>
              <h1 className="text-5xl font-bold mb-4">
                {getPerformanceMessage()}
              </h1>
              <p className="text-white/90 text-xl">
                {language === 'ta' ? 'சவால் முடிந்தது!' : 'Challenge Completed!'}
              </p>
            </div>

            {/* Score Display */}
            <div className="p-12">
              <div className="text-center mb-12">
                <div className={`inline-block text-9xl font-bold bg-gradient-to-r ${getPerformanceColor(results.percentage)} bg-clip-text text-transparent mb-4 animate-pulse`}>
                  {results.score}/{results.total}
                </div>
                <div className={`text-5xl font-bold bg-gradient-to-r ${getPerformanceColor(results.percentage)} bg-clip-text text-transparent mb-2`}>
                  {results.percentage}%
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-lg">
                  {language === 'ta' ? 'துல்லியம்' : 'Accuracy'}
                </div>
              </div>

              {/* Stats Grid */}
              {showStats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeIn">
                  {/* Time Taken */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-800 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-3">⏱️</div>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {results.timeTaken}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {language === 'ta' ? 'நிமிடங்கள்' : 'Minutes'}
                    </div>
                    {results.timeTaken <= 10 && (
                      <div className="mt-2 text-xs font-semibold text-green-600 dark:text-green-400">
                        ⚡ {language === 'ta' ? 'வேக போனஸ்!' : 'Speed Bonus!'}
                      </div>
                    )}
                  </div>

                  {/* Coins Earned */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl border-2 border-yellow-200 dark:border-yellow-800 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-3">🪙</div>
                    <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                      +{coinsEarned}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {language === 'ta' ? 'நாணயங்கள்' : 'Coins'}
                    </div>
                    {perfectScoreBonus > 0 && (
                      <div className="mt-2 text-xs font-semibold text-green-600 dark:text-green-400">
                        🌟 {language === 'ta' ? 'சரியான போனஸ்!' : 'Perfect Bonus!'}
                      </div>
                    )}
                  </div>

                  {/* Correct Answers */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border-2 border-green-200 dark:border-green-800 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-3">✅</div>
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {results.score}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {language === 'ta' ? 'சரியான பதில்கள்' : 'Correct Answers'}
                    </div>
                  </div>
                </div>
              )}

              {/* Subject-wise Breakdown */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
                  {language === 'ta' ? 'பாடம் வாரியான செயல்திறன்' : 'Subject-wise Performance'}
                </h3>

                <div className="space-y-4">
                  {Object.entries(results.subjectScores).map(([subject, scores]) => {
                    const percentage = Math.round((scores.correct / scores.total) * 100);
                    return (
                      <div key={subject} className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{getSubjectEmoji(subject)}</span>
                            <span className="font-bold text-lg text-slate-800 dark:text-slate-100">
                              {getSubjectName(subject)}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                              {scores.correct}/{scores.total}
                            </div>
                            <div className={`text-sm font-semibold ${
                              percentage >= 80 ? 'text-green-600 dark:text-green-400' :
                              percentage >= 60 ? 'text-yellow-600 dark:text-yellow-400' :
                              'text-red-600 dark:text-red-400'
                            }`}>
                              {percentage}%
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getPerformanceColor(percentage)} transition-all duration-1000 rounded-full`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-800 mb-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  {language === 'ta' ? 'செயல்திறன் நுண்ணறிவு' : 'Performance Insights'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-100">
                        {language === 'ta' ? 'வலிமையான பாடம்:' : 'Strongest Subject:'}
                      </div>
                      <div className="text-green-600 dark:text-green-400 font-bold">
                        {getSubjectEmoji(getStrongestSubject())} {getSubjectName(getStrongestSubject())}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-100">
                        {language === 'ta' ? 'முன்னேற்றம் தேவை:' : 'Needs Improvement:'}
                      </div>
                      <div className="text-orange-600 dark:text-orange-400 font-bold">
                        {getSubjectEmoji(getWeakestSubject())} {getSubjectName(getWeakestSubject())}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-100">
                        {language === 'ta' ? 'பரிந்துரை:' : 'Recommendation:'}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        {language === 'ta'
                          ? `${getSubjectName(getWeakestSubject())} இல் கூடுதல் பயிற்சி செய்யுங்கள்`
                          : `Practice more ${getWeakestSubject()} questions`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onReview}
                  className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {language === 'ta' ? 'பதில்களை மதிப்பாய்வு செய்' : 'Review Answers'}
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 py-4 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-lg rounded-2xl font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {language === 'ta' ? 'முகப்புக்கு செல்' : 'Go Home'}
                </button>
              </div>
            </div>
          </div>

          {/* Motivational Card */}
          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white p-8 rounded-3xl shadow-2xl text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-2">
              {language === 'ta' ? 'தொடர்ந்து முயற்சி செய்யுங்கள்!' : 'Keep Up The Great Work!'}
            </h3>
            <p className="text-white/90">
              {language === 'ta'
                ? 'ஒவ்வொரு நாளும் பயிற்சி செய்வது உங்கள் திறமையை மேம்படுத்துகிறது'
                : 'Practicing daily improves your skills and builds consistency'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeResults;
