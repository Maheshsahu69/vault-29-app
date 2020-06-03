import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { User } from "../types";
import { AppThunk } from "../store";
import axios from 'axios';
import { API_ENDPOINT } from "../constants";
import { setAlert } from "./alert";

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS,
  user: User,
  token: string
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL,
  message: string
}

export type AuthActionTypes = LoginSuccessAction | LoginFailAction;

const loginAction = (user: User, token: string): AuthActionTypes => {
  return {
    type: LOGIN_SUCCESS,
    user,
    token
  }
}

const loginFailAction = (message: string): AuthActionTypes => {
  return {
    type: LOGIN_FAIL,
    message
  }
}

export const doLogin = (email: string, password: string): AppThunk => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  try {
    const res = await axios.post(`${API_ENDPOINT}/v2/user/signin`, { email, password }, config);

    if (JSON.parse(res.data.success)) {
      dispatch(loginAction(res.data.user, res.data.token));
    } else {
      dispatch(setAlert(res.data.message, 'danger'));
      dispatch(loginFailAction(res.data.message));
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert('Unknown error occurred. Plesae retry', 'danger'));
    dispatch(loginFailAction('Unknown error'));
  }
};