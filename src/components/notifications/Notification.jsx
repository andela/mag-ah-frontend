import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NotificationCard from "../../views/Notification/Notification";
import {
  fetchNotifications,
  markNotificationAsRead,
  deleteNotification
} from "../../redux/actions/notifications";

class Notifications extends Component {
  state = {};

  componentWillMount() {
    const { fetch } = this.props;
    fetch();
  }

  markAsRead = e => {
    const { fetch } = this.props;
    const { readNotification } = this.props;
    if (e.target.id === "all") {
      readNotification();
    } else {
      readNotification(e.target.id);
    }
    fetch();
  };

  deleteNotification = notificationId => {
    const { trash } = this.props;
    trash(notificationId);
  };

  render() {
    const { notifications } = this.props;
    const allNotifications = [];
    let allRead = true;

    if (notifications) {
      Object.keys(notifications).forEach(key => {
        const item = notifications[key];
        item.id = key;
        allNotifications.push(item);
        allRead = !notifications[key].unread;
      });
    }

    const numberOfNotifications = allNotifications.length;

    return (
      <div className="dropdown notifications">
        <a
          className="notifications-link dropdown-toggle"
          href="/"
          role="button"
          id="notifications"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="far fa-bell" />
          <span className="badge badge-danger ah-notifications-badge">
            {numberOfNotifications}
          </span>
        </a>
        <div className="dropdown-menu" aria-labelledby="notifications">
          {!numberOfNotifications ? (
            <span className="ml-4 text-muted">
              {"You don't have any more notifications now"}
            </span>
          ) : (
            ""
          )}

          {allNotifications.map(notification => (
            <NotificationCard
              key={notification.id}
              unread={notification.unread}
              notification={notification.notification}
              createdAt={notification.created_at}
              slug={notification.article.slug}
              markAsRead={this.markAsRead}
              trash={this.deleteNotification}
              notificationId={notification.id}
            />
          ))}

          {allRead ? (
            ""
          ) : (
            <form>
              <i
                id="all"
                className="fa text-success all-read float-right mr-2 mt-2"
                onClick={this.markAsRead}
                aria-hidden="true"
              >
                <span className="text-muted">Mark all as read</span>
              </i>
            </form>
          )}
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.shape(),
  fetch: PropTypes.func.isRequired,
  readNotification: PropTypes.func.isRequired,
  trash: PropTypes.func.isRequired
};

Notifications.defaultProps = {
  notifications: {}
};

const mapStateToProps = ({ NotificationReducer }) => {
  const { notifications } = NotificationReducer || {
    notifications: {}
  };
  return { notifications };
};

export default connect(
  mapStateToProps,
  {
    fetch: fetchNotifications,
    readNotification: markNotificationAsRead,
    trash: deleteNotification
  }
)(Notifications);
