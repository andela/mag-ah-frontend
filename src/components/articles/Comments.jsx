import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import {
  fetchComments,
  createComment,
  deleteComment
} from "../../redux/actions/Comments";
import CommentCard from "../../views/Comments";

class Comments extends Component {
  state = {
    newComment: "",
    username: ""
  };

  async componentDidMount() {
    const { getComments, slug } = this.props;
    await getComments(slug);
    let currentUser;
    if (localStorage.getItem("token")) {
      currentUser = jwtDecode(localStorage.getItem("token"));
      this.setState({ username: currentUser.username });
    }
  }

  handleDelete = id => {
    const { deleteCom, getComments, slug } = this.props;
    deleteCom(id);
    getComments(slug);
  };

  onCreateComment = event => {
    const { newComment } = this.state;
    const { create, getComments, slug } = this.props;
    const payload = {
      comment_body: newComment
    };
    event.preventDefault();
    create(payload, slug);
    this.setState({ newComment: "" });
    getComments(slug);
  };

  handleNameInput = e => this.setState({ newComment: e.target.value });

  render() {
    const { comments } = this.props;
    const { newComment, username } = this.state;
    return (
      <div className="comments row mt-5">
        <h4 className="w-100">
          <strong>Comments ({comments.length})</strong>
        </h4>
        <p className="ah-comment-tagline">
          {" "}
          Start a discussion not a fire. Post with kindness
        </p>
        <textarea
          type="text"
          className="form-control rounded mb-10"
          rows="3"
          cols="100"
          name="comment"
          form="usrform"
          placeholder="Post a comment"
          value={newComment}
          onChange={this.handleNameInput}
        />
        <button
          type="submit"
          className="btn btn-ld btn-primary mt-2"
          onClick={this.onCreateComment}
        >
          Comment
        </button>
        {comments.map(comment => (
          <CommentCard
            key={comment.id}
            commentId={comment.id}
            commentedBy={comment.commented_by}
            createdAt={comment.created_at}
            commentBody={comment.comment_body}
            handleDelete={() => this.handleDelete(comment.id)}
            currentUser={username}
          />
        ))}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  slug: PropTypes.string,
  deleteCom: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired
};

Comments.defaultProps = {
  comments: [],
  slug: null
};

const mapStateToProps = ({ commentsReducer }) => {
  const { comments } = commentsReducer || {
    comments: []
  };
  return {
    comments
  };
};

export default connect(
  mapStateToProps,
  {
    getComments: fetchComments,
    create: createComment,
    deleteCom: deleteComment
  }
)(Comments);
