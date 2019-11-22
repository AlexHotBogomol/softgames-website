import React from 'react';
import './SimpleCard.scss';

const SimpleCard = ({icon, content, className}) => {
  const classes = [
    'simpleCard',
    className,
  ];
  return (
    <div className={classes.join(" ")}>
      <div className="simpleCard-imgWrapper">
        {icon}
      </div>
      {content}
    </div>
  )
};

export default SimpleCard