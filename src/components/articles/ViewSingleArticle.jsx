import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import viewSingleArticle from "../../redux/actions/viewSingleArticle";
import Share from "../../views/Article/share";
import RatingStars from "./RateArticle";
import Comments from "./Comments";
import Like from "./Like";
import Dislike from "./Dislike";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

class SingleArticle extends React.Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    dispatch(viewSingleArticle(match.params.slug));
  }

  render() {
    const { article, match } = this.props;
    const { Article } = article;
    if (Object.keys(article).length === 0) {
      return <div className="no-article" />;
    }

    return (
      <div className="container article">
        <div className="row align-items-center">
          <div className="col-sm-5 p-0">
            <div>
              <div className="ah-main-article-title font-weight-bold p-0">
                {Article.title}
              </div>
              <p className="ah-main-article-description">
                <span className="text-muted">{Article.description}</span>
              </p>
              <div className="ah-main-article-meta d-flex">
                <i className="fas fa-user-circle fa-3x" />
                <div>
                  <div className="d-flex pl-2 mb-0">
                    <small>
                      <a className="ah-author-link font-weight-bold" href="/">
                        {Article.author}
                      </a>
                    </small>
                  </div>
                  <div className="d-flex">
                    <span className="badge badge-pill badge-light ah-badge-light text-muted">
                      {timeAgo.format(new Date(Article.created_at))}
                    </span>
                    <span className="badge">&bull;</span>
                    <span className="badge badge-pill badge-light ah-badge-light text-muted">
                      {Article.time_to_read} read
                    </span>
                  </div>
                  <div className="d-flex pl-2 mt-0">
                    <Like
                      slug={match.params.slug}
                      likeCount={Article.userLikes.length}
                    />
                    <Dislike
                      slug={match.params.slug}
                      disLikeCount={Article.userDisLikes.length}
                    />
                    &ensp;
                    <span className="badge badge-light ah-badge-light">
                      <RatingStars
                        slug={Article.slug}
                        avgRating={Number(Article.rating_average)}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-end mt-4">
                <Share
                  url={Article.share_urls.twitter}
                  className="fab fa-lg fa-twitter share-feed"
                />
                <Share
                  url={Article.share_urls.facebook}
                  className="fab fa-lg fa-facebook share-feed ml-4"
                />
                <Share
                  url={Article.share_urls.email}
                  className="fas fa-lg fa-envelope share-feed"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-7 p-0">
            <img
              className="card-img-top"
              src="https://source.unsplash.com/random/"
              alt="Italian Trulli"
            />
          </div>
        </div>
        <div className="row">
          <div className="mt-3">
            <div className="ah-main-article-body">{Article.body}</div>
            <div className="ah-main-article-body">
              {Article.article_tags.map(tag => (
                <span className="badge badge-success mr-2">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <Comments slug={Article.slug} />
      </div>
    );
  }
}

SingleArticle.propTypes = {
  article: PropTypes.shape().isRequired,
  match: PropTypes.shape(() => {}).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ getArticle }) => {
  const { article, error } = getArticle || {
    article: {},
    error: {}
  };
  return {
    article,
    error
  };
};

export default connect(mapStateToProps)(SingleArticle);
