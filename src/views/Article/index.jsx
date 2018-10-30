import React from "react";
import PropTypes from "prop-types";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

const ArticleCard = ({
  slug,
  title,
  description,
  author,
  timeToRead,
  publishedAt
}) => (
  <div className="col-sm-4 mb-3">
    <div className="card">
      <img
        className="card-img-top"
        src={`https://source.unsplash.com/random/350x250?sig=${Math.random()}`}
        alt="Card"
        height="250"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">
          <a href={`articles/${slug}`}>{title}</a>
        </h5>
        <p className="card-text">{description}</p>
        <small className="mt-auto">
          By{" "}
          <a className="ah-author-link" href="/">
            {author}
          </a>
        </small>
        <p className="card-text d-flex justify-content-between">
          <small className="text-muted">
            {timeAgo.format(new Date(publishedAt))}
          </small>
          <small className="text-muted">
            {timeToRead} {"read"}
          </small>
        </p>
      </div>
    </div>
  </div>
);

ArticleCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired
};

export default ArticleCard;
