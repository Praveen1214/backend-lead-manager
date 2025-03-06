// src/controllers/leadController.ts
import { Request, Response, NextFunction, RequestHandler } from 'express';
import Lead from '../models/Lead';

// Get all leads
export const getLeads: RequestHandler = async (req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (err: unknown) {
    next(err);
  }
};

// Create a new lead
export const createLead: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, status } = req.body;

    // Check if lead with email already exists
    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      res.status(400).json({ message: 'Lead with this email already exists' });
      return;
    }

    const newLead = new Lead({
      name,
      email,
      status: status || 'New'
    });

    await newLead.save();
    res.status(201).json(newLead);
  } catch (err: unknown) {
    next(err);
  }
};
