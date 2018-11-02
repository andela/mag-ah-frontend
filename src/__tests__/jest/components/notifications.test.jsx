import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import Notification from "../../../components/notifications/Notification";
import NotificationCard from "../../../views/Notification/Notification";
import { notifications } from "../../mock/notifications";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  notifications: notifications.notifications,
  trash: jest.fn(),
  readNotification: jest.fn(),
  fetch: jest.fn(),
  unread: true,
  notification: "Meshack has done...",
  createdAt: "2018-11-01T15:16:20.834891+03:00",
  slug: "a-definitive-review-of-the-iphone-xr-d7d093",
  notificationId: "1",
  markAsRead: jest.fn(),
  store
};

const event = {
  preventDefault() {},
  target: { id: "1" }
};

describe("Renders <Notification /> correctly", () => {
  const wrapper = shallow(<Notification {...props} />).dive();
  wrapper.setProps({ notifications });
  it("renders Notifications component when notifications are not empty", () => {
    expect(wrapper.find(".notifications").exists()).toBe(true);
  });

  it("renders Notifications content", () => {
    expect(wrapper.find(".dropdown-menu").exists()).toBe(true);
  });

  it("renders <NotificationCard/> successfully", () => {
    expect(wrapper.find("NotificationCard").length).toBe(2);
  });

  it("renders handles click", () => {
    wrapper.find("#all").simulate("click", event);
  });
});

describe("Renders <NotificationCard /> correctly", () => {
  const wrapper = shallow(<NotificationCard {...props} />);

  it("renders Notifications item", () => {
    expect(wrapper.find(".notification-item").exists()).toBe(true);
  });

  it("renders handles click", () => {
    wrapper.find(".fa-trash").simulate("click", event);
  });

  it("renders handles click", () => {
    wrapper.find(".fa-check").simulate("click", event);
  });
});
