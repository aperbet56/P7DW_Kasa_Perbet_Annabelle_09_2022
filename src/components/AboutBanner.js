import React from "react";
import aboutBanner from "../images/aboutBanner.png";

const AboutBanner = () => {
  return (
    <div className="about__banner">
      <img
        src={aboutBanner}
        alt="Paysage de montagnes"
        className="about__banner__img"
      />
    </div>
  );
};

export default AboutBanner;
