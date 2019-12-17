import React from 'react';
import './GameCard.scss';
import JoyStick from "../../assets/icons/JoyStick";
import GooglePlay from "../../assets/icons/GooglePlay";
import AppStore from "../../assets/icons/AppStore";

const GameCard = ({link, googlePlayLink, appStoreLink, img, title, icon, secret}) => {
  const gameCardClasses = [
    'gameCard',
    secret ? 'gameCard--secret' : null
  ];
  return (
    <div className={gameCardClasses.join(" ")}>
      <div className="gameCard-img">
        {!secret ? (
          <img src={img} alt={title}/>
        ) : null}

        {!secret ? (
          <div className="gameCard-overlay">
            {link ? (
              <a href={link} className="btn btn--primaryInverse btn--withIcon" target="_blank">
                <JoyStick/>click to play
              </a>
            ) : null}
            <div className="gameCard-platforms">
              {
                googlePlayLink
                  ? (<a href={googlePlayLink} target="_blank"><GooglePlay/></a>)
                  : null
              }
              {
                appStoreLink
                  ? (<a href={appStoreLink} target="_blank"><AppStore/></a>)
                  : null
              }
            </div>
          </div>
        ) : null}
        <div className="gameCard-meta">
          {!secret ? (
            <img className="gameCard-icon" src={icon} alt={title}/>
          ) : (
            <div className="gameCard-icon"/>
          )}
          <h4 className="gameCard-name">{title}</h4>
        </div>
      </div>
    </div>
  )
};

export default GameCard
