import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Error from "../pages/Error";

const Accomodation = () => {
  const { id } = useParams();
  const [accomodation, setAccomodation] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAccomodation = () => {
      fetch("../logements.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (logements) {
          const accomodation = logements.find((item) => item.id === id);
          console.log(accomodation);
          setAccomodation(accomodation);
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        });
    };

    fetchAccomodation();
  }, [id]);

  if (error) {
    return <p>Oups, il y a eu un problème.</p>;
  }

  if (!accomodation) {
    return <p>Veuillez patienter : le chargement en cours...</p>;
  }

  return accomodation ? (
    <div>
      <Header />
      <main>
        <Carousel pictures={accomodation.pictures} />
        <h1>{accomodation.title}</h1>
        <p>{accomodation.location}</p>
      </main>
    </div>
  ) : (
    <Error />
  );
};

export default Accomodation;
