import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  name,
  className,
  onChange,
  onBlur,
  error,
  placeholder,
  type,
  value,
  required
}) => (
  <div className="m-0">
    <div className="form-group">
      <input
        className={className}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        required={required}
      />
      {error && <div className="ah-input-error pt-1 text-danger">{error}</div>}
    </div>
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onBlur: PropTypes.func
};

TextInput.defaultProps = {
  error: null,
  required: false,
  onBlur: () => {}
};

export default TextInput;
