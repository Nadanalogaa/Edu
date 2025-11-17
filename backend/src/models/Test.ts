import mongoose, { Document, Schema } from 'mongoose';

export interface ITest extends Document {
  title: string;
  description: string;
  createdBy: mongoose.Types.ObjectId; // Teacher ID
  schoolId?: mongoose.Types.ObjectId;
  type: 'practice' | 'exam' | 'daily-challenge';
  examType: 'NEET' | 'JEE' | 'Both';
  subjects: string[]; // Array of subjects included
  duration: number; // Duration in minutes
  totalMarks: number;
  questions: mongoose.Types.ObjectId[]; // Array of Question IDs
  startTime?: Date;
  endTime?: Date;
  isPublished: boolean;
  isActive: boolean;
  sharedWithStudents: mongoose.Types.ObjectId[]; // Array of student IDs
  sharedWithGrades: string[]; // Array of grades/sections (e.g., '12th', '11th')
  sharedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const testSchema = new Schema<ITest>(
  {
    title: {
      type: String,
      required: [true, 'Test title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Creator is required'],
    },
    schoolId: {
      type: Schema.Types.ObjectId,
      ref: 'School',
    },
    type: {
      type: String,
      enum: ['practice', 'exam', 'daily-challenge'],
      required: [true, 'Test type is required'],
      default: 'practice',
    },
    examType: {
      type: String,
      enum: ['NEET', 'JEE', 'Both'],
      required: [true, 'Exam type is required'],
    },
    subjects: {
      type: [String],
      required: [true, 'At least one subject is required'],
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
      min: 1,
    },
    totalMarks: {
      type: Number,
      required: [true, 'Total marks is required'],
      min: 1,
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    sharedWithStudents: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    sharedWithGrades: {
      type: [String],
      default: [],
    },
    sharedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
testSchema.index({ createdBy: 1, isActive: 1 });
testSchema.index({ schoolId: 1, isPublished: 1 });
testSchema.index({ sharedWithStudents: 1, isActive: 1 });
testSchema.index({ sharedWithGrades: 1, isActive: 1 });

export default mongoose.model<ITest>('Test', testSchema);
