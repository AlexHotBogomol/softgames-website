import React from 'react';
import './GameCard.scss';
import JoyStick from "../../assets/icons/JoyStick";

const GameCard = ({url, img, title, description}) => (
  <div className="gameCard">
    <div className="gameCard-img">
      <img src={img} alt={title}/>
      <div className="gameCard-overlay">
        <a href={url} className="btn btn--primaryInverse btn--withIcon"><JoyStick/>click to play</a>
      </div>
    </div>
    <div className="gameCard-content">
      <h4 className="gameCard-title" dangerouslySetInnerHTML={{
        __html: title
      }} />
      <p className="gameCard-description" dangerouslySetInnerHTML={{
        __html: description
      }} />
    </div>
  </div>
);

export default GameCard
