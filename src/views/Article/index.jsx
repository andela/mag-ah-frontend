import React from "react";
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
  <div className="col-sm-4">
    <div className="card">
      <img
        className="card-img-top"
        src="https://source.unsplash.com/random"
        alt="Card"
        height="250"
      />
      <div className="card-body">
        <h5 className="card-title">
          <a href={`articles/${slug}`}>{title}</a>
        </h5>
        <p className="card-text ">{description}</p>
        <small>
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

export default ArticleCard;
