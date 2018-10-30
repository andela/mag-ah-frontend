import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import * as types from "../../../redux/action_types";
import {
  loginError,
  loginSuccessful
} from "../../../redux/actions/loginAction";

const middleware = [thunk];
const mockstore = configureMockStore(middleware);
const emailError = "email is required";
const loginSuccefullMessage = "mike";
const regURL = "https://ah-magnificent6-staging.herokuapp.com/api/users/login";
let store;

describe("action", () => {
  beforeEach(() => {
    moxios.install();
    store = mockstore({});
  });
  afterEach(() => {
    store.clearActions();
    moxios.uninstall();
  });

  it("should dispatch login successful", async () => {
    moxios.stubRequest(regURL, {
      status: 200,
      response: loginSuccefullMessage
    });
    await store.dispatch(loginSuccessful("mike"));
    expect(store.getActions());
  });

  it("should dispatch a login error", async () => {
    moxios.stubRequest(regURL, {
      status: 400,
      response: emailError
    });

    const expectedAction = [
      {
        type: types.LOGIN_ERROR,
        error: emailError
      }
    ];
    await store.dispatch(loginError(emailError));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
