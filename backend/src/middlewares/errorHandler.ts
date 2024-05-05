import { NextFunction, Request, Response } from 'express';
import mongoose, { CastError } from 'mongoose';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
   try {
      // Handle specific types of errors
      if (err.name === 'ValidationError') {
         // Handle Mongoose validation errors
         return res.status(400).json({ error: err.message });
      }

      // Handle CastError specifically
      if (err instanceof mongoose.Error.CastError) {
         // Handle Mongoose CastError (e.g., invalid ObjectId)
         return res.status(400).json({ error: 'Invalid ID format.' });
      }

      if (err.name === 'JsonWebTokenError') {
         // Handle JWT errors
         return res.status(401).json({ error: 'Invalid token.' });
      }

      // Handle other types of errors
      res.status(500).json({ error: 'Something went wrong.' });
   } catch (error) {
      console.error('Error handling error:', error);
      res.status(500).json({ error: 'Internal Server Error.' });
   }
}
