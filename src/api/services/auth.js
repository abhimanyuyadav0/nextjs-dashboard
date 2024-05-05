import { apiEndPoint } from '../handlers';
import api from '../handlers/api';

const customerLogin = async (payload) => {
   const { data } = await api.post(apiEndPoint.login, payload);
   return data;
};
const verifyOtp = async (payload) => {
   const { data } = await api.post(apiEndPoint.verifyOtp, payload);
   return data;
};

const getUserById = async (id) => {
   const { data } = await api.get(apiEndPoint.updateCustomerDetail(id));
   return data;
};

const getUserByMobile = async (mobile) => {
   const { data } = await api.get(apiEndPoint.getUserByMobileNo(mobile));
   return data;
};
const updateCustomer = async (value, id) => {
   const { data } = await api.patch(
      apiEndPoint.updateCustomerDetail(id),
      value
   );
   return data;
};

export {
   customerLogin,
   getUserById,
   getUserByMobile,
   updateCustomer,
   verifyOtp,
};
