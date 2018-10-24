import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchArticles } from "../../redux/actions/fetchArticles";
import ArticleCard from "../../views/Article/index";
import AHHeader from "../../views/Home";

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <AHHeader />
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
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  fetchArticles: PropTypes.func.isRequired
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
  { fetchArticles }
)(Articles);
