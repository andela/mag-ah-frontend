import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Login } from "../../redux/actions/loginAction";
import { clearState } from "../../redux/actions/common";
import Button from "../../views/Button/index";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
  state = { email: "", password: "" };

  componentDidMount() {
    const { dispatch } = this.props;
    document
      .querySelector("#ahSignInModalCloseButton")
      .addEventListener("click", () => {
        dispatch(clearState());
        this.handleClearForm();
      });
  }

  handleClearForm = () => {
    this.setState({
      email: "",
      password: ""
    });
  };

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
      <div className="row">
        <div className="m-auto col-sm-8">
          <div>
            <LoginForm
              handleChange={this.handleChange}
              email={email}
              password={password}
              error={error}
            />
            <div className="mb-4 text-center">
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
              className="btn btn-primary btn-block mb-4"
              onclick={this.onLogin}
              label="Sign in"
            />
            <p className="text-center">OR</p>
            <p className="d-flex flex-column">
              <button
                type="button"
                className="btn text-left ah-google-button btn-block"
              >
                <i className="fab fa-google" /> &ensp; Sign in with Google
              </button>
              <button
                type="button"
                className="btn text-left ah-twitter-button btn-block"
              >
                <i className="fab fa-twitter" /> &ensp; Sign in with Twitter
              </button>
              <button
                type="button"
                className="btn text-left ah-facebook-button btn-block"
              >
                <i className="fab fa-facebook" /> &ensp; Sign in with Facebook
              </button>
              <br />
              <small className="text-center">
                Do not have an account?{" "}
                <a
                  className="p-1"
                  href="/"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#ahRegisterModal"
                >
                  Sign up
                </a>
              </small>
            </p>
          </div>
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
