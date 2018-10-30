import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import expect from "expect";
import Dislike from "../../../components/articles/Dislike";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  disliked: false,
  dislikeCount: 0,
  slug: "dummy-slug"
};

describe("Renders <Like /> correctly", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Dislike {...props} />
    </Provider>
  );

  it("It renders dislike", () => {
    expect(wrapper.find("Dislike").exists()).toBe(true);
  });
});
