import { CREATE_ARTICLE, FETCH_ARTICLES } from "../action_types";
import initialState from "./initialState";

export default (state = initialState.articles, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        articles: action.article
      };
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.articles
      };
    default:
      return state;
  }
};
