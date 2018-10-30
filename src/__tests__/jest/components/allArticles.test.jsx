import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import expect from "expect";
import Articles from "../../../components/articles/Articles";
import articlesMockData from "../../mock/articles";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  articles: {},
  fetching: true,
  fetchArticles: jest.fn()
};

describe("Renders <Articles /> correctly", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Articles {...props} />
    </Provider>
  );

  it("renders Articles when articles is not empty", () => {
    wrapper.setProps({ article: articlesMockData.Articles });
    expect(wrapper.find("Articles").exists()).toBe(true);
  });
});
