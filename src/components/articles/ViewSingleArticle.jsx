import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import viewSingleArticle from "../../redux/actions/viewSingleArticle";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

class SingleArticle extends React.Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    dispatch(viewSingleArticle(match.params.slug));
  }

  render() {
    const { article } = this.props;
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
                    <span className="badge badge-pill badge-light text-muted">
                      {timeAgo.format(new Date(Article.published_at))}
                    </span>
                    <span className="badge">&bull;</span>
                    <span className="badge badge-pill badge-light text-muted">
                      {Article.time_to_read} read
                    </span>
                  </div>
                </div>
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
          </div>
        </div>
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
