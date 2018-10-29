import {
  START_COMMENT_FETCH,
  COMMENT_FETCH_SUCCESS,
  COMMENT_FETCH_ERROR,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAILURE,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DELETE_FAILURE
} from "../action_types";
import initalState from "./initialState";

export default (state = initalState.comments, action) => {
  switch (action.type) {
    case START_COMMENT_FETCH:
      return {
        ...state,
        fetching: true
      };
    case COMMENT_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        comments: action.comments,
        success: true
      };
    case COMMENT_FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        comments: [],
        success: false,
        error: action.error
      };
    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        comment: action.comment
      };
    case COMMENT_CREATE_FAILURE:
      return {
        ...state,
        success: false,
        error: action.error
      };
    case COMMENT_DELETE_SUCCESS:
      return {
        ...state,
        comment: action.comment
      };
    case COMMENT_DELETE_FAILURE:
      return {
        ...state,
        success: false,
        error: action.error
      };
    default:
      return state;
  }
};
