import axios from "axios";

import {
  START_COMMENT_FETCH,
  COMMENT_FETCH_SUCCESS,
  COMMENT_FETCH_ERROR,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAILURE
} from "../action_types";
import config from "../../config";

const token = `Bearer ${localStorage.getItem("token")}`;

/**
 * Comments start fetch
 *
 * @return (object) type
 */
export const startCommentFetch = () => ({
  type: START_COMMENT_FETCH
});

/**
 * Comments fetch success
 *
 * @param (object) comments
 * @return (object) type and payload
 */
export const commentFetchSuccess = comments => ({
  type: COMMENT_FETCH_SUCCESS,
  comments
});

/**
 * Comments fetch error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const commentFetchError = error => ({
  type: COMMENT_FETCH_ERROR,
  error
});

/**
 * Create successfull
 *
 * @param (object) comment
 * @return (object) type and payload
 */
export const commentCreateSuccess = comment => ({
  type: COMMENT_CREATE_SUCCESS,
  comment
});

/**
 * Create error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const commentCreateError = error => ({
  type: COMMENT_CREATE_FAILURE,
  error
});

export const fetchComments = slug => async dispatch => {
  dispatch(startCommentFetch);
  try {
    const url = `${config.BASE_URL}/articles/${slug}/comments/`;
    const response = await await axios.get(url, {
      headers: { Authorization: token }
    });

    dispatch(commentFetchSuccess(response.data));
  } catch (error) {
    dispatch(commentFetchError(error));
  }
};

export const createComment = (comment, slug) => async dispatch => {
  try {
    const url = `${config.BASE_URL}/articles/${slug}/comments/`;
    const response = await axios.post(url, comment, {
      headers: { Authorization: token }
    });
    dispatch(commentCreateSuccess(response.data));
  } catch (error) {
    dispatch(commentCreateError(error));
  }
};

export const deleteComment = commentId => async dispatch => {
  try {
    const deleteUrl = `${config.BASE_URL}/articles/slug/comments/${commentId}`;
    const response = await axios.delete(deleteUrl, {
      headers: { Authorization: token }
    });
    dispatch(commentCreateSuccess(response.data));
  } catch (error) {
    dispatch(commentCreateError(error));
  }
};
