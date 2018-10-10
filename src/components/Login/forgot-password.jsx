import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import resetEmail from "../../redux/actions/forgot_password_action";

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { email: "" }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    const { dispatch } = this.props;
    dispatch(resetEmail(user));
  }

  render() {
    const { message } = this.props;
    const { user } = this.state;
    const { email } = user;
    return (
      <div className="m-auto col-sm-8">
        <form onSubmit={this.handleSubmit} className="border">
          {message && (
            <p className="text-center text-danger" id="info">
              {message ? message.message : ""}
            </p>
          )}
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control is_valid text-center"
              placeholder="Enter email address"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning mb-4">
              Send Reset Email
            </button>
          </div>
        </form>
      </div>
    );
  }
}
ForgotPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

<<<<<<< HEAD
const mapStateToProps = resetPasswordReducer => resetPasswordReducer;
=======
const mapStateToProps = ({ resetPasswordReducer }) => resetPasswordReducer;
>>>>>>> [feat]: enable a user to reset his/her password
export default connect(mapStateToProps)(ForgotPassword);
