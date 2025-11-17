import React, { useState } from 'react';
import axios from 'axios';

interface StudentFormData {
  // Basic Details
  courseAppliedFor: 'NEET' | 'JEE' | '';
  studentName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other' | '';
  schoolDetails: string;
  email: string;
  password: string;

  // Parent Details
  parentName: string;
  parentMobileNumber: string;
  parentEmail: string;
  parentAadhaar: string;

  // Address Details
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;

  // Admission Details
  academicYear: string;
  classStandard: string;
  section: string;
  admissionType: 'new' | 'transfer' | '';
  transportNeeded: boolean;
  hostelNeeded: boolean;
  mediumOfInstruction: string;
}

const StudentRegistrationForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<StudentFormData>({
    courseAppliedFor: '',
    studentName: '',
    dateOfBirth: '',
    gender: '',
    schoolDetails: '',
    email: '',
    password: '',
    parentName: '',
    parentMobileNumber: '',
    parentEmail: '',
    parentAadhaar: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    academicYear: '',
    classStandard: '',
    section: '',
    admissionType: '',
    transportNeeded: false,
    hostelNeeded: false,
    mediumOfInstruction: '',
  });

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    birthCertificate: null,
    transferCertificate: null,
    previousMarksCard: null,
    studentAadhaar: null,
    parentAadhaar: null,
    studentPhoto: null,
    parentPhoto: null,
  });

  const tabs = ['Basic Details', 'Parent Details', 'Address Details', 'Admission Details', 'Documents'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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

  const validateCurrentTab = (): boolean => {
    setError('');

    switch (activeTab) {
      case 0: // Basic Details
        if (!formData.courseAppliedFor) {
          setError('Please select a course (NEET or JEE)');
          return false;
        }
        if (!formData.studentName.trim()) {
          setError('Student name is required');
          return false;
        }
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
          setError('Valid email is required');
          return false;
        }
        if (!formData.password || formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          return false;
        }
        if (!formData.dateOfBirth) {
          setError('Date of birth is required');
          return false;
        }
        if (!formData.gender) {
          setError('Please select gender');
          return false;
        }
        break;
      case 1: // Parent Details
        if (!formData.parentName.trim()) {
          setError('Parent name is required');
          return false;
        }
        if (!formData.parentMobileNumber.trim() || !/^[0-9]{10}$/.test(formData.parentMobileNumber)) {
          setError('Valid 10-digit mobile number is required');
          return false;
        }
        if (formData.parentEmail && !/^\S+@\S+\.\S+$/.test(formData.parentEmail)) {
          setError('Please enter a valid parent email');
          return false;
        }
        break;
      case 2: // Address Details
        if (!formData.addressLine1.trim()) {
          setError('Address Line 1 is required');
          return false;
        }
        if (!formData.city.trim()) {
          setError('City is required');
          return false;
        }
        if (!formData.state.trim()) {
          setError('State is required');
          return false;
        }
        if (!formData.pincode.trim() || !/^[0-9]{6}$/.test(formData.pincode)) {
          setError('Valid 6-digit pincode is required');
          return false;
        }
        break;
      case 3: // Admission Details
        if (!formData.academicYear.trim()) {
          setError('Academic year is required');
          return false;
        }
        if (!formData.classStandard.trim()) {
          setError('Class/Standard is required');
          return false;
        }
        if (!formData.admissionType) {
          setError('Please select admission type');
          return false;
        }
        if (!formData.mediumOfInstruction) {
          setError('Please select medium of instruction');
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentTab()) {
      setActiveTab(prev => Math.min(prev + 1, tabs.length - 1));
    }
  };

  const handlePrevious = () => {
    setActiveTab(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateCurrentTab()) {
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    try {
      const submitData = new FormData();

      // Append form fields
      Object.keys(formData).forEach(key => {
        submitData.append(key, (formData as any)[key].toString());
      });

      // Append files
      Object.keys(files).forEach(key => {
        if (files[key]) {
          submitData.append(key, files[key]!);
        }
      });

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5001/api'}/registration/student`,
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setSuccessMessage('Registration successful! Your application is pending approval.');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Student Registration</h2>
          <p className="text-blue-100">Individual students preparing for NEET or JEE exams</p>
        </div>

        <div className="bg-white/95 backdrop-blur-lg dark:bg-slate-800/95 rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 font-medium text-sm transition-colors ${
                    activeTab === index
                      ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Tab 0: Basic Details */}
            {activeTab === 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Course Applying For *
                  </label>
                  <select
                    name="courseAppliedFor"
                    value={formData.courseAppliedFor}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  >
                    <option value="">Select Course</option>
                    <option value="NEET">NEET</option>
                    <option value="JEE">JEE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
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
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
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
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    School Details
                  </label>
                  <input
                    type="text"
                    name="schoolDetails"
                    value={formData.schoolDetails}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>
              </div>
            )}

            {/* Tab 1: Parent Details */}
            {activeTab === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Parent Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="parentMobileNumber"
                    value={formData.parentMobileNumber}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Parent Email
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Parent Aadhaar (Optional)
                  </label>
                  <input
                    type="text"
                    name="parentAadhaar"
                    value={formData.parentAadhaar}
                    onChange={handleInputChange}
                    pattern="[0-9]{12}"
                    placeholder="12-digit Aadhaar number"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>
              </div>
            )}

            {/* Tab 2: Address Details */}
            {activeTab === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Address Line 1 *
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                      placeholder="6-digit pincode"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Admission Details */}
            {activeTab === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Academic Year *
                  </label>
                  <input
                    type="text"
                    name="academicYear"
                    value={formData.academicYear}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 2024-2025"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Class / Standard *
                  </label>
                  <input
                    type="text"
                    name="classStandard"
                    value={formData.classStandard}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 11th, 12th"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Section / Batch
                  </label>
                  <input
                    type="text"
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    placeholder="e.g., A, B, Batch 1"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Admission Type *
                  </label>
                  <select
                    name="admissionType"
                    value={formData.admissionType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  >
                    <option value="">Select Type</option>
                    <option value="new">New</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="transportNeeded"
                    checked={formData.transportNeeded}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Transport Needed
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="hostelNeeded"
                    checked={formData.hostelNeeded}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Hostel Needed
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Medium of Instruction *
                  </label>
                  <select
                    name="mediumOfInstruction"
                    value={formData.mediumOfInstruction}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white"
                  >
                    <option value="">Select Medium</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Tamil">Tamil</option>
                  </select>
                </div>
              </div>
            )}

            {/* Tab 4: Documents */}
            {activeTab === 4 && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Upload documents (PDF/JPEG/PNG - Max 5MB each)
                </p>

                {[
                  { name: 'birthCertificate', label: 'Birth Certificate' },
                  { name: 'transferCertificate', label: 'Transfer Certificate (TC)' },
                  { name: 'previousMarksCard', label: 'Previous Marks Card' },
                  { name: 'studentAadhaar', label: 'Student Aadhaar' },
                  { name: 'parentAadhaar', label: 'Parent Aadhaar' },
                  { name: 'studentPhoto', label: 'Student Photo' },
                  { name: 'parentPhoto', label: 'Parent Photo' },
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {files[doc.name] && (
                      <p className="mt-1 text-xs text-green-600 dark:text-green-400">
                        {files[doc.name]?.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Error & Success Messages */}
            {error && (
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {successMessage && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400">{successMessage}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={activeTab === 0}
                className="px-6 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              {activeTab < tabs.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
