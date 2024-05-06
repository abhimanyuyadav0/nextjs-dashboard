import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  authToken:string;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  authToken:''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setAuthToken:(state,action)=>{
      state.authToken = action.payload;
    }
  },
});

export const { login, logout, setAuthToken } = authSlice.actions;

export default authSlice.reducer;
