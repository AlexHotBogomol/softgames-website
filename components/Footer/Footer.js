import React, { Fragment } from "react";
import Link from 'next/link';
import LinkSmoothScroll from "../LinkSmoothScroll";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import Facebook from "../SocialBlock/Socials/Facebook";
import Twitter from "../SocialBlock/Socials/Twitter";
import Google from "../SocialBlock/Socials/Google";
import Linkedin from "../SocialBlock/Socials/Linkedin";
import HotPanel from "../HotPanel/HotPanel";


const Footer = (props) => {
  return(
  <Fragment>
    <HotPanel/>
    <section className="joinUs">
      <div className="container">
        <div className="row">
          <div className="col-auto mx-auto">
            <h2 className="joinUs-title">Ready to join us?</h2>
            <div className="joinUs-separator">
              <span />
              <span />
              <span />
            </div>
            <LinkSmoothScroll href="/career/#job-openings">
              <a className="btn btn--secondaryInverse">
                see open positions
              </a>
            </LinkSmoothScroll>
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
            <div className="row footerMenu-wrapper">
              <div className="col-6 col-md-9">
                <div className="row">
                  <div className="col-md-4">
                    <ul className="menu menu footerMenu">
                      <li className="menu-item footerMenu-item">
                        <Link href="/merchant">
                          <a className="footerMenu-link">
                            Advertisers
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/merchant/#why-softgames">
                          <a className="footerMenu-sublink">
                            Why SOFTGAMES?
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/merchant/#brands">
                          <a className="footerMenu-sublink">
                            Brands
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/merchant/#join-us">
                          <a className="footerMenu-sublink">
                            Join us to tell your story
                          </a>
                        </LinkSmoothScroll>
                      </li>
                    </ul>
                    <ul className="menu footerMenu">
                      <li className="menu-item footerMenu-item">
                        <Link href="/developers">
                          <a className="footerMenu-link">
                            Developers
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/developers/#global-reach">
                          <a className="footerMenu-sublink">
                            Global Reach
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/developers/#better-monetization">
                          <a className="footerMenu-sublink">
                            Better Monetization
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/developers/#publish-with-us">
                          <a className="footerMenu-sublink">
                            Publish with us
                          </a>
                        </LinkSmoothScroll>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu footerMenu">
                      <li className="menu-item footerMenu-item">
                        <Link href="/publishers">
                          <a className="footerMenu-link">
                            Publishers
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/publishers/#games-affiliate">
                          <a className="footerMenu-sublink">
                            Games Affiliate Program
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/publishers/#why-softgames">
                          <a className="footerMenu-sublink">
                            Why SOFTGAMES?
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/publishers/#our-partners">
                          <a className="footerMenu-sublink">
                            Our partners
                          </a>
                        </LinkSmoothScroll>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="menu footerMenu">
                      <li className="menu-item footerMenu-item">
                        <Link href="/career">
                          <a className="footerMenu-link">
                            Career
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/career/#job-openings">
                          <a className="footerMenu-sublink">
                            Job Openings
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/career/#culture-values">
                          <a className="footerMenu-sublink">
                            Culture & Values
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/career/#application-process">
                          <a className="footerMenu-sublink">
                            Application Process
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/career/#benefits">
                          <a className="footerMenu-sublink">
                            Benefits
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/career/#global-offices">
                          <a className="footerMenu-sublink">
                            Global Offices
                          </a>
                        </LinkSmoothScroll>
                      </li>
                      <li className="menu-item footerMenu-subitem">
                        <LinkSmoothScroll href="/career/#FAQ">
                          <a className="footerMenu-sublink">
                            FAQ
                          </a>
                        </LinkSmoothScroll>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link href="/company">
                      <a className="footerMenu-link">
                        Company
                      </a>
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <LinkSmoothScroll href="/company/#about-us">
                      <a className="footerMenu-sublink">
                        About
                      </a>
                    </LinkSmoothScroll>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <LinkSmoothScroll href="/company/#our-story">
                      <a className="footerMenu-sublink">
                        Our Story
                      </a>
                    </LinkSmoothScroll>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <LinkSmoothScroll href="/company/#management">
                      <a className="footerMenu-sublink">
                        Management
                      </a>
                    </LinkSmoothScroll>
                  </li>
                  <li className="menu-item footerMenu-subitem">
                    <LinkSmoothScroll href="/company/#press-room">
                      <a className="footerMenu-sublink">
                        Press Room
                      </a>
                    </LinkSmoothScroll>
                  </li>
                </ul>
                <ul className="menu footerMenu">
                  <li className="menu-item footerMenu-item">
                    <Link href="/free-online-games">
                      <a className="footerMenu-link">
                        Games
                      </a>
                    </Link>
                  </li>
                  <li className="menu-item footerMenu-item">
                    <a href="https://softgames.ein-des-ein.com/" className="footerMenu-link">
                      News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="row justify-content-between footerBottom">
          <div className="col-md-8 col-lg-6 order-1 order-md-0">
            <p className="footer-copyright">
              © {new Date().getFullYear()} SOFTGAMES
            </p>
            <ul className="footerBottom-menu">
              <li>
                <Link href="/imprint">
                  <a>
                    Imprint
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use">
                  <a>
                    Terms of Use
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>
                    Privacy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cookie-information">
                  <a>
                    Cookie Information
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-2 order-0 order-md-1">
            <ul className="footer-socials">
              <li>
                <Facebook link="https://www.facebook.com/softgames/"/>
              </li>
              <li>
                <Twitter link="https://twitter.com/softgames"/>
              </li>
              <li>
                <Linkedin link="https://www.linkedin.com/company/softgames-mobile-entertainment-services"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
)};

export default Footer;
