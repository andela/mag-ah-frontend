import expect from "expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import config from "../../../config";
import { getCurrentProfile } from "../../../redux/actions/profileActions";
import * as actionTypes from "../../../redux/action_types";
import profile from "../../mock/article";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mock;
let store;

const profileURL = `${config.BASE_URL}/user`;

describe("profile Action tests", () => {
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
  });
  afterEach(() => {
    store.clearActions();
  });

  it("should dispatch GET_PROFILE when fetching user profile", () => {
    mock.onGet(profileURL).reply(200, profile);
    return store.dispatch(getCurrentProfile()).then(() => {
      expect(store.getActions()).toContainEqual({
        type: actionTypes.GET_PROFILE,
        payload: profile
      });
    });
  });
});
