import { Router } from 'express';
import apiAuth from '../../middlewares/apiAuthMiddlewares';
import ServicesController from '../../controllers/service.controller';

const router = Router();

router.get('/', apiAuth, ServicesController.getServicesForPartner);

export { router as PartnerServiceRoute };
