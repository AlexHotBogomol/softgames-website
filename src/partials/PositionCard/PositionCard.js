import React from "react";
import "./PositionCard.scss";
import {Link} from 'react-router-dom';

import Marker from "../../assets/icons/Marker";

const PositionCard = ({ title, terms, slug }) => {
  let department = "",
        location = "";
  if(terms){
    department = terms.find((term) =>{
      if(term.taxonomy === 'department'){
        return term
      }
    });
    location = terms.find((term) =>{
      if(term.taxonomy === 'location'){
        return term
      }
    });
  }
  return (
    <Link to={`/position/${slug}`} className="positionCard">
      <p className="accentText positionCard-category">{department ? department.name : null}</p>
      <h4 className="positionCard-title">{title}</h4>
      <p className="positionCard-location">
        {location ? <Marker /> : null}
        {location ? location.name : null}
      </p>
    </Link>
  );
};

export default PositionCard;
