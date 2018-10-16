import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, dataToggle, dataTarget, className }) => (
  <button
    type="button"
    data-toggle={dataToggle}
    data-target={dataTarget}
    className={className}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  dataToggle: PropTypes.string,
  dataTarget: PropTypes.string,
  className: PropTypes.string
};

Button.defaultProps = {
  dataToggle: null,
  dataTarget: null,
  className: null
};

export default Button;
