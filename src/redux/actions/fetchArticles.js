import axios from "axios";
import { ARTICLE_FETCH_SUCCESS, ARTICLE_FETCH_ERROR } from "../action_types";
import { startFetch } from "./common";
import config from "../../config";

let url = `${config.BASE_URL}/articles/`;

/**
 * Article fetch success
 *
 * @param (object) articles
 * @return (object) type and payload
 */
export const articleFetchSuccess = articles => ({
  type: ARTICLE_FETCH_SUCCESS,
  articles
});

/**
 * Article fetch error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const articleFetchError = error => ({
  type: ARTICLE_FETCH_ERROR,
  error
});

export const fetchArticles = (
  username = null,
  paginationUrl = null
) => async dispatch => {
  let response;
  dispatch(startFetch);

  if (paginationUrl) {
    url = paginationUrl;
  }
  try {
    if (username) {
      if (paginationUrl) {
        response = await axios.get(
          `${paginationUrl}&&author__username__icontains=${username}`
        );
      } else {
        response = await axios.get(
          `${url}?author__username__icontains=${username}`
        );
      }
    } else {
      response = await axios.get(url);
    }
    dispatch(articleFetchSuccess(response.data.Articles));
  } catch (error) {
    dispatch(articleFetchError(error.message));
  }
};
