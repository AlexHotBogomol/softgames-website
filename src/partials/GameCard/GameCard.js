import React from 'react';
import './GameCard.scss';

const GameCard = ({url, img, title, description, limit}) => {

  const short_description = description.replace(/(<([^>]+)>)/ig,"").slice(0, limit) + "...";

  return (
    <a href={url} className="gameCard">
      <div className="gameCard-img">
        <img src={img} alt={title}/>
      </div>
      <div className="gameCard-content">
        <h4 className="gameCard-title" dangerouslySetInnerHTML={{
          __html: title
        }} />
        <p className="gameCard-description" dangerouslySetInnerHTML={{
          __html: short_description
        }} />
      </div>
    </a>
  )
}

export default GameCard
