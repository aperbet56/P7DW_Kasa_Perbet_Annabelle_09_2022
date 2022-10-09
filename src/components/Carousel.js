import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";

const Carousel = (props) => {
  const pictures = props.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPicture = currentIndex === pictures.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (pictures.length === 1) {
    return (
      <section className="carousel__container">
        <img
          src={pictures[currentIndex]}
          alt="Appartement"
          className="carousel__img"
        />
      </section>
    );
  } else {
    return (
      <section className="carousel__container">
        <img
          src={arrowLeft}
          alt="Flèche vers la gauche"
          className="arrowLeft__img"
          onClick={goToPrevious}
        />
        <img
          src={pictures[currentIndex]}
          alt="Appartement"
          className="carousel__img"
        />
        <img
          src={arrowRight}
          alt="Flèche vers la droite"
          className="arrowRight__img"
          onClick={goToNext}
        />
        <span className="carousel__indicators">
          {currentIndex + 1}/{pictures.length}
        </span>
      </section>
    );
  }
};

export default Carousel;
