import React from 'react';
import './GameCard.scss';
import JoyStick from "../../assets/icons/JoyStick";
import GooglePlay from "../../assets/icons/GooglePlay";
import AppStore from "../../assets/icons/AppStore";

const GameCard = ({link, googlePlayLink, appStoreLink, img, title, icon}) => {
  return (
    <div className="gameCard">
      <div className="gameCard-img">
        <img src={img} alt={title}/>
        <div className="gameCard-overlay">
          <a href={link} className="btn btn--primaryInverse btn--withIcon"><JoyStick/>click to play</a>
          <div className="gameCard-platforms">
            <a href={googlePlayLink}><GooglePlay/></a>
            <a href={appStoreLink}><AppStore/></a>
          </div>
        </div>
        <div className="gameCard-meta">
          <img className="gameCard-icon" src={icon} alt={title}/>
          <h4 className="gameCard-name">{title}</h4>
        </div>
      </div>
    </div>
  )
};

export default GameCard
