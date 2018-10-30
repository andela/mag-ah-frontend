import expect from "expect";
import {
  RATE_ARTICLE_SUCCESS,
  SERVER_ERROR,
  RESPONSE_ERROR
} from "../../../redux/action_types";
import articleRatingReducer from "../../../redux/reducers/articleRatingReducer";
import rating from "../../mock/rating";

const initialState = {
  rateArticle: {
    response: null,
    error: null
  }
};

const action = {};
describe("Rate Article Reducer test", () => {
  it("should return initial state when there is no action", () => {
    expect(articleRatingReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle RATE_ARTICLE_SUCCESS", () => {
    action.type = RATE_ARTICLE_SUCCESS;
    action.response = rating.success;
    const { rateArticle } = initialState;
    expect(articleRatingReducer(rateArticle, action).error).toEqual(null);
    expect(articleRatingReducer(rateArticle, action).response).toEqual(
      rating.success
    );
  });

  it("should handle RESPONSE_ERROR", () => {
    action.type = RESPONSE_ERROR;
    action.error = rating.error;
    expect(
      articleRatingReducer(initialState.rateArticle, action).error
    ).toEqual(rating.error);
    expect(
      articleRatingReducer(initialState.rateArticle, action).response
    ).toEqual(null);
  });

  it("should handle SERVER_ERROR", () => {
    action.type = SERVER_ERROR;
    action.error = rating.serverError;
    expect(
      articleRatingReducer(initialState.rateArticle, action).error
    ).toEqual(rating.serverError);
    expect(
      articleRatingReducer(initialState.rateArticle, action).response
    ).toEqual(null);
  });
});
