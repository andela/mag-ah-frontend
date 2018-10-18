import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { handleResetPassword } from "../../redux/actions/ResetPasswordAction";
import SubmitButton from "../../views/Form/SubmitButton";
import { TextInput } from "../../views/Form";

export class ResetPassword extends Component {
  state = {
    user: {
      token: window.location.search
        ? new URLSearchParams(window.location.search).getAll("token")[0]
        : "",
      email: window.location.search
        ? new URLSearchParams(window.location.search).getAll("email")[0]
        : "",
      password: "",
      confirm_password: ""
    }
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
    user.confirm_password = user.confirmPassword;
    const { dispatch } = this.props;
    dispatch(handleResetPassword(user));
  };

  render() {
    const { user } = this.state;
    const { password, confirmPassword } = user;
    const { error, message } = this.props;

    if (message.message) {
      const msg = `${
        message.message
      }\nWe will redirect you to login page when you close this dialog`;
      window.alert(msg);
      return <Redirect to="/login" />;
    }

    return (
      <div className="container-fluid h-100">
        <div className="row justify-content-left align-items-center h-10">
          <div className="m-auto col-3">
            <form onSubmit={this.handleSubmit} className="resetPassword">
              <div className="form-group">
                <div className="form-group mb-4">
                  <h4>
                    {error && (
                      <p className="text-center">
                        <span className="text-danger">
                          {error.data ? error.data.errors.error : ""}
                        </span>
                      </p>
                    )}
                  </h4>
                </div>

                <div className="form-group">
                  <TextInput
                    type="password"
                    className="form-control text-center"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <TextInput
                    type="password"
                    className="form-control text-center"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <SubmitButton
                  id="submit"
                  className="btn btn-primary mb-4"
                  label="Update password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.objectOf(PropTypes.string).isRequired,
  error: PropTypes.objectOf(PropTypes.object)
};

ResetPassword.defaultProps = {
  error: {
    data: {
      errors: {}
    },
    message: { message: "" },
    error: ""
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

export default connect(mapStateToProps)(ResetPassword);
