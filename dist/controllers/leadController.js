"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLead = exports.getLeads = void 0;
const Lead_1 = __importDefault(require("../models/Lead"));
// Get all leads
const getLeads = async (req, res, next) => {
    try {
        const leads = await Lead_1.default.find().sort({ createdAt: -1 });
        res.status(200).json(leads);
    }
    catch (err) {
        next(err);
    }
};
exports.getLeads = getLeads;
// Create a new lead
const createLead = async (req, res, next) => {
    try {
        const { name, email, status } = req.body;
        // Check if lead with email already exists
        const existingLead = await Lead_1.default.findOne({ email });
        if (existingLead) {
            res.status(400).json({ message: 'Lead with this email already exists' });
            return;
        }
        const newLead = new Lead_1.default({
            name,
            email,
            status: status || 'New'
        });
        await newLead.save();
        res.status(201).json(newLead);
    }
    catch (err) {
        next(err);
    }
};
exports.createLead = createLead;
