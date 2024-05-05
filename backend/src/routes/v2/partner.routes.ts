import { Router } from 'express';
import PartnerV2Controller from '../../controllers/partnerV2.controller';
import apiAuth from '../../middlewares/apiAuthMiddlewares';

const router = Router();

// router.get('/', apiAuth, PartnerV2Controller.getAllPartner);
router.post('/', PartnerV2Controller.createPartner);
router.post('/login', apiAuth, PartnerV2Controller.loginPartner);
router.get('/:id', apiAuth, PartnerV2Controller.getPartnerById);
router.patch('/:id', apiAuth, PartnerV2Controller.updatePartner);
// router.delete('/:id', apiAuth, PartnerV2Controller.deletePartner);

export { router as PartnerRoute };
