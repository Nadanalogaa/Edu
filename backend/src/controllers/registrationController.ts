import { Request, Response } from 'express';
import User from '../models/User';
import Student from '../models/Student';
import Teacher from '../models/Teacher';
import School from '../models/School';
import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

// @desc    Register a new student
// @route   POST /api/registration/student
// @access  Public
export const registerStudent = async (req: Request, res: Response) => {
  try {
    const {
      // Basic Details
      courseAppliedFor,
      studentName,
      dateOfBirth,
      gender,
      schoolDetails,
      // Parent Details
      parentName,
      parentMobileNumber,
      parentEmail,
      parentAadhaar,
      // Address Details
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      country,
      // Admission Details
      academicYear,
      classStandard,
      section,
      admissionType,
      transportNeeded,
      hostelNeeded,
      mediumOfInstruction,
      // User credentials
      email,
      password,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create user account
    const user = await User.create({
      name: studentName,
      email,
      password,
      role: 'student',
      phone: parentMobileNumber,
      isActive: true,
    });

    // Handle file uploads
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const documents: any = {};

    if (files) {
      if (files.birthCertificate) documents.birthCertificate = files.birthCertificate[0].path;
      if (files.transferCertificate) documents.transferCertificate = files.transferCertificate[0].path;
      if (files.previousMarksCard) documents.previousMarksCard = files.previousMarksCard[0].path;
      if (files.studentAadhaar) documents.studentAadhaar = files.studentAadhaar[0].path;
      if (files.parentAadhaar) documents.parentAadhaar = files.parentAadhaar[0].path;
      if (files.studentPhoto) documents.studentPhoto = files.studentPhoto[0].path;
      if (files.parentPhoto) documents.parentPhoto = files.parentPhoto[0].path;
    }

    // Create student profile
    const student = await Student.create({
      userId: user._id,
      courseAppliedFor,
      studentName,
      dateOfBirth,
      gender,
      schoolDetails,
      parentDetails: {
        name: parentName,
        mobileNumber: parentMobileNumber,
        email: parentEmail,
        aadhaar: parentAadhaar,
      },
      addressDetails: {
        addressLine1,
        addressLine2,
        city,
        state,
        pincode,
        country: country || 'India',
      },
      admissionDetails: {
        academicYear,
        classStandard,
        section,
        admissionType,
        transportNeeded: transportNeeded === 'true' || transportNeeded === true,
        hostelNeeded: hostelNeeded === 'true' || hostelNeeded === true,
        mediumOfInstruction,
      },
      documents,
      registrationStatus: 'pending',
    });

    res.status(201).json({
      message: 'Student registration successful',
      student: {
        id: student._id,
        name: student.studentName,
        email: user.email,
        registrationStatus: student.registrationStatus,
      },
    });
  } catch (error: any) {
    console.error('Student registration error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    res.status(500).json({ message: error.message || 'Registration failed. Please try again.' });
  }
};

// @desc    Register a new teacher
// @route   POST /api/registration/teacher
// @access  Public
export const registerTeacher = async (req: Request, res: Response) => {
  try {
    const {
      // Basic Details
      teacherName,
      dateOfBirth,
      gender,
      mobileNumber,
      email,
      alternatePhone,
      password,
      // Address Details
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      country,
      // Qualifications (JSON string)
      qualifications,
      // Experience (JSON string)
      experience,
      totalExperience,
      // Subjects & Specialization
      subjectsTeaching,
      specialization,
      coursesPreparing,
      // Availability
      availableForOnlineClasses,
      availableForOfflineClasses,
      preferredLanguages,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create user account
    const user = await User.create({
      name: teacherName,
      email,
      password,
      role: 'teacher',
      phone: mobileNumber,
      isActive: true,
    });

    // Handle file uploads
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const documents: any = {};

    if (files) {
      if (files.photo) documents.photo = files.photo[0].path;
      if (files.resume) documents.resume = files.resume[0].path;
      if (files.aadhaar) documents.aadhaar = files.aadhaar[0].path;
      if (files.educationCertificates) {
        documents.educationCertificates = files.educationCertificates.map(file => file.path);
      }
      if (files.experienceCertificates) {
        documents.experienceCertificates = files.experienceCertificates.map(file => file.path);
      }
      if (files.panCard) documents.panCard = files.panCard[0].path;
    }

    // Parse JSON strings for qualifications and experience
    const parsedQualifications = typeof qualifications === 'string' ? JSON.parse(qualifications) : qualifications;
    const parsedExperience = typeof experience === 'string' ? JSON.parse(experience) : experience;
    const parsedSubjectsTeaching = typeof subjectsTeaching === 'string' ? JSON.parse(subjectsTeaching) : subjectsTeaching;
    const parsedSpecialization = typeof specialization === 'string' ? JSON.parse(specialization) : specialization;
    const parsedCoursesPreparing = typeof coursesPreparing === 'string' ? JSON.parse(coursesPreparing) : coursesPreparing;
    const parsedPreferredLanguages = typeof preferredLanguages === 'string' ? JSON.parse(preferredLanguages) : preferredLanguages;

    // Create teacher profile
    const teacher = await Teacher.create({
      userId: user._id,
      teacherName,
      dateOfBirth,
      gender,
      mobileNumber,
      email,
      alternatePhone,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      country: country || 'India',
      qualifications: parsedQualifications,
      experience: parsedExperience || [],
      totalExperience: totalExperience || 0,
      subjectsTeaching: parsedSubjectsTeaching,
      specialization: parsedSpecialization || [],
      coursesPreparing: parsedCoursesPreparing,
      availableForOnlineClasses: availableForOnlineClasses === 'true' || availableForOnlineClasses === true,
      availableForOfflineClasses: availableForOfflineClasses === 'true' || availableForOfflineClasses === true,
      preferredLanguages: parsedPreferredLanguages,
      documents,
      registrationStatus: 'pending',
      verificationStatus: 'pending',
    });

    res.status(201).json({
      message: 'Teacher registration successful',
      teacher: {
        id: teacher._id,
        name: teacher.teacherName,
        email: teacher.email,
        registrationStatus: teacher.registrationStatus,
        verificationStatus: teacher.verificationStatus,
      },
    });
  } catch (error: any) {
    console.error('Teacher registration error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    res.status(500).json({ message: error.message || 'Registration failed. Please try again.' });
  }
};

// @desc    Register a new school
// @route   POST /api/registration/school
// @access  Public
export const registerSchool = async (req: Request, res: Response) => {
  try {
    const {
      name,
      code,
      address,
      city,
      state,
      pincode,
      phone,
      email,
      principal,
      principalPhone,
      principalEmail,
      website,
      established,
      boardAffiliation,
      totalStrength,
      password,
    } = req.body;

    // Check if school code already exists
    const existingSchool = await School.findOne({ code });
    if (existingSchool) {
      return res.status(400).json({ message: 'School code already registered' });
    }

    // Check if email already exists
    const existingEmail = await School.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Handle file uploads
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const documents: any = {};

    if (files) {
      if (files.registrationCertificate) documents.registrationCertificate = files.registrationCertificate[0].path;
      if (files.affiliationCertificate) documents.affiliationCertificate = files.affiliationCertificate[0].path;
      if (files.taxDocument) documents.taxDocument = files.taxDocument[0].path;
      if (files.principalIdProof) documents.principalIdProof = files.principalIdProof[0].path;
    }

    // Create admin user for school
    const user = await User.create({
      name: principal || name,
      email: principalEmail || email,
      password,
      role: 'admin',
      phone: principalPhone || phone,
      isActive: true,
    });

    // Create school profile
    const school = await School.create({
      name,
      code,
      address,
      city,
      state,
      pincode,
      phone,
      email,
      principal,
      principalPhone,
      principalEmail,
      website,
      established,
      boardAffiliation,
      totalStrength,
      documents,
      registrationStatus: 'pending',
    });

    // Update user's schoolId
    user.schoolId = school._id as any;
    await user.save();

    res.status(201).json({
      message: 'School registration successful',
      school: {
        id: school._id,
        name: school.name,
        code: school.code,
        registrationStatus: school.registrationStatus,
      },
    });
  } catch (error: any) {
    console.error('School registration error:', error);

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      if (error.message.includes('code')) {
        return res.status(400).json({ message: 'School code already registered' });
      }
      return res.status(400).json({ message: 'Email already registered' });
    }

    res.status(500).json({ message: error.message || 'Registration failed. Please try again.' });
  }
};

// @desc    Bulk upload students via CSV/Excel
// @route   POST /api/registration/school/bulk-upload
// @access  Protected (School Admin)
export const bulkUploadStudents = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a CSV or Excel file' });
    }

    const filePath = req.file.path;
    const students: any[] = [];
    const errors: any[] = [];

    // Parse CSV file
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {
        students.push(row);
      })
      .on('end', async () => {
        let successCount = 0;
        let errorCount = 0;

        for (let i = 0; i < students.length; i++) {
          try {
            const studentData = students[i];

            // Check if user already exists
            const existingUser = await User.findOne({ email: studentData.email });
            if (existingUser) {
              errors.push({ row: i + 1, error: 'Email already exists', data: studentData });
              errorCount++;
              continue;
            }

            // Create user account
            const user = await User.create({
              name: studentData.studentName,
              email: studentData.email,
              password: studentData.password || 'defaultPassword123',
              role: 'student',
              phone: studentData.parentMobileNumber,
              isActive: true,
            });

            // Create student profile
            await Student.create({
              userId: user._id,
              courseAppliedFor: studentData.courseAppliedFor,
              studentName: studentData.studentName,
              dateOfBirth: new Date(studentData.dateOfBirth),
              gender: studentData.gender,
              schoolDetails: studentData.schoolDetails,
              parentDetails: {
                name: studentData.parentName,
                mobileNumber: studentData.parentMobileNumber,
                email: studentData.parentEmail,
              },
              addressDetails: {
                addressLine1: studentData.addressLine1,
                addressLine2: studentData.addressLine2,
                city: studentData.city,
                state: studentData.state,
                pincode: studentData.pincode,
                country: studentData.country || 'India',
              },
              admissionDetails: {
                academicYear: studentData.academicYear,
                classStandard: studentData.classStandard,
                section: studentData.section,
                admissionType: studentData.admissionType,
                transportNeeded: studentData.transportNeeded === 'true' || studentData.transportNeeded === 'yes',
                hostelNeeded: studentData.hostelNeeded === 'true' || studentData.hostelNeeded === 'yes',
                mediumOfInstruction: studentData.mediumOfInstruction,
              },
              registrationStatus: 'approved',
            });

            successCount++;
          } catch (error: any) {
            errors.push({ row: i + 1, error: error.message, data: students[i] });
            errorCount++;
          }
        }

        // Delete uploaded file after processing
        fs.unlinkSync(filePath);

        res.status(200).json({
          message: 'Bulk upload completed',
          summary: {
            total: students.length,
            success: successCount,
            errors: errorCount,
          },
          errors: errors.length > 0 ? errors : undefined,
        });
      })
      .on('error', (error) => {
        res.status(500).json({ message: 'Error processing file', error: error.message });
      });
  } catch (error: any) {
    console.error('Bulk upload error:', error);
    res.status(500).json({ message: 'Bulk upload failed', error: error.message });
  }
};
