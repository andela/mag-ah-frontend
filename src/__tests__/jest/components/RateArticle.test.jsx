import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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
  postRatings: jest.fn(),
  store
};

describe("Renders <RatingStars /> correctly", () => {
  const wrapper = mount(<RatingStars {...props} />);
  const children = wrapper.children();
  const starRater = children.find("StarRatingComponent");
  const star = starRater.find(".dv-star-rating-star").last();
  const container = wrapper.find(".ahStarRating");

  it("renders StarRatingComponent component", () => {
    expect(container.length).toEqual(1);
  });

  it("renders <StarRatingComponent />", () => {
    expect(wrapper.find("StarRatingComponent").length).toEqual(1);
  });

  it("sets state of value on hover", () => {
    star.simulate("mouseover");
    expect(children.state("rating")).toEqual(1);
  });

  it("returns to rating 0 on mouse leave if avg_rating is not set", () => {
    wrapper.setProps({ avgRating: 5 });
    star.simulate("mouseLeave");
    container.simulate("mouseleave");
    expect(children.state("rating")).toEqual(5);
  });

  it("returns to rating 0 on mouse leave if avg_rating is not set", () => {
    wrapper.setProps({ avgRating: null });
    star.simulate("mouseLeave");
    container.simulate("mouseleave");
    expect(children.state("rating")).toEqual(0);
  });

  it("calls the postRating function", () => {
    star.simulate("click");
    expect(store.getActions()).toContainEqual({ type: "START_FETCH" });
  });
});
