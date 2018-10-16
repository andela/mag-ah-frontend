import React from "react";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

const SubmitButton = ({ label, className, fetching }) => (
  <button type="submit" className={className}>
    {label}
    &ensp;
    {fetching && <ClipLoader sizeUnit="px" size={15} />}
  </button>
);

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  fetching: PropTypes.bool.isRequired
};

SubmitButton.defaultProps = {
  className: null
};
export default SubmitButton;
