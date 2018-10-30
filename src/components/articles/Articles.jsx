import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchArticles } from "../../redux/actions/fetchArticles";
import ArticleCard from "../../views/Article/index";
import config from "../../config";

const url = `${config.BASE_URL}/articles/`;

class Articles extends Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  handlePageChange(paginationUrl, page, e) {
    const { fetch } = this.props;
    let { currentPage } = this.state;

    let localPaginationUrl = paginationUrl;
    if (e) {
      if (e.target.id === "paginationNext") {
        this.setState({ currentPage: (currentPage += 1) });
      }
      if (e.target.id === "paginationPrevious") {
        this.setState({ currentPage: (currentPage -= 1) });
      }
    }
    if (page) {
      this.setState({
        currentPage: page
      });
      localPaginationUrl = `${url}?page=${page}`;
      fetch(null, localPaginationUrl);
    } else {
      fetch(null, localPaginationUrl);
    }
  }

  renderPaginationButtons() {
    const { articles } = this.props;
    const { currentPage } = this.state;
    const pageButtons = [];

    for (
      let pageNumber = 1;
      pageNumber <= Math.ceil(articles.count / 20);
      pageNumber += 1
    ) {
      pageButtons.push(
        <button
          id={pageNumber}
          className={
            currentPage === pageNumber
              ? "btn btn-light active"
              : "btn btn-light"
          }
          key={pageNumber}
          type="button"
          onClick={() => this.handlePageChange(null, pageNumber)}
        >
          {pageNumber}
        </button>
      );
    }

    return (
      <div className="ah-pagination-buttons d-flex justify-content-center m-4">
        <div className="btn-group" role="group">
          <button
            id="paginationPrevious"
            className={
              articles.previous ? "btn btn-light" : "btn btn-light disabled"
            }
            type="button"
            onClick={e => this.handlePageChange(articles.previous, null, e)}
          >
            Previous
          </button>
          {pageButtons}
          <button
            id="paginationNext"
            className={
              articles.next ? "btn btn-light" : "btn btn-light disabled"
            }
            type="button"
            onClick={e => this.handlePageChange(articles.next, null, e)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="container">
        {articles.results && (
          <div className="row">
            {articles.results.map(article => (
              <ArticleCard
                slug={article.slug}
                key={article.slug}
                title={article.title}
                description={article.description}
                author={article.author}
                timeToRead={article.time_to_read}
                publishedAt={article.published_at}
              />
            ))}
          </div>
        )}
        {articles.results && this.renderPaginationButtons()}
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.shape(),
  fetch: PropTypes.func.isRequired
};

Articles.defaultProps = {
  articles: () => {}
};

const mapStateToProps = ({ allArticlesReducer }) => {
  const { articles } = allArticlesReducer || {
    articles: {}
  };
  return {
    articles
  };
};

export default connect(
  mapStateToProps,
  { fetch: fetchArticles }
)(Articles);
