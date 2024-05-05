import { NextFunction, Request, Response } from 'express';

interface ApiResponse {
   success: boolean;
   message: string;
   result?: any;
}

export const responseFormatMiddleware = (getMessage: (req: Request, res: Response) => string) => {
   return (req: Request, res: Response<ApiResponse>, next: NextFunction) => {
      const originalJson = res.json;
      res.json = function (body) {
         const apiResponse: ApiResponse = {
            success: true,
            message: getMessage(req, res),
            result: body,
         };
         return originalJson.call(this, apiResponse);
      };

      next();
   };
};

export const getMessage = (req: Request, res: Response) => {
   const method = req.method.toUpperCase();
   const path = req.originalUrl.split('?')[0];
   const statusCode = res.statusCode;

   if (method === 'GET') {
      if (statusCode === 200) {
         return `Successfully retrieved data at ${path}`;
      } else if (statusCode === 404) {
         return `Data not found at ${path}`;
      } else {
         return `Error retrieving data at ${path}`;
      }
   } else if (method === 'POST') {
      if (statusCode === 201) {
         return `Successfully created data`;
      } else {
         if (path.endsWith('/login')) {
            if (statusCode === 200) {
               if (path.endsWith('workshop/login')) {
                  return `Successfully logged in as ${req.body.userNameOrEmail}`;
               } else {
                  return `Successfully logged in as ${req.body.username}`;
               }
            } else {
               return 'Error logging in';
            }
         } else {
            return `Error creating data at ${path}`;
         }
      }
   } else if (method === 'PUT') {
      if (statusCode === 200) {
         return `Successfully updated data at ${path}`;
      } else {
         return `Error updating data at ${path}`;
      }
   } else if (method === 'PATCH') {
      if (statusCode === 200) {
         return `Successfully updated data at ${path}`;
      } else {
         return `Error updating data at ${path}`;
      }
   } else if (method === 'DELETE') {
      if (statusCode === 204 || statusCode === 200) {
         return `Successfully deleted data at ${path}`;
      } else {
         return `Error deleting data at ${path}`;
      }
   } else {
      return 'Unknown error';
   }
};
