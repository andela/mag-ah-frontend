import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { TextInput, SubmitButton, MessageBox } from "../../views/Form";
import { signup, signupError } from "../../redux/actions/authUser";
import SocialAuth from "../../views/Login/socialAuth";
import { clearError, clearState } from "../../redux/actions/common";

class SignupModal extends React.Component {
  state = {
    user: {
      username: "",
      email: "",
      password: "",
      confirm_password: ""
    }
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const registerModal = document.querySelector("#ahRegisterModalCloseButton");
    if (registerModal) {
      registerModal.addEventListener("click", () => {
        dispatch(clearState());
        this.handleClearForm();
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { success, dispatch } = this.props;
    if (!prevProps.success && success) {
      document.querySelector("#ahRegisterModalCloseButton").click();
      document.querySelector(".clearForm").click();
      dispatch(clearState());
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { user } = this.state;
    const { dispatch } = this.props;

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
    dispatch(clearError());
  };

  handleClearForm = () => {
    this.setState({
      user: {}
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.password !== user.confirm_password) {
      const confirmPasswordError = {
        confirm_password: ["Password and confirm password do not match"]
      };
      dispatch(signupError(confirmPasswordError));
    } else {
      dispatch(signup(user));
    }
  };

  render() {
    const { user } = this.state;
    const { error, fetching } = this.props;
    return (
      <div className="row">
        <div className="m-auto col-sm-8">
          <div>
            <form onSubmit={this.handleSubmit} className="mb-4">
              {error && (
                <MessageBox
                  className="ah-input-error text-danger mb-2"
                  error={error.error || error.serverError}
                />
              )}

              <TextInput
                type="email"
                placeholder="example@authorshaven.com"
                name="email"
                value={user.email}
                onChange={this.handleChange}
                className={error.email ? "form-control error" : "form-control"}
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
                  error.confirm_password ? "error form-control" : "form-control"
                }
                error={error.confirm_password}
                required
              />

              <SubmitButton
                label="Sign up"
                type="submit"
                fetching={fetching}
                className="btn m-auto btn-primary btn-block"
              />

              <button
                type="button"
                onClick={this.handleClearForm}
                className="d-none clearForm"
              />
            </form>
            <p className="text-center">OR</p>
            <SocialAuth />
            <p className="d-flex flex-column">
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
        </div>
      </div>
    );
  }
}

SignupModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.array),
  success: PropTypes.bool,
  fetching: PropTypes.bool
};

SignupModal.defaultProps = {
  error: {},
  success: false,
  fetching: false
};

const mapStateToProps = ({ authSignup }) => {
  const { message, error, success, fetching } = authSignup || {
    message: null,
    error: {},
    success: false,
    fetching: false
  };
  return {
    message,
    error,
    success,
    fetching
  };
};

export default connect(mapStateToProps)(SignupModal);
