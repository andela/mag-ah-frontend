import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TextInput, TextArea, SubmitButton } from "../../views/Form";
import { createArticle } from "../../redux/actions/createArticle";
import { clearError } from "../../redux/actions/common";
import AHHeader from "../../views/Home";

class NewArticle extends React.Component {
  state = {
    article: {
      title: "",
      description: "",
      body: ""
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    const { article } = this.state;
    const { dispatch } = this.props;

    this.setState({
      article: {
        ...article,
        [name]: value
      }
    });
    dispatch(clearError());
  };

  handleSubmit = e => {
    e.preventDefault();
    const { article } = this.state;
    const { dispatch } = this.props;
    dispatch(createArticle(article));
  };

  render() {
    const { article } = this.state;
    const { error, fetching } = this.props;
    return (
      <div>
        <AHHeader />
        <div className="container">
          <div className="d-flex justify-content-end" />
          <div className="row">
            <div className="m-auto col-sm-8 ">
              <div>
                <form onSubmit={this.handleSubmit} className="mb-4">
                  <SubmitButton
                    label="Publish"
                    type="submit"
                    fetching={fetching}
                    className="btn m-auto btn-primary"
                  />
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
                    placeholder="Description"
                    name="description"
                    value={article.description}
                    onChange={this.handleChange}
                    className={
                      error.description
                        ? "error form-control ah-editor-field"
                        : "form-control ah-editor-field"
                    }
                    error={error.description}
                    required
                  />
                  <TextArea
                    placeholder="Body"
                    name="body"
                    value={article.body}
                    onChange={this.handleChange}
                    className={
                      error.body
                        ? "error form-control ah-editor-field"
                        : "form-control ah-editor-field"
                    }
                    error={error.body}
                    required
                    rows={8}
                  />
                </form>
              </div>
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
