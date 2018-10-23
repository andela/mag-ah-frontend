import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "../Button";
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
          <Button
            className="btn btn-primary"
            onclick={this.onLogout}
            label="Sign Out"
          />
        ) : (
          <Button
            className="btn btn-primary"
            label="Sign in"
            dataToggle="modal"
            dataTarget="#ahSignInModal"
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

const mapStateToProps = ({ loginReducer }) => loginReducer;

export default connect(mapStateToProps)(AuthButton);
