import expect from "expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchComments, createComment } from "../../../redux/actions/Comments";
import {
  COMMENT_FETCH_SUCCESS,
  COMMENT_CREATE_SUCCESS
} from "../../../redux/action_types";
import config from "../../../config";
import comments from "../../mock/Comments";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mock;
let store;
const slug = "dummy-slug";
const currentUser = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1";
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
  it("should dispatch COMMENT_FETCH_SUCCESS", async () => {
    mock
      .onGet(`${config.BASE_URL}/articles/${slug}/comments/`)
      .reply(200, comments.comments, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    await store.dispatch(fetchComments(slug));
    expect(store.getActions()).toContainEqual({
      type: COMMENT_FETCH_SUCCESS,
      comments: comments.comments
    });
  });
  it("should dispatch COMMENT_CREATE_SUCCESS", async () => {
    mock
      .onPost(`${config.BASE_URL}/articles/${slug}/comments/`)
      .reply(201, comments.comment, {
        headers: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    const payload = {
      comment_body: "newComment"
    };
    await store.dispatch(createComment(payload, slug));
    expect(store.getActions()).toContainEqual({
      type: COMMENT_CREATE_SUCCESS,
      comment: comments.comment
    });
  });
});
