import mongoose, { Document, Schema } from 'mongoose';

export interface IMistakeBook extends Document {
  studentId: mongoose.Types.ObjectId;
  questionId: mongoose.Types.ObjectId;
  attemptId: mongoose.Types.ObjectId;
  selectedAnswer: number;
  correctAnswer: number;
  isReviewed: boolean;
  reviewedAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const mistakeBookSchema = new Schema<IMistakeBook>(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Student ID is required'],
    },
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: [true, 'Question ID is required'],
    },
    attemptId: {
      type: Schema.Types.ObjectId,
      ref: 'StudentAttempt',
      required: [true, 'Attempt ID is required'],
    },
    selectedAnswer: {
      type: Number,
      required: true,
    },
    correctAnswer: {
      type: Number,
      required: true,
    },
    isReviewed: {
      type: Boolean,
      default: false,
    },
    reviewedAt: {
      type: Date,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
mistakeBookSchema.index({ studentId: 1, isReviewed: 1 });
mistakeBookSchema.index({ studentId: 1, questionId: 1 });

export default mongoose.model<IMistakeBook>('MistakeBook', mistakeBookSchema);
