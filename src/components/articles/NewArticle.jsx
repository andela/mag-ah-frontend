import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TextInput, TextArea, SubmitButton } from "../../views/Form";
import { createArticle } from "../../redux/actions/createArticle";
import { clearError } from "../../redux/actions/common";
import ArticleTags from "./ArticleTags";

class NewArticle extends React.Component {
  state = {
    tags: [],
    article: {
      title: "",
      description: "",
      body: "",
      tags: ""
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    const { article } = this.state;
    const { dispatch } = this.props;

    this.changeHandle(article, name, value);
    dispatch(clearError());
  };

  handleSubmit = e => {
    e.preventDefault();
    const { article } = this.state;
    const { dispatch } = this.props;
    dispatch(createArticle(article));
  };

  handleTags = tags => {
    const { article } = this.state;
    this.setState({
      tags,
      article: {
        ...article,
        tags: tags.join()
      }
    });
  };

  changeHandle(article, name, value) {
    this.setState({
      article: {
        ...article,
        [name]: value
      }
    });
  }

  render() {
    const { article, tags } = this.state;
    const { error, fetching } = this.props;
    return (
      <div className="container">
        <div className="d-flex justify-content-end" />
        <div className="row ah-editor-container">
          <div className="ml-auto mr-auto col-sm-8 p-4">
            <div>
              <form onSubmit={this.handleSubmit} className="mb-4">
                <TextInput
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={article.title}
                  onChange={this.handleChange}
                  className={
                    error.title
                      ? "form-control error ah-editor-field ah-article-title"
                      : "form-control ah-editor-field ah-article-title"
                  }
                  error={error.title}
                  required
                />
                <TextInput
                  type="text"
                  placeholder="A cool subtitle"
                  name="description"
                  value={article.description}
                  onChange={this.handleChange}
                  className={
                    error.description
                      ? "error form-control ah-editor-field ah-article-description"
                      : "form-control ah-editor-field ah-article-description"
                  }
                  error={error.description}
                  required
                />
                <TextArea
                  placeholder="Write your story"
                  name="body"
                  value={article.body}
                  onChange={this.handleChange}
                  className={
                    error.body
                      ? "error form-control ah-editor-field ah-article-body"
                      : "form-control ah-editor-field ah-article-body"
                  }
                  error={error.body}
                  required
                  rows={8}
                />
                <ArticleTags handleTags={this.handleTags} tags={tags} />
                <SubmitButton
                  label="Publish"
                  type="submit"
                  fetching={fetching}
                  className="btn mb-4 btn-outline-success"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewArticle.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.array),
  fetching: PropTypes.bool
};

NewArticle.defaultProps = {
  error: {},
  fetching: false
};

const mapStateToProps = ({ createArticleReducer }) => {
  const { error, success, fetching } = createArticleReducer || {
    error: {},
    success: false,
    fetching: false
  };
  return {
    error,
    success,
    fetching
  };
};

export default connect(mapStateToProps)(NewArticle);
