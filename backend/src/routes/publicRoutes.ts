import express from 'express';
import { parentReport } from '../controllers/parentController';
import { publicSchool } from '../controllers/brandingController';

// Pages anyone with the link can open (no login)
const router = express.Router();

router.get('/parent-report/:token', parentReport);
router.get('/school/:code', publicSchool);

export default router;
