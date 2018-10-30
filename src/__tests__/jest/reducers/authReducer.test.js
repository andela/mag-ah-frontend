import expect from "expect";
import authReducer from "../../../redux/reducers/authReducer";

import {
  START_FETCH,
  SERVER_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CLEAR_ERROR,
  RESET_STATE
} from "../../../redux/action_types";

const initialState = {
  message: "",
  error: {},
  fetching: false,
  fetched: false,
  success: false
};

const message =
  "Kindly click the link sent to your email to complete registration.";
const error = {
  email: "Please provide a valid email"
};

describe(" User signup reducer ", () => {
  it("should return INITIAL_STATE by default", () => {
    const newState = authReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it("should change state of fetching to true when passed with START_FETCH", () => {
    const action = {
      type: START_FETCH
    };
    const newState = authReducer(initialState, action);
    expect(newState.fetching).toEqual(true);
  });

  it("should change state of success to true when passed with SIGNUP_SUCCESS", () => {
    const action = {
      type: SIGNUP_SUCCESS,
      message
    };
    const newState = authReducer(initialState, action);
    expect(newState.fetching).toEqual(false);
    expect(newState.message).toEqual(message);
    expect(newState.fetched).toEqual(true);
  });

  it("should change state of error when passed with SIGNUP_ERROR", () => {
    const action = {
      type: SIGNUP_ERROR,
      error
    };
    const newState = authReducer(initialState, action);
    expect(newState.fetching).toEqual(false);
    expect(newState.error).toEqual(error);
    expect(newState.fetched).toEqual(true);
    expect(newState.success).toEqual(false);
  });

  it("should change state of fetched to false when passed with SERVER_ERROR", () => {
    const action = {
      type: SERVER_ERROR,
      error
    };
    const newState = authReducer(initialState, action);
    expect(newState.fetching).toEqual(false);
    expect(newState.error).toEqual(error);
    expect(newState.fetched).toEqual(false);
    expect(newState.success).toEqual(false);
  });

  it("should nullify error on CLEAR_ERROR", () => {
    const action = {
      type: CLEAR_ERROR
    };
    const newState = authReducer(initialState, action);
    expect(newState.error).toEqual({});
  });

  it("should return initial state on RESET_STATE", () => {
    const action = {
      type: RESET_STATE
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
