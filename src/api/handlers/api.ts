import axios from "axios";
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL;
const createAPI = (token?: string) => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM3ZjNkYWI3OTU2MDNkM2Y5ZDQ2MWEiLCJleHAiOjE3MTQ5NTk2MTUuNzkyLCJpYXQiOjE3MTQ5NDg4MTV9.-LDi3EGE3USkl5_u0xFgC_9wSYhjK5XXgv-GmEUWfIg authToken';
  const apiHeader = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
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
        console.log(error?.response.data, "error");
      }
      throw error?.response?.data;
    }
  );
  return api;
};

export default createAPI();
