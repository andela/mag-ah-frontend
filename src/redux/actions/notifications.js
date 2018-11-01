import axios from "axios";
import { toaster } from "evergreen-ui";
import {
  FETCH_NOTIFICATIONS,
  MARK_NOTIFICATION_AS_READ,
  MARK_ALL_NOTIFICATIONS_AS_READ,
  DELETE_NOTIFICATION
} from "../action_types";
import config from "../../config";

let url = `${config.BASE_URL}/notifications/`;

/**
 * Retrieve notifications
 *
 * @param (object) notifications
 * @return (object) type and payload
 */
export const notificationFetch = notifications => ({
  type: FETCH_NOTIFICATIONS,
  notifications
});

/**
 * Send request to retrieve notifications
 *
 * @param (null)
 * @return (function call) dispatch
 */
export const fetchNotifications = () => async dispatch => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  try {
    const response = await axios.get(`${url}`, axiosConfig);
    const notifications = response.data.notification;
    dispatch(notificationFetch(notifications));
  } catch (error) {
    toaster.success(
      "Oops...Something wrong occurred. Please logout and login again",
      { duration: 3 }
    );
  }
};

/**
 * Mark notification as read
 *
 * @param (integer) notificationId
 * @return (object) type and payload
 */
export const MarkNotificationAsRead = notificationId => ({
  type: MARK_NOTIFICATION_AS_READ,
  notificationId
});

/**
 * Mark all notifications as read
 *
 * @param (boolean) all
 * @return (object) type and payload
 */
export const MarkAllNotificationsAsRead = all => ({
  type: MARK_ALL_NOTIFICATIONS_AS_READ,
  all
});

/**
 * send request to mark a notification or all notifications as read
 *
 * @param (object) notificationId
 * @return (function) dispatch
 */
export const markNotificationAsRead = (
  notificationId = null
) => async dispatch => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  try {
    url = notificationId ? `${url}${notificationId}` : url;
    const response = await axios.put(`${url}`, {}, axiosConfig);
    const { message } = response.data.message;
    toaster.success(message, { duration: 3 });
    if (notificationId) {
      dispatch(MarkNotificationAsRead(notificationId));
    } else {
      dispatch(MarkAllNotificationsAsRead(true));
    }
  } catch (error) {
    toaster.success(
      "Oops...Something wrong occurred. Please logout and login again",
      { duration: 3 }
    );
  }
};

/**
 * Delete a notification
 *
 * @param (integer) notificationId
 * @return (object) type and payload
 */
export const DeleteNotification = notificationId => ({
  type: DELETE_NOTIFICATION,
  notificationId
});

/**
 * send request to delete a notification
 *
 * @param (object) notificationId
 * @return (function) dispatch
 */
export const deleteNotification = notificationId => async dispatch => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  try {
    await axios.delete(`${url}${notificationId}`, axiosConfig);
    toaster.success("Notification deleted successfully", { duration: 3 });
    dispatch(DeleteNotification(notificationId));
  } catch (error) {
    toaster.success(
      "Oops...Something wrong occurred. Please logout and login again",
      { duration: 3 }
    );
  }
};
