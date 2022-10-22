import React from "react";

const Card = ({ accomodation }) => {
  return (
    <figure className="card__item">
      <img src={accomodation.cover} alt={accomodation.title} />
      <figcaption>{accomodation.title}</figcaption>
    </figure>
  );
};

export default Card;
