import React from 'react';
import {Link} from 'react-router-dom';
import './Button.scss';

const Button = ({color, children, withIcon, to = "/"}) => {
  const classes = [
    'btn',
    'btn--' + color,
    withIcon ? 'btn--withIcon' : null
  ]
  return (
    <Link to={to} className={classes.join(" ")}>{children}</Link>
  )
}

export default Button