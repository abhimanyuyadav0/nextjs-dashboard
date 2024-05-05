
import { combineReducers } from 'redux';
import sideMenuReducer from './sideMenuSlice';
import authReducer from './authSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  auth: authReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
