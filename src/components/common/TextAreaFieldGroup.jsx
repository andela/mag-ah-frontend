import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  type,
  error,
  info,
  onChange,
  disabled
}) => (
  <div className="form-group">
    <textarea
      type={type}
      className={classnames("form-control border", {
        "is-invalid": error
      })}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    {info && <small className="form-text text-muted">{info}</small>}
    {error && <small className="form-text text-danger">{error}</small>}
  </div>
);

TextAreaFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  type: propTypes.string,
  value: propTypes.string.isRequired,
  error: propTypes.string,
  info: propTypes.string,
  onChange: propTypes.func.isRequired,
  disabled: propTypes.string
};

TextAreaFieldGroup.defaultProps = {
  placeholder: "",
  type: "",
  error: "",
  info: "",
  disabled: false
};

export default TextAreaFieldGroup;
