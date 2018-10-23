import {
  RATE_ARTICLE_SUCCESS,
  RESPONSE_ERROR,
  SERVER_ERROR
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.articleRating, action) => {
  switch (action.type) {
    case RATE_ARTICLE_SUCCESS:
      return {
        ...state,
        response: action.response
      };
    case RESPONSE_ERROR:
      return {
        ...state,
        error: action.error
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
