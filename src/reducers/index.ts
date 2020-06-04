import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import post from './post';

const rootReducer = combineReducers({
  auth,
  alert,
  post
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>