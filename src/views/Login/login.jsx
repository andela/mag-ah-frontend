import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loginAction from "../../redux/actions/loginAction";
import Button from "../Button";
import LoginForm from "./LoginForm";
import SocialAuth from "./socialAuth";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

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
      <div className="modal-body text-center">
        <LoginForm
          handleChange={event => this.handleChange(event)}
          email={email}
          password={password}
          error={error}
        />
        <Button
          className="btn btn-primary mb-5 col-2"
          onclick={event => this.onLogin(event)}
          label="Sign in"
        />
        <div className="col-9 m-auto">
          <SocialAuth />
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
