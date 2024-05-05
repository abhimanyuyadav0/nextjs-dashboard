import { Router } from 'express';
import apiAuth from '../../middlewares/apiAuthMiddlewares';
import ActivityController from '../../controllers/activity.controller';
const router = Router();

router.get('/:orderId', apiAuth, ActivityController.getActivityBySIdForPartner);

export { router as activityRoute };
