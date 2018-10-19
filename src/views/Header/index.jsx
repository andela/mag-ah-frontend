import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../Button";
import BaseModal from "../Modal";
import SignupModal from "../../components/auth/SignupModal";
import { Logout } from "../../redux/actions/loginAction";
import ResetPassword from "../Login/PasswordReset";
import AuthButton from "../Login/AuthButton";
import LoginPage from "../../components/auth/login";
import ForgotPasswordComp from "../../components/auth/ForgotPasswordComp";

class AHHeader extends Component {
  componentDidMount() {
    if (window.location.pathname && window.location.pathname === "/login") {
      document.querySelector("#signInButton").click();
    }
    if (
      window.location.pathname &&
      window.location.pathname === "/reset-password/"
    ) {
      document.querySelector("#newPassword").click();
    }
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props;
    if (!prevProps.isAuthenticated && isAuthenticated) {
      document.querySelector(".modal-backdrop").remove();
    }
  }

  onLogout(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(Logout());
  }

  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="container">
            <Router>
              <Link to="/" className="navbar-brand font-weight-bold">
                Authors&apos; Haven
              </Link>
            </Router>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <Button
                  className="btn btn-link"
                  onclick={event => this.onLogout(event)}
                  label="Sign Out"
                />
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Third group"
              />
            </div>
          </div>
        </nav>
      </div>
    ) : (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="container">
            <Router>
              <Link to="/" className="navbar-brand font-weight-bold">
                Authors&apos; Haven
              </Link>
            </Router>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <AuthButton isAuthenticated={false} />

                  <Button
                    className="btn btn-outline-success rounded"
                    type="button"
                    dataTarget="#ahRegisterModal"
                    dataToggle="modal"
                    label="Get Started"
                  />
                  <Button
                    id="newPassword"
                    className="d-none"
                    type="button"
                    dataTarget="#ahNewPasswordModal"
                    dataToggle="modal"
                    label="Reset password"
                  />
                  <div
                    className="btn-group mr-2"
                    role="group"
                    aria-label="Second group"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <BaseModal
          modalId="ahRegisterModal"
          modalTitle="Join Authors' Haven"
          modalContent={<SignupModal />}
        />
        <BaseModal
          modalId="ahSignInModal"
          modalTitle="Sign in"
          modalContent={<LoginPage error={null} />}
        />

        <BaseModal
          modalId="ahResetPasswordModal"
          modalTitle="Account Recovery"
          modalContent={<ForgotPasswordComp />}
        />

        <BaseModal
          modalId="ahNewPasswordModal"
          modalTitle="Update Password"
          modalContent={<ResetPassword />}
        />
      </div>
    );
  }
}

AHHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = ({ loginReducer }) => loginReducer;
export default connect(mapStateToProps)(AHHeader);
