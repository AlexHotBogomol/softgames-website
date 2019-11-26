import React, { Fragment } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Footer.scss";
import Logo from "../Logo/Logo";
import Facebook from "../SocialBlock/Socials/Facebook";
import Twitter from "../SocialBlock/Socials/Twitter";
import Google from "../SocialBlock/Socials/Google";
import Linkedin from "../SocialBlock/Socials/Linkedin";

const scrollTo = (el, position = 'center') => {
  el.scrollIntoView({ behavior: 'smooth', block: position })
};

const Footer = props => (
  <Fragment>
    <section className="joinUs">
      <div className="container">
        <div className="row">
          <div className="col-auto mx-auto">
            <h2 className="joinUs-title">Ready to join us?</h2>
            <div className="joinUs-separator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link to="/positions/" className="btn btn--secondaryInverse">
              see open positions
            </Link>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-logoWrapper">
              <Logo className="footer-logo" />
            </div>
          </div>
          <nav className="col-lg-8 ">
            <div className="row">
              <div className="col-lg-3">
                <ul className="menu menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link to="/advertisers/" className="footerMenu-link">
                      Advertisers
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/advertisers/#why-softgames"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Why SOFTGAMES?
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/advertisers/#brands"
                      className="footerMenu-sublink"
                      scroll={(el) => scrollTo(el)}
                    >
                      Brands
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/advertisers/#join-us"
                      className="footerMenu-sublink"
                      scroll={(el) => scrollTo(el)}
                    >
                      Join us to tell your story
                    </Link>
                  </li>
                </ul>
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link to="/developers/" className="footerMenu-link">
                      Developers
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      smooth
                      to="/developers/#global-reach"
                      className="footerMenu-sublink"
                    >
                      Global Reach
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      smooth
                      to="/developers/#better-monetization"
                      className="footerMenu-sublink"
                    >
                      Better Monetization
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/developers/#publish-with-us"
                      className="footerMenu-sublink"
                      scroll={(el) => scrollTo(el)}
                    >
                      Publish with us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link to="/publishers/" className="footerMenu-link">
                      Publishers
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      smooth
                      to="/publishers/#games-affiliate"
                      className="footerMenu-sublink"
                    >
                      Games Affiliate Program
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/publishers/#why-softgames"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Why SOFTGAMES?
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/publishers/#our-partners"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Our partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link to="/career/" className="footerMenu-link">
                      Career
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/career/#job-openings"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Job Openings
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/career/#culture-values"
                      className="footerMenu-sublink"
                      scroll={el => scrollTo(el, 'center')}
                    >
                      Culture & Values
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/career/#application-process"
                      className="footerMenu-sublink"
                      scroll={el => scrollTo(el, 'center')}
                    >
                      Application Process
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/career/#benefits"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Benefits
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/career/#global-offices"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Global Offices
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/career/#FAQ"
                      className="footerMenu-sublink"
                      smooth
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link to="/company/" className="footerMenu-link">
                      Company
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/company/#about-us"
                      className="footerMenu-sublink"
                      scroll={el => scrollTo(el, 'center')}
                    >
                      About
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/company/#our-story"
                      className="footerMenu-sublink"
                      scroll={el => scrollTo(el, 'center')}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/company/#management"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Management
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link
                      to="/company/#press-room"
                      className="footerMenu-sublink"
                      smooth
                    >
                      Press Room
                    </Link>
                  </li>
                </ul>
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link to="/games/" className="footerMenu-link">
                      Games
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-item">
                    <Link to="/news/" className="footerMenu-link">
                      News
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="row justify-content-between footerBottom">
          <div className="col-lg-6">
            <p className="footer-copyright">
              © {new Date().getFullYear()} SOFTGAMES
            </p>
            <ul className="footerBottom-menu">
              <li>
                <Link to="/imprint/">Imprint</Link>
              </li>
              <li>
                <Link to="/terms-of-use/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy/">Privacy</Link>
              </li>
              <li>
                <Link to="/cookie-information/">Cookie Information</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <ul className="footer-socials">
              <li>
                <Facebook link="https://www.google.com"/>
              </li>
              <li>
                <Twitter link="https://www.google.com" />
              </li>
              <li>
                <Google link="https://www.google.com" />
              </li>
              <li>
                <Linkedin link="https://www.google.com" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
