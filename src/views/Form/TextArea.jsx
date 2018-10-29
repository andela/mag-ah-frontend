import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  name,
  className,
  onChange,
  onBlur,
  error,
  placeholder,
  value,
  required,
  rows,
  cols
}) => (
  <div className="m-0">
    <div className="form-group">
      <textarea
        className={className}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        required={required}
        rows={rows}
        cols={cols}
      />
      {error && <div className="ah-input-error pt-1 text-danger">{error}</div>}
    </div>
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  onBlur: PropTypes.func,
  rows: PropTypes.number,
  cols: PropTypes.number
};

TextArea.defaultProps = {
  error: null,
  required: false,
  value: "",
  rows: null,
  cols: null,
  onBlur: () => {}
};

export default TextArea;
