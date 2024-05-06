import { getAllUser, userLoading } from "../reducers/userSlice";
import { getAllUsers, login_user } from "@/api/services/user";
import { toast } from "react-toastify";

export const GetUsersAPI = () => async (dispatch: any) => {
  try {
    dispatch(userLoading(true));
    const response: any = await getAllUsers();
    if (response) {
      dispatch(getAllUser(response.data));
      dispatch(userLoading(false));
    }
  } catch (error: any) {
    console.error("Error during login:", error);
    toast.error(error.error);
  }
};
