import { START_FETCH, SERVER_ERROR, CLEAR_ERROR } from "../action_types";

export const startFetch = () => ({
  type: START_FETCH
});

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const serverError = error => ({
  type: SERVER_ERROR,
  error
});
