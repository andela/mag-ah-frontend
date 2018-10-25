import expect from "expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import config from "../../../config";
import GetArticle from "../../../redux/actions/article";
import { VIEW_ARTICLE } from "../../../redux/action_types";
import article from "../../mock/article";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe("Article Action tests", () => {
  let mock;
  const baseUrl = config.BASE_URL;
  const slug = "dummy";
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
  });
  afterEach(() => {
    store.clearActions();
  });

  it("should dispatch VIEW ARTICLE when fetching getting a user", () => {
    mock.onGet(`${baseUrl}/articles/${slug}`).reply(200, article);
    return store.dispatch(GetArticle(slug)).then(() => {
      expect(store.getActions()).toContainEqual({
        type: VIEW_ARTICLE,
        payload: article
      });
    });
  });
});
