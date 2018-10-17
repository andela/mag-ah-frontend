import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Login } from "../../redux/actions/loginAction";
import Button from "../../views/Button/index";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  state = { email: "", password: "" };

  onLogin = event => {
    const { email, password } = this.state;
    const user = { email, password };
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(Login(user));
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
      <div className="modal-body text-center">
        <LoginForm
          handleChange={this.handleChange}
          email={email}
          password={password}
          error={error}
        />
        <Button
          className="btn btn-primary mb-5 col-3"
          onclick={this.onLogin}
          label="Sign in"
        />
        <div className="col-9 m-auto">
          <button
            type="button"
            className="btn text-left m-1 ah-google-button btn-block mb-3"
          >
            <i className="fab fa-google" /> &ensp; Sign in with Google
          </button>
          <button
            type="button"
            className="btn text-left m-1 ah-twitter-button btn-block mb-3"
          >
            <i className="fab fa-twitter" /> &ensp; Sign in with Twitter
          </button>
          <button
            type="button"
            className="btn text-left m-1 ah-facebook-button btn-block mb-3"
          >
            <i className="fab fa-facebook" /> &ensp; Sign in with Facebook
          </button>
          <span>
            <a
              href="/"
              data-toggle="modal"
              data-dismiss="modal"
              data-target="#ahRegisterModal"
            >
              Create an account ?
            </a>
          </span>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.shape().isRequired
};

const mapStateToProps = ({ loginReducer }) => {
  const { isAuthenticated, error } = loginReducer || {
    isAuthenticated: false,
    error: {}
  };
  return { isAuthenticated, error };
};

export default connect(mapStateToProps)(LoginPage);
