import { Request, Response, NextFunction } from 'express';

function setHeaders(req: Request, res: Response, next: NextFunction) {
   res.setHeader('Accept', 'application/json');
   res.setHeader('Content-Type', 'application/json');
   next();
}

export default setHeaders;
