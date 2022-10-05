import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  return (
    <div>
      <Header />
      <section className="error404">
        <h1 className="error404__title">404</h1>
        <p className="error404__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="back-home__link">
          Retourner sur la page d'accueil.
        </Link>
      </section>
    </div>
  );
};

export default Error;
