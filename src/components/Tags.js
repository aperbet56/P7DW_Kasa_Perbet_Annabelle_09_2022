import React from "react";
import propTypes from "prop-types";

const Tags = (props) => {
  return (
    <ul className="tags__list">
      {props.tags.map((tag, index) => (
        <li key={tag + index}>{tag}</li>
      ))}
    </ul>
  );
};

Tags.propTypes = {
  tags: propTypes.arrayOf(propTypes.string),
};

export default Tags;
