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
  publishedAt,
  handleDelete
}) => (
  <div>
    <div className="row w-100 ml-0 mr-0">
      <div className="ah-main-article-title">
        <a href={`../articles/${slug}`}>{title}</a>
      </div>
    </div>
    <div className="row w-100 ml-0 mr-0">
      <div className="ah-main-article-description text-muted">
        {description}
      </div>
    </div>
    <div className="row w-100 ml-0 mr-0">
      <div className="d-flex justify-content-between w-100">
        <small>{timeAgo.format(new Date(publishedAt))}</small>
        <div className="dropdown">
          <i
            className="ah-dropdown-arrow fas fa-angle-down dropdown-toggle"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <a
              className="button dropdown-item"
              href={`../articles/${slug}/update`}
            >
              Edit Article
            </a>
            <button
              className="dropdown-item"
              type="button"
              onClick={handleDelete}
            >
              Delete Article
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
);

ArticleCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ArticleCard;
