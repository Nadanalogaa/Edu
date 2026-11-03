import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../models/User';
import { Students } from '../models/Student';
import { Teachers } from '../models/Teacher';
import { Schools } from '../models/School';
import { query, withTransaction } from '../config/database';
import { schoolBlockReason } from '../utils/tenancy';
import { isBoard } from '../models/Syllabus';

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

/** Class 6-12 from "9", "9th", "IX"-free inputs; null if not a valid class. */
export const parseClassGrade = (value: any): number | null => {
  const match = String(value ?? '').trim().match(/^(\d{1,2})(st|nd|rd|th)?$/i);
  const grade = match ? Number(match[1]) : NaN;
  return grade >= 6 && grade <= 12 ? grade : null;
};

/** The school a student or teacher is joining, by the code the school gives them. */
const findJoinableSchool = async (schoolCode: any) => {
  const code = String(schoolCode || '').trim().toUpperCase();
  if (!code) throw new ValidationError('School code is required. Please ask your school for it.');
  const [row] = await query('SELECT * FROM schools WHERE code = $1', [code]);
  const school = Schools.toDoc(row);
  if (!school) throw new ValidationError('No school found with this school code');
  if (schoolBlockReason(school)) throw new ValidationError('This school is not accepting registrations right now');
  return school;
};

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
      // The school the student studies in
      schoolCode,
    } = req.body;

    const classGrade = parseClassGrade(classStandard);
    validate([
      [Boolean(email) && EMAIL_RE.test(email), 'Please provide a valid email'],
      [!courseAppliedFor || ['NEET', 'JEE'].includes(courseAppliedFor), 'Course must be NEET or JEE'],
      [Boolean(parentName), 'Parent name is required'],
      [MOBILE_RE.test(String(parentMobileNumber || '')), 'Please provide a valid 10-digit mobile number'],
      [optional(parentEmail, EMAIL_RE), 'Please provide a valid email'],
      [optional(parentAadhaar, AADHAAR_RE), 'Please provide a valid 12-digit Aadhaar number'],
      [Boolean(addressLine1), 'Address Line 1 is required'],
      [Boolean(city), 'City is required'],
      [Boolean(state), 'State is required'],
      [PINCODE_RE.test(String(pincode || '')), 'Please provide a valid 6-digit pincode'],
      [Boolean(academicYear), 'Academic year is required'],
      [classGrade !== null, 'Class must be between 6th and 12th'],
      [Boolean(admissionType), 'Admission type is required'],
      [Boolean(mediumOfInstruction), 'Medium of instruction is required'],
    ]);

    const school = await findJoinableSchool(schoolCode);

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
          schoolId: school._id,
          classGrade,
          grade: `${classGrade}th`,
          section: section ? String(section).trim().toUpperCase() : undefined,
          // Active once the school approves (and has a free seat)
          isActive: false,
        },
        client
      );

      const student = await Students.insert({
        userId: user._id,
        courseAppliedFor: courseAppliedFor || null,
        studentName,
        dateOfBirth,
        gender,
        schoolDetails: schoolDetails || school.name,
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
      message: `Registration received. ${school.name} will approve your account before you can sign in.`,
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
      // The school the teacher works in
      schoolCode,
    } = req.body;

    const school = await findJoinableSchool(schoolCode);

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
      [
        !parsedCoursesPreparing || (Array.isArray(parsedCoursesPreparing) && parsedCoursesPreparing.every((c: any) => ['NEET', 'JEE'].includes(c))),
        'Courses must be NEET or JEE',
      ],
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
          schoolId: school._id,
          // Active once the school approves
          isActive: false,
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
        coursesPreparing: parsedCoursesPreparing || [],
        availableForOnlineClasses: availableForOnlineClasses === 'true' || availableForOnlineClasses === true,
        availableForOfflineClasses: availableForOfflineClasses === 'true' || availableForOfflineClasses === true,
        preferredLanguages: parsedPreferredLanguages,
        documents,
        registrationStatus: 'pending',
        verificationStatus: 'pending',
      }, client);
    });

    res.status(201).json({
      message: `Registration received. ${school.name} will approve your account before you can sign in.`,
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
      board,
    } = req.body;

    validate([
      [isBoard(board), 'Please choose the board: Tamil Nadu State Board or CBSE'],
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
        board,
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
      message: 'School registration received. You can sign in once it is approved.',
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
