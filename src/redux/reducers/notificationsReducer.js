import {
  FETCH_NOTIFICATIONS,
  MARK_NOTIFICATION_AS_READ,
  MARK_ALL_NOTIFICATIONS_AS_READ,
  DELETE_NOTIFICATION
} from "../action_types";
import initalState from "./initialState";

export default (state = initalState.notifications, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.notifications
      };
    }

    case MARK_NOTIFICATION_AS_READ: {
      const notifications = { ...state };
      notifications.notifications[action.notificationId].unread = false;
      return { ...state, notifications: notifications.notifications };
    }

    case MARK_ALL_NOTIFICATIONS_AS_READ: {
      const notifications = { ...state };
      Object.keys(notifications.notifications).forEach(key => {
        notifications.notifications[key].unread = false;
      });
      return {
        ...state,
        notifications: notifications.notifications,
        allRead: true
      };
    }

    case DELETE_NOTIFICATION: {
      const notifications = { ...state.notifications };
      const id = action.notificationId;
      const updatedNotifications = {};
      Object.keys(notifications).forEach(key => {
        const item = key !== id ? notifications[key] : null;
        if (item) {
          updatedNotifications[key] = item;
        }
      });
      return {
        ...state,
        notifications: updatedNotifications
      };
    }
    default:
      return state;
  }
};
