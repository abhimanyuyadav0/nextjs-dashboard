import express from 'express';
import { PartnerRoute } from './partner.routes';
import { PartnerTimeSlotRoute } from './partnerTimeSlot.routes';
import { PartnerServiceRoute } from './service.routes';
import { orderRoute } from './order.routes';
import { activityRoute } from './activity.routes';

const routes = express.Router();




routes.use('/getAvailableTimeSlots', PartnerTimeSlotRoute);
routes.use('/partner', PartnerRoute);
routes.use('/services', PartnerServiceRoute);
routes.use('/orders', orderRoute);
routes.use('/activity', activityRoute);



export default routes;