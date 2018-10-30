import expect from "expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { postRatings } from "../../../redux/actions/articleRating";
import {
  START_FETCH,
  RATE_ARTICLE_SUCCESS,
  SERVER_ERROR
} from "../../../redux/action_types";
import SERVER from "../../../config";
import rating from "../../mock/rating";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mock;
let store;
const slug = "dummy-slug";
const url = SERVER.BASE_URL;
const currentUser =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1pY2Fob3JpYXNvIiwiZXhwIjoxNTQwODkyMjAyfQ.RILtoStfybEC6__mjuk8PodPgUacuLqX5SJp_kdB1kc";

describe("User Action tests", () => {
  beforeEach(() => {
    mock = new MockAdapter(axios);
    store = mockStore({});
    store.clearActions();
  });

  afterEach(() => {
    store.clearActions();
    mock.restore();
    mock.reset();
  });

  it("should dispatch START_FETCH when begining request", async () => {
    mock.onPost(`${url}/articles/${slug}/rate/`).reply(201);
    await store.dispatch(postRatings(currentUser, { rating: 5 }, slug));
    expect(store.getActions()).toContainEqual({
      type: START_FETCH
    });
  });

  it("should dispatch RATE_ARTICLE_SUCCESS when article has been rated", async () => {
    mock.onPost(`${url}/articles/${slug}/rate/`).reply(201, rating.success, {
      headers: {
        Authorization: `Bearer ${currentUser}`
      }
    });
    await store.dispatch(postRatings(currentUser, { rating: 5 }, slug));
    expect(store.getActions()).toContainEqual({
      type: RATE_ARTICLE_SUCCESS,
      response: rating.success
    });
  });

  it("should dispatch SERVER_ERROR when server is down", async () => {
    mock.onPost(`${url}/articles/${slug}/rate/`).networkError();
    await store.dispatch(postRatings(currentUser, { rating: 5 }, slug));
    expect(store.getActions()).toContainEqual({
      type: SERVER_ERROR,
      error: rating.serverError
    });
  });
});
