import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchComments,
  createComment,
  deleteComment
} from "../../redux/actions/Comments";
import CommentCard from "../../views/Comments";

class Comments extends Component {
  state = { newComment: "" };

  async componentDidMount() {
    const { fetchComments, slug } = this.props;
    await fetchComments(slug);
  }

  handleRestructureComments = comments => {
    let parent = {};
    const newComments = [];
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].parent === null) {
        parent = comments[i];
        for (let x = 0; x < comments.length; x++) {
          if (comments[x].parent === parent.id) {
            if (!parent.children) {
              parent.children = [];
            }
            parent.children.unshift(comments[x]);
          }
        }
        newComments.unshift(comments[i]);
      }
    }
    return newComments;
  };

  handleDelete = id => {
    const { deleteComment, fetchComments, slug } = this.props;
    deleteComment(id);
    fetchComments(slug);
  };

  onCreateComment = event => {
    const { newComment } = this.state;
    const { createComment, fetchComments, slug } = this.props;
    const payload = {
      comment_body: newComment
    };
    event.preventDefault();
    createComment(payload, slug);
    this.setState({ newComment: "" });
    fetchComments(slug);
  };

  handleNameInput = e => this.setState({ newComment: e.target.value });

  render() {
    const { comments } = this.props;
    let updatedComments = [];
    updatedComments = this.handleRestructureComments(comments);
    const { newComment } = this.state;
    return (
      <div className="comments row mt-5">
        <h4 className="w-100">
          <strong>Comments ({comments.length})</strong>
        </h4>
        <p>Start a discussion not a fire. Post with kindness</p>
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
        {updatedComments.map(comment => (
          <CommentCard
            key={comment.id}
            commentId={comment.id}
            commentedBy={comment.commented_by}
            createdAt={comment.created_at}
            commentBody={comment.comment_body}
            handleDelete={() => this.handleDelete(comment.id)}
          />
        ))}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  slug: PropTypes.string.isRequired
};

Comments.defaultProps = {
  comments: []
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
  { fetchComments, createComment, deleteComment }
)(Comments);
