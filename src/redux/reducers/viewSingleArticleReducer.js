import initialState from "./initialState";
import { VIEW_ARTICLE, SERVER_ERROR } from "../action_types";

export default (state = initialState.viewArticle, action) => {
  switch (action.type) {
    case VIEW_ARTICLE:
      return {
        ...state,
        article: action.payload
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
