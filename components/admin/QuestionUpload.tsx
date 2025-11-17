import React, { useState } from 'react';
import api from '../../services/api';
import { useLanguage } from '../../context/LanguageContext';

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

const QuestionUpload: React.FC = () => {
  const { t } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Validate file type
      const validTypes = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ];

      if (!validTypes.includes(selectedFile.type) && !selectedFile.name.endsWith('.xlsx')) {
        setError('Please select a valid Excel file (.xlsx)');
        setFile(null);
        return;
      }

      setFile(selectedFile);
      setError('');
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setError('');
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('questionsFile', file);

      const response = await api.post('/admin/questions/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 60000, // 60 seconds for large file uploads
      });

      if (response.data.success) {
        setResult(response.data.data);
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      }
    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.response?.data?.message || 'Failed to upload questions');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{t('questionUploadTitle')}</h1>
          <p className="text-gray-600">
            {t('questionUploadDesc')}
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('selectExcelFile')}</h2>

            {/* File Input */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-500 transition-colors">
              <input
                id="file-upload"
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileChange}
                className="hidden"
              />

              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-block"
              >
                <div className="mb-4">
                  <svg
                    className="mx-auto h-16 w-16 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {file ? file.name : t('selectExcelFile')}
                </p>
                <p className="text-sm text-gray-500">
                  {t('supportedFormats')}
                </p>
              </label>
            </div>

            {file && (
              <div className="mt-4 flex items-center justify-between bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">{file.name}</p>
                    <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setFile(null);
                    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                    if (fileInput) fileInput.value = '';
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>

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

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
              !file || uploading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {uploading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('uploading')}
              </span>
            ) : (
              t('uploadFile')
            )}
          </button>
        </div>

        {/* Result Card */}
        {result && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-green-600 mb-2 flex items-center">
                <svg className="h-8 w-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('uploadSuccess')}
              </h2>
              <p className="text-gray-600">{t('questions')} have been processed and added to the database.</p>
            </div>

            {/* Metadata */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">{t('fileInformation')}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">{t('subject')}:</span>
                  <span className="ml-2 font-medium text-gray-800">{result.metadata.subject}</span>
                </div>
                <div>
                  <span className="text-gray-600">{t('unit')}:</span>
                  <span className="ml-2 font-medium text-gray-800">{result.metadata.unit}</span>
                </div>
                <div>
                  <span className="text-gray-600">{t('chapter')}:</span>
                  <span className="ml-2 font-medium text-gray-800">{result.metadata.chapter}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">{t('chapterName')}:</span>
                  <span className="ml-2 font-medium text-gray-800 capitalize">{result.metadata.chapterName}</span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">{result.total}</p>
                <p className="text-sm text-gray-600 mt-1">{t('totalProcessed')}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">{result.inserted}</p>
                <p className="text-sm text-gray-600 mt-1">{t('questionsInserted')}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-yellow-600">{result.duplicates}</p>
                <p className="text-sm text-gray-600 mt-1">{t('duplicatesSkipped')}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-red-600">{result.errors}</p>
                <p className="text-sm text-gray-600 mt-1">{t('errors') || 'Errors'}</p>
              </div>
            </div>

            {/* Error Details */}
            {result.errorDetails && result.errorDetails.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">Error Details (First 10)</h3>
                <ul className="space-y-2 text-sm">
                  {result.errorDetails.map((err, idx) => (
                    <li key={idx} className="text-red-700">
                      {err.row && `Row ${err.row}: `}
                      {err.id && `ID ${err.id}: `}
                      {err.error}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Excel File Format Instructions</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Filename format: <code className="bg-gray-100 px-2 py-1 rounded">subject_unit_X_chap_Y_name_qb.xlsx</code></span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Required columns: _id, question, கேள்வி, questionOptions, விருப்பங்கள், answers, பதில், explanation, விளக்கம்</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Options format: Separate with " | " (e.g., "1) Option A | 2) Option B | 3) Option C | 4) Option D")</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Both English and Tamil versions are required for all questions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionUpload;
