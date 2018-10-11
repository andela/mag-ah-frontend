import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "../views/Form/index";

const LoginForm = ({ error, password, handleChange, email }) => (
  <form>
    <div className="form-group col-8 m-auto">
      <TextInput
        type="email"
        className="form-control"
        aria-describedby="emailHelp"
        placeholder="Email"
        name="email"
        value={email}
        error={error.email ? "Email is required" : ""}
        onChange={handleChange}
      />
      <div className="form-group">
        <TextInput
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          name="password"
          value={password}
          error={error.password ? "Password is required" : ""}
          onChange={handleChange}
        />
      </div>
    </div>
  </form>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default LoginForm;
