import expect from "expect";
import articleReducer from "../../../redux/reducers/articleReducer";
import { VIEW_ARTICLE, SERVER_ERROR } from "../../../redux/action_types";

const initialState = {
  viewArticle: {
    article: {},
    error: {}
  }
};

const action = { payload: {} };

describe("Article reducer test", () => {
  it("should return initial test when no test", () => {
    expect(articleReducer(initialState, action)).toEqual(initialState);
  });
});

describe("Article reducer test", () => {
  it("should handle article reducer", () => {
    action.type = VIEW_ARTICLE;
    expect(articleReducer(initialState.viewArticle, action).article).toEqual(
      action.payload
    );
  });
  it("should handle article error in reducer", () => {
    action.type = SERVER_ERROR;
    expect(articleReducer(initialState.viewArticle, action).error).toEqual(
      action.error
    );
  });
});
