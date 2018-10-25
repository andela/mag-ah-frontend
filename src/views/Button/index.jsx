import React from "react";
import PropTypes from "prop-types";

const Button = ({ id, label, dataToggle, dataTarget, className, onclick }) => (
  <button
    id={id}
    type="button"
    data-toggle={dataToggle}
    data-target={dataTarget}
    className={className}
    onClick={onclick}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  dataToggle: PropTypes.string,
  dataTarget: PropTypes.string,
  className: PropTypes.string,
  onclick: PropTypes.func
};

Button.defaultProps = {
  dataToggle: null,
  id: null,
  dataTarget: null,
  className: null,
  onclick: null
};

export default Button;
