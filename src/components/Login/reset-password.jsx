import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ForgotPasswordForm from "./forgot-password";
import Modal from "./modal";
import resetPassword from "../../redux/actions/reset_password_action";

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        confirm_password: "",
        token: window.location.href.split("/")[4]
      }
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
    dispatch(resetPassword(user));
  }

  render() {
    const { user } = this.state;
    const { email, password, confirmPassword } = user;
    // const { reducerProp } = this.props;
    const { error, message } = this.props;
    return (
      <div className="container-fluid h-100">
        <div className="row justify-content-left align-items-center h-100">
          <div className="m-auto col-sm-4">
            <form onSubmit={this.handleSubmit}>
              {message && (
                <p className="text-center text-info">
                  {message ? message.message : ""}
                </p>
              )}
              {error && (
                <p className="text-center text-danger">
                  {error.data.errors.email ? "Email address is required" : ""}
                  {error.data.errors ? error.data.errors.error : ""}
                </p>
              )}
              <div className="form-group">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control text-center"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  {error && (
                    <p className="text-center text-danger">
                      {error.data.errors.password ? "Password is required" : ""}
                    </p>
                  )}
                  <input
                    type="password"
                    className="form-control text-center"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  {error && (
                    <p className="text-center text-danger">
                      {error.data.errors.confirm_password
                        ? "Confirm Password is required"
                        : ""}
                    </p>
                  )}
                  <input
                    type="password"
                    className="form-control text-center"
                    placeholder="Confirm password"
                    name="confirm_password"
                    value={confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning mb-4">
                  Update Password
                </button>
              </div>
            </form>
            <Modal title="Account recovery" form={<ForgotPasswordForm />} />
          </div>
        </div>
      </div>
    );
  }
}
ResetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.array)
};

ResetPassword.defaultProps = {
  error: { data: { errors: {} } }
};
const mapStateToProps = ({ resetPasswordReducer }) => resetPasswordReducer;
export default connect(mapStateToProps)(ResetPassword);
