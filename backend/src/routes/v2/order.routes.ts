import { Router } from 'express';
import apiAuth from '../../middlewares/apiAuthMiddlewares';
import OrderController from '../../controllers/orders.controller';
const router = Router();

router.post('/', apiAuth, OrderController.createOrderForPartner);
router.get('/', apiAuth, OrderController.getAllPartnerOrder);
router.get('/:orderId', apiAuth, OrderController.getPartnerOrderByOrderId);
router.patch('/payment', apiAuth, OrderController.updatePartnerOrderPaymentStatus);
router.patch('/:id', apiAuth, OrderController.reschedulePartnerOrder);


export { router as orderRoute };
