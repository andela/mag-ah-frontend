import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import viewArticle from "../../redux/actions/article";

class Article extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(
      viewArticle(
        "company-should-not-sell-facial-recognition-tech-to-police-4f9825"
      )
    );
  }

  render() {
    const { article } = this.props;
    if (Object.keys(article).length === 0) {
      return <div />;
    }
    return (
      <div className="mt-5 container article">
        <div className="row">
          <div className="col-sm-6">
            <div className="card p-0">
              <div className="card-body p-0 mt-2">
                <h1 className="card-title mb-5 font-weight-bold">
                  {article.title}
                </h1>
                <small>
                  <a className="ah-author-link font-weight-bold" href="/">
                    {article.author}
                  </a>
                  <button
                    type="button"
                    id="ah-follow-unfollow-btn"
                    className="btn btn-sm btn-outline-success ml-2 mb-2 mr-4"
                  >
                    Follow
                  </button>
                </small>
                <small className="text-muted px-1 font-weight-bold">July 21</small>
                <small className="text-muted px-1 font-weight-bold">
                  {article.time_to_read}
                </small>
                <p className="card-text d-flex justify-content-between">
                  <span className="text-muted">{article.description}</span>
                </p>
                <div className="d-flex justify-content-between article">
                  <div className="p-2">
                    <a href={article.share_urls.twitter}>
                      <i className="fab fa-lg fa-twitter share-feed mr-4" />
                    </a>
                    <a href={article.share_urls.facebook}>
                      {" "}
                      <i className="fab fa-lg fa-facebook share-feed" />
                    </a>
                    <a href={article.share_urls.email}>
                      <i className="fas fa-lg fa-envelope share-feed" />
                    </a>
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
                <div className="ml-2 ah-article-body">{article.body}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  dispatch: PropTypes.func.isRequired,
  article: PropTypes.string.isRequired
};

const mapStateToProps = ({ getArticle }) => {
  const { article, error } = getArticle;
  console.log(article);
  return {
    article,
    error
  };
};

export default connect(mapStateToProps)(Article);
