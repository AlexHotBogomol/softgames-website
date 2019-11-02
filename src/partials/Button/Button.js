import React from 'react';
import './Button.scss';

const Button = ({color, children, withIcon}) => {
  const classes = [
    'btn',
    'btn--' + color,
    withIcon ? 'btn--withIcon' : null
  ]
  return (
    <button className={classes.join(" ")}>
      {children}
    </button>
  )
}

export default Button