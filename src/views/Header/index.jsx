import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../Button";
import BaseModal from "../Modal";
import SignupModal from "../../components/auth/SignupModal";
import { Logout } from "../../redux/actions/loginAction";

class AHHeader extends React.Component {
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
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <Button
                  className="btn btn-link"
                  dataToggle="modal"
                  dataTarget="#ahSignInModal"
                  label="Sign In"
                />
              </div>
              <div className="btn-group" role="group" aria-label="Third group">
                <Button
                  className="btn btn-outline-success"
                  dataToggle="modal"
                  dataTarget="#ahRegisterModal"
                  label="Get started"
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
