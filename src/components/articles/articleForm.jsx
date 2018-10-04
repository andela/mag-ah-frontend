// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import Article from "../../views/Article/article";
// import { TextInput, TextArea } from "../../views/Form/index";
// import { handleCreateArticle } from "../../redux/actions/CreateArticle";

// export class ArticleForm extends Component {
//   state = {
//     article: {
//       title: "",
//       description: "",
//       body: "",
//       tags: ""
//     }
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     const { article } = this.state;
//     this.setState({
//       article: {
//         ...article,
//         [name]: value
//       }
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { article } = this.state;
//     const { dispatch } = this.props;
//     dispatch(handleCreateArticle(article));
//   };

//   render() {
//     return (
//       <div className="m-auto col-sm-12">
//         <form onSubmit={this.handleSubmit} className="forgotPassword">
//           <div className="form-group col-9 m-auto">
//             <h1>we are here</h1>
//             <Article
//               title={
//                 <TextInput
//                   type="text"
//                   name="title"
//                   id="title"
//                   className="form-control text-center mb-4"
//                   placeholder="article title"
//                   onChange={this.handleChange}
//                 />
//               }
//               description={
//                 <TextInput
//                   type="text"
//                   name="description"
//                   id="description"
//                   className="form-control text-center mb-4"
//                   placeholder="article descritpion"
//                   onChange={this.handleChange}
//                   rows="3"
//                 />
//               }
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// ArticleForm.propTypes = {};

// ArticleForm.defaultProps = {};

// const mapStateToProps = ({ resetPassword }) => {
//   const { message, error } = resetPassword || {
//     message: {},
//     error: {
//       data: { errors: {} }
//     }
//   };
//   return {
//     message,
//     error
//   };
// };

// export default connect(mapStateToProps)(ArticleForm);
