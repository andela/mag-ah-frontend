import React from "react";
import PropTypes from "prop-types";

const Article = ({ title, description, author }) => (
  <div className="list-group">
    <div className="d-flex justify-content-between article">
      <img
        src="assets/annie-spratt-558900-unsplash.jpg"
        className="rounded float-left"
        alt="post"
        width="120"
        height="120"
      />
      <div className="ml-2">
        <h6>
          <a href="article.html">{title}</a>
        </h6>
        <p>{description}</p>
        <small>
          By{" "}
          <a className="ah-author-link" href="/">
            {author}
          </a>
        </small>
        <p className="d-flex justify-content-between article-footer">
          <small className="text-muted">July 11.</small>
          <small className="text-muted">7 min read</small>

          <span>
            <small className="likes">
              <a href="/" className="text-success">
                {" "}
                <i className="fas fa-thumbs-up" />
                102
              </a>
            </small>
            <small className="likes">
              <a href="/" className="text-warning">
                {" "}
                <i className="fas fa-thumbs-down" />
                20
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
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string
};

Article.defaultProps = {
  title: "",
  description: "",
  author: ""
};

export default Article;
