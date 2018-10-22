import axios from "axios";
import { toaster } from "evergreen-ui";
import {
  LIKE_ARTICLE,
  DISLIKE_ARTICLE,
  LIKE_DISLIKE_ARTICLE_ERROR
} from "../action_types";

/**
 * Like an article
 */
export const likeSuccess = message => ({
  type: LIKE_ARTICLE,
  message
});

/**
 * Dislike article
 */
export const dislikeSuccess = message => ({
  type: DISLIKE_ARTICLE,
  message
});

/**
 * like-Dislike article error
 */
export const likeDislikeError = error => ({
  type: LIKE_DISLIKE_ARTICLE_ERROR,
  error
});

export const likeArticle = () => dispatch => {
  const slug = "my-journey-to-andela-961ae0";
  axios({
    method: "post",
    url: `/api/articles/${slug}/likes`,
    data: {
      like: true
    },
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1pY2Fob3JpYXNvIiwiZXhwIjoxNTQwMTUxNTk4fQ.6ui6K52uciZRkUApIYA2hztC_m9uKQaEGncyEtOo4x4"
    }
  })
    .then(response => {
      const responseMessage = response.data.message;
      dispatch(likeSuccess(responseMessage));
      toaster.success(responseMessage, { duration: 2 });
    })
    .catch(error => {
      console.log(error.response);
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

export const dislikeArticle = () => dispatch => {
  const slug = "my-journey-to-andela-961ae0";
  axios({
    method: "post",
    url: `/api/articles/${slug}/likes`,
    data: {
      like: false
    },
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1pY2Fob3JpYXNvIiwiZXhwIjoxNTQwMTUxNTk4fQ.6ui6K52uciZRkUApIYA2hztC_m9uKQaEGncyEtOo4x4"
    }
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
