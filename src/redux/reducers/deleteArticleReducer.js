import {
  DELETE_ARTICLE_ERROR,
  DELETE_ARTICLE_SUCCESS,
  START_FETCH,
  SERVER_ERROR,
  CLEAR_ERROR,
  RESET_STATE
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.deleteArticle, action) => {
  switch (action.type) {
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.message,
        success: true,
        fetched: true
      };
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        fetched: true,
        fetching: false,
        success: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: {}
      };
    case START_FETCH:
      return {
        ...state,
        fetching: true
      };
    case SERVER_ERROR:
      return {
        ...state,
        error: action.error
      };
    case RESET_STATE:
      return initialState.deleteArticle;
    default:
      return state;
  }
};
