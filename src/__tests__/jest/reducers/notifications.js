import expect from "expect";
import {
  FETCH_NOTIFICATIONS,
  MARK_NOTIFICATION_AS_READ,
  MARK_ALL_NOTIFICATIONS_AS_READ
} from "../../../redux/action_types";
import notificationsReducer from "../../../redux/reducers/notificationsReducer";
import { notifications } from "../../mock/notifications";

const initialState = {
  notifications: []
};

const action = { notifications: [], notificationId: 31 };

describe("Retrieve notifications Reducer test", () => {
  it("should return initial state when there is no action", () => {
    expect(notificationsReducer(initialState, action)).toEqual(initialState);
  });

  initialState.notifications = notifications;

  it("should handle FETCH_NOTIFICATIONS", () => {
    action.type = FETCH_NOTIFICATIONS;
    expect(notificationsReducer(initialState, action).notifications).toEqual(
      action.notifications
    );
  });

  it("should handle MARK_NOTIFICATION_AS_READ", () => {
    action.type = MARK_NOTIFICATION_AS_READ;
    expect(
      notificationsReducer(initialState, action).notifications[
        action.notificationId
      ].unread
    ).toEqual(false);
  });

  it("should handle MARK_ALL_NOTIFICATIONS_AS_READ", () => {
    action.type = MARK_ALL_NOTIFICATIONS_AS_READ;
    const allNotifications = notificationsReducer(initialState, action)
      .notifications;
    Object.keys(allNotifications).forEach(key => {
      expect(allNotifications[key].unread).toEqual(false);
    });
  });
});
