import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { dislikeArticle } from "../../redux/actions/likeDislike";

class Dislike extends React.Component {
  handleClick = () => {
    const { dispatch, slug } = this.props;
    dispatch(dislikeArticle(slug));
    const element = document.getElementById("dislikeButton");
    element.classList.add("bounceIn");
    window.setTimeout(() => {
      element.classList.remove("bounceIn");
    }, 1000);
  };

  render() {
    const { disliked, disLikeCount } = this.props;
    return (
      <span className="badge badge-light ah-badge-light">
        <i
          id="dislikeButton"
          role="button"
          tabIndex="-1"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          className={
            disliked
              ? "fas fa-thumbs-down text-warning ah-dislike-button disabled-button"
              : "fas fa-thumbs-down text-warning ah-dislike-button"
          }
        />
        &ensp;
        {disLikeCount}
      </span>
    );
  }
}

Dislike.propTypes = {
  dispatch: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  disLikeCount: PropTypes.number.isRequired,
  disliked: PropTypes.bool
};

Dislike.defaultProps = {
  disliked: false
};

const mapStateToProps = ({ likeDislikeReducer }) => {
  const { disliked } = likeDislikeReducer || { disliked: false };
  return { disliked };
};

export default connect(mapStateToProps)(Dislike);
