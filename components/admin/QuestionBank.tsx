import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircleIcon, XCircleIcon } from '../icons';

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
  uploadedBy: {
    name: string;
    email: string;
  };
}

interface UploadResult {
  total: number;
  inserted: number;
  duplicates: number;
  errors: number;
  errorDetails: Array<{ row?: number; id?: number; error: string }>;
  metadata: {
    subject: string;
    unit: number;
    chapter: number;
    chapterName: string;
  };
}

const QuestionBank: React.FC = () => {
  const { t } = useLanguage();
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string>('');

  // Upload form state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [examType, setExamType] = useState<'NEET' | 'JEE' | 'Both'>('NEET');
  const [subject, setSubject] = useState<'Physics' | 'Chemistry' | 'Biology' | 'Maths'>('Biology');

  // Modal state
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Filters
  const [filterExamType, setFilterExamType] = useState<string>('');
  const [filterSubject, setFilterSubject] = useState<string>('');

  // Fetch uploaded files
  const fetchFiles = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterExamType) params.append('examType', filterExamType);
      if (filterSubject) params.append('subject', filterSubject);
      params.append('limit', '50');

      const response = await api.get(`/admin/uploaded-files?${params.toString()}`);
      if (response.data.success) {
        setFiles(response.data.data.files);
      }
    } catch (err: any) {
      console.error('Error fetching files:', err);
      setError(err.response?.data?.message || 'Failed to fetch files');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [filterExamType, filterSubject]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ];

      if (!validTypes.includes(file.type) && !file.name.endsWith('.xlsx')) {
        setError('Please select a valid Excel file (.xlsx)');
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      setError('');
      setUploadResult(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setError('');
    setUploadResult(null);

    try {
      const formData = new FormData();
      formData.append('questionsFile', selectedFile);
      formData.append('examType', examType);
      formData.append('subject', subject);

      const response = await api.post('/admin/questions/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 60000,
      });

      if (response.data.success) {
        setUploadResult(response.data.data);
        setSelectedFile(null);
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

        // Refresh the file list
        fetchFiles();

        // Close modal after a brief delay to show success message
        setTimeout(() => {
          setShowUploadModal(false);
          setUploadResult(null);
        }, 2000);
      }
    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.response?.data?.message || 'Failed to upload questions');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (fileId: string, fileName: string) => {
    if (!confirm(`Are you sure you want to delete "${fileName}" and all its questions?`)) {
      return;
    }

    try {
      const response = await api.delete(`/admin/uploaded-files/${fileId}`);
      if (response.data.success) {
        fetchFiles();
      }
    } catch (err: any) {
      console.error('Error deleting file:', err);
      alert(err.response?.data?.message || 'Failed to delete file');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('questionBank')}</h1>
            <p className="text-gray-600">{t('questionBankDesc') || 'Manage uploaded question files'}</p>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            {t('uploadQuestions') || 'Upload Questions'}
          </button>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">{t('uploadNewQuestions') || 'Upload New Questions'}</h2>
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setError('');
                    setUploadResult(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Exam Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('examType')}
                  </label>
                  <select
                    value={examType}
                    onChange={(e) => setExamType(e.target.value as any)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="NEET">{t('neet')}</option>
                    <option value="JEE">{t('jee')}</option>
                    <option value="Both">{t('both')}</option>
                  </select>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('subject')}
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value as any)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="Physics">{t('physics')}</option>
                    <option value="Chemistry">{t('chemistry')}</option>
                    <option value="Biology">{t('biology')}</option>
                    <option value="Maths">{t('maths')}</option>
                  </select>
                </div>
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('selectExcelFile')}
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                />
              </div>

              {selectedFile && (
                <div className="mb-4 flex items-center justify-between bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-medium text-gray-800">{selectedFile.name}</p>
                      <p className="text-sm text-gray-500">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                      if (fileInput) fileInput.value = '';
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>
              )}

              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              {uploadResult && (
                <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-green-800">{t('uploadSuccess') || 'Upload Successful!'}</p>
                      <p className="text-sm text-green-700 mt-1">
                        Inserted: {uploadResult.inserted} | Duplicates: {uploadResult.duplicates} | Errors: {uploadResult.errors}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center ${
                  !selectedFile || uploading
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                }`}
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                {uploading ? t('uploading') : t('uploadFile') || 'Upload File'}
              </button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('filters') || 'Filters'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('filterByExamType') || 'Filter by Exam Type'}
              </label>
              <select
                value={filterExamType}
                onChange={(e) => setFilterExamType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">{t('all') || 'All'}</option>
                <option value="NEET">{t('neet')}</option>
                <option value="JEE">{t('jee')}</option>
                <option value="Both">{t('both')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('filterBySubject') || 'Filter by Subject'}
              </label>
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">{t('all') || 'All'}</option>
                <option value="Physics">{t('physics')}</option>
                <option value="Chemistry">{t('chemistry')}</option>
                <option value="Biology">{t('biology')}</option>
                <option value="Maths">{t('maths')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Files Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">{t('uploadedFiles') || 'Uploaded Files'}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {files.length} {files.length === 1 ? 'file' : 'files'} uploaded
            </p>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">{t('loading')}</p>
            </div>
          ) : files.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500 text-lg">{t('noFilesUploaded') || 'No files uploaded yet'}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('fileName')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('examType')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('subject')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('dateAdded')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('questionCount') || 'Questions'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('actions')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {files.map((file) => (
                    <tr key={file._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{file.fileName}</div>
                        <div className="text-xs text-gray-500">
                          Unit {file.unit}, Ch {file.chapter}: {file.chapterName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          file.examType === 'NEET'
                            ? 'bg-green-100 text-green-800'
                            : file.examType === 'JEE'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {file.examType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{file.subject}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-500">{formatDate(file.uploadDate)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          {file.questionCount}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleDelete(file._id, file.fileName)}
                            className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors"
                            title={t('delete')}
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
