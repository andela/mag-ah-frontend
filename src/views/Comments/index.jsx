import React from "react";
import PropTypes from "prop-types";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

const CommentCard = ({
  commentedBy,
  createdAt,
  commentBody,
  handleDelete,
  currentUser
}) => (
  <div className="row w-100 border-bottom">
    <div className="col col-md-1 col-sm-1 col-lg-1 mr-2">
      <div className="thumbnail">
        <i className="fas fa-user-circle" />
      </div>
    </div>
    <div className="col col-md-10 col-sm-10 col-lg-10">
      <div className="bg-transparent">
        <div className="d-flex justify-content-between">
          <strong>{commentedBy}</strong>
          {currentUser === commentedBy ? (
            <i
              tabIndex={-42}
              role="button"
              className="far fa-trash-alt text-danger"
              onClick={handleDelete}
              onKeyDown={handleDelete}
            />
          ) : null}
        </div>
        <small className="text-muted mb-2">
          {timeAgo.format(new Date(createdAt))}
        </small>
        <div className="ah-main-article-body mb-3">{commentBody}</div>
      </div>
    </div>
    <div className="clear" />
  </div>
);

CommentCard.propTypes = {
  createdAt: PropTypes.string,
  commentedBy: PropTypes.string,
  commentBody: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired
};

CommentCard.defaultProps = {
  createdAt: null,
  commentedBy: null,
  commentBody: null
};

export default CommentCard;
