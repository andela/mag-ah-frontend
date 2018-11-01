import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import UpdateArticle from "../../../components/articles/UpdateArticle";
import articlesMockData from "../../mock/articles";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});
const { results } = articlesMockData.Articles;

const props = {
  error: {
    title: ""
  },
  updating: false,
  article: {},
  match: {
    params: {
      slug: "test-slug"
    }
  },
  store
};

describe("Renders <Articles /> correctly", () => {
  const wrapper = shallow(<UpdateArticle {...props} />).dive();

  it("renders form when UpdateArticle is rendered", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("renders container when articles is empty", () => {
    const article = results[0];
    wrapper.setProps({ article: { Article: article } });
    expect(wrapper.find("TextInput").length).toEqual(2);
    expect(wrapper.find("TextArea").length).toEqual(1);
    expect(wrapper.find("ArticleTags").length).toEqual(1);
  });
});
