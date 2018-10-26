import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import expect from "expect";
import NewArticle from "../../../components/articles/NewArticle";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe("Renders <NewArticle /> correctly", () => {
  const wrapper = mount(
    <Provider store={store}>
      <NewArticle />
    </Provider>
  );

  it("renders TextInput", () => {
    expect(wrapper.find("TextInput").length).toEqual(2);
  });

  it("renders TextArea", () => {
    expect(wrapper.find("TextArea").length).toEqual(1);
  });
});
