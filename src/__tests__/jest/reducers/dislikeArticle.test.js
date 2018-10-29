import expect from "expect";
import {
  DISLIKE_ARTICLE,
  LIKE_DISLIKE_ARTICLE_ERROR
} from "../../../redux/action_types";
import likeDislikeReducer from "../../../redux/reducers/likeDislikeReducer";

const initialState = {
  likeMessage: "",
  dislikeMessage: "",
  liked: false,
  disliked: false,
  error: ""
};
const action = { payload: {} };

describe("Dislike articles reducer test", () => {
  it("should return initial state when there is no action", () => {
    expect(likeDislikeReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle DISLIKE_ARTICLE", () => {
    action.type = DISLIKE_ARTICLE;
    action.message = "Thank you for giving your opinion on this article.";
    expect(likeDislikeReducer(initialState, action).disliked).toEqual(true);
  });

  it("should handle LIKE_DISLIKE_ARTICLE_ERROR", () => {
    action.type = LIKE_DISLIKE_ARTICLE_ERROR;
    expect(likeDislikeReducer(initialState, action).liked).toEqual(false);
  });
});
