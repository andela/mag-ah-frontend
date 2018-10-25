import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import Article from "../../../components/articles/Article";
import article from "../../mock/article";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});
const props = {
  article: {},
  error: {},
  store
};

describe("Renders <Article /> correctly", () => {
  const wrapper = shallow(<Article {...props} store={store} />).dive();

  it("renders no-article div when no article found", () => {
    expect(wrapper.find(".no-article").length).toBe(1);
  });
  it("renders article when article is found", () => {
    wrapper.setProps({
      article
    });
    wrapper.update();
    expect(wrapper.find(".container").length).toEqual(1);
  });
});
