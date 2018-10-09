import React from "react";
import { connect } from "react-redux";
import loginAction from "../../redux/actions/loginAction";

class loginPage extends React.Component {
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
    const { email, password } = this.state;
    const { message, error } = this.props.loginReducer;

    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          login
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title col-11 m-auto"
                  id="exampleModalLabel"
                >
                  Login
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <form>
                  {error && (
                    <p className="ah-err-msg">
                      {error.data.errors.email ? "Email is required" : ""}
                      {error.data.errors ? error.data.errors.error : ""}
                    </p>
                  )}
                  <div className="form-group col-8 m-auto">
                    <input
                      type="email"
                      className="form-control mb-3"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />

                    {error && (
                      <p className="ah-err-msg">
                        {error.data.errors.password
                          ? "Password is required"
                          : ""}
                      </p>
                    )}
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mb-5 col-4"
                    onClick={this.onLogin}
                  >
                    Sign in
                  </button>
                  <div className="col-9 m-auto">
                    <a className="ah-facebook-btn btn btn-block btn-lg mb-3">
                      <i className="fab fa-facebook-square" />
                      &ensp; Sign in with Facebook
                    </a>
                    <a className="ah-twitter-btn btn btn-block btn-lg mb-3">
                      <i className="fab fa-twitter" />
                      &ensp; Sign in with Twitter
                    </a>
                    <a className="ah-google-btn btn btn-block btn-lg mb-3">
                      <i className="fab fa-google" />
                      &ensp; Sign in with Google
                    </a>
                    <span>
                      <p>Create an account ?</p>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = loginReducer => loginReducer;

export default connect(mapStateToProps)(loginPage);
