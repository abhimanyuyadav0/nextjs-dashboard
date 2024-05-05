import { Request, Response, NextFunction } from 'express';
import { encryptData } from '../config/crypto';

function encryptResponseBody(req: Request, res: Response, next: NextFunction) {
   const originalJson = res.json;
   res.json = function <T>(data?: T) {
      if (data && typeof data === 'object') {
         const encryptedData = encryptData(data);
         return originalJson.call(res, { encryptedData });
      } else {
         return originalJson.call(res, data);
      }
   };
   next();
}

export { encryptResponseBody };
