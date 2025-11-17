import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

interface Question {
  _id: string;
  externalId?: number;
  subject: string;
  unit?: number;
  chapter?: number;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: { en: string; ta: string };
  options: { en: string[]; ta: string[] };
  correctAnswer: number;
  explanation: { en: string; ta: string };
  marks: number;
  examType: string;
}

interface UploadedFile {
  _id: string;
  fileName: string;
  examType: 'NEET' | 'JEE' | 'Both';
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths';
  unit: number;
  chapter: number;
  chapterName: string;
  questionCount: number;
  uploadDate: string;
  questionIds: string[];
}

const TestCreation: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    subject: '',
    difficulty: '',
    examType: '',
  });

  // Question paper selection
  const [showQuestionPaperModal, setShowQuestionPaperModal] = useState(false);
  const [questionPapers, setQuestionPapers] = useState<UploadedFile[]>([]);
  const [selectedQuestionPaper, setSelectedQuestionPaper] = useState<UploadedFile | null>(null);
  const [loadingPapers, setLoadingPapers] = useState(false);

  // Test details
  const [testData, setTestData] = useState({
    title: '',
    description: '',
    type: 'practice' as 'practice' | 'exam',
    examType: 'NEET' as 'NEET' | 'JEE' | 'Both',
    subjects: [] as string[],
    duration: 60,
    isPublished: false,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Bulk update state
  const [bulkDifficulty, setBulkDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [bulkMarks, setBulkMarks] = useState<number>(4);
  const [showLanguage, setShowLanguage] = useState<'en' | 'ta'>('en');

  // Success modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [createdTestId, setCreatedTestId] = useState<string | null>(null);

  useEffect(() => {
    if (step === 2) {
      fetchQuestions();
    }
  }, [filters, step, selectedQuestionPaper]);

  const fetchQuestionPapers = async () => {
    try {
      setLoadingPapers(true);
      const params = new URLSearchParams();
      // Filter by exam type selected in the form
      if (testData.examType && testData.examType !== 'Both') {
        params.append('examType', testData.examType);
      }
      params.append('limit', '50');

      const response = await api.get(`/admin/uploaded-files?${params.toString()}`);
      if (response.data.success) {
        setQuestionPapers(response.data.data.files);
      }
    } catch (err: any) {
      console.error('Error fetching question papers:', err);
      setError('Failed to load question papers');
    } finally {
      setLoadingPapers(false);
    }
  };

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();

      // If a question paper is selected, only fetch those questions
      if (selectedQuestionPaper) {
        // Fetch questions by IDs from the selected question paper
        const questionIds = selectedQuestionPaper.questionIds.join(',');
        params.append('ids', questionIds);
      } else {
        // Otherwise use filters
        if (filters.subject) params.append('subject', filters.subject);
        if (filters.difficulty) params.append('difficulty', filters.difficulty);
        if (filters.examType) params.append('examType', filters.examType);
      }
      params.append('limit', '1000');

      const response = await api.get(`/admin/questions?${params.toString()}`);
      if (response.data.success) {
        setQuestions(response.data.data.questions);
      }
    } catch (err: any) {
      console.error('Error fetching questions:', err);
      setError('Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const toggleQuestion = (questionId: string) => {
    setSelectedQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleBulkUpdate = async () => {
    if (selectedQuestions.length === 0) {
      setError('Please select questions to update');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await api.patch('/admin/questions/bulk-update', {
        questionIds: selectedQuestions,
        difficulty: bulkDifficulty,
        marks: bulkMarks,
      });

      if (response.data.success) {
        setSuccessMessage(`Updated ${response.data.data.modified} question(s)`);
        // Refresh questions to show updated values
        fetchQuestions();
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err: any) {
      console.error('Error updating questions:', err);
      setError(err.response?.data?.message || 'Failed to update questions');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTest = async () => {
    if (!testData.title || selectedQuestions.length === 0) {
      setError('Please provide a title and select at least one question');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const selectedQuestionsData = questions.filter(q => selectedQuestions.includes(q._id));
      const subjects = [...new Set(selectedQuestionsData.map(q => q.subject))];

      const response = await api.post('/admin/tests', {
        ...testData,
        subjects,
        questionIds: selectedQuestions,
      });

      if (response.data.success) {
        setCreatedTestId(response.data.data._id);
        setShowSuccessModal(true);
      }
    } catch (err: any) {
      console.error('Error creating test:', err);
      setError(err.response?.data?.message || 'Failed to create test');
    } finally {
      setLoading(false);
    }
  };

  const totalMarks = questions
    .filter(q => selectedQuestions.includes(q._id))
    .reduce((sum, q) => sum + q.marks, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('testCreationTitle')}</h1>
          <p className="text-gray-600">{t('testCreationDesc')}</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-green-700">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Steps Indicator */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="ml-2 font-medium">Test Details</span>
            </div>
            <div className="w-16 h-1 bg-gray-200"></div>
            <div className={`flex items-center ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="ml-2 font-medium">Select Questions</span>
            </div>
          </div>
        </div>

        {/* Step 1: Test Details */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Test Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Test Title *
                </label>
                <input
                  type="text"
                  value={testData.title}
                  onChange={(e) => setTestData({ ...testData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., Biology Unit Test - Chapter 9"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={testData.description}
                  onChange={(e) => setTestData({ ...testData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Brief description of the test"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Test Type *
                </label>
                <select
                  value={testData.type}
                  onChange={(e) => setTestData({ ...testData, type: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="practice">Practice Test</option>
                  <option value="exam">Exam</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exam Type *
                </label>
                <select
                  value={testData.examType}
                  onChange={(e) => setTestData({ ...testData, examType: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="NEET">NEET</option>
                  <option value="JEE">JEE</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (minutes) *
                </label>
                <input
                  type="number"
                  value={testData.duration}
                  onChange={(e) => setTestData({ ...testData, duration: parseInt(e.target.value) })}
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question Paper
                </label>
                <button
                  type="button"
                  onClick={() => {
                    fetchQuestionPapers();
                    setShowQuestionPaperModal(true);
                  }}
                  className="w-full px-4 py-3 border-2 border-dashed border-indigo-300 rounded-lg text-indigo-600 font-medium hover:border-indigo-500 hover:bg-indigo-50 transition-colors flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {selectedQuestionPaper ? 'Change Question Paper' : 'Choose from Bank'}
                </button>
                {selectedQuestionPaper && (
                  <div className="mt-2 p-3 bg-indigo-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-900">{selectedQuestionPaper.fileName}</p>
                        <p className="text-xs text-indigo-700 mt-1">
                          {selectedQuestionPaper.subject} • Unit {selectedQuestionPaper.unit}, Ch {selectedQuestionPaper.chapter}
                        </p>
                        <p className="text-xs text-indigo-600 mt-1">
                          {selectedQuestionPaper.questionCount} questions
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedQuestionPaper(null)}
                        className="text-indigo-400 hover:text-indigo-600 ml-2"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={testData.isPublished}
                    onChange={(e) => setTestData({ ...testData, isPublished: e.target.checked })}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Publish immediately</span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!testData.title}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Next: Select Questions
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Questions */}
        {step === 2 && (
          <div className="space-y-6">
            {/* Question Paper Info & Language Toggle */}
            {selectedQuestionPaper && (
              <div className="bg-indigo-50 rounded-2xl shadow-xl p-6 border border-indigo-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900">{selectedQuestionPaper.fileName}</h3>
                    <p className="text-sm text-indigo-700 mt-1">
                      {selectedQuestionPaper.subject} • Unit {selectedQuestionPaper.unit}, Ch {selectedQuestionPaper.chapter} • {questions.length} questions loaded
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowLanguage('en')}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        showLanguage === 'en' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setShowLanguage('ta')}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        showLanguage === 'ta' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'
                      }`}
                    >
                      தமிழ்
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Bulk Update Controls */}
            {selectedQuestions.length > 0 && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Bulk Update ({selectedQuestions.length} selected)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Difficulty
                    </label>
                    <select
                      value={bulkDifficulty}
                      onChange={(e) => setBulkDifficulty(e.target.value as any)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marks
                    </label>
                    <input
                      type="number"
                      value={bulkMarks}
                      onChange={(e) => setBulkMarks(parseInt(e.target.value))}
                      min="1"
                      max="10"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="md:col-span-2 flex items-end">
                    <button
                      onClick={handleBulkUpdate}
                      disabled={loading}
                      className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {loading ? 'Updating...' : 'Update Selected Questions'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Filters */}
            {!selectedQuestionPaper && (
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    value={filters.subject}
                    onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Subjects</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Maths">Maths</option>
                  </select>

                  <select
                    value={filters.difficulty}
                    onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>

                  <select
                    value={filters.examType}
                    onChange={(e) => setFilters({ ...filters, examType: e.target.value })}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Exam Types</option>
                    <option value="NEET">NEET</option>
                    <option value="JEE">JEE</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>
            )}

            {/* Selected Questions Summary */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">Selected Questions: {selectedQuestions.length}</p>
                  <p className="text-indigo-100">Total Marks: {totalMarks}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Duration: {testData.duration} min</p>
                  <p className="text-indigo-100">Type: {testData.type}</p>
                </div>
              </div>
            </div>

            {/* Questions List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Available Questions ({questions.length})
              </h3>

              {loading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-600 border-t-transparent"></div>
                  <p className="mt-2 text-gray-600">Loading questions...</p>
                </div>
              ) : questions.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No questions found. Try adjusting filters.</p>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {questions.map((question, index) => (
                    <div
                      key={question._id}
                      onClick={() => toggleQuestion(question._id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedQuestions.includes(question._id)
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {question.externalId && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded">
                                ID: {question.externalId}
                              </span>
                            )}
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                              {question.subject}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded ${
                              question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                              question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {question.difficulty}
                            </span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                              {question.marks} marks
                            </span>
                          </div>
                          <p className="text-gray-800 font-medium mb-2">
                            {index + 1}. {question.question[showLanguage]}
                          </p>
                          {question.options && question.options[showLanguage] && (
                            <div className="ml-4 space-y-1">
                              {question.options[showLanguage].map((option, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span className={`text-sm ${idx === question.correctAnswer ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                                    {String.fromCharCode(65 + idx)}) {option}
                                    {idx === question.correctAnswer && ' ✓'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                          {question.explanation && question.explanation[showLanguage] && (
                            <p className="text-xs text-gray-500 mt-2 italic">
                              Explanation: {question.explanation[showLanguage].substring(0, 100)}
                              {question.explanation[showLanguage].length > 100 ? '...' : ''}
                            </p>
                          )}
                        </div>
                        <div className="ml-4">
                          <input
                            type="checkbox"
                            checked={selectedQuestions.includes(question._id)}
                            onChange={() => toggleQuestion(question._id)}
                            className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleCreateTest}
                disabled={loading || selectedQuestions.length === 0}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
              >
                {loading ? 'Creating...' : 'Create Test'}
              </button>
            </div>
          </div>
        )}

        {/* Question Paper Selection Modal */}
        {showQuestionPaperModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Choose Question Paper from Bank</h2>
                <button
                  onClick={() => setShowQuestionPaperModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Filter Info */}
              <div className="mb-4 p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm text-indigo-800">
                  <span className="font-semibold">Showing question papers for:</span> {testData.examType === 'Both' ? 'All exam types' : testData.examType}
                </p>
              </div>

              {/* Question Papers List */}
              {loadingPapers ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
                  <p className="mt-4 text-gray-600">Loading question papers...</p>
                </div>
              ) : questionPapers.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="mt-4 text-gray-500">No question papers found for {testData.examType}</p>
                  <p className="text-sm text-gray-400 mt-2">Upload question papers in the Question Bank first</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {questionPapers.map((paper) => (
                    <div
                      key={paper._id}
                      onClick={() => {
                        setSelectedQuestionPaper(paper);
                        setShowQuestionPaperModal(false);
                      }}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              paper.examType === 'NEET' ? 'bg-green-100 text-green-800' :
                              paper.examType === 'JEE' ? 'bg-blue-100 text-blue-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {paper.examType}
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                              {paper.subject}
                            </span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full">
                              {paper.questionCount} questions
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{paper.fileName}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Unit {paper.unit}, Chapter {paper.chapter}: {paper.chapterName}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Uploaded: {new Date(paper.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Test Created Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Your test has been created. Would you like to share it with students now?
                </p>
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      localStorage.setItem('navRequest', 'test-management');
                      window.dispatchEvent(new Event('storage'));
                    }}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Go to Test Management & Share
                  </button>
                  <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      // Reset form to create another test
                      setTestData({
                        title: '',
                        description: '',
                        type: 'practice',
                        examType: 'NEET',
                        subjects: [],
                        duration: 60,
                        isPublished: false,
                      });
                      setSelectedQuestions([]);
                      setSelectedQuestionPaper(null);
                      setStep(1);
                      setCreatedTestId(null);
                    }}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Create Another Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestCreation;
