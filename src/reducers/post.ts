import { Post } from '../types';
import { PostActionTypes } from '../actions/post';
import { GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_POSTS_COMPLETE } from '../actions/types';

export interface PostState {
  loading: boolean,
  posts: Post[],
  post: Post,
  error: string,
  loadMore: boolean
}

const initialState: PostState = {
  loading: true,
  loadMore: true,
  posts: [],
  post: {} as Post,
  error: ''
}

export default function (state = initialState, action: PostActionTypes) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      if (action.offset === 0) {
        return { ...state, posts: action.posts, loadMore: true, loading: false };
      }
      return { ...state, posts: [...state.posts, ...action.posts], loadMore: true, loading: false };
    case GET_POSTS_FAIL:
      return { ...state, error: action.message, loading: false };
    case GET_POSTS_COMPLETE:
      return { ...state, loadMore: false }
    default:
      return state;
  }
}