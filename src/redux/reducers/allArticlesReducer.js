import {
  START_ARTICLE_FETCH,
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_ERROR
} from "../action_types";
import initalState from "./initialState";

export default (state = initalState.allArticles, action) => {
  switch (action.type) {
    case START_ARTICLE_FETCH:
      return {
        ...state,
        fetching: true
      };
    case ARTICLE_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        articles: action.articles,
        success: true
      };
    case ARTICLE_FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        articles: [],
        success: false,
        error: action.error
      };
    default:
      return state;
  }
};
