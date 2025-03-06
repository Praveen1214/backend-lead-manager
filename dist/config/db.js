"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// db.ts
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined');
        }
        await mongoose_1.default.connect(mongoURI);
        console.log('MongoDB connected');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error:', err.message);
        }
        else {
            console.error('Database connection error:', err);
        }
        process.exit(1);
    }
};
exports.default = connectDB;
