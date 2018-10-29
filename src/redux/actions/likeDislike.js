import axios from "axios";
import { toaster } from "evergreen-ui";
import {
  LIKE_ARTICLE,
  DISLIKE_ARTICLE,
  LIKE_DISLIKE_ARTICLE_ERROR
} from "../action_types";
import config from "../../config";

const url = `${config.BASE_URL}/articles/`;

/**
 * Like an article
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const likeSuccess = message => ({
  type: LIKE_ARTICLE,
  message
});

/**
 * Dislike an article
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const dislikeSuccess = message => ({
  type: DISLIKE_ARTICLE,
  message
});

/**
 * Like or Dislike an article error
 *
 * @param (string) error
 * @return (object) type and payload
 */
export const likeDislikeError = error => ({
  type: LIKE_DISLIKE_ARTICLE_ERROR,
  error
});

export const likeArticle = slug => dispatch => {
  axios({
    method: "post",
    url: `${url}${slug}/likes`,
    data: {
      like: true
    },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  })
    .then(response => {
      const responseMessage = response.data.message;
      dispatch(likeSuccess("responseMessage"));
      toaster.success(responseMessage, { duration: 2 });
    })
    .catch(error => {
      if (error.response) {
        const responseErrors =
          error.response.data.message || error.response.data.detail;
        dispatch(likeDislikeError(responseErrors));
        toaster.warning(responseErrors, { duration: 2 });
      } else {
        const oops = { serverError: "Oops something went wrong" };
        toaster.danger(oops.serverError, { duration: 2 });
      }
    });
};

export const dislikeArticle = slug => dispatch => {
  axios({
    method: "post",
    url: `${url}${slug}/likes`,
    data: {
      like: false
    },
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  })
    .then(response => {
      const responseMessage = response.data.message;
      dispatch(dislikeSuccess(responseMessage));
      toaster.success(responseMessage, { duration: 2 });
    })
    .catch(error => {
      if (error) {
        const responseErrors =
          error.response.data.message || error.response.data.detail;
        dispatch(likeDislikeError(responseErrors));
        toaster.warning(responseErrors, { duration: 2 });
      } else {
        const oops = { serverError: "Oops something went wrong" };
        toaster.danger(oops.serverError, { duration: 2 });
      }
    });
};

export default { likeArticle, dislikeArticle };
