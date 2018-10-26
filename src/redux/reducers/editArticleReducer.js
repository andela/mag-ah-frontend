import {
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_ERROR,
  CLEAR_ERROR,
  SERVER_ERROR,
  START_FETCH
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.editArticle, action) => {
  switch (action.type) {
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.message,
        success: true,
        updated: true,
        updating: false
      };
    case EDIT_ARTICLE_ERROR:
      return {
        ...state,
        error: action.error,
        success: false,
        updated: false,
        updating: false
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
