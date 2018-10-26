import axios from "axios";
import { toaster } from "evergreen-ui";
import { DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_ERROR } from "../action_types";
import { serverError, startFetch } from "./common";
import config from "../../config";

const url = `${config.BASE_URL}/articles/`;

/**
 * Delete successfull
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const deleteArticleSuccess = message => ({
  type: DELETE_ARTICLE_SUCCESS,
  message
});

/**
 * Delete error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const deleteArticleError = error => ({
  type: DELETE_ARTICLE_ERROR,
  error
});

export const deleteArticle = slug => dispatch => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  dispatch(startFetch());
  axios
    .delete(`${url}${slug}`, axiosConfig)
    .then(response => {
      const responseMessage = response.data.Articles.message;
      dispatch(deleteArticleSuccess(responseMessage));
      toaster.success(responseMessage, { duration: 3 });
    })
    .catch(error => {
      if (error.response) {
        const responseErrors = error.response.data.errors;
        toaster.warning(
          error.response.data.Articles.detail ||
            error.response.data.Articles.error,
          {
            duration: 3
          }
        );
        dispatch(deleteArticleError(responseErrors));
      } else {
        const oops = { serverError: "Oops something went wrong" };
        dispatch(serverError(oops));
      }
    });
};

export default deleteArticle;
