import React from 'react';
import './GameCard.scss';
import JoyStick from "../../assets/icons/JoyStick";
import ReactHtmlParser from "react-html-parser";

const GameCard = ({url, img, title, description}) => (
  <div className="gameCard">
    <div className="gameCard-img">
      <img src={img} alt={title}/>
      <div className="gameCard-overlay">
        <a href={url} target="_blank" className="btn btn--primaryInverse btn--withIcon"><JoyStick/>click to play</a>
      </div>
    </div>
    <div className="gameCard-content">
      <h4 className="gameCard-title">{ReactHtmlParser(title)}</h4>
      <p className="gameCard-description">{ReactHtmlParser(description)}</p>
    </div>
  </div>
);

export default GameCard
