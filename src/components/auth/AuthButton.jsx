import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "../../views/Button/index";
import { Logout } from "../../redux/actions/loginAction";

class AuthButton extends React.Component {
  onLogout = event => {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(Logout());
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        {isAuthenticated ? (
          <div className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user-circle" />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="profile.html">
                    My profile
                  </a>
                  <a href="/" className="dropdown-item" onClick={this.onLogout}>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          <Button
            className="btn btn-link mr-3"
            label="Sign in"
            dataToggle="modal"
            dataTarget="#ahSignInModal"
            onKeyPress=""
          />
        )}
      </div>
    );
  }
}

AuthButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

AuthButton.defaults = {
  isAuthenticated: false
};

export default connect()(AuthButton);
