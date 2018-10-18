import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loginAction from "../../redux/actions/loginAction";
import Button from "../../views/Button/index";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  state = { email: "", password: "" };

  onLogin = event => {
    const { email, password } = this.state;
    const user = { email, password };
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(loginAction(user));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { error } = this.props;
    const { email, password } = this.state;

    return (
      <div className="text-center m-auto">
        <LoginForm
          handleChange={this.handleChange}
          email={email}
          password={password}
          error={error}
        />
        <div className="col-9 m-auto">
          <a
            href="/"
            className="p-1 mb-4"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#ahResetPasswordModal"
          >
            Forgot password ?
          </a>
        </div>

        <Button
          className="btn btn-primary mb-5 col-2"
          onclick={this.onLogin}
          label="Sign in"
        />

        <div className="col-9 m-auto">
          <a href="/" className="ah-facebook-btn btn btn-block btn-lg mb-3">
            <i className="fab fa-facebook-square" />
            &ensp; Sign in with Facebook
          </a>
          <a href="/" className="ah-twitter-btn btn btn-block btn-lg mb-3">
            <i className="fab fa-twitter" />
            &ensp; Sign in with Twitter
          </a>
          <a href="/" className="ah-google-btn btn btn-block btn-lg mb-3">
            <i className="fab fa-google" />
            &ensp; Sign in with Google
          </a>
          <span>
            <p>Create an account ?</p>
          </span>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.shape()
};

LoginPage.defaultProps = {
  error: {}
};

export default connect()(LoginPage);
