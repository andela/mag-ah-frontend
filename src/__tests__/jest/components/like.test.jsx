import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import expect from "expect";
import Like from "../../../components/articles/Like";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  liked: false,
  likeCount: 0,
  slug: "dummy-slug"
};

describe("Renders <Like /> correctly", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Like {...props} />
    </Provider>
  );

  it("renders like", () => {
    expect(wrapper.find("Like").exists()).toBe(true);
  });
});
