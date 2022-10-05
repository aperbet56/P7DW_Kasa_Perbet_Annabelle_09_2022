import React from "react";
import homeBanner from "../images/homeBanner.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={homeBanner} alt="Paysage de côte" className="banner__img" />
      <h2 className="banner__text">Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;
