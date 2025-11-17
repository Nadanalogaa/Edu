import mongoose, { Document, Schema } from 'mongoose';

export interface ISchoolDocuments {
  registrationCertificate?: string;
  affiliationCertificate?: string;
  taxDocument?: string;
  principalIdProof?: string;
}

export interface ISchool extends Document {
  name: string;
  code: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  principal?: string;
  principalPhone?: string;
  principalEmail?: string;
  website?: string;
  established?: number;
  boardAffiliation?: string;
  totalStrength?: number;
  documents?: ISchoolDocuments;
  registrationStatus: 'pending' | 'approved' | 'rejected';
  registrationDate?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const schoolDocumentsSchema = new Schema<ISchoolDocuments>({
  registrationCertificate: String,
  affiliationCertificate: String,
  taxDocument: String,
  principalIdProof: String,
}, { _id: false });

const schoolSchema = new Schema<ISchool>(
  {
    name: {
      type: String,
      required: [true, 'School name is required'],
      trim: true,
    },
    code: {
      type: String,
      required: [true, 'School code is required'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      default: 'Tamil Nadu',
    },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
    },
    principal: {
      type: String,
    },
    principalPhone: {
      type: String,
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit mobile number'],
    },
    principalEmail: {
      type: String,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    website: {
      type: String,
      trim: true,
    },
    established: {
      type: Number,
    },
    boardAffiliation: {
      type: String,
      trim: true,
    },
    totalStrength: {
      type: Number,
    },
    documents: {
      type: schoolDocumentsSchema,
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
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISchool>('School', schoolSchema);
