import expect from "expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchArticles } from "../../../redux/actions/fetchArticles";
import {
  ARTICLE_FETCH_ERROR,
  ARTICLE_FETCH_SUCCESS
} from "../../../redux/action_types";
import articlesMockData from "../../mock/articles";
import config from "../../../config";

const articles = articlesMockData.Articles.results;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store;

describe("Article Action tests", () => {
  const mock = new MockAdapter(axios);
  const url = `${config.BASE_URL}/articles/`;

  store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it("should dispatch ARTICLE_FETCH_SUCCESS when done fetching articles", () => {
    mock.onGet(url).reply(200, articlesMockData);
    return store.dispatch(fetchArticles()).then(() => {
      expect(store.getActions()).toContainEqual({
        articles,
        type: ARTICLE_FETCH_SUCCESS
      });
    });
  });

  it("should dispatch ARTICLE_FETCH_ERROR when fetchArticles is called erroneously", () => {
    mock.onGet(url).reply(404, articles);
    return store.dispatch(fetchArticles()).then(() => {
      expect(store.getActions()).toContainEqual({
        error: "Request failed with status code 404",
        type: ARTICLE_FETCH_ERROR
      });
    });
  });
});
