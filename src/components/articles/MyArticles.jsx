import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { fetchArticles } from "../../redux/actions/fetchArticles";
import { deleteArticle } from "../../redux/actions/deleteArticle";
import FlatArticle from "../../views/Article/FlatArticle";
import { clearState } from "../../redux/actions/common";

const currentUser = jwtDecode(localStorage.getItem("token"));

class Articles extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch(currentUser.username);
  }

  componentDidUpdate() {
    const { success } = this.props;
    if (success) {
      const { fetch, reset } = this.props;
      fetch(currentUser.username);
      reset();
    }
  }

  handleDelete = slug => {
    const { trash } = this.props;
    trash(slug);
  };

  render() {
    const { articles } = this.props;
    return (
      <div className="container">
        <div className="ah-page-title pt-4 pb-4">Your Stories</div>
        {articles.map(article => (
          <FlatArticle
            slug={article.slug}
            key={article.slug}
            title={article.title}
            description={article.description}
            publishedAt={article.published_at}
            handleDelete={() => this.handleDelete(article.slug)}
          />
        ))}
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func.isRequired,
  trash: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired
};

Articles.defaultProps = {
  articles: []
};

const mapStateToProps = ({ deleteArticleReducer, allArticlesReducer }) => {
  const { articles } = allArticlesReducer || {
    articles: []
  };
  const { success } = deleteArticleReducer || { success: false };
  return {
    articles,
    success
  };
};

export default connect(
  mapStateToProps,
  {
    fetch: fetchArticles,
    trash: deleteArticle,
    reset: clearState
  }
)(Articles);
