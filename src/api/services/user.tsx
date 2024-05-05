import { apiEndPoint } from "../handlers";
import api from "../handlers/api";

const getAllUsers = async (size?: 10, pageNumber?: 1, pagination?: 'true') => {
  const { data } = await api.get(apiEndPoint?.users, {
    params: {
      size,
      pageNumber,
      pagination,
    },
  });
  return data;
};
const create_user = async (payload: any) => {
  const { data } = await api.post(apiEndPoint.users, payload);
  return data;
};

const getUserById = async (id: any) => {
  const { data } = await api.get(apiEndPoint.userById(id));
  return data;
};

const login_user = async (payload: any) => {
  console.log(payload, "payloadpayload");
  const { data } = await api.post(apiEndPoint.login, payload);
  return data;
};

const update_user = async (value: any, id: any) => {
  const { data } = await api.patch(apiEndPoint.userById(id), value);
  return data;
};
export { getAllUsers, create_user, login_user, update_user, getUserById };
