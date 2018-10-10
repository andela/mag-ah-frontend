import React from "react";
import Modal from "./modal";
import ForgotPasswordForm from "./forgot-password";

const Login = () => (
  <div>
    <div className="container">
      <div className="row justify-content-left align-items-center h-100">
        <div className="col-sm-4" />
        <div className="m-auto  8col-sm-4">
          <form>
            <div className="form-group">
              <ul className="navbar-nav mr-auto">
                <li className="text-center">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Third group"
                  >
                    <a
                      href="/"
                      data-toggle="modal"
                      data-target="#ahRegisterModal"
                    >
                      Forgot password ?
                    </a>
                  </div>
                  <Modal
                    title="Account recovery"
                    form={<ForgotPasswordForm />}
                  />
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="col-sm-4" />;
      </div>
    </div>
  </div>
);

export default Login;
