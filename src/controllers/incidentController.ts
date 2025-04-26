import { Request, Response } from 'express';
import Incident from '../models/incidentModel';

// GET incidents
const getAllIncidents = async (req: Request, res: Response) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// POST incidents
const createIncident = async (req: Request, res: Response) => {
  try {
    const { title, description, severity } = req.body;

    if (!title || !description || !severity) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!['Low', 'Medium', 'High'].includes(severity)) {
      return res.status(400).json({ message: 'Severity must be Low, Medium, or High.' });
    }

    const incident = await Incident.create({ title, description, severity });

    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// GET incidents/{id}
const getIncidentById = async (req: Request, res: Response) => {
  try {
    const incident = await Incident.findById(req.params.id);

    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }

    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// DELETE incidents/{id}
const deleteIncident = async (req: Request, res: Response) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);

    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }

    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getAllIncidents, createIncident, getIncidentById, deleteIncident };