import {
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_SUCCESS,
  START_FETCH,
  SERVER_ERROR,
  CLEAR_ERROR
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.createArticle, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.message,
        success: true,
        fetched: true
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        fetched: true,
        fetching: false
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
    default:
      return state;
  }
};
