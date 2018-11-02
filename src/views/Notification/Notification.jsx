import React, { Component } from "react";
import PropTypes from "prop-types";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

class NotificationCard extends Component {
  state = {};

  markAsRead = e => {
    e.preventDefault();
    const { markAsRead } = this.props;
    markAsRead(e);
  };

  deleteNotification = e => {
    e.preventDefault();
    const { trash } = this.props;
    trash(e.target.id);
  };

  render() {
    const {
      unread,
      notification,
      createdAt,
      slug,
      notificationId
    } = this.props;

    return (
      <div
        className={unread ? "notification-item unread" : "notification-item"}
      >
        <a className="dropdown-item" href={`/articles/${slug}`}>
          <div className="row">
            <div className="col-2 mt-2">
              <img
                src={`https://source.unsplash.com/random/350x250?sig=${Math.random()}`}
                alt="owner"
                className="rounded-circle"
                width="40"
                height="40"
              />
            </div>
            <div className="col-10">{notification}</div>
          </div>

          <form>
            <div className="row mt-2">
              <div className="col-2" />
              <div className="col-10">
                <small className="text-secondary font-italic">
                  <abbr className="timeago">
                    {timeAgo.format(new Date(createdAt))}
                  </abbr>
                </small>
                <i
                  id={notificationId}
                  onClick={this.deleteNotification}
                  className="fa fa-trash float-right clearfix"
                  aria-hidden="true"
                />
                {unread ? (
                  <i
                    id={notificationId}
                    onClick={this.markAsRead}
                    className="fa fa-check float-right clearfix"
                    aria-hidden="true"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </form>
        </a>
      </div>
    );
  }
}

NotificationCard.propTypes = {
  unread: PropTypes.bool.isRequired,
  notification: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  notificationId: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
  trash: PropTypes.func.isRequired
};

export default NotificationCard;
