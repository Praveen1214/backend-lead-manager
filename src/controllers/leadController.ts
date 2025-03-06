import { Request, Response } from 'express';
import Lead, { ILead } from '../models/Lead';

// Get all leads
export const getLeads = async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new lead
export const createLead = async (req: Request, res: Response) => {
  try {
    const { name, email, status } = req.body;
    
    // Check if lead with email already exists
    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res.status(400).json({ message: 'Lead with this email already exists' });
    }
    
    const newLead = new Lead({
      name,
      email,
      status: status || 'New'
    });
    
    await newLead.save();
    res.status(201).json(newLead);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};