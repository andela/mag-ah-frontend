import axios from "axios";
import { toaster } from "evergreen-ui";
import { EDIT_ARTICLE_SUCCESS, EDIT_ARTICLE_ERROR } from "../action_types";
import { serverError, startFetch } from "./common";
import config from "../../config";
import history from "../../routes/history";

const url = `${config.BASE_URL}/articles/`;

/**
 * Signup successfull
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const getArticleSuccess = message => ({
  type: EDIT_ARTICLE_SUCCESS,
  message
});

/**
 * Signup successfull
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const updateArticleSuccess = message => ({
  type: EDIT_ARTICLE_SUCCESS,
  message
});

/**
 * Signup error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const updateArticleError = error => ({
  type: EDIT_ARTICLE_ERROR,
  error
});

const updateArticle = (slug, article) => dispatch => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  dispatch(startFetch());
  axios
    .put(`${url}${slug}`, article, axiosConfig)
    .then(response => {
      const responseMessage = `Article ${
        response.data.Article.title
      } updated successfully`;
      dispatch(updateArticleSuccess(responseMessage));
      toaster.success(responseMessage, { duration: 3 });
      history.push("/articles");
    })
    .catch(error => {
      if (error.response) {
        const responseErrors = error.response.data.errors;
        dispatch(updateArticleError(responseErrors));
      } else {
        const oops = { serverError: "Oops something went wrong" };
        dispatch(serverError(oops));
      }
    });
};

export default updateArticle;
