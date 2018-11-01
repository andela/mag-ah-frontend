import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockSore from "redux-mock-store";
import thunk from "redux-thunk";
import { FOLLOW_SUCCESS, UNFOLLOW_SUCCESS } from "../../../redux/action_types";
import followUser from "../../../redux/actions/followUnfollowAction";
import config from "../../../config";

const middleware = [thunk];
const mockStore = configureMockSore(middleware);
const author = "author1";
let store;

describe("FollowUnfollow Action tests", () => {
  const mock = new MockAdapter(axios);
  const url = `${config.BASE_URL}/profiles/${author}/follow/`;

  store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it("should dispatch follow success", () => {
    mock.onPost(url).reply(201);
    return store.dispatch(followUser(author, false)).then(() => {
      expect(store.getActions()).toContainEqual({
        type: FOLLOW_SUCCESS
      });
    });
  });

  it("should dispatch unfollow success", () => {
    mock.onDelete(url).reply(200);
    return store.dispatch(followUser(author, true)).then(() => {
      expect(store.getActions()).toContainEqual({
        type: UNFOLLOW_SUCCESS
      });
    });
  });
});
