import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import RatingStars from "../../../components/articles/RateArticle";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  avgRating: 0,
  slug: "",
  postRatings: jest.fn()
};

describe("Renders <RatingStars /> correctly", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RatingStars {...props} />
    </Provider>
  );

  it("renders StarRatingComponent component", () => {
    expect(wrapper.find(".ahStarRating").length).toEqual(1);
  });

  it("renders <StarRatingComponent />", () => {
    expect(wrapper.find("StarRatingComponent").length).toEqual(1);
  });

  it("renders with the prop avgRating and assigns it a value", () => {
    expect(wrapper.props().children.props.avgRating).toEqual(0);
  });
});
