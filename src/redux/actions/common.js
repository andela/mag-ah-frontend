import { START_FETCH, SERVER_ERROR } from "../action_types";

export const startFetch = () => ({
  type: START_FETCH
});

export const serverError = error => ({
  type: SERVER_ERROR,
  error
});
