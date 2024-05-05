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
    if (
      response.success &&
      response.result.message != "User does not exist." &&
      response.result.message != "Invalid password."
    ) {
      dispatch(login(response.result));
    } else {
      toast.error("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("An error occurred during login");
  }
};

export const logoutUser = () => {
  return logout();
};
