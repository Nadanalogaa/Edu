import mongoose, { Document, Schema } from 'mongoose';

export interface IParentDetails {
  name: string;
  mobileNumber: string;
  email?: string;
  aadhaar?: string;
  photoUrl?: string;
}

export interface IAddressDetails {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface IAdmissionDetails {
  academicYear: string;
  classStandard: string;
  section?: string;
  admissionType: 'new' | 'transfer';
  transportNeeded: boolean;
  hostelNeeded: boolean;
  mediumOfInstruction: string;
}

export interface IDocuments {
  birthCertificate?: string;
  transferCertificate?: string;
  previousMarksCard?: string;
  studentAadhaar?: string;
  parentAadhaar?: string;
  studentPhoto?: string;
  parentPhoto?: string;
}

export interface IStudent extends Document {
  userId: mongoose.Types.ObjectId;

  // Basic Details
  courseAppliedFor: 'NEET' | 'JEE';
  studentName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  schoolDetails?: string;

  // Parent/Guardian Details
  parentDetails: IParentDetails;

  // Address Details
  addressDetails: IAddressDetails;

  // Admission Details
  admissionDetails: IAdmissionDetails;

  // Documents
  documents: IDocuments;

  // Registration Status
  registrationStatus: 'pending' | 'approved' | 'rejected';
  registrationDate: Date;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const parentDetailsSchema = new Schema<IParentDetails>({
  name: {
    type: String,
    required: [true, 'Parent name is required'],
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: [true, 'Parent mobile number is required'],
    match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit mobile number'],
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  aadhaar: {
    type: String,
    match: [/^[0-9]{12}$/, 'Please provide a valid 12-digit Aadhaar number'],
  },
  photoUrl: {
    type: String,
  },
}, { _id: false });

const addressDetailsSchema = new Schema<IAddressDetails>({
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
}, { _id: false });

const admissionDetailsSchema = new Schema<IAdmissionDetails>({
  academicYear: {
    type: String,
    required: [true, 'Academic year is required'],
  },
  classStandard: {
    type: String,
    required: [true, 'Class/Standard is required'],
  },
  section: {
    type: String,
  },
  admissionType: {
    type: String,
    enum: ['new', 'transfer'],
    required: [true, 'Admission type is required'],
  },
  transportNeeded: {
    type: Boolean,
    default: false,
  },
  hostelNeeded: {
    type: Boolean,
    default: false,
  },
  mediumOfInstruction: {
    type: String,
    required: [true, 'Medium of instruction is required'],
  },
}, { _id: false });

const documentsSchema = new Schema<IDocuments>({
  birthCertificate: String,
  transferCertificate: String,
  previousMarksCard: String,
  studentAadhaar: String,
  parentAadhaar: String,
  studentPhoto: String,
  parentPhoto: String,
}, { _id: false });

const studentSchema = new Schema<IStudent>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    courseAppliedFor: {
      type: String,
      enum: ['NEET', 'JEE'],
      required: [true, 'Course is required'],
    },
    studentName: {
      type: String,
      required: [true, 'Student name is required'],
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
    schoolDetails: {
      type: String,
      trim: true,
    },
    parentDetails: {
      type: parentDetailsSchema,
      required: [true, 'Parent details are required'],
    },
    addressDetails: {
      type: addressDetailsSchema,
      required: [true, 'Address details are required'],
    },
    admissionDetails: {
      type: admissionDetailsSchema,
      required: [true, 'Admission details are required'],
    },
    documents: {
      type: documentsSchema,
      default: {},
    },
    registrationStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
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

// Index for faster queries
studentSchema.index({ userId: 1 });
studentSchema.index({ registrationStatus: 1 });

export default mongoose.model<IStudent>('Student', studentSchema);
