import expect from "expect";
import deleteArticleReducer from "../../../redux/reducers/deleteArticleReducer";
import {
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_ERROR
} from "../../../redux/action_types";

const initialState = {
  message: "",
  error: {},
  fetching: false,
  fetched: false,
  success: false
};

const action = { message: "", error: {}, fetching: false };

describe("Create article Reducer test", () => {
  it("should return initial state when there is no action", () => {
    expect(deleteArticleReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle return create article success", () => {
    action.type = DELETE_ARTICLE_SUCCESS;
    action.message = "";
    expect(
      deleteArticleReducer(initialState.deleteArticle, action).message
    ).toEqual("");
  });

  it("should handle return create article error", () => {
    action.type = DELETE_ARTICLE_ERROR;
    // action.message = false;
    expect(
      deleteArticleReducer(initialState.createArticle, action).error
    ).toEqual({});
  });
});
