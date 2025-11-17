import React, { useState } from 'react';
import axios from 'axios';

interface Qualification {
  degree: string;
  institution: string;
  yearOfPassing: string;
  percentage: string;
}

interface Experience {
  institution: string;
  designation: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  subjects: string;
}

interface TeacherFormData {
  teacherName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other' | '';
  mobileNumber: string;
  email: string;
  password: string;
  alternatePhone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  totalExperience: string;
  subjectsTeaching: string;
  specialization: string;
  coursesPreparing: string;
  availableForOnlineClasses: boolean;
  availableForOfflineClasses: boolean;
  preferredLanguages: string;
}

const TeacherRegistrationForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<TeacherFormData>({
    teacherName: '',
    dateOfBirth: '',
    gender: '',
    mobileNumber: '',
    email: '',
    password: '',
    alternatePhone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    totalExperience: '',
    subjectsTeaching: '',
    specialization: '',
    coursesPreparing: '',
    availableForOnlineClasses: true,
    availableForOfflineClasses: false,
    preferredLanguages: 'English',
  });

  const [qualifications, setQualifications] = useState<Qualification[]>([
    { degree: '', institution: '', yearOfPassing: '', percentage: '' }
  ]);

  const [experiences, setExperiences] = useState<Experience[]>([
    { institution: '', designation: '', startDate: '', endDate: '', isCurrent: false, subjects: '' }
  ]);

  const [files, setFiles] = useState<{ [key: string]: File | File[] | null }>({
    photo: null,
    resume: null,
    aadhaar: null,
    educationCertificates: null,
    experienceCertificates: null,
    panCard: null,
  });

  const tabs = ['Basic Details', 'Address', 'Qualifications', 'Experience', 'Subjects & Availability', 'Documents'];

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
    if (fileList) {
      if (name === 'educationCertificates' || name === 'experienceCertificates') {
        setFiles(prev => ({
          ...prev,
          [name]: Array.from(fileList)
        }));
      } else if (fileList[0]) {
        setFiles(prev => ({
          ...prev,
          [name]: fileList[0]
        }));
      }
    }
  };

  const addQualification = () => {
    setQualifications([...qualifications, { degree: '', institution: '', yearOfPassing: '', percentage: '' }]);
  };

  const removeQualification = (index: number) => {
    setQualifications(qualifications.filter((_, i) => i !== index));
  };

  const updateQualification = (index: number, field: keyof Qualification, value: string) => {
    const updated = [...qualifications];
    updated[index][field] = value;
    setQualifications(updated);
  };

  const addExperience = () => {
    setExperiences([...experiences, { institution: '', designation: '', startDate: '', endDate: '', isCurrent: false, subjects: '' }]);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const updateExperience = (index: number, field: keyof Experience, value: string | boolean) => {
    const updated = [...experiences];
    (updated[index] as any)[field] = value;
    setExperiences(updated);
  };

  const validateCurrentTab = (): boolean => {
    setError('');

    switch (activeTab) {
      case 0: // Basic Details
        if (!formData.teacherName.trim()) {
          setError('Teacher name is required');
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
        if (!formData.mobileNumber.trim() || !/^[0-9]{10}$/.test(formData.mobileNumber)) {
          setError('Valid 10-digit mobile number is required');
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
      case 1: // Address Details
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
      case 2: // Qualifications
        if (qualifications.length === 0 || !qualifications[0].degree.trim()) {
          setError('At least one qualification is required');
          return false;
        }
        break;
      case 4: // Subjects & Availability
        if (!formData.subjectsTeaching.trim()) {
          setError('Subjects teaching are required');
          return false;
        }
        if (!formData.coursesPreparing.trim()) {
          setError('Courses preparing for are required');
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

      // Append JSON arrays
      submitData.append('qualifications', JSON.stringify(qualifications));
      submitData.append('experience', JSON.stringify(experiences));
      submitData.append('subjectsTeaching', JSON.stringify(formData.subjectsTeaching.split(',').map(s => s.trim())));
      submitData.append('specialization', JSON.stringify(formData.specialization.split(',').map(s => s.trim()).filter(s => s)));
      submitData.append('coursesPreparing', JSON.stringify(formData.coursesPreparing.split(',').map(s => s.trim())));
      submitData.append('preferredLanguages', JSON.stringify(formData.preferredLanguages.split(',').map(s => s.trim())));

      // Append files
      if (files.photo) submitData.append('photo', files.photo as File);
      if (files.resume) submitData.append('resume', files.resume as File);
      if (files.aadhaar) submitData.append('aadhaar', files.aadhaar as File);
      if (files.panCard) submitData.append('panCard', files.panCard as File);

      if (files.educationCertificates) {
        (files.educationCertificates as File[]).forEach(file => {
          submitData.append('educationCertificates', file);
        });
      }

      if (files.experienceCertificates) {
        (files.experienceCertificates as File[]).forEach(file => {
          submitData.append('experienceCertificates', file);
        });
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5001/api'}/registration/teacher`,
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
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-green-700 to-emerald-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Teacher Registration</h2>
          <p className="text-teal-100">Experienced educators joining our platform</p>
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
                  className={`px-3 py-2 font-medium text-xs transition-colors ${
                    activeTab === index
                      ? 'border-b-2 border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400'
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
                    Teacher Name *
                  </label>
                  <input
                    type="text"
                    name="teacherName"
                    value={formData.teacherName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Alternate Phone
                    </label>
                    <input
                      type="tel"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 1: Address */}
            {activeTab === 1 && (
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
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Qualifications */}
            {activeTab === 2 && (
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-slate-700 dark:text-slate-300">Qualification {index + 1}</h4>
                      {qualifications.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeQualification(index)}
                          className="text-red-600 text-sm hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Degree *"
                        value={qual.degree}
                        onChange={(e) => updateQualification(index, 'degree', e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Institution *"
                        value={qual.institution}
                        onChange={(e) => updateQualification(index, 'institution', e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                      />
                      <input
                        type="number"
                        placeholder="Year of Passing *"
                        value={qual.yearOfPassing}
                        onChange={(e) => updateQualification(index, 'yearOfPassing', e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                      />
                      <input
                        type="number"
                        placeholder="Percentage"
                        value={qual.percentage}
                        onChange={(e) => updateQualification(index, 'percentage', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addQualification}
                  className="w-full py-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-400 hover:border-teal-500 hover:text-teal-600 transition-colors"
                >
                  + Add Another Qualification
                </button>
              </div>
            )}

            {/* Tab 3: Experience */}
            {activeTab === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Total Experience (Years)
                  </label>
                  <input
                    type="number"
                    name="totalExperience"
                    value={formData.totalExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                {experiences.map((exp, index) => (
                  <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-slate-700 dark:text-slate-300">Experience {index + 1}</h4>
                      {experiences.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeExperience(index)}
                          className="text-red-600 text-sm hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Institution"
                        value={exp.institution}
                        onChange={(e) => updateExperience(index, 'institution', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Designation"
                        value={exp.designation}
                        onChange={(e) => updateExperience(index, 'designation', e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="date"
                          placeholder="Start Date"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                        />
                        <input
                          type="date"
                          placeholder="End Date"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                          disabled={exp.isCurrent}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={exp.isCurrent}
                          onChange={(e) => updateExperience(index, 'isCurrent', e.target.checked)}
                          className="w-4 h-4 text-teal-600"
                        />
                        <label className="text-sm text-slate-700 dark:text-slate-300">Currently working here</label>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addExperience}
                  className="w-full py-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-400 hover:border-teal-500 hover:text-teal-600 transition-colors"
                >
                  + Add Another Experience
                </button>
              </div>
            )}

            {/* Tab 4: Subjects & Availability */}
            {activeTab === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subjects Teaching * (comma separated)
                  </label>
                  <input
                    type="text"
                    name="subjectsTeaching"
                    value={formData.subjectsTeaching}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Physics, Chemistry, Mathematics"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Specialization (comma separated)
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    placeholder="e.g., Organic Chemistry, Mechanics"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Courses Preparing * (comma separated: NEET, JEE)
                  </label>
                  <input
                    type="text"
                    name="coursesPreparing"
                    value={formData.coursesPreparing}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., NEET, JEE"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Languages (comma separated)
                  </label>
                  <input
                    type="text"
                    name="preferredLanguages"
                    value={formData.preferredLanguages}
                    onChange={handleInputChange}
                    placeholder="e.g., English, Tamil, Hindi"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="availableForOnlineClasses"
                    checked={formData.availableForOnlineClasses}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-teal-600"
                  />
                  <label className="text-sm text-slate-700 dark:text-slate-300">Available for Online Classes</label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="availableForOfflineClasses"
                    checked={formData.availableForOfflineClasses}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-teal-600"
                  />
                  <label className="text-sm text-slate-700 dark:text-slate-300">Available for Offline Classes</label>
                </div>
              </div>
            )}

            {/* Tab 5: Documents */}
            {activeTab === 5 && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Upload documents (PDF/JPEG/PNG - Max 5MB each)
                </p>

                {[
                  { name: 'photo', label: 'Photo' },
                  { name: 'resume', label: 'Resume' },
                  { name: 'aadhaar', label: 'Aadhaar' },
                  { name: 'panCard', label: 'PAN Card' },
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
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Education Certificates (Multiple)
                  </label>
                  <input
                    type="file"
                    name="educationCertificates"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    multiple
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Experience Certificates (Multiple)
                  </label>
                  <input
                    type="file"
                    name="experienceCertificates"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    multiple
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 dark:bg-slate-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  />
                </div>
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
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

export default TeacherRegistrationForm;
