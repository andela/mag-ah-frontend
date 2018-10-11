import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SubmitButton, TextInput } from "../../views/Form/index";
import { handleForgotPassword } from "../../redux/actions/ForgotPasswordAction";

export class ForgotPassword extends Component {
  state = {
    user: { email: "", client_url: window.location.href }
  };

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

  render() {
    const { message, error } = this.props;
    const { user } = this.state;
    const { email } = user;

    return (
      <div className="m-auto col-sm-12">
        <form onSubmit={this.handleSubmit} className="forgotPassword">
          {message && (
            <p className="text-center text-info info">
              {message.message ? (
                <span>
                  We have send an email{" "}
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
            <p className="text-center text-danger info">
              {error.data.message ? error.data.message : ""}
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
          </div>

          <div className="text-center">
            <SubmitButton
              className="btn btn-primary mb-4"
              label="Next"
              id="reset"
            />
          </div>
        </form>

        <span>
          <a
            href="/login"
            className="p-1"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#ahSignInModal"
          >
            Back to login form
          </a>
        </span>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.objectOf(PropTypes.string).isRequired,
  error: PropTypes.objectOf(PropTypes.object)
};

ForgotPassword.defaultProps = {
  error: {
    data: { errors: {} },
    message: { message: "" }
  }
};

const mapStateToProps = ({ resetPassword }) => {
  const { message, error } = resetPassword || {
    message: {},
    error: {
      data: { errors: {} }
    }
  };
  return {
    message,
    error
  };
};

export default connect(mapStateToProps)(ForgotPassword);
