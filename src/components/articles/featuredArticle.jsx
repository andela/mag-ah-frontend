import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const FeaturedArticle = ({ title, description, author }) => (
  <div className="card ">
    <img
      className="card-img-top"
      src="assets/alisa-anton-632369-unsplash.jpg"
      alt="Card"
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text ">{description}</p>
      <small>
        By{" "}
        <a className="ah-author-link" href="/">
          {author}
        </a>
      </small>
      <p className="card-text d-flex justify-content-between article">
        <small className="text-muted">July 11.</small>
        <span>
          <small className="likes">
            <a href="/" className="text-success">
              {" "}
              <i className="fas fa-thumbs-up" />
              1020
            </a>
          </small>
          <small className="likes">
            <a href="/" className="text-warning">
              {" "}
              <i className="fas fa-thumbs-down" /> 20
            </a>
          </small>
        </span>
        <small>
          <a href="/" className="bookmark">
            {" "}
            <i className="fas fa-bookmark" />
          </a>
        </small>
      </p>
    </div>
  </div>
);

FeaturedArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.string
};

FeaturedArticle.defaultProps = {
  title: "",
  description: "",
  body: "",
  author: ""
};

export default FeaturedArticle;
