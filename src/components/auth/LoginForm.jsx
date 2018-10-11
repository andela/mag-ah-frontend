import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "../../views/Form/index";

const LoginForm = ({ error, password, handleChange, email }) => (
  <form>
    {error && (
      <p className="ah-err-msg">
        {error.email ? "Email is required" : ""}
        {error ? error.error : ""}
      </p>
    )}

    <div className="form-group col-9 m-auto">
      <TextInput
        type="email"
        className="form-control mb-3"
        aria-describedby="emailHelp"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      {error && (
        <p className="ah-err-msg">
          {error.password ? "Password is required" : ""}
        </p>
      )}

      <div className="form-group">
        <TextInput
          type="password"
          className="form-control mb-3"
          id="exampleInputPassword1"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
    </div>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.shape(),
  handleChange: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
  error: {}
};

export default LoginForm;
