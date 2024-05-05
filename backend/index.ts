import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import connectDB from './src/config/db';
import { errorHandler } from './src/middlewares/errorHandler';
import { notFoundHandler } from './src/middlewares/notFoundHandler';
import { getMessage, responseFormatMiddleware } from './src/middlewares/responseFormatMiddleware';
import setHeaders from './src/middlewares/setheaders';
import routesV1 from './src/routes/v1/index';
// import routesV2 from './src/routes/v2/index';
// import { encryptResponseBody } from './src/middlewares/cryptoMiddleware';

dotenv.config();

connectDB();

const app: Application = express();
const port = process.env.PORT || 5000;

// set Headers middleware
app.use(setHeaders);

// Cors Middleware
app.use(
   cors({
      origin: '*',
   })
);

// Middleware
app.use(bodyParser.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '25mb' }));
app.use(responseFormatMiddleware(getMessage));
app.use(express.static(__dirname + '/public'));
// app.use(encryptResponseBody); // Global middleware to encrypt response body

// Routes
app.use('/', routesV1);
// app.use('/CEV2FA', routesV2);

// Error handling middleware
app.use(errorHandler);
app.use(notFoundHandler);

// Start server
app.listen(port as number, '0.0.0.0', () => console.log(`Server is started on port ${port}`));
