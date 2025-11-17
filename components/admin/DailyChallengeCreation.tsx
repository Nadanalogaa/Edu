import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

interface Question {
  _id: string;
  externalId?: number;
  examType: 'JEE' | 'NEET' | 'Both';
  subject: 'Biology' | 'Physics' | 'Chemistry' | 'Maths';
  unit?: number;
  chapter?: number;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: { en: string; ta: string };
  options: { en: string[]; ta: string[] };
  correctAnswer: number;
  explanation: { en: string; ta: string };
  marks: number;
  isActive: boolean;
}

interface Test {
  _id: string;
  title: string;
  description: string;
  type: string;
  examType: 'NEET' | 'JEE' | 'Both';
  subjects: string[];
  duration: number;
  totalMarks: number;
  questions: Question[];
  createdAt: string;
}

const DailyChallengeCreation: React.FC = () => {
  const { t, language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [selectionMode, setSelectionMode] = useState<'manual' | 'random'>('manual');
  const [step, setStep] = useState<'setup' | 'preview' | 'confirm'>('setup');

  // Manual mode state
  const [availableTests, setAvailableTests] = useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [loadingTests, setLoadingTests] = useState(false);

  // Random mode state
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    course: 'NEET' as 'NEET' | 'JEE' | 'Both',
    subject: 'Biology',
    count: 15,
    duration: 30,
  });
  const [previewQuestions, setPreviewQuestions] = useState<Question[]>([]);

  // Result state
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  // Fetch existing tests for manual mode
  useEffect(() => {
    if (selectionMode === 'manual') {
      fetchAvailableTests();
    }
  }, [selectionMode]);

  const fetchAvailableTests = async () => {
    setLoadingTests(true);
    try {
      const response = await api.get('/admin/tests');
      if (response.data.success) {
        // Filter only practice and exam type tests (not daily-challenge)
        const tests = response.data.data.tests.filter(
          (test: Test) => test.type === 'practice' || test.type === 'exam'
        );
        setAvailableTests(tests);
      }
    } catch (err: any) {
      console.error('Error fetching tests:', err);
      setError('Failed to fetch available tests');
    } finally {
      setLoadingTests(false);
    }
  };

  const handleManualSelection = async (test: Test) => {
    setSelectedTest(test);
    setStep('preview');
  };

  const handleRandomPreview = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await api.get('/admin/questions/random', {
        params: {
          subject: formData.subject,
          examType: formData.course,
          count: formData.count,
        },
      });

      if (response.data.success) {
        setPreviewQuestions(response.data.data);
        setStep('preview');
      } else {
        setError('Failed to fetch questions');
      }
    } catch (err: any) {
      console.error('Error fetching random questions:', err);
      setError(err.response?.data?.message || 'Failed to fetch random questions');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmAndShare = async () => {
    setLoading(true);
    setError('');

    try {
      let challengeData: any;

      if (selectionMode === 'manual' && selectedTest) {
        // Create daily challenge from existing test
        challengeData = {
          title: `Daily Challenge - ${formData.date} (${selectedTest.title})`,
          description: `Daily Challenge based on: ${selectedTest.description || selectedTest.title}`,
          type: 'daily-challenge',
          examType: selectedTest.examType,
          subjects: selectedTest.subjects,
          duration: selectedTest.duration,
          totalMarks: selectedTest.totalMarks,
          questions: selectedTest.questions.map((q: any) => q._id || q),
          isPublished: true,
        };
      } else if (selectionMode === 'random') {
        // Create daily challenge from random questions
        const totalMarks = previewQuestions.reduce((sum, q) => sum + q.marks, 0);
        challengeData = {
          title: `Daily Challenge - ${formData.date} (${formData.subject})`,
          description: `Auto-generated Daily Challenge for ${formData.subject} - ${formData.course}`,
          type: 'daily-challenge',
          examType: formData.course,
          subjects: [formData.subject],
          duration: formData.duration,
          totalMarks,
          questions: previewQuestions.map((q) => q._id),
          isPublished: true,
        };
      }

      // Create the test
      const createResponse = await api.post('/admin/tests', challengeData);

      if (!createResponse.data.success) {
        throw new Error('Failed to create daily challenge');
      }

      const createdTest = createResponse.data.data;

      // Auto-share to all students of the selected course
      const shareResponse = await api.post(`/admin/tests/${createdTest._id}/share`, {
        examType: challengeData.examType, // Share to course-specific students
        grades: [], // Share to all grades or specify if needed
        studentIds: [],
      });

      if (shareResponse.data.success) {
        setResult({
          ...createdTest,
          sharedWith: shareResponse.data.message,
        });
        setStep('confirm');
      }
    } catch (err: any) {
      console.error('Error creating and sharing challenge:', err);
      setError(err.response?.data?.message || 'Failed to create and share daily challenge');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setStep('setup');
    setSelectedTest(null);
    setPreviewQuestions([]);
    setResult(null);
    setError('');
    const nextDay = new Date(formData.date);
    nextDay.setDate(nextDay.getDate() + 1);
    setFormData({
      ...formData,
      date: nextDay.toISOString().split('T')[0],
    });
  };

  if (loading && step === 'setup') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{t('loading')}...</p>
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
            {t('dailyChallengeTitle') || 'Create Daily Challenge'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t('dailyChallengeDesc') || 'Create and share daily challenges with students'}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4">
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* Success Result */}
        {result && step === 'confirm' && (
          <div className="mb-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-6">
            <div className="flex items-start mb-4">
              <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className="flex-1">
                <p className="text-green-800 dark:text-green-300 font-semibold mb-2">
                  Daily Challenge Created & Shared Successfully!
                </p>
                <div className="text-sm text-green-700 dark:text-green-400 space-y-1">
                  <p><strong>Title:</strong> {result.title}</p>
                  <p><strong>Questions:</strong> {result.questions?.length || 0}</p>
                  <p><strong>Duration:</strong> {result.duration} minutes</p>
                  <p><strong>Course:</strong> {result.examType}</p>
                  <p className="text-xs mt-2">{result.sharedWith || 'Shared with all students'}</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Create Another Challenge
            </button>
          </div>
        )}

        {/* Step 1: Setup */}
        {step === 'setup' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            {/* Selection Mode Toggle */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Selection Mode *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectionMode('manual');
                    setError('');
                  }}
                  className={`px-6 py-4 rounded-lg border-2 transition-all ${
                    selectionMode === 'manual'
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400'
                  }`}
                >
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-semibold">Manual Selection</p>
                  <p className="text-xs mt-1">Select existing question paper</p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectionMode('random');
                    setError('');
                  }}
                  className={`px-6 py-4 rounded-lg border-2 transition-all ${
                    selectionMode === 'random'
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400'
                  }`}
                >
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="font-semibold">Auto-Generate</p>
                  <p className="text-xs mt-1">System generates from question bank</p>
                </button>
              </div>
            </div>

            {/* Manual Mode - Select Existing Test */}
            {selectionMode === 'manual' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Select Question Paper
                </h3>
                {loadingTests ? (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-orange-600 border-t-transparent"></div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Loading tests...</p>
                  </div>
                ) : availableTests.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No question papers available. Please create a test first.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                    {availableTests.map((test) => (
                      <div
                        key={test._id}
                        onClick={() => handleManualSelection(test)}
                        className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-500 cursor-pointer transition-all"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
                            {test.title}
                          </h4>
                          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                            {test.examType}
                          </span>
                        </div>
                        {test.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                            {test.description}
                          </p>
                        )}
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          <span>{test.questions?.length || 0} Questions</span>
                          <span>{test.duration} min</span>
                          <span>{test.totalMarks} marks</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {test.subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Random Mode - Configure */}
            {selectionMode === 'random' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Challenge Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value as any })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="NEET">NEET</option>
                      <option value="JEE">JEE</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Biology">Biology</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Maths">Maths</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Number of Questions *
                    </label>
                    <input
                      type="number"
                      value={formData.count}
                      onChange={(e) => setFormData({ ...formData, count: parseInt(e.target.value) })}
                      min="5"
                      max="50"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Duration (minutes) *
                    </label>
                    <input
                      type="number"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                      min="10"
                      max="180"
                      step="5"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <button
                  onClick={handleRandomPreview}
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 disabled:opacity-50"
                >
                  {loading ? 'Fetching Questions...' : 'Preview Questions'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Preview */}
        {step === 'preview' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Preview Questions
              </h2>
              <button
                onClick={() => setStep('setup')}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                ← Back
              </button>
            </div>

            {selectionMode === 'manual' && selectedTest && (
              <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">{selectedTest.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{selectedTest.description}</p>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{selectedTest.questions.length} Questions</span>
                  <span>{selectedTest.duration} minutes</span>
                  <span>{selectedTest.totalMarks} marks</span>
                  <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                    {selectedTest.examType}
                  </span>
                </div>
              </div>
            )}

            <div className="max-h-96 overflow-y-auto space-y-4 mb-6">
              {(selectionMode === 'manual' ? selectedTest?.questions : previewQuestions).map((question, idx) => (
                <div key={question._id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">Q{idx + 1}.</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                        {question.subject}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                        {question.marks} marks
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-8">
                    {question.question[language] || question.question.en}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setStep('setup')}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAndShare}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 disabled:opacity-50"
              >
                {loading ? 'Creating & Sharing...' : 'Confirm & Share to Students'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyChallengeCreation;
