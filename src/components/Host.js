import React from "react";
import propTypes from "prop-types";

const Host = (props) => {
  const firstName = props.host.name.split(" ")[0];
  const lastName = props.host.name.split(" ")[1];
  return (
    <div className="host__info">
      <p>
        {firstName}
        <br />
        {lastName}
      </p>
      <div className="host__info__img">
        <img src={props.host.picture} alt={`Avatar de ${props.name}`} />
      </div>
    </div>
  );
};

Host.propTypes = {
  name: propTypes.string,
  picture: propTypes.string,
};

export default Host;
