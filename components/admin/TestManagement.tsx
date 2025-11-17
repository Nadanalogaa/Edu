'use client';
import { useState, useEffect, useMemo } from 'react';
import api from '../../services/api';

interface Test {
  _id: string;
  title: string;
  description: string;
  type: 'practice' | 'exam' | 'daily-challenge';
  examType: 'NEET' | 'JEE' | 'Both';
  subjects: string[];
  duration: number;
  totalMarks: number;
  questions: any[];
  isPublished: boolean;
  sharedWithStudents: string[];
  sharedWithGrades: string[];
  sharedAt?: string;
  createdAt: string;
  createdBy: {
    name: string;
    email: string;
  };
}

interface ShareOptions {
  grades: string[];
  students: {
    _id: string;
    name: string;
    email: string;
    grade: string;
  }[];
}

export default function TestManagement() {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Filters
  const [activeTab, setActiveTab] = useState<'practice' | 'exam' | 'daily-challenge'>('practice');
  const [examTypeFilter, setExamTypeFilter] = useState<'All' | 'NEET' | 'JEE' | 'Both'>('All');

  // Share modal state
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [shareOptions, setShareOptions] = useState<ShareOptions>({ grades: [], students: [] });
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [sharingLoading, setSharingLoading] = useState(false);

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    try {
      setLoading(true);
      const response = await api.get('/admin/tests');
      if (response.data.success) {
        setTests(response.data.data.tests);
      }
    } catch (err: any) {
      console.error('Error fetching tests:', err);
      setError(err.response?.data?.message || 'Failed to fetch tests');
    } finally {
      setLoading(false);
    }
  };

  const fetchShareOptions = async () => {
    try {
      const response = await api.get('/admin/share-options');
      if (response.data.success) {
        setShareOptions(response.data.data);
      }
    } catch (err: any) {
      console.error('Error fetching share options:', err);
    }
  };

  const handleOpenShareModal = async (test: Test) => {
    setSelectedTest(test);
    setSelectedGrades(test.sharedWithGrades || []);
    setSelectedStudents(test.sharedWithStudents || []);
    setShowShareModal(true);
    await fetchShareOptions();
  };

  const handleShareTest = async () => {
    if (!selectedTest) return;

    if (selectedGrades.length === 0 && selectedStudents.length === 0) {
      setError('Please select at least one grade or student');
      return;
    }

    try {
      setSharingLoading(true);
      setError('');

      const response = await api.post(`/admin/tests/${selectedTest._id}/share`, {
        grades: selectedGrades,
        studentIds: selectedStudents,
      });

      if (response.data.success) {
        setSuccessMessage('Test shared successfully!');
        setShowShareModal(false);
        fetchTests();
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err: any) {
      console.error('Error sharing test:', err);
      setError(err.response?.data?.message || 'Failed to share test');
    } finally {
      setSharingLoading(false);
    }
  };

  const handleDeleteTest = async (testId: string) => {
    if (!confirm('Are you sure you want to delete this test?')) return;

    try {
      const response = await api.delete(`/admin/tests/${testId}`);
      if (response.data.success) {
        setSuccessMessage('Test deleted successfully');
        fetchTests();
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err: any) {
      console.error('Error deleting test:', err);
      setError(err.response?.data?.message || 'Failed to delete test');
    }
  };

  const toggleGrade = (grade: string) => {
    setSelectedGrades(prev =>
      prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
    );
  };

  const toggleStudent = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId) ? prev.filter(id => id !== studentId) : [...prev, studentId]
    );
  };

  // Filter tests based on active tab and exam type
  const filteredTests = useMemo(() => {
    return tests.filter(test => {
      const matchesType = test.type === activeTab;
      const matchesExamType = examTypeFilter === 'All' || test.examType === examTypeFilter;
      return matchesType && matchesExamType;
    });
  }, [tests, activeTab, examTypeFilter]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Test Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Manage and share tests with students</p>
      </div>

      {/* Success/Error Messages */}
      {successMessage && (
        <div className="mb-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg">
          {successMessage}
        </div>
      )}
      {error && (
        <div className="mb-6 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Tabs for Test Type */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('practice')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'practice'
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Practice Tests
            </button>
            <button
              onClick={() => setActiveTab('exam')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'exam'
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Exam Mode
            </button>
            <button
              onClick={() => setActiveTab('daily-challenge')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'daily-challenge'
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Daily Challenges
            </button>
          </nav>
        </div>
      </div>

      {/* Exam Type Filter */}
      <div className="mb-6 flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Exam Type:</label>
        <div className="flex space-x-2">
          {['All', 'NEET', 'JEE', 'Both'].map((type) => (
            <button
              key={type}
              onClick={() => setExamTypeFilter(type as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                examTypeFilter === type
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Tests List */}
      {filteredTests.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No {activeTab === 'practice' ? 'practice tests' : activeTab === 'exam' ? 'exams' : 'daily challenges'} found
          </p>
          <p className="text-gray-400 dark:text-gray-500 mt-2">
            {examTypeFilter !== 'All' ? `Try changing the exam type filter` : `Create a test to get started`}
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredTests.map((test) => (
            <div
              key={test._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{test.title}</h3>
                    {test.isPublished && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                        Published
                      </span>
                    )}
                  </div>
                  {test.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{test.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                      {test.type === 'practice' ? 'Practice' : test.type === 'exam' ? 'Exam' : 'Daily Challenge'}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                      {test.examType}
                    </span>
                    {test.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{test.questions.length} Questions</span>
                    <span>{test.totalMarks} Marks</span>
                    <span>{test.duration} Minutes</span>
                  </div>
                  {test.sharedAt && (
                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Shared with:</span>{' '}
                      {test.sharedWithGrades.length > 0 && (
                        <span>Grades: {test.sharedWithGrades.join(', ')}</span>
                      )}
                      {test.sharedWithGrades.length > 0 && test.sharedWithStudents.length > 0 && (
                        <span> • </span>
                      )}
                      {test.sharedWithStudents.length > 0 && (
                        <span>{test.sharedWithStudents.length} student(s)</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleOpenShareModal(test)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    {test.isPublished ? 'Update Sharing' : 'Share Test'}
                  </button>
                  <button
                    onClick={() => handleDeleteTest(test._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && selectedTest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Share Test</h2>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{selectedTest.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">Select grades or individual students to share this test with</p>
              </div>

              {/* Share by Grade */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Share with Grades</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {shareOptions.grades.map((grade) => (
                    <button
                      key={grade}
                      onClick={() => toggleGrade(grade)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedGrades.includes(grade)
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                          : 'border-gray-300 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>

              {/* Share with Individual Students */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Share with Individual Students</h4>
                <div className="max-h-64 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-lg">
                  {shareOptions.students.map((student) => (
                    <label
                      key={student._id}
                      className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b last:border-b-0 dark:border-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student._id)}
                        onChange={() => toggleStudent(student._id)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{student.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{student.email} • Grade: {student.grade || 'N/A'}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowShareModal(false)}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleShareTest}
                  disabled={sharingLoading || (selectedGrades.length === 0 && selectedStudents.length === 0)}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sharingLoading ? 'Sharing...' : 'Share Test'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
