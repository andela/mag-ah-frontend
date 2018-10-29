import React from "react";
import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

let currentUser;
if (localStorage.getItem("token")) {
  currentUser = jwtDecode(localStorage.getItem("token"));
}

const deleteButton = (commentedBy, handleDelete) => {
  if (currentUser.username === { commentedBy }) {
    return (
      <i className="far fa-trash-alt text-danger" onClick={ handleDelete } />
    );
  }
};

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

const CommentCard = ({ commentedBy, createdAt, commentBody, handleDelete }) => (
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
          <deleteButton commentedBy={commentedBy} handleDelete={handleDelete} />
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
  createdAt: PropTypes.string.isRequired,
  commentedBy: PropTypes.string.isRequired,
  commentBody: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CommentCard;
