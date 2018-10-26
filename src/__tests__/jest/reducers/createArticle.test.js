import expect from "expect";
import createArticleReducer from "../../../redux/reducers/createArticleReducer";
import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_ERROR,
  ARTICLE_FETCH_SUCCESS,
  SERVER_ERROR
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
    expect(createArticleReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle return create article success", () => {
    action.type = CREATE_ARTICLE_SUCCESS;
    action.message = "";
    expect(
      createArticleReducer(initialState.createArticle, action).message
    ).toEqual("");
  });

  it("should handle return create article error", () => {
    action.type = CREATE_ARTICLE_ERROR;
    // action.message = false;
    expect(
      createArticleReducer(initialState.createArticle, action).error
    ).toEqual({});
  });
  it("should handle fetching article success", () => {
    action.type = ARTICLE_FETCH_SUCCESS;
    expect(
      createArticleReducer(initialState.createArticle, action).fetching
    ).toEqual(false);
  });
  it("should handle server error", () => {
    action.type = SERVER_ERROR;
    expect(
      createArticleReducer(initialState.createArticle, action).error
    ).toEqual({});
  });
});
