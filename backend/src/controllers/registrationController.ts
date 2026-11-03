import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../models/User';
import { Students } from '../models/Student';
import { Teachers } from '../models/Teacher';
import { Schools } from '../models/School';
import { query, withTransaction } from '../config/database';
import fs from 'fs';
import csvParser from 'csv-parser';

const MOBILE_RE = /^[0-9]{10}$/;
const PINCODE_RE = /^[0-9]{6}$/;
const AADHAAR_RE = /^[0-9]{12}$/;
const EMAIL_RE = /^\S+@\S+\.\S+$/;

class ValidationError extends Error {
  name = 'ValidationError';
}

/** Collects the messages of failed rules and throws them together (as Mongoose did). */
const validate = (rules: Array<[boolean, string]>) => {
  const messages = rules.filter(([ok]) => !ok).map(([, message]) => message);
  if (messages.length) throw new ValidationError(messages.join(', '));
};
const optional = (value: any, re: RegExp) => !value || re.test(String(value));

/** Maps database and validation errors to the 400 responses the forms expect. */
const registrationError = (res: Response, error: any, label: string) => {
  console.error(`${label} registration error:`, error);

  if (error.name === 'ValidationError' || error.status === 400) {
    return res.status(400).json({ message: error.message });
  }

  // Unique violation
  if (error.code === '23505') {
    if (String(error.constraint).includes('code')) {
      return res.status(400).json({ message: 'School code already registered' });
    }
    return res.status(400).json({ message: 'Email already registered' });
  }

  // Missing required value / value outside the allowed list / bad date or number
  if (['23502', '23514', '22P02', '22007', '22008'].includes(error.code)) {
    return res.status(400).json({ message: `Invalid or missing field${error.column ? `: ${error.column}` : ''}` });
  }

  res.status(500).json({ message: error.message || 'Registration failed. Please try again.' });
};

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

    validate([
      [Boolean(email) && EMAIL_RE.test(email), 'Please provide a valid email'],
      [Boolean(parentName), 'Parent name is required'],
      [MOBILE_RE.test(String(parentMobileNumber || '')), 'Please provide a valid 10-digit mobile number'],
      [optional(parentEmail, EMAIL_RE), 'Please provide a valid email'],
      [optional(parentAadhaar, AADHAAR_RE), 'Please provide a valid 12-digit Aadhaar number'],
      [Boolean(addressLine1), 'Address Line 1 is required'],
      [Boolean(city), 'City is required'],
      [Boolean(state), 'State is required'],
      [PINCODE_RE.test(String(pincode || '')), 'Please provide a valid 6-digit pincode'],
      [Boolean(academicYear), 'Academic year is required'],
      [Boolean(classStandard), 'Class/Standard is required'],
      [Boolean(admissionType), 'Admission type is required'],
      [Boolean(mediumOfInstruction), 'Medium of instruction is required'],
    ]);

    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

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

    // Create user account and student profile together
    const { user, student } = await withTransaction(async (client) => {
      const user = await createUser(
        {
          name: studentName,
          email,
          password,
          role: 'student',
          phone: parentMobileNumber,
          isActive: true,
        },
        client
      );

      const student = await Students.insert({
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
      }, client);

      return { user, student };
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
    registrationError(res, error, 'Student');
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
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

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

    validate([
      [Boolean(email) && EMAIL_RE.test(email), 'Please provide a valid email'],
      [MOBILE_RE.test(String(mobileNumber || '')), 'Please provide a valid 10-digit mobile number'],
      [optional(alternatePhone, MOBILE_RE), 'Please provide a valid 10-digit mobile number'],
      [Boolean(addressLine1), 'Address Line 1 is required'],
      [Boolean(city), 'City is required'],
      [Boolean(state), 'State is required'],
      [PINCODE_RE.test(String(pincode || '')), 'Please provide a valid 6-digit pincode'],
      [Array.isArray(parsedQualifications) && parsedQualifications.length > 0, 'At least one qualification is required'],
      [Array.isArray(parsedSubjectsTeaching) && parsedSubjectsTeaching.length > 0, 'Subjects teaching are required'],
      [Array.isArray(parsedCoursesPreparing) && parsedCoursesPreparing.length > 0, 'Courses preparing for are required'],
    ]);

    // Create user account and teacher profile together
    const teacher = await withTransaction(async (client) => {
      const user = await createUser(
        {
          name: teacherName,
          email,
          password,
          role: 'teacher',
          phone: mobileNumber,
          isActive: true,
        },
        client
      );

      return Teachers.insert({
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
      }, client);
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
    registrationError(res, error, 'Teacher');
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

    validate([
      [Boolean(name), 'School name is required'],
      [Boolean(code), 'School code is required'],
      [Boolean(email) && EMAIL_RE.test(email), 'Please provide a valid email'],
      [optional(principalPhone, MOBILE_RE), 'Please provide a valid 10-digit mobile number'],
      [optional(principalEmail, EMAIL_RE), 'Please provide a valid email'],
    ]);
    const schoolCode = String(code).trim().toUpperCase();
    const schoolEmail = String(email).trim().toLowerCase();

    // Check if school code already exists
    const [existingSchool] = await query('SELECT 1 FROM schools WHERE code = $1', [schoolCode]);
    if (existingSchool) {
      return res.status(400).json({ message: 'School code already registered' });
    }

    // Check if email already exists
    const [existingEmail] = await query('SELECT 1 FROM schools WHERE email = $1', [schoolEmail]);
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

    const school = await withTransaction(async (client) => {
      // Create school profile
      const school = await Schools.insert({
        name,
        code: schoolCode,
        address,
        city,
        state,
        pincode,
        phone,
        email: schoolEmail,
        principal,
        principalPhone,
        principalEmail: principalEmail ? String(principalEmail).trim().toLowerCase() : undefined,
        website,
        established: established || undefined,
        boardAffiliation,
        totalStrength: totalStrength || undefined,
        documents,
        registrationStatus: 'pending',
      }, client);

      // Create admin user for school
      await createUser(
        {
          name: principal || name,
          email: principalEmail || email,
          password,
          role: 'admin',
          phone: principalPhone || phone,
          schoolId: school._id,
          isActive: true,
        },
        client
      );

      return school;
    });

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
    registrationError(res, error, 'School');
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
            const existingUser = await findUserByEmail(studentData.email);
            if (existingUser) {
              errors.push({ row: i + 1, error: 'Email already exists', data: studentData });
              errorCount++;
              continue;
            }

            await withTransaction(async (client) => {
              // Create user account
              const user = await createUser({
                name: studentData.studentName,
                email: studentData.email,
                password: studentData.password || 'defaultPassword123',
                role: 'student',
                phone: studentData.parentMobileNumber,
                isActive: true,
              }, client);

              // Create student profile
              await Students.insert({
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
              }, client);
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
