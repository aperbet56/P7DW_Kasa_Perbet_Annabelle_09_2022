import React from "react";
import logoWhite from "../images/logoWhite.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={logoWhite} alt="Logo de Kasa" />
      </div>
      <span>&#169; {new Date().getFullYear()} Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
