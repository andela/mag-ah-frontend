import React from "react";
import PropTypes from "prop-types";

const Share = ({ url, className }) => (
  <a href={url}>
    <i className={className} />
  </a>
);

Share.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Share;
