import {
  START_SINGLE_ARTICLE_FETCH,
  SINGLE_ARTICLE_FETCH_SUCCESS,
  SINGLE_ARTICLE_FETCH_ERROR
} from "../action_types";
import initalState from "./initialState";

export default (state = initalState.singleArticle, action) => {
  switch (action.type) {
    case START_SINGLE_ARTICLE_FETCH:
      return { ...state, fetching: true };
    case SINGLE_ARTICLE_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        article: action.article,
        success: true
      };
    case SINGLE_ARTICLE_FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        article: {},
        success: false,
        error: action.error
      };
    default:
      return state;
  }
};
