import mongoose, { Document, Schema } from 'mongoose';

export interface ILiveClass extends Document {
  title: string;
  description: string;
  teacherId: mongoose.Types.ObjectId;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'Maths';
  topic: string;
  scheduledTime: Date;
  duration: number; // Duration in minutes
  meetingLink?: string;
  recordingUrl?: string;
  thumbnail?: string;
  status: 'scheduled' | 'live' | 'completed' | 'cancelled';
  attendees: mongoose.Types.ObjectId[]; // Student IDs
  maxAttendees?: number;
  isRecorded: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const liveClassSchema = new Schema<ILiveClass>(
  {
    title: {
      type: String,
      required: [true, 'Class title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Teacher ID is required'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      enum: ['Physics', 'Chemistry', 'Biology', 'Maths'],
    },
    topic: {
      type: String,
      required: [true, 'Topic is required'],
      trim: true,
    },
    scheduledTime: {
      type: Date,
      required: [true, 'Scheduled time is required'],
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
      min: 15,
      default: 60,
    },
    meetingLink: {
      type: String,
    },
    recordingUrl: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    status: {
      type: String,
      enum: ['scheduled', 'live', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    maxAttendees: {
      type: Number,
    },
    isRecorded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
liveClassSchema.index({ teacherId: 1, status: 1 });
liveClassSchema.index({ scheduledTime: 1, status: 1 });
liveClassSchema.index({ subject: 1, status: 1 });

export default mongoose.model<ILiveClass>('LiveClass', liveClassSchema);
