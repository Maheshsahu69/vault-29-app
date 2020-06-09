import { User } from '../types';
import { ProfileActionTypes } from '../actions/profile';
import { GET_PROFILE_SUCCESS, FETCH_PROFILE, GET_PROFILE_FAIL } from '../actions/types';

export interface ProfileState {
  profile: User,
  loading: boolean,
  error: string
}

const initialState: ProfileState = {
  profile: {} as User,
  loading: true,
  error: ''
}

export default function (state = initialState, action: ProfileActionTypes) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return { ...state, profile: action.user, loading: false };
    case FETCH_PROFILE:
      return { ...state, loading: true };
    case GET_PROFILE_FAIL:
      return { ...state, error: action.message, loading: false };
    default:
      return state;
  }
}
