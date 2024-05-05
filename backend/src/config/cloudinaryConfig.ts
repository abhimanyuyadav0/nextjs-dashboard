import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//    cloud_name: 'dlu8aj5zp',
//    api_key: '944471215323594',
//    api_secret: 'T-2TDqx6xSD1O3euPUSx3GSf9EQ',
// });
cloudinary.config({
   cloud_name: 'dabiiiu3z',
   api_key: '192557286884765',
   api_secret: 'oMS7C9MHXjleZ8SLFfgLtoo_xKI',
});

const cloudinaryUpload = async (file: any) => {
   try {
      if (!file) {
         throw new Error('No file provided');
      }
      const options: any = { resource_type: 'auto' };
      const response: any = await cloudinary.uploader.upload(file, options);
      if (response && response.secure_url) {
         return response;
      } else {
         throw new Error('Cloudinary upload failed');
      }
   } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
   }
};

// const cloudinaryUpload = async (type: any, data: any) => {
//    const response = await cloudinary.uploader.upload(data.buffer, { resource_type: 'auto' });
//    return response;
// };

export default cloudinaryUpload;
