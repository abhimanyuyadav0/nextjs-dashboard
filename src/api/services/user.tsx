import { apiEndPoint } from "../handlers";
import api from "../handlers/api";

const getAllUsers = async () => {
  const { data } = await api.get(apiEndPoint?.users);
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
  const { data } = await api.post(apiEndPoint.login, payload);
  return data;
};

const update_user = async (value: any, id: any) => {
  const { data } = await api.patch(apiEndPoint.userById(id), value);
  return data;
};

const delete_user = async (id: any) => {
  const { data } = await api.delete(apiEndPoint.userById(id));
  return data;
};
export { getAllUsers, create_user, login_user, update_user, getUserById,delete_user };
