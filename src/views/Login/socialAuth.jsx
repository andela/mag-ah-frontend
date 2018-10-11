import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "../Home";

import config from "../../config.json";
import socialLoginAction from "../../redux/actions/SocialLoginAction";

export class SocialLogin extends Component {
  twitterResponse = response => {
    const { dispatch } = this.props;
    // const token = response.headers.get('x-auth-token');
    const authData = {
      access_token: response.oauth_token,
      access_token_secret: response.oauth_token_secret,
      provider: "twitter"
    };
    dispatch(socialLoginAction(authData));
  };

  facebookResponse = response => {
    const { dispatch } = this.props;
    const authData = {
      access_token: response.accessToken,
      provider: "facebook"
    };
    dispatch(socialLoginAction(authData));
  };

  googleResponse = response => {
    const { dispatch } = this.props;
    const authData = {
      access_token: response.accessToken,
      provider: "google-oauth2"
    };
    dispatch(socialLoginAction(authData));
  };

  render() {
    let socialLoginContent = null;
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      socialLoginContent = (
        <div>
          <p>Welcome to Authors Haven {this.props.username}</p>
          <div>{this.props.email}</div>
          <div>
            <button onClick={this.logout} className="btn btn-outline-secondary">
              Log out
            </button>
          </div>
        </div>
      );
    } else {
      socialLoginContent = (
        <div className="row">
          <div className="col-12">
            <TwitterLogin
              className="ah-twitter-btn btn btn-block btn-lg mb-3"
              loginUrl="https://ah-magnificent6-staging.herokuapp.com/api/users/oauth/"
              onFailure={this.twitterResponse}
              onSuccess={this.twitterResponse}
              requestTokenUrl="https://ah-magnificent6-staging.herokuapp.com/api/users/oauth/"
              forceLogin
            >
              <i className="fab fa-twitter" />
              <span /> {" "} <span /> Sign in with Twitter
            </TwitterLogin>
          </div>
          <div className="col-12">
            <FacebookLogin
              appId={config.FACEBOOK_KEY}
              autoLoad={false}
              fields="name,email"
              callback={this.facebookResponse}
              cssClass="ah-facebook-btn btn btn-block btn-lg mb-3"
              textButton=" Sign in with Facebook"
              icon="fa-facebook"
            />
          </div>
          <div className="col-12">
            <GoogleLogin
              className="ah-google-btn btn btn-block btn-lg mb-3"
              clientId={config.GOOGLE_KEY}
              buttonText="Login With Google"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
            >
              <i className="fab fa-google" />
              <span /> {" "} <span />Sign in with Google
            </GoogleLogin>
          </div>
        </div>
      );
    }

    return <div className="SocialLogin">{socialLoginContent}</div>;
  }
}

const mapStateToProps = ({ loginReducer }) => loginReducer;

export default connect(mapStateToProps)(SocialLogin);

SocialLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
