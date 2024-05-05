// actions/authActions.ts
import { login, logout } from "../reducers/authSlice";
import { login_user } from "@/api/services/user";
import { toast } from "react-toastify";
export interface UserData {
  email: string;
  password: string;
}
export const loginUser = (userData: UserData) => async (dispatch: any) => {
  try {
    const response = await login_user(userData);
    if (response) {
      dispatch(login(response._doc));
      localStorage.setItem("token", response.token);
    } else {
      toast.error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  return logout();
};
