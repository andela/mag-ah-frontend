import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { likeArticle } from "../../redux/actions/likeDislike";
import Button from "../Button";

class Like extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(likeArticle());
    const element = document.getElementById("likeButton");
    element.classList.add("bounceIn");
    window.setTimeout(() => {
      element.classList.remove("bounceIn");
    }, 1000);
  };

  render() {
    const { liked } = this.props;
    return (
      <div>
        <Button
          className="btn btn-success"
          id="likeButton"
          role="button"
          tabIndex="-1"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          label="Like"
          disabled={liked ? "disabled" : ""}
        />
        {/* <i
          id="likeButton"
          role="button"
          tabIndex="-1"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          className="fas fa-thumbs-up text-success ah-like-button"
        /> */}
      </div>
    );
  }
}

Like.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
