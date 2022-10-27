import React from "react";
import { useState } from "react";
import arrowUp from "../images/arrowUp.png";
import arrowDown from "../images/arrowDown.png";

const Collapse = (props) => {
  const title = props.title;
  const content = props.content;

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div className="accordion">
      <div className="accordion__btnWrap" onClick={() => toggle(content)}>
        <h2>{title}</h2>
        <div>
          {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé */}
          {open === content ? (
            <img src={arrowUp} alt="Flèche vers le haut" />
          ) : (
            <img src={arrowDown} alt="Flèche vers le bas" />
          )}
        </div>
      </div>
      {/* Si le titre est "Equipements", le contenu sera une liste sinon le contenu sera du texte
       */}
      {open === content ? (
        title === "Equipements" ? (
          <ul className="collapse__content__ul">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="collapse__content">{content}</p>
        )
      ) : null}
    </div>
  );
};

export default Collapse;
