import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  editUserId: string;
}

const initialState: UsersState = {
  allUsers: [],
  loading: false,
  error: null,
  isEdit: false,
  editUserId: '',
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.allUsers = action.payload;
      console.log(state.allUsers,'kkkk')
    },
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
    setUserId(state, action) {
      console.log(action.payload,'action.payload')
      state.editUserId = action.payload;
    },
  },
});

export const {
  getAllUser,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  setUserEdit,
  setUserId,
} = usersSlice.actions;

export default usersSlice.reducer;
