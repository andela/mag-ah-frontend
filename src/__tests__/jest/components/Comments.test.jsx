import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Comments from "../../../components/articles/Comments";
import comments from "../../mock/Comments";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  comments: [],
  store
};
describe("Renders <CommentCard /> correctly", () => {
  const wrapper = shallow(<Comments {...props} />).dive();
  wrapper.setState({
    username: "test_user"
  });
  it("renders no <CommentCard /> without comment", () => {
    expect(wrapper.find("CommentCard").length).toEqual(0);
  });

  it("renders <CommentCard /> with comment", () => {
    wrapper.setProps({
      comments: comments.comments
    });

    expect(wrapper.find("CommentCard").length).toEqual(2);
  });
});
