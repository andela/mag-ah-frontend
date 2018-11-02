import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import Articles from "../../../components/articles/MyArticles";
import articlesMockData from "../../mock/articles";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  articles: [],
  store
};

describe("Renders <Articles /> correctly", () => {
  const wrapper = shallow(<Articles store={store} {...props} />).dive();

  it("renders container when articles is empty", () => {
    expect(wrapper.find(".container")).toBeDefined();
  });

  it("renders <ArticleCard/> when articles is not empty", () => {
    wrapper.setProps({ articles: articlesMockData.Articles });
    expect(wrapper.find("ArticleCard").exists()).toBe(true);
  });
});
