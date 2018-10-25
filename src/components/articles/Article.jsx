import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import viewArticle from "../../redux/actions/article";
import Share from "./share";

class SingleArticle extends React.Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    dispatch(viewArticle(match.params.slug));
  }

  render() {
    const { article } = this.props;
    const { Article } = article;
    if (Object.keys(article).length === 0) {
      return <div className="no-article" />;
    }
    return (
      <div className="mt-5 container article">
        <div className="row">
          <div className="col-sm-6">
            <div className="card p-0">
              <div className="card-body p-0 mt-2">
                <h1 className="card-title mb-5 font-weight-bold">
                  {Article.title}
                </h1>
                <small>
                  <a className="ah-author-link font-weight-bold" href="/">
                    {Article.author}
                  </a>
                  <button
                    type="button"
                    id="ah-follow-unfollow-btn"
                    className="btn btn-sm btn-outline-success ml-2 mb-2 mr-4"
                  >
                    Follow
                  </button>
                </small>
                <small className="text-muted px-1 font-weight-bold">
                  July 21
                </small>
                <small className="text-muted px-1 font-weight-bold">
                  {article.time_to_read}
                </small>
                <p className="card-text d-flex justify-content-between">
                  <span className="text-muted">{Article.description}</span>
                </p>
                <div className="d-flex justify-content-between article">
                  <div className="p-2">
                    <Share
                      url={Article.share_urls.twitter}
                      className="fab fa-lg fa-twitter share-feed mr-4"
                    />
                    <Share
                      url={Article.share_urls.facebook}
                      className="fab fa-lg fa-facebook share-feed"
                    />
                    <Share
                      url={Article.share_urls.email}
                      className="fas fa-lg fa-envelope share-feed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 col-sm-6">
            <img
              className="card-img-top"
              src="https://source.unsplash.com/random"
              alt="Italian Trulli"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-12 mt-3">
            <div className="list-group">
              <div className=" d-flex justify-content-between ">
                <div className="ml-2 ah-article-body">{Article.body}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleArticle.propTypes = {
  article: PropTypes.shape().isRequired,
  match: PropTypes.checkPropTypes.isRequired,
  dispatch: PropTypes.checkPropTypes.isRequired
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
