import express from 'express';
import {
  getOverview,
  listSchools,
  createSchool,
  updateSchool,
  resetSchoolAdminPassword,
  setupDemo,
} from '../controllers/ownerController';
import { protect, authorize } from '../middleware/auth';

// The platform owner managing schools as customers
const router = express.Router();

router.use(protect);
router.use(authorize('owner'));

router.get('/overview', getOverview);
router.get('/schools', listSchools);
router.post('/schools', createSchool);
router.patch('/schools/:id', updateSchool);
router.post('/schools/:id/reset-admin-password', resetSchoolAdminPassword);
router.post('/demo', setupDemo);

export default router;
