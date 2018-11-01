import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TextInput, TextArea, SubmitButton } from "../../views/Form";
import viewSingleArticle from "../../redux/actions/viewSingleArticle";
import updateArticle from "../../redux/actions/editArticle";
import { clearError } from "../../redux/actions/common";
import ArticleTags from "./ArticleTags";

class UpdateArticle extends React.Component {
  state = {
    title: "",
    description: "",
    body: "",
    tags: [],
    loaded: false
  };

  componentDidMount() {
    const { match, dispatch } = this.props;
    dispatch(viewSingleArticle(match.params.slug));
  }

  componentWillReceiveProps(nextProps) {
    const { loaded } = this.state;
    if (!loaded) {
      this.setState(state => ({
        ...state,
        loaded: true,
        title: nextProps.article.Article.title,
        description: nextProps.article.Article.description,
        body: nextProps.article.Article.body,
        tags: nextProps.article.Article.article_tags
      }));
    }
  }

  handleChange = e => {
    const { value, name } = e.target;
    const { dispatch } = this.props;

    this.setState(state => ({ ...state, [name]: value }));
    dispatch(clearError());
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

  handleSubmit = e => {
    e.preventDefault();
    const { title, body, description, tags } = this.state;
    const { dispatch, match } = this.props;
    dispatch(
      updateArticle(match.params.slug, {
        title,
        body,
        description,
        tags: tags.join()
      })
    );
  };

  render() {
    const { title, body, description, tags } = this.state;
    const { updating, error } = this.props;
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
                  value={title}
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
                  value={description}
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
                  value={body}
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
                  label="Update"
                  type="submit"
                  fetching={updating}
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

UpdateArticle.propTypes = {
  updating: PropTypes.bool.isRequired,
  error: PropTypes.shape(() => {}),
  article: PropTypes.shape(() => {}),
  match: PropTypes.shape(() => {}).isRequired,
  dispatch: PropTypes.func.isRequired
};

UpdateArticle.defaultProps = {
  error: null,
  article: {}
};

const mapStateToProps = ({ editArticle, getArticle }) => {
  const { updating, error } = editArticle || {
    updating: false,
    error: {}
  };
  const { article } = getArticle || {
    article: {}
  };
  return {
    article,
    updating,
    error
  };
};

export default connect(mapStateToProps)(UpdateArticle);
