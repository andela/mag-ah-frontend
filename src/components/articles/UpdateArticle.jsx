import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toaster } from "evergreen-ui";
import Dante from "Dante2";
import Button from "../../views/Button";
import { fetchArticle } from "../../redux/actions/fetchArticle";
import config from "../../config";
import AHHeader from "../../views/Home";

class UpdateArticle extends React.Component {
  state = {
    editorState: null,
    article: {}
  };

  componentDidMount() {
    const { fetchArticle } = this.props;
    fetchArticle("another-article-please-ff5c55");
  }

  handleSave = state => {
    // this.setState({ saving: true });
    const editorState = state.editorState();
    const title = editorState.getCurrentContent().getFirstBlock().text;
    let data;
    if (
      state.editorContent.blocks.length === 1 &&
      state.editorContent.blocks[0].text === ""
    ) {
      // eslint-disable-next-line
      const { editorState } = this.state;
      data = {
        article: {
          body: JSON.stringify(editorState),
          title,
          description: title
          // eslint-disable-next-line
          // tagList: this.state.tags
        }
      };
      localStorage.setItem("article", JSON.stringify(data));
      // this.setState({ saving: false });
      return;
    }
    data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title
        // eslint-disable-next-line
        // tagList: this.state.tags
      }
    };

    localStorage.setItem("article", JSON.stringify(data));

    // return this.props.createArticle(data.article);

    // this.setState({ saving: false });
  };
  // state = {
  //   article: {
  //     title: "",
  //     description: "",
  //     body: ""
  //   }
  // };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   const { article } = this.state;
  //   const { dispatch } = this.props;

  //   this.setState({
  //     article: {
  //       ...article,
  //       [name]: value
  //     }
  //   });
  //   dispatch(clearError());
  // };

  //   handleSubmit = () => {
  //     const rawArticle = JSON.parse(localStorage.getItem("article"));
  //     if (rawArticle.article.title === "") {
  //       toaster.danger("Please write something first");
  //       return;
  //     }
  //     this.props.createArticle(rawArticle.article);
  //   };

  render() {
    const { article } = this.props;
    return (
      <div>
        <AHHeader />
        <div className="container">
          <div className="d-flex justify-content-end">
            {/* <Button
              label="Publish"
              className="btn btn-primary"
              onclick={this.handleSubmit}
            /> */}
          </div>
          <div className="row">
            <div className="m-auto col-sm-8 ">
              <div>
                {/* <form onSubmit={this.handleSubmit} className="mb-4">
                <SubmitButton
                  label="Publish"
                  type="submit"
                  fetching={fetching}
                  className="btn m-auto btn-primary"
                />
                {error && (
                  <MessageBox
                    className="ah-input-error text-danger mb-2"
                    error={error.error || error.serverError}
                  />
                )}
                <TextInput
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={article.title}
                  onChange={this.handleChange}
                  className={
                    error.title ? "form-control error" : "form-control"
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
                    error.description ? "error form-control" : "form-control"
                  }
                  error={error.description}
                  required
                />
              </form> */}
                <Dante
                  data_storage={{
                    url: `${config.BASE_URL}/articles/`,
                    method: "POST",
                    save_handler: this.handleSave,
                    interval: 100,
                    withCredantials: true,
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im1pY2Fob3JpYXNvIiwiZXhwIjoxNTQwMzcyNzEzfQ.YyGY0sYIv7N2vOPMiSBT4kI5_5NjpfnXbid_ijyToc0`
                    }
                  }}
                  content={article}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateArticle.propTypes = {
  article: PropTypes.shape(PropTypes.object),
  fetchArticle: PropTypes.func.isRequired
};

UpdateArticle.defaultProps = {
  article: {}
};

const mapStateToProps = ({ singleArticleReducer }) => {
  const { article } = singleArticleReducer || {
    article: {}
  };
  return {
    article
  };
};

export default connect(
  mapStateToProps,
  { fetchArticle }
)(UpdateArticle);
