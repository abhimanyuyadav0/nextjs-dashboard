import express from 'express';
import { usersRoute } from './user.routes';

const routes = express.Router();

// Routes
routes.use('/v1/users', usersRoute);

export default routes;
