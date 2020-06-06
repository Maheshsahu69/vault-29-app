import { AppThunk } from "../store";
import axios from 'axios';
import { API_ENDPOINT } from "../constants";
import { setAlert } from "./alert";
import { GET_POSTS_SUCCESS, GET_POSTS_FAIL, GET_POSTS_COMPLETE, GET_POST_DETAIL_SUCCESS, GET_POST_DETAIL_FAIL } from "./types";
import { Post, PostDetail } from "../types";

interface PostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS,
  posts: Post[],
  offset: number
}

interface PostDetailAction {
  type: typeof GET_POST_DETAIL_SUCCESS,
  post: PostDetail
}

interface PostDetailFail {
  type: typeof GET_POST_DETAIL_FAIL,
  message: string
}

interface PostsFailAction {
  type: typeof GET_POSTS_FAIL,
  message: string
}

interface PostsComplete {
  type: typeof GET_POSTS_COMPLETE
}

export type PostActionTypes = PostsFailAction | PostsSuccessAction | PostsComplete | PostDetailAction | PostDetailFail

const postsSuccessAction = (posts: Post[], offset: number): PostActionTypes => {
  return {
    type: GET_POSTS_SUCCESS,
    posts,
    offset
  }
}

const postDetailAction = (post: PostDetail): PostActionTypes => {
  return {
    type: GET_POST_DETAIL_SUCCESS,
    post
  }
}

const postsFailAction = (message: string): PostActionTypes => {
  return {
    type: GET_POSTS_FAIL,
    message
  }
}

const postDetailFailAction = (message: string): PostActionTypes => {
  return {
    type: GET_POST_DETAIL_FAIL,
    message
  }
}

export const getPosts = (offset = 0, limit = 20): AppThunk => async dispatch => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/v2/post`, {
      params: {
        offset,
        limit
      }
    });

    if (JSON.parse(res.data.success)) {
      dispatch(postsSuccessAction(res.data.userData, offset));
    } else {
      dispatch(setAlert(res.data.message, 'danger'));
      dispatch(postsFailAction(res.data.message));
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert('Unknown error occurred. Plesae retry', 'danger'));
    dispatch(postsFailAction('Unknown error'));
  }
};

export const getPostDetail = (post_id: number, user_id: number): AppThunk => async dispatch => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/post/details`, {
      params: {
        post_id,
        user_id
      }
    });

    if (JSON.parse(res.data.success)) {
      dispatch(postDetailAction(res.data.post));
    } else {
      dispatch(setAlert(res.data.message, 'danger'));
      dispatch(postDetailFailAction(res.data.message));
    }
  } catch (err) {
    console.log(err);
    dispatch(setAlert('Unknown error occurred. Plesae retry', 'danger'));
    dispatch(postDetailFailAction('Unknown error'));
  }
};