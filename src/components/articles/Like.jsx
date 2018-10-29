import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { likeArticle } from "../../redux/actions/likeDislike";

class Like extends React.Component {
  handleClick = () => {
    const { dispatch, slug } = this.props;
    dispatch(likeArticle(slug));
    const element = document.getElementById("likeButton");
    element.classList.add("bounceIn");
    window.setTimeout(() => {
      element.classList.remove("bounceIn");
    }, 1000);
  };

  render() {
    const { liked, likeCount } = this.props;
    return (
      <span className="badge badge-light ah-badge-light">
        <i
          id="likeButton"
          role="button"
          tabIndex="-1"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          className={
            liked
              ? "fas fa-thumbs-up text-success ah-like-button disabled-button"
              : "fas fa-thumbs-up text-success ah-like-button"
          }
        />
        &ensp;
        {likeCount}
      </span>
    );
  }
}

Like.propTypes = {
  dispatch: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  liked: PropTypes.bool
};

Like.defaultProps = {
  liked: false
};

const mapStateToProps = ({ likeDislikeReducer }) => {
  const { liked } = likeDislikeReducer || { liked: false };
  return { liked };
};

export default connect(mapStateToProps)(Like);
