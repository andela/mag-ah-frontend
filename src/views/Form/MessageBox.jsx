import React from "react";
import PropTypes from "prop-types";

const MessageBox = ({ className, message }) => (
  <div className={className} role="alert">
    {message}
  </div>
);

MessageBox.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.arrayOf(PropTypes.string)
};

MessageBox.defaultProps = {
  message: null
};

export default MessageBox;
