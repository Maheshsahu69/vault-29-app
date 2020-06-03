import { User } from "../types";
import { AuthActionTypes } from "../actions/auth";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

export interface AuthState {
  loading: boolean,
  user: User,
  token: string,
  error: string
}

const initialState: AuthState = {
  loading: true,
  user: {} as User,
  token: '',
  error: ''
}

export default function (state = initialState, action: AuthActionTypes) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.token);
      return { ...state, user: action.user, token: action.token, loading: false };
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return { ...state, user: {} as User, token: '', loading: false, error: action.message };
    default:
      return state;
  }
}