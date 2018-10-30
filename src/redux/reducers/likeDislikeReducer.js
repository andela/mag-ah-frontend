import {
  LIKE_ARTICLE,
  DISLIKE_ARTICLE,
  LIKE_DISLIKE_ARTICLE_ERROR
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.likeDislike, action) => {
  switch (action.type) {
    case LIKE_ARTICLE:
      return {
        ...state,
        likeMessage: action.message,
        disliked: false,
        liked: true
      };
    case DISLIKE_ARTICLE:
      return {
        ...state,
        dislikeMessage: action.message,
        disliked: true,
        liked: false
      };
    case LIKE_DISLIKE_ARTICLE_ERROR:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
