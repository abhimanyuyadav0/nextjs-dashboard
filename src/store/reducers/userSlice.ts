import { createSlice } from "@reduxjs/toolkit";

interface UserInterface {
  _id: string;
  email: string;
  password: string;
}

interface UsersState {
  allUsers: UserInterface[];
  loading: boolean;
  error: any;
  isEdit: boolean; 
}

const initialState: UsersState = {
  allUsers: [],
  loading: false,
  error: null,
  isEdit: false, 
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action) {
      state.loading = false;
      state.allUsers = action.payload;
    },
    fetchUsersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setUserEdit(state, action) {
      state.isEdit = action.payload;
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  setUserEdit,
} = usersSlice.actions;

export default usersSlice.reducer;
