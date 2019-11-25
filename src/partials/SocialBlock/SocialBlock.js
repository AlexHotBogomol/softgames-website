import React from 'react';
import Facebook from "./Socials/Facebook";
import Twitter from "./Socials/Twitter";
import Google from "./Socials/Google";
import Linkedin from "./Socials/Linkedin";
import './SocialBlock.scss';

const SocialBlock = ({className}) => {
  const classes = [
    'socialBlock',
    className
  ];
  return (
    <div className={classes.join(" ")}>
      <h3 className="socialBlock-title">
        Our social media
      </h3>
      <h5 className="socialBlock-subtitle">
        Follow us on social media to keep up to date with our news.
      </h5>
      <ul className="socialBlock-list">
        <li>
          <Facebook link="https://www.google.com"/>
        </li>
        <li>
          <Twitter link="https://www.google.com"/>
        </li>
        <li>
          <Google link="https://www.google.com"/>
        </li>
        <li>
          <Linkedin link="https://www.google.com"/>
        </li>
      </ul>
    </div>
  )
}

export default SocialBlock