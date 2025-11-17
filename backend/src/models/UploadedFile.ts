import mongoose, { Document, Schema } from 'mongoose';

export interface IUploadedFile extends Document {
  fileName: string;
  examType: 'NEET' | 'JEE' | 'Both';
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths';
  unit: number;
  chapter: number;
  chapterName: string;
  questionCount: number;
  questionIds: mongoose.Types.ObjectId[];
  uploadedBy: mongoose.Types.ObjectId;
  uploadDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const uploadedFileSchema = new Schema<IUploadedFile>(
  {
    fileName: {
      type: String,
      required: [true, 'File name is required'],
      trim: true,
    },
    examType: {
      type: String,
      enum: ['NEET', 'JEE', 'Both'],
      required: [true, 'Exam type is required'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      enum: ['Physics', 'Chemistry', 'Biology', 'Maths'],
    },
    unit: {
      type: Number,
      required: [true, 'Unit is required'],
    },
    chapter: {
      type: Number,
      required: [true, 'Chapter is required'],
    },
    chapterName: {
      type: String,
      required: [true, 'Chapter name is required'],
      trim: true,
    },
    questionCount: {
      type: Number,
      required: [true, 'Question count is required'],
      min: 0,
    },
    questionIds: [{
      type: Schema.Types.ObjectId,
      ref: 'Question',
    }],
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Uploader is required'],
    },
    uploadDate: {
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

// Index for efficient queries
uploadedFileSchema.index({ examType: 1, subject: 1, isActive: 1 });
uploadedFileSchema.index({ uploadDate: -1 });
uploadedFileSchema.index({ uploadedBy: 1 });

export default mongoose.model<IUploadedFile>('UploadedFile', uploadedFileSchema);
