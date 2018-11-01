import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import SingleArticle from "../../../components/articles/ViewSingleArticle";
import articlesMockData from "../../mock/articles";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});
const { results } = articlesMockData.Articles;

const props = {
  article: {},
  fetching: true,
  fetchArticles: jest.fn(),
  store,
  match: {
    params: {
      slug: "test-slug"
    }
  }
};

describe("Renders <Articles /> correctly", () => {
  const wrapper = shallow(<SingleArticle {...props} />).dive();

  it("renders container when articles is empty", () => {
    expect(wrapper.find(".no-article").length).toEqual(1);
  });

  it("renders container when articles is empty", () => {
    const article = results[0];
    wrapper.setProps({ article: { Article: article } });
    expect(wrapper.find(".article").length).toEqual(1);
    expect(wrapper.find(".ah-main-article-title").length).toEqual(1);
    expect(wrapper.find(".ah-main-article-description").length).toEqual(1);
  });
});
