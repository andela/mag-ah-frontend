import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  pattern,
  value,
  error,
  info,
  type,
  id,
  onChange,
  disabled
}) => (
  <div className="form-group">
    <input
      type={type}
      id={id}
      className={classnames("form-control border", {
        "is-invalid": error
      })}
      placeholder={placeholder}
      pattern={pattern}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    {info && <small className="form-text text-muted">{info}</small>}
    {error && <small className="form-text text-danger">{error}</small>}
  </div>
);

TextFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  pattern: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  error: propTypes.string,
  info: propTypes.string,
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  disabled: propTypes.string
};

TextFieldGroup.defaultProps = {
  placeholder: "",
  error: "",
  info: "",
  disabled: ""
};

export default TextFieldGroup;
