import mongoose, { Document, Schema } from 'mongoose';

export interface IQuestion extends Document {
  externalId?: number; // Original _id from Excel file
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths';
  unit?: number;
  chapter?: number;
  chapterName?: {
    en: string;
    ta: string;
  };
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: {
    en: string;
    ta: string;
  };
  options: {
    en: string[];
    ta: string[];
  };
  correctAnswer: number; // Index of correct option (0-3)
  explanation: {
    en: string;
    ta: string;
  };
  videoUrl?: string;
  marks: number;
  examType: 'NEET' | 'JEE' | 'Both';
  isActive: boolean;
  createdBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const questionSchema = new Schema<IQuestion>(
  {
    externalId: {
      type: Number,
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      enum: ['Physics', 'Chemistry', 'Biology', 'Maths'],
    },
    unit: {
      type: Number,
    },
    chapter: {
      type: Number,
    },
    chapterName: {
      en: {
        type: String,
      },
      ta: {
        type: String,
      },
    },
    topic: {
      type: String,
      required: [true, 'Topic is required'],
      trim: true,
    },
    difficulty: {
      type: String,
      required: [true, 'Difficulty is required'],
      enum: ['easy', 'medium', 'hard'],
      default: 'medium',
    },
    question: {
      en: {
        type: String,
        required: [true, 'English question text is required'],
      },
      ta: {
        type: String,
        required: [true, 'Tamil question text is required'],
      },
    },
    options: {
      en: {
        type: [String],
        required: [true, 'English options are required'],
        validate: {
          validator: function (v: string[]) {
            return v.length === 4;
          },
          message: 'Must have exactly 4 options',
        },
      },
      ta: {
        type: [String],
        required: [true, 'Tamil options are required'],
        validate: {
          validator: function (v: string[]) {
            return v.length === 4;
          },
          message: 'Must have exactly 4 options',
        },
      },
    },
    correctAnswer: {
      type: Number,
      required: [true, 'Correct answer index is required'],
      min: 0,
      max: 3,
    },
    explanation: {
      en: {
        type: String,
        required: [true, 'English explanation is required'],
      },
      ta: {
        type: String,
        required: [true, 'Tamil explanation is required'],
      },
    },
    videoUrl: {
      type: String,
    },
    marks: {
      type: Number,
      required: [true, 'Marks are required'],
      default: 4,
      min: 1,
    },
    examType: {
      type: String,
      enum: ['NEET', 'JEE', 'Both'],
      default: 'Both',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
questionSchema.index({ subject: 1, topic: 1, difficulty: 1 });
questionSchema.index({ subject: 1, unit: 1, chapter: 1 });
questionSchema.index({ examType: 1, isActive: 1 });
questionSchema.index({ externalId: 1 }, { sparse: true });

export default mongoose.model<IQuestion>('Question', questionSchema);
