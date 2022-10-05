import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <img src={logo} alt="Logo de Kasa" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <NavLink
              to="/"
              className={(link) => (link.isActive ? "link-active" : "")}
              end
            >
              Accueil
            </NavLink>
          </li>
          <li className="header__nav__item">
            <NavLink
              to="/about"
              className={(link) => (link.isActive ? "link-active" : "")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
