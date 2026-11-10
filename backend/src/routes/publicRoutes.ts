import express from 'express';
import { parentReport } from '../controllers/parentController';

// Pages anyone with the link can open (no login)
const router = express.Router();

router.get('/parent-report/:token', parentReport);

export default router;
