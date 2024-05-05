import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../auth/jwt.auth';

interface AuthenticatedRequest extends Request {
   user?: object;
}

function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
   const authHeader = req.headers.authorization;
   if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      try {
         const payload = verifyToken(token);
         req.user = payload;
         next();
      } catch (error) {
         res.status(401).json({
            message: 'Invalid or expired token',
            status: 'error',
         });
      }
   } else {
      res.status(401).json({
         message: 'Authentication required',
         status: 'error',
      });
   }
}

export default authenticate;
