import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";

import {
  START_FETCH,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../../../redux/action_types";

import {
  signup,
  signupSuccess,
  signupError
} from "../../../redux/actions/authUser";

import config from "../../../config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store;
const signupUrl = `${config.BASE_URL}/users/signup/`;
const validUser = {
  username: "Tried and Tested",
  email: "testeduser@gmail.com",
  password: "12345678A"
};
const error = {
  email: "please fill in the email"
};

describe("test signup_actions", () => {
  beforeEach(() => {
    store = mockStore({});
    moxios.install();
  });

  afterEach(() => {
    store.clearActions();
    moxios.uninstall();
  });

  it("should dispatch START_FETCH when the signup begins", () => {
    const expectedAction = [{ type: START_FETCH }];
    store.dispatch(signup(validUser));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("should dispatch SIGNUP_SUCCESS on successfull user signup", () => {
    moxios.stubRequest(signupUrl, {
      request: validUser,
      status: 201,
      response: {
        message:
          "Kindly click the link sent to your email to complete registration."
      }
    });
    const expectedAction = [
      {
        type: SIGNUP_SUCCESS,
        message:
          "Kindly click the link sent to your email to complete registration."
      }
    ];
    store.dispatch(
      signupSuccess(
        "Kindly click the link sent to your email to complete registration."
      )
    );
    expect(store.getActions()).toEqual(expectedAction);
  });
});

it("should return action type and payload for signUpFailure", () => {
  moxios.stubRequest(signupUrl, {
    request: error,
    status: 400,
    response: {}
  });

  const returnedAction = [
    {
      type: SIGNUP_ERROR,
      error
    }
  ];
  store.dispatch(signupError(error));
  expect(store.getActions()).toEqual(returnedAction);
});
