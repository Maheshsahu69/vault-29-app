import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL, FETCH_PROFILE } from "./types";
import { User } from "../types";
import { AppThunk } from "../store";
import { API_ENDPOINT } from "../constants";
import { setAlert } from "./alert";
import axios from 'axios';

interface FetchProfileAction {
  type: typeof FETCH_PROFILE
}

interface ProfileSuccessAction {
  type: typeof GET_PROFILE_SUCCESS,
  user: User
}

interface ProfileFailAction {
  type: typeof GET_PROFILE_FAIL,
  message: string
}

export type ProfileActionTypes = ProfileSuccessAction | ProfileFailAction | FetchProfileAction;

const profileSuccessAction = (user: User) => {
  return {
    type: GET_PROFILE_SUCCESS,
    user
  }
}

const profileFailAction = (message: string) => {
  return {
    type: GET_PROFILE_FAIL,
    message
  }
}

export const fetchProfileAction = () => {
  return {
    type: FETCH_PROFILE
  }
}

export const getProfile = (id: number, my_id: number): AppThunk => async dispatch => {
  dispatch(fetchProfileAction());
  try {
    const res = await axios.get(`${API_ENDPOINT}/user/other`, {
      params: {
        id,
        my_id
      }
    });

    if (JSON.parse(res.data.success)) {
      dispatch(profileSuccessAction(res.data.user));
    } else {
      dispatch(setAlert(res.data.message, 'danger'));
      dispatch(profileFailAction(res.data.message));
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert('Unknown error occurred. Plesae retry', 'danger'));
    dispatch(profileFailAction('Unknown error'));
  }
};