import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";

import {
  START_FETCH,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../../../redux/action_types";
import authUser, {
  signupSuccess,
  signupError
} from "../../../redux/actions/authUser";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const signupUrl = "http://127.0.0.1:8000/api/users/signup/";
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
    moxios.install();
  });
  afterEach(() => moxios.uninstall());
  it("should dispatch START_FETCH when the signup begins", done => {
    const expectedAction = [{ type: START_FETCH }];
    const store = mockStore({});
    store.dispatch(authUser(validUser));
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

describe("Successfull Signup Action", () => {
  it("should dispatch SIGNUP_SUCCESS on successfull user signup", done => {
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
    const store = mockStore({});
    store.dispatch(
      signupSuccess(
        "Kindly click the link sent to your email to complete registration."
      )
    );
    expect(store.getActions()).toEqual(expectedAction);
    done();
  });
});

it("should return action type and payload for signUpFailure", done => {
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
  const store = mockStore({});
  store.dispatch(signupError(error));
  expect(store.getActions()).toEqual(returnedAction);
  done();
});
