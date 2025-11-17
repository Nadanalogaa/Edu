import mongoose, { Document, Schema } from 'mongoose';

export interface IQualification {
  degree: string;
  institution: string;
  yearOfPassing: number;
  percentage?: number;
  certificateUrl?: string;
}

export interface IExperience {
  institution: string;
  designation: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  subjects?: string[];
}

export interface ITeacherDocuments {
  photo?: string;
  resume?: string;
  aadhaar?: string;
  educationCertificates?: string[];
  experienceCertificates?: string[];
  panCard?: string;
}

export interface ITeacher extends Document {
  userId: mongoose.Types.ObjectId;

  // Basic Details
  teacherName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  mobileNumber: string;
  email: string;
  alternatePhone?: string;

  // Address Details
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;

  // Qualifications
  qualifications: IQualification[];

  // Experience
  experience: IExperience[];
  totalExperience?: number; // in years

  // Subjects & Specialization
  subjectsTeaching: string[];
  specialization: string[];
  coursesPreparing: ('NEET' | 'JEE')[];

  // Availability
  availableForOnlineClasses: boolean;
  availableForOfflineClasses: boolean;
  preferredLanguages: string[];

  // Documents
  documents: ITeacherDocuments;

  // Registration Status
  registrationStatus: 'pending' | 'approved' | 'rejected';
  verificationStatus: 'pending' | 'verified' | 'rejected';
  registrationDate: Date;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const qualificationSchema = new Schema<IQualification>({
  degree: {
    type: String,
    required: [true, 'Degree is required'],
    trim: true,
  },
  institution: {
    type: String,
    required: [true, 'Institution is required'],
    trim: true,
  },
  yearOfPassing: {
    type: Number,
    required: [true, 'Year of passing is required'],
  },
  percentage: {
    type: Number,
    min: 0,
    max: 100,
  },
  certificateUrl: {
    type: String,
  },
}, { _id: true });

const experienceSchema = new Schema<IExperience>({
  institution: {
    type: String,
    required: [true, 'Institution is required'],
    trim: true,
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  endDate: {
    type: Date,
  },
  isCurrent: {
    type: Boolean,
    default: false,
  },
  subjects: [{
    type: String,
  }],
}, { _id: true });

const teacherDocumentsSchema = new Schema<ITeacherDocuments>({
  photo: String,
  resume: String,
  aadhaar: String,
  educationCertificates: [String],
  experienceCertificates: [String],
  panCard: String,
}, { _id: false });

const teacherSchema = new Schema<ITeacher>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    teacherName: {
      type: String,
      required: [true, 'Teacher name is required'],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: [true, 'Gender is required'],
    },
    mobileNumber: {
      type: String,
      required: [true, 'Mobile number is required'],
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit mobile number'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    alternatePhone: {
      type: String,
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit mobile number'],
    },
    addressLine1: {
      type: String,
      required: [true, 'Address Line 1 is required'],
      trim: true,
    },
    addressLine2: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
    },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'],
      match: [/^[0-9]{6}$/, 'Please provide a valid 6-digit pincode'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      default: 'India',
      trim: true,
    },
    qualifications: {
      type: [qualificationSchema],
      validate: {
        validator: function(v: IQualification[]) {
          return v && v.length > 0;
        },
        message: 'At least one qualification is required',
      },
    },
    experience: {
      type: [experienceSchema],
      default: [],
    },
    totalExperience: {
      type: Number,
      default: 0,
    },
    subjectsTeaching: {
      type: [String],
      required: [true, 'Subjects teaching are required'],
    },
    specialization: {
      type: [String],
      default: [],
    },
    coursesPreparing: {
      type: [String],
      enum: ['NEET', 'JEE'],
      required: [true, 'Courses preparing for are required'],
    },
    availableForOnlineClasses: {
      type: Boolean,
      default: true,
    },
    availableForOfflineClasses: {
      type: Boolean,
      default: false,
    },
    preferredLanguages: {
      type: [String],
      default: ['English'],
    },
    documents: {
      type: teacherDocumentsSchema,
      default: {},
    },
    registrationStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    verificationStatus: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending',
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
teacherSchema.index({ userId: 1 });
teacherSchema.index({ email: 1 });
teacherSchema.index({ registrationStatus: 1 });
teacherSchema.index({ verificationStatus: 1 });

export default mongoose.model<ITeacher>('Teacher', teacherSchema);
