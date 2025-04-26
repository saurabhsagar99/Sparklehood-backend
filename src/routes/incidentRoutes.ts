import { Router } from 'express';
import { getAllIncidents, createIncident, getIncidentById, deleteIncident } from '../controllers/incidentController';

const router = Router();

router.get('/incidents', getAllIncidents);
router.post('/incidents', createIncident);
router.get('/incidents/:id', getIncidentById);
router.delete('/incidents/:id', deleteIncident);

export default router;
