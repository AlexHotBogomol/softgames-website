import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import Facebook from "../SocialBlock/Socials/Facebook";
import Twitter from "../SocialBlock/Socials/Twitter";
import Google from "../SocialBlock/Socials/Google";
import Linkedin from "../SocialBlock/Socials/Linkedin";

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
                    <Link to='/advertisers/#things' className="footerMenu-sublink">
                      Why SOFTGAMES?
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/advertisers/" className="footerMenu-sublink">
                      Brands
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/advertisers/" className="footerMenu-sublink">
                      Join us to tell your story
                    </Link>
                  </li>
                </ul>
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link to="/advertisers/" className="footerMenu-link">
                      Developers
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/advertisers/" className="footerMenu-sublink">
                      Global Reach
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/advertisers/" className="footerMenu-sublink">
                      Better Monetization
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/advertisers/" className="footerMenu-sublink">
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
                    <Link to="/publishers/" className="footerMenu-sublink">
                      Games Affiliate Program
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/publishers/" className="footerMenu-sublink">
                      Why SOFTGAMES?
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/publishers/" className="footerMenu-sublink">
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
                    <Link to="/career/" className="footerMenu-sublink">
                      Job Openings
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/career/" className="footerMenu-sublink">
                      Culture & Values
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/career/" className="footerMenu-sublink">
                      Application Process
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/career/" className="footerMenu-sublink">
                      Benefits
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/career/" className="footerMenu-sublink">
                      Global Offices
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/career/" className="footerMenu-sublink">
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
                    <Link to="/company/" className="footerMenu-sublink">
                      About
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/company/" className="footerMenu-sublink">
                      Our Story
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/company/" className="footerMenu-sublink">
                      Management
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <Link to="/company/" className="footerMenu-sublink">
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
