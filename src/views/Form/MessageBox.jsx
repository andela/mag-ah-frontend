import React from "react";
import PropTypes from "prop-types";

const MessageBox = ({ className, message, error, serverError }) => (
  <div className={className} role="alert">
    {message || error || serverError}
  </div>
);

MessageBox.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string,
  serverError: PropTypes.objectOf(PropTypes.string),
  error: PropTypes.arrayOf(PropTypes.string)
};

MessageBox.defaultProps = {
  message: "",
  serverError: {},
  error: []
};

export default MessageBox;
