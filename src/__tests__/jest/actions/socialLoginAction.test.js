import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import { socialLoginSuccess } from "../../../redux/actions/SocialLoginAction";
import * as actionTypes from "../../../redux/action_types";
import { socialPayload } from "../../mock/mockData";
import config from "../../../config";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const loginURL = config.BASE_URL;

describe("socialLoginAction", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("should dispatch successful social login", async () => {
    moxios.stubRequest(`${loginURL}/users/oauth/`, {
      status: 200,
      response: {}
    });

    const expectedAction = [
      {
        type: actionTypes.SOCIAL_LOGIN_SUCCESS,
        token: socialPayload.token,
        username: socialPayload.username,
        email: socialPayload.email
      }
    ];

    const store = mockStore({});

    store.dispatch(
      socialLoginSuccess(
        socialPayload.token,
        socialPayload.username,
        socialPayload.email
      )
    );
    expect(store.getActions()).toEqual(expectedAction);
  });
});
