import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Article from "../../views/Article/article";
import FeaturedArticleComp from "./featuredArticle";
import { handleRetrieveArticle } from "../../redux/actions/RetrieveArticles";

export class ArticleList extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(handleRetrieveArticle());
  }

  handleSubmit = e => {
    e.preventDefault();
    const { article } = this.state;
    const { dispatch } = this.props;
    // dispatch(handleCreateArticle(article));
  };

  render() {
    const { articles } = this.props;
    let randomArticle = articles[Math.floor(Math.random() * articles.length)];
    const featuredArticle = randomArticle ? (
      <FeaturedArticleComp
        title={randomArticle.title}
        description={randomArticle.description}
        author={randomArticle.author}
      />
    ) : (
      ""
    );
    randomArticle = articles[Math.floor(Math.random() * articles.length)];
    const secondFeaturedArticle = randomArticle ? (
      <FeaturedArticleComp
        title={randomArticle.title}
        description={randomArticle.description}
        author={randomArticle.author}
      />
    ) : (
      ""
    );

    const listOfArticles = articles.map(articleItem => (
      <Article
        key={articleItem.id}
        title={articleItem.title}
        description={articleItem.description}
        author={articleItem.author}
      />
    ));
    return (
      <div id="articles" className="container">
        <div className="row">
          <div className="col-sm-3">{featuredArticle}</div>
          <div className="col-sm-6">{listOfArticles}</div>
          <div className="col-sm-3">{secondFeaturedArticle}</div>
        </div>
      </div>
    );
  }
}

ArticleList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  articles: []
};

ArticleList.defaultProps = {
  articles: []
};

const mapStateToProps = ({ ArticleReducer }) => {
  const { articles } = ArticleReducer || {
    articles: []
  };
  return {
    articles
  };
};

export default connect(mapStateToProps)(ArticleList);
