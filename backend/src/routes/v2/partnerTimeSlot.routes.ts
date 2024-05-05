import { Router } from 'express';
import PartnerTimslotController from '../../controllers/partnerTimeSlot.controller';
import apiAuth from '../../middlewares/apiAuthMiddlewares';

const router = Router();

router.get('/', apiAuth, PartnerTimslotController.getAllTimeslotByPincode);
// router.post('/', apiAuth, PartnerTimslotController.createTimeSlot);
// router.get('/:id', apiAuth, PartnerTimslotController.getTimeSlotById);
// router.patch('/:id', apiAuth, PartnerTimslotController.updateTimeSlot);
// router.delete('/:id', apiAuth, PartnerTimslotController.deleteTimeSlot);

export { router as PartnerTimeSlotRoute };
