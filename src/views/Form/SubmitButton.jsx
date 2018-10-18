import React from "react";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";

const SubmitButton = ({ id, label, className, fetching }) => (
  <button type="submit" className={className} id={id}>
    {label}
    &ensp;
    {fetching && <ClipLoader sizeUnit="px" size={15} />}
  </button>
);

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  fetching: PropTypes.bool,
  id: PropTypes.string
};

SubmitButton.defaultProps = {
  className: null,
  id: null,
  fetching: false
};

export default SubmitButton;
