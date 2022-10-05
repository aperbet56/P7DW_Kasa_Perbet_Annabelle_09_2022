import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="accomodations">
      {data.map((accomodation) => (
        <Link
          to={`accomodation/${accomodation.id}`}
          key={accomodation.id}
          className="card"
        >
          <figure className="card__item">
            <img src={`${accomodation.cover}`} alt={accomodation.title} />
            <figcaption>{accomodation.title}</figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
};

export default Card;
