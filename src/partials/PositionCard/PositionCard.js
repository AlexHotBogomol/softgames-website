import React from "react";
import "./PositionCard.scss";

import Marker from "../../assets/icons/Marker";

const PositionCard = ({ title, department, location, url }) => {
  return (
    <a href={url} className="positionCard">
      <p className="accentText positionCard-category">{department ? department : "Other Department"}</p>
      <h4 className="positionCard-title">{title}</h4>
      <p className="positionCard-location">
        {location ? <Marker /> : null}
        {location ? location : null}
      </p>
    </a>
  );
};

export default PositionCard;
