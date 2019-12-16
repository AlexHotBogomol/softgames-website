import Facebook from "./Socials/Facebook";
import Twitter from "./Socials/Twitter";
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
          <Facebook link="https://www.facebook.com/softgames/"/>
        </li>
        <li>
          <Twitter link=" https://twitter.com/softgames"/>
        </li>
        <li>
          <Linkedin link="https://www.linkedin.com/company/softgames-mobile-entertainment-services"/>
        </li>
      </ul>
    </div>
  )
};

export default SocialBlock