import multer from 'multer';
import fs from 'fs';

const dir = './public';

if (!fs.existsSync(dir)) {
   fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      if (req.query.saveFile === 'true') {
         cb(null, dir);
      } else {
         cb(null, dir);
      }
   },
   filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}.xlsx`);
   },
});

const upload = multer({ storage });

export default upload;
