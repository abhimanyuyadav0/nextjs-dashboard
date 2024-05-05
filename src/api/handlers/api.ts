import axios from 'axios';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
const createAPI = (token) => {
   const apiHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
   };
   const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: apiHeader,
   });

   api.interceptors.response.use(
      (response) => response,
      (error) => {
         if (
            401 === error?.response?.status ||
            403 === error?.response?.status ||
            400 === error?.response?.status
         ) {
            console.log(error?.response.data, 'error');
         }
         throw error?.response?.data;
      }
   );
   return api;
};

export default createAPI();
