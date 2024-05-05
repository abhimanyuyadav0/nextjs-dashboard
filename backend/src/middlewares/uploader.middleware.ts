import { Request } from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({
   storage,
   limits: {
      fileSize: 10 * 1024 * 1024, // Increase the limit to 10MB (adjust as needed)
   },
   fileFilter: (req: Request, file: Express.Multer.File, cb: any) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.mimetype)) {
         const error = new Error('Invalid file type');
         error.name = 'MulterError';
         cb(error, false);
      } else {
         cb(null, true);
      }
   },
});

const videoStorage = multer.memoryStorage();
const videoUpload = multer({
   storage: videoStorage,
   limits: {
      fileSize: 25 * 1024 * 1024, // Increase the limit to 25MB (adjust as needed)
   },
   fileFilter: (req: Request, file: Express.Multer.File, cb: any) => {
      const allowedTypes = ['video/mp4', 'video/quicktime'];
      if (!allowedTypes.includes(file.mimetype)) {
         const error = new Error('Invalid file type');
         error.name = 'MulterError';
         cb(error, false);
      } else {
         cb(null, true);
      }
   },
});

export const uploadImageMiddleware = upload.single('image');
export const uploadVideoMiddleware = videoUpload.single('video');
