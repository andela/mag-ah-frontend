import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  name,
  className,
  onChange,
  placeholder,
  type,
  value,
  required,
  enabled,
  rows
}) => (
  <div className="m-0">
    <div className="form-group">
      <TextArea
        className={className}
        name={name}
        enabled={enabled}
        rows={rows}
      />
    </div>
  </div>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  enabled: PropTypes.bool,
  rows: PropTypes.number.isRequired
};

TextArea.defaultProps = {
  required: false,
  value: "",
  enabled: true
};

export default TextArea;
