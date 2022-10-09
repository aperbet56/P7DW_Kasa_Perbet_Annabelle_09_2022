import React from "react";
import fullStar from "../images/fullStar.png";
import emptyStar from "../images/emptyStar.png";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img src={fullStar} alt="full-star" key={i} />);
    } else {
      stars.push(<img src={emptyStar} alt="empty-star" key={i} />);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
