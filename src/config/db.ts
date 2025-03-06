// db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined');
    }
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Database connection error:', err.message);
    } else {
      console.error('Database connection error:', err);
    }
    process.exit(1);
  }
};

export default connectDB;
