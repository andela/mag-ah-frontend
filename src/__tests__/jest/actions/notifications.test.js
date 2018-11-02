import expect from "expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import config from "../../../config";
import {
  notificationFetch,
  fetchNotifications,
  MarkNotificationAsRead,
  markNotificationAsRead,
  MarkAllNotificationsAsRead,
  deleteNotification,
  DeleteNotification
} from "../../../redux/actions/notifications";
import {
  FETCH_NOTIFICATIONS,
  MARK_NOTIFICATION_AS_READ,
  MARK_ALL_NOTIFICATIONS_AS_READ,
  DELETE_NOTIFICATION
} from "../../../redux/action_types";
import { notifications } from "../../mock/notifications";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let mock;
let store;

describe("Notification Action tests", () => {
  const baseUrl = config.BASE_URL;
  beforeEach(() => {
    store = mockStore({});
    mock = new MockAdapter(axios);
  });
  afterEach(() => {
    store.clearActions();
  });

  it("should dispatch FETCH_NOTIFICATIONS after fetching notifications", () => {
    mock
      .onGet(`${baseUrl}/notifications/`)
      .reply(200, notifications.notifications);
    return store.dispatch(fetchNotifications()).then(() => {
      store.dispatch(notificationFetch(notifications));
      expect(store.getActions()).toContainEqual({
        type: FETCH_NOTIFICATIONS,
        notifications
      });
    });
  });

  it("should dispatch MARK_NOTIFICATION_AS_READ ", () => {
    const notificationId = 1;
    mock
      .onPut(`${baseUrl}/notifications/${notificationId}`)
      .reply(200, "Notification marked as read");
    return store.dispatch(markNotificationAsRead(notificationId)).then(() => {
      store.dispatch(MarkNotificationAsRead(notificationId));
      expect(store.getActions()).toContainEqual({
        type: MARK_NOTIFICATION_AS_READ,
        notificationId
      });
    });
  });

  it("should dispatch MARK_ALL_NOTIFICATIONS_AS_READ ", () => {
    mock
      .onPut(`${baseUrl}/notifications/`, {})
      .reply(200, "Notifications marked as read");
    return store.dispatch(markNotificationAsRead(null)).then(() => {
      const all = "all";
      store.dispatch(MarkAllNotificationsAsRead(all));
      expect(store.getActions()).toContainEqual({
        type: MARK_ALL_NOTIFICATIONS_AS_READ,
        all
      });
    });
  });

  it("should dispatch DELETE_NOTIFICATION ", () => {
    const notificationId = 1;
    mock
      .onDelete(`${baseUrl}/notifications/${notificationId}`)
      .reply(200, "Notifications deleted");
    return store.dispatch(deleteNotification(notificationId)).then(() => {
      store.dispatch(DeleteNotification(notificationId));
      expect(store.getActions()).toContainEqual({
        type: DELETE_NOTIFICATION,
        notificationId
      });
    });
  });
});
