import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { dislikeArticle } from "../../redux/actions/likeDislike";
import Button from "../Button";

class Dislike extends React.Component {
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(dislikeArticle());
    const element = document.getElementById("dislikeButton");
    element.classList.add("bounceIn");
    window.setTimeout(() => {
      element.classList.remove("bounceIn");
    }, 1000);
  };

  render() {
    const { disliked } = this.props;
    return (
      <div>
        <Button
          className="btn btn-warning"
          id="dislikeButton"
          role="button"
          tabIndex="-1"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          label="Dislike"
          disabled={disliked ? "disabled" : ""}
        />
        {/* <i
          id="dislikeButton"
          role="button"
          tabIndex="-1"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          className="fas fa-thumbs-down text-warning ah-dislike-button"
        /> */}
      </div>
    );
  }
}

Dislike.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
