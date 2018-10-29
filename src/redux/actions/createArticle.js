import axios from "axios";
import { toaster } from "evergreen-ui";
import { CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_ERROR } from "../action_types";
import { serverError, startFetch } from "./common";
import config from "../../config";
import history from "../../routes/history";

const url = `${config.BASE_URL}/articles/`;

/**
 * Create successfull
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const createArticleSuccess = message => ({
  type: CREATE_ARTICLE_SUCCESS,
  message
});

/**
 * Create error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const createArticleError = error => ({
  type: CREATE_ARTICLE_ERROR,
  error
});

export const createArticle = article => dispatch => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  dispatch(startFetch());
  axios
    .post(url, article, axiosConfig)
    .then(response => {
      const responseMessage = `Article ${
        response.data.Article.title
      } created successfully`;
      dispatch(createArticleSuccess(responseMessage));
      toaster.success(responseMessage, { duration: 3 });
      history.push("/articles");
    })
    .catch(error => {
      if (error.response) {
        const responseErrors = error.response.data.errors;
        dispatch(createArticleError(responseErrors));
      } else {
        const oops = { serverError: "Oops something went wrong" };
        dispatch(serverError(oops));
      }
    });
};

export default createArticle;
