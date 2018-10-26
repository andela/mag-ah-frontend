import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchArticles } from "../../redux/actions/fetchArticles";
import ArticleCard from "../../views/Article/index";

class Articles extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="container">
        <div className="row">
          {articles.map(article => (
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
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  fetch: PropTypes.func.isRequired
};

Articles.defaultProps = {
  articles: []
};

const mapStateToProps = ({ allArticlesReducer }) => {
  const { articles } = allArticlesReducer || {
    articles: []
  };
  return {
    articles
  };
};

export default connect(
  mapStateToProps,
  { fetch: fetchArticles }
)(Articles);
