import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SubmitButton, TextInput } from "../../views/Form/index";
import { handleForgotPassword } from "../../redux/actions/ForgotPasswordAction";
import { clearState } from "../../redux/actions/common";

export class ForgotPassword extends Component {
  state = {
    user: { email: "", client_url: window.location.href }
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const registerModal = document.querySelector(
      "#ahResetPasswordModalCloseButton"
    );

    if (registerModal) {
      registerModal.addEventListener("click", () => {
        this.handleClearForgotPasswordForm();
        dispatch(clearState());
      });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    const { dispatch } = this.props;
    dispatch(handleForgotPassword(user));
  };

  handleClearForgotPasswordForm = () => {
    this.setState({
      user: {}
    });
  };

  render() {
    const { message, error } = this.props;
    const { user } = this.state;
    const { email } = user;

    return (
      <div className="m-auto col-sm-12 text-center">
        <form onSubmit={this.handleSubmit} className="forgotPassword">
          {message && (
            <p className="text-center text-info info">
              {message.message ? (
                <span>
                  We have sent an email{" "}
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here{" "}
                  </a>{" "}
                  to complete your account recovery process
                </span>
              ) : (
                ""
              )}
            </p>
          )}

          {error && (
            <p>
              {error.data && (
                <small className="text-center text-danger info mb-2">
                  {error.data.message ? error.data.message : ""}
                </small>
              )}
            </p>
          )}

          <div className="form-group col-9 m-auto">
            <TextInput
              type="email"
              name="email"
              id="email"
              label="Email Address"
              className="form-control text-center mb-4"
              placeholder="Enter email address"
              value={email}
              onChange={this.handleChange}
            />
            <SubmitButton
              className="btn btn-primary btn-block mb-4"
              label="Next"
              id="reset"
            />
          </div>
        </form>

        <small>
          Dont want to reset?{" "}
          <a
            className="p-1"
            href="/login"
            data-toggle="modal"
            data-dismiss="modal"
            data-target="#ahSignInModal"
          >
            Back to login form
          </a>
        </small>
        <button
          id="clearState"
          className="d-none"
          type="button"
          onClick={this.handleClearForgotPasswordForm}
        />
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.objectOf(PropTypes.string),
  error: PropTypes.objectOf(PropTypes.object)
};

ForgotPassword.defaultProps = {
  error: null,
  message: null
};

const mapStateToProps = ({ resetPassword }) => {
  const { message, error } = resetPassword || {
    message: {},
    success: false,
    error: null
  };
  return {
    message,
    error
  };
};

export default connect(mapStateToProps)(ForgotPassword);
