
import { combineReducers } from 'redux';
import counterReducer from './counterSlice';
import sideMenuReducer from './sideMenuSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  sideMenu: sideMenuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
