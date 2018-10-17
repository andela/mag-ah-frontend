import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../Button";
import BaseModal from "../Modal";
import ForgotPasswordComp from "../../components/auth/ForgotPasswordComp";
import LoginPage from "../../components/auth/login";
import AuthButton from "../../components/auth/AuthButton";
import SignupModal from "../../components/auth/SignupModal";

const AHHeader = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light p-0">
      <div className="container">
        <div />
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
          <div className="btn-group" role="group" aria-label="Third group">
            <AuthButton isAuthenticated={false} />

            <Button
              className="btn btn-outline-success rounded"
              type="button"
              dataTarget="#ahRegisterModal"
              dataToggle="modal"
              label="Get Started"
            />
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Second group"
            />
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
      modalTitle="Log in"
      modalContent={<LoginPage error={null} />}
    />

    <BaseModal
      modalId="ahResetPasswordModal"
      modalTitle="Account Recovery"
      modalContent={<ForgotPasswordComp />}
    />
  </div>
);

export default connect()(AHHeader);
