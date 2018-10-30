import React from "react";
import PropTypes from "prop-types";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const ArticleTags = ({ handleTags, tags }) => (
  <TagsInput
    value={tags}
    onChange={handleTags}
    onlyUnique
    addKeys={[188, 9, 13]}
  />
);

ArticleTags.propTypes = {
  handleTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

ArticleTags.defaultProps = {
  tags: []
};

export default ArticleTags;
