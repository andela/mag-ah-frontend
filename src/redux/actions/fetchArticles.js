import axios from "axios";
import {
  START_ARTICLE_FETCH,
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_ERROR
} from "../action_types";
import config from "../../config";

const url = `${config.BASE_URL}/articles/`;

export const startArticleFetch = () => ({
  type: START_ARTICLE_FETCH
});

export const articleFetchSuccess = articles => ({
  type: ARTICLE_FETCH_SUCCESS,
  articles
});

export const articleFetchError = error => ({
  type: ARTICLE_FETCH_ERROR,
  error
});

export const fetchArticles = () => async dispatch => {
  dispatch(startArticleFetch);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InN0cmluZzEyMzQiLCJleHAiOjE1NDAyODAxNjl9.IBNzPTk1zCid6uzPZasuA6W3RMR4dNTudeGkP5uSLlE"
      }
    });
    console.log(response.data);
    dispatch(articleFetchSuccess(response.data.Articles.results));
  } catch (error) {
    dispatch(articleFetchError(error));
  }
};
