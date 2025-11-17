import mongoose, { Document, Schema } from 'mongoose';

interface IAnswer {
  questionId: mongoose.Types.ObjectId;
  selectedAnswer: number; // Index of selected option
  isCorrect: boolean;
  marksObtained: number;
  timeTaken: number; // Time in seconds
}

export interface IStudentAttempt extends Document {
  studentId: mongoose.Types.ObjectId;
  testId: mongoose.Types.ObjectId;
  answers: IAnswer[];
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  totalMarks: number;
  marksObtained: number;
  percentage: number;
  timeTaken: number; // Total time in seconds
  startTime: Date;
  endTime: Date;
  status: 'in-progress' | 'completed' | 'abandoned';
  createdAt: Date;
  updatedAt: Date;
}

const answerSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  selectedAnswer: {
    type: Number,
    min: -1, // -1 for skipped
    max: 3,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
    default: 0,
  },
  timeTaken: {
    type: Number,
    required: true,
    default: 0,
  },
});

const studentAttemptSchema = new Schema<IStudentAttempt>(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Student ID is required'],
    },
    testId: {
      type: Schema.Types.ObjectId,
      ref: 'Test',
      required: [true, 'Test ID is required'],
    },
    answers: [answerSchema],
    totalQuestions: {
      type: Number,
      required: true,
    },
    correctAnswers: {
      type: Number,
      default: 0,
    },
    wrongAnswers: {
      type: Number,
      default: 0,
    },
    skippedAnswers: {
      type: Number,
      default: 0,
    },
    totalMarks: {
      type: Number,
      required: true,
    },
    marksObtained: {
      type: Number,
      default: 0,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    timeTaken: {
      type: Number,
      default: 0,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['in-progress', 'completed', 'abandoned'],
      default: 'in-progress',
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
studentAttemptSchema.index({ studentId: 1, testId: 1 });
studentAttemptSchema.index({ studentId: 1, status: 1 });

export default mongoose.model<IStudentAttempt>('StudentAttempt', studentAttemptSchema);
