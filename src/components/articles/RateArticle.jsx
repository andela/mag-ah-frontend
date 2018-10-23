import React from "react";
import PropTypes from "prop-types";
import { toaster } from "evergreen-ui";
import { connect } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { postRatings } from "../../redux/actions/articleRating";

class RatingStars extends React.Component {
  state = {
    rating: 0,
    rated: false
  };

  componentDidMount() {
    const { avgRating } = this.props;
    if (avgRating) {
      this.setState({ rating: avgRating });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { response, error, avgRating } = nextProps;
    const { rated } = this.state;
    let errorMessage;
    if (rated && error) {
      switch (error.status) {
        case 403:
          errorMessage = error.data.Articles.message;
          break;
        case 401:
          document.querySelector("#signInButton").click();
          errorMessage = "Please sign in to rate an article";
          break;
        default:
          errorMessage = "Oops something went wrong";
      }
      toaster.success(errorMessage, { duration: 5 });
      this.setState({ rated: false });
    }
    if (rated && response) {
      const { message } = response.Articles;
      toaster.success(message, { duration: 3 });
    }

    if (avgRating) {
      return { rating: avgRating };
    }
    return null;
  }

  onStarClick = nextValue => {
    const { rating } = this.state;
    const { slug, rate } = this.props;
    this.setState({ rating: nextValue, rated: true });
    let currentUser;
    if (localStorage.getItem("token")) {
      currentUser = localStorage.getItem("token");
    }
    rate(currentUser, rating, slug);
  };

  onStarHover = nextValue => {
    this.setState({ rating: nextValue });
  };

  onStarBlur = () => {
    const { avgRating } = this.props;
    if (avgRating) {
      this.setState({ rating: avgRating });
    } else {
      this.setState({ rating: 0 });
    }
  };

  render() {
    const { rating } = this.state;
    return (
      <div className="ahStarRating d-flex" onMouseLeave={this.onStarBlur}>
        <StarRatingComponent
          name="ahRateArticle"
          starCount={5}
          value={Number(rating)}
          onStarClick={this.onStarClick}
          onStarHover={this.onStarHover}
        />
        <span className="badge badge-success ml-2">{rating}</span>
      </div>
    );
  }
}

RatingStars.propTypes = {
  slug: PropTypes.string.isRequired,
  avgRating: PropTypes.number,
  rate: PropTypes.func.isRequired,
  error: PropTypes.shape(),
  response: PropTypes.shape()
};

RatingStars.defaultProps = {
  avgRating: null,
  error: null,
  response: null
};

const mapStateToProps = ({ rateArticle }) => {
  const { response, error } = rateArticle || {
    response: null,
    error: null
  };
  return {
    response,
    error
  };
};

export default connect(
  mapStateToProps,
  { rate: postRatings }
)(RatingStars);
