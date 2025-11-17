import React, { useState } from 'react';
import axios from 'axios';

interface SchoolFormData {
  name: string;
  code: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  principal: string;
  principalPhone: string;
  principalEmail: string;
  password: string;
  website: string;
  established: string;
  boardAffiliation: string;
  totalStrength: string;
}

const SchoolRegistrationForm: React.FC = () => {
  const [registrationType, setRegistrationType] = useState<'school' | 'bulk'>('school');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [bulkUploadResult, setBulkUploadResult] = useState<any>(null);

  const [formData, setFormData] = useState<SchoolFormData>({
    name: '',
    code: '',
    address: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
    phone: '',
    email: '',
    principal: '',
    principalPhone: '',
    principalEmail: '',
    password: '',
    website: '',
    established: '',
    boardAffiliation: '',
    totalStrength: '',
  });

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    registrationCertificate: null,
    affiliationCertificate: null,
    taxDocument: null,
    principalIdProof: null,
  });

  const [bulkFile, setBulkFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: fileList } = e.target;
    if (fileList && fileList[0]) {
      setFiles(prev => ({
        ...prev,
        [name]: fileList[0]
      }));
    }
  };

  const handleBulkFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBulkFile(e.target.files[0]);
    }
  };

  const handleSchoolSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    try {
      const submitData = new FormData();

      Object.keys(formData).forEach(key => {
        submitData.append(key, (formData as any)[key]);
      });

      Object.keys(files).forEach(key => {
        if (files[key]) {
          submitData.append(key, files[key]!);
        }
      });

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5001/api'}/registration/school`,
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setSuccessMessage('School registration successful! Your application is pending approval.');
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBulkUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!bulkFile) {
      setError('Please select a CSV file to upload');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');
    setBulkUploadResult(null);

    try {
      const submitData = new FormData();
      submitData.append('bulkFile', bulkFile);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5001/api'}/registration/school/bulk-upload`,
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setBulkUploadResult(response.data);
      setSuccessMessage(`Bulk upload completed! ${response.data.summary.success} students registered successfully.`);
    } catch (err: any) {
      console.error('Bulk upload error:', err);
      setError(err.response?.data?.message || 'Bulk upload failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadCSVTemplate = () => {
    const csvContent = `courseAppliedFor,studentName,email,password,dateOfBirth,gender,schoolDetails,parentName,parentMobileNumber,parentEmail,addressLine1,addressLine2,city,state,pincode,country,academicYear,classStandard,section,admissionType,transportNeeded,hostelNeeded,mediumOfInstruction
NEET,John Doe,john@example.com,password123,2005-05-15,male,ABC School,Jane Doe,9876543210,jane@example.com,123 Main St,,Chennai,Tamil Nadu,600001,India,2024-2025,11th,A,new,false,false,English`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student_bulk_upload_template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-700 to-pink-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">School Registration</h2>
          <p className="text-orange-100">Bulk registration for schools & institutions</p>
        </div>

        {/* Toggle between School and Bulk Registration */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-white/30 p-1 bg-white/20 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setRegistrationType('school')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                registrationType === 'school'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              School Registration
            </button>
            <button
              type="button"
              onClick={() => setRegistrationType('bulk')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                registrationType === 'bulk'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              Bulk Student Upload
            </button>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-lg dark:bg-slate-800/95 rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* School Registration Form */}
          {registrationType === 'school' && (
            <form onSubmit={handleSchoolSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-4">School Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      School Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      School Code *
                    </label>
                    <input
                      type="text"
                      name="code"
                      value={formData.code}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-slate-800 dark:text-white mt-6 mb-4">Principal Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Principal Name
                    </label>
                    <input
                      type="text"
                      name="principal"
                      value={formData.principal}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Principal Phone
                    </label>
                    <input
                      type="tel"
                      name="principalPhone"
                      value={formData.principalPhone}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Principal Email
                  </label>
                  <input
                    type="email"
                    name="principalEmail"
                    value={formData.principalEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <h3 className="text-lg font-medium text-slate-800 dark:text-white mt-6 mb-4">Additional Information</h3>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Established Year
                    </label>
                    <input
                      type="number"
                      name="established"
                      value={formData.established}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Total Strength
                    </label>
                    <input
                      type="number"
                      name="totalStrength"
                      value={formData.totalStrength}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Board Affiliation
                  </label>
                  <input
                    type="text"
                    name="boardAffiliation"
                    value={formData.boardAffiliation}
                    onChange={handleInputChange}
                    placeholder="e.g., CBSE, ICSE, State Board"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <h3 className="text-lg font-medium text-slate-800 dark:text-white mt-6 mb-4">Documents</h3>

                {[
                  { name: 'registrationCertificate', label: 'Registration Certificate' },
                  { name: 'affiliationCertificate', label: 'Affiliation Certificate' },
                  { name: 'taxDocument', label: 'Tax Document' },
                  { name: 'principalIdProof', label: 'Principal ID Proof' },
                ].map((doc) => (
                  <div key={doc.name}>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      {doc.label}
                    </label>
                    <input
                      type="file"
                      name={doc.name}
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                    />
                  </div>
                ))}
              </div>

              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              {successMessage && (
                <div className="p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-600 dark:text-green-400">{successMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                {isSubmitting ? 'Registering...' : 'Register School'}
              </button>
            </form>
          )}

          {/* Bulk Upload Form */}
          {registrationType === 'bulk' && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-2">
                  Bulk Student Upload
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Upload a CSV file to register multiple students at once.
                </p>
              </div>

              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
                  Before uploading, download the CSV template to ensure your data is in the correct format.
                </p>
                <button
                  type="button"
                  onClick={downloadCSVTemplate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Download CSV Template
                </button>
              </div>

              <form onSubmit={handleBulkUpload} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Upload CSV File *
                  </label>
                  <input
                    type="file"
                    onChange={handleBulkFileChange}
                    accept=".csv,.xlsx"
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-slate-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  />
                  {bulkFile && (
                    <p className="mt-2 text-xs text-green-600 dark:text-green-400">
                      Selected: {bulkFile.name}
                    </p>
                  )}
                </div>

                {error && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}

                {successMessage && (
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-600 dark:text-green-400">{successMessage}</p>
                  </div>
                )}

                {bulkUploadResult && (
                  <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <h4 className="font-medium text-slate-800 dark:text-white mb-2">Upload Summary</h4>
                    <div className="text-sm space-y-1">
                      <p className="text-slate-600 dark:text-slate-300">
                        Total Records: {bulkUploadResult.summary.total}
                      </p>
                      <p className="text-green-600 dark:text-green-400">
                        Successful: {bulkUploadResult.summary.success}
                      </p>
                      <p className="text-red-600 dark:text-red-400">
                        Errors: {bulkUploadResult.summary.errors}
                      </p>
                    </div>
                    {bulkUploadResult.errors && bulkUploadResult.errors.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Error Details:</p>
                        <div className="max-h-40 overflow-y-auto text-xs">
                          {bulkUploadResult.errors.map((err: any, idx: number) => (
                            <p key={idx} className="text-slate-600 dark:text-slate-400">
                              Row {err.row}: {err.error}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isSubmitting ? 'Uploading...' : 'Upload Students'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolRegistrationForm;
