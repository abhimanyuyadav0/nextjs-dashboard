import { getAllUser } from "../reducers/userSlice";
import { getAllUsers, login_user } from "@/api/services/user";
import { toast } from "react-toastify";

export const GetUsersAPI = () => async (dispatch: any) => {
  try {
    const response = await getAllUsers();
    if (response.success) {
      dispatch(getAllUser(response.result.data));
    }
  } catch (error:any) {
    console.error("Error during login:", error);
    toast.error(error.result.error);
  }
};
