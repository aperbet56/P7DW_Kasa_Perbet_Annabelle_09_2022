import React from "react";

const Host = (props) => {
  const firstName = props.host.name.split(" ")[0];
  const lastName = props.host.name.split(" ")[1];
  return (
    <div className="host__info">
      <span className="host__info__name">
        {firstName}
        <br />
        {lastName}
      </span>
      <div className="host__info__img">
        <img src={props.host.picture} alt={`Avatar de ${props.name}`} />
      </div>
    </div>
  );
};

export default Host;
