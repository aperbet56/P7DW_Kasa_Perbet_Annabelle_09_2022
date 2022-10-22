import React from "react";

const Tags = (props) => {
  return (
    <ul className="tags__list">
      {props.tags.map((tag, index) => (
        <li key={tag + index}>{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;
