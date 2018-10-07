import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TextInput, SubmitButton, MessageBox } from "../views/Form";
import authUser from "../redux/actions/authUser";

class SignupModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { username: "", email: "", password: "", confirm_password: "" }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const { dispatch } = this.props;
    dispatch(authUser(user));
  }

  render() {
    const { user } = this.state;
    const { success, message, error, fetching } = this.props;
    return (
      <div className="row">
        <div className="m-auto col-sm-12">
          {success && (
            <MessageBox
              className="ah-success-message p-2 alert alert-success"
              message={message}
            />
          )}
          {!success && (
            <div>
              <form onSubmit={this.handleSubmit} className="mb-4">
                {error && (
                  <MessageBox
                    className="ah-input-error text-danger mb-2"
                    message={error.error}
                  />
                )}
                <TextInput
                  type="email"
                  placeholder="example@authorshaven.com"
                  name="email"
                  value={user.email}
                  onChange={this.handleChange}
                  className={
                    error.email ? "form-control error" : "form-control"
                  }
                  error={error.email}
                  required
                />
                <TextInput
                  type="text"
                  placeholder="yourusername"
                  name="username"
                  value={user.username}
                  onChange={this.handleChange}
                  className={
                    error.username ? "error form-control" : "form-control"
                  }
                  error={error.username}
                  required
                />

                <TextInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={this.handleChange}
                  className={
                    error.password ? "error form-control" : "form-control"
                  }
                  error={error.password}
                  required
                />
                <TextInput
                  type="password"
                  placeholder="Confirm password"
                  name="confirm_password"
                  value={user.confirm_password}
                  onChange={this.handleChange}
                  className={
                    error.confirm_password
                      ? "error form-control"
                      : "form-control"
                  }
                  error={error.confirm_password}
                  required
                />

                <SubmitButton
                  label="Sign up"
                  type="submit"
                  fetching={fetching}
                  className="btn text-center btn-block ah-submit-button disabled"
                />
              </form>
              <p className="text-center">OR</p>
              <p className="d-flex flex-column">
                <button
                  type="button"
                  className="btn text-left m-1 ah-google-button btn-block"
                >
                  <i className="fab fa-google" /> &ensp; Sign up with Google
                </button>
                <button
                  type="button"
                  className="btn text-left m-1 ah-twitter-button btn-block"
                >
                  <i className="fab fa-twitter" /> &ensp; Sign up with Twitter
                </button>
                <button
                  type="button"
                  className="btn text-left m-1 ah-facebook-button btn-block"
                >
                  <i className="fab fa-facebook" /> &ensp; Sign up with Facebook
                </button>
                <br />
                <small className="text-center">
                  Already have an account?{" "}
                  <a
                    className="p-1"
                    href="/"
                    data-toggle="modal"
                    data-dismiss="modal"
                    data-target="#ahSignInModal"
                  >
                    Sign In
                  </a>
                </small>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

SignupModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string,
  error: PropTypes.objectOf(PropTypes.array),
  success: PropTypes.bool,
  fetching: PropTypes.bool
};

SignupModal.defaultProps = {
  error: {},
  message: null,
  success: false,
  fetching: false
};

const mapStateToProps = ({ authReducer }) => authReducer;

export default connect(mapStateToProps)(SignupModal);
