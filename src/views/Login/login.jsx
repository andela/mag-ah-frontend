import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loginAction from "../../redux/actions/loginAction";
import Button from "../Button";
import LoginForm from "./LoginForm";
import SocialAuth from "./socialAuth";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(event) {
    const { email, password } = this.state;
    const user = { email, password };
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(loginAction(user));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

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
          className="btn btn-primary mb-5 col-2"
          onclick={this.onLogin}
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

const mapStateToProps = ({ loginReducer }) => loginReducer;

export default connect(mapStateToProps)(LoginPage);
