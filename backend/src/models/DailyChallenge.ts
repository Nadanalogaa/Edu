import mongoose, { Document, Schema } from 'mongoose';

export interface IDailyChallenge extends Document {
  date: Date;
  questionIds: mongoose.Types.ObjectId[];
  reward: number; // Coins reward
  completedBy: mongoose.Types.ObjectId[]; // Student IDs who completed
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const dailyChallengeSchema = new Schema<IDailyChallenge>(
  {
    date: {
      type: Date,
      required: [true, 'Date is required'],
      unique: true,
    },
    questionIds: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
      },
    ],
    reward: {
      type: Number,
      required: [true, 'Reward is required'],
      default: 50,
      min: 0,
    },
    completedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
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
dailyChallengeSchema.index({ date: 1, isActive: 1 });

export default mongoose.model<IDailyChallenge>('DailyChallenge', dailyChallengeSchema);
