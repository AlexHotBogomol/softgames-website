import React from 'react';
import Facebook from "./Socials/Facebook";
import Twitter from "./Socials/Twitter";
import Google from "./Socials/Google";
import Linkedin from "./Socials/Linkedin";
import './SocialBlock.scss';

const SocialBlock = (props) => {
  return (
    <div className="socialBlock">
      <h3 className="socialBlock-title">
        Our social media
      </h3>
      <h5 className="socialBlock-subtitle">
        Follow us on social media to keep up to date with our news.
      </h5>
      <ul className="socialBlock-list">
        <li>
          <Facebook/>
        </li>
        <li>
          <Twitter/>
        </li>
        <li>
          <Google/>
        </li>
        <li>
          <Linkedin/>
        </li>
      </ul>
    </div>
  )
}

export default SocialBlock