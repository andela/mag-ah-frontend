import axios from "axios";
import { RATE_ARTICLE_SUCCESS } from "../action_types";
import { startFetch, serverError, responseError } from "./common";
import config from "../../config";

const url = config.BASE_URL;

/**
 * Rated Successfully
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const rateArticleSuccess = response => ({
  type: RATE_ARTICLE_SUCCESS,
  response
});

export const postRatings = (currentUser, rate, article) => async dispatch => {
  dispatch(startFetch());
  try {
    const response = await axios.post(
      `${url}/articles/${article}/rate/`,
      { rating: rate },
      {
        headers: {
          Authorization: `Bearer ${currentUser}`
        }
      }
    );
    dispatch(rateArticleSuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(responseError(error.response));
    } else {
      dispatch(serverError());
    }
  }
};
