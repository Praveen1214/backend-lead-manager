import mongoose, { Document, Schema } from 'mongoose';

export type LeadStatus = 'New' | 'Engaged' | 'Proposal Sent' | 'Closed-Won' | 'Closed-Lost';

export interface ILead extends Document {
  name: string;
  email: string;
  status: LeadStatus;
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  status: {
    type: String,
    enum: ['New', 'Engaged', 'Proposal Sent', 'Closed-Won', 'Closed-Lost'],
    default: 'New'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<ILead>('Lead', LeadSchema);