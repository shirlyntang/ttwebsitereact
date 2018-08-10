import React from "react";
import PropTypes from "prop-types";

const ImageFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <label>Image</label>
      <input className="image" name={name} type="file" />
    </div>
  );
};

ImageFieldGroup.propTypes = {
  name: PropTypes.string.isRequired
};

export default ImageFieldGroup;
