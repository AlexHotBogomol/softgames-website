import React from "react";
import "./Sidebar.scss";
import Download from "../../assets/icons/Download";

import hr from '../../assets/images/hr.jpg';

const Sidebar = props => {
  return (
    <section className="sidebar">
      <div className="sidebar-block pressKit">
        <h2 className="sidebar-heading">Press Kit</h2>
        <p className="pressKit-description">
          You need material for your coverage such as company information,
          photos, logos, or screenshots?
        </p>
        <a
          href="https://www.google.com"
          download
          className="btn btn--primary btn--withIcon pressKit-btn"
        >
          <Download />
          <span>Download link</span>
        </a>
        <p className="pressKit-extra">(full Press kit as ZIP-file)</p>
        <p>You need additional material or have further media inquiries?</p>
        <p>Please contact us:</p>
        <div className="hrCard">
          <div className="hrCard-imgWrapper">
            <img src={hr} alt="hr"/>
          </div>
          <div className="hrCard-content">
            <h5>Name</h5>
            <p>PR & Communications Manager</p>
            <p>+ 12 345 67 890</p>
          </div>
        </div>
        <a href="PRESS@SOFTGAMES.COM" className="btn btn--secondary w-100">PRESS@SOFTGAMES.COM</a>
      </div>
      <div className="sidebar-block meetings">
        <h2 className="sidebar-heading">
          Meet us
          <br />
          in person
        </h2>
        <ul className="meetings-list">
          <li>
            <p className="accentText meetings-date">11-12 September 2019</p>
            <a className="link meetings-link" href="https://www.google.com">
              DMEXCO
            </a>
            <span className="meetings-location">&nbsp;(Cologne)</span>
          </li>
          <li>
            <p className="accentText meetings-date">11-12 September 2019</p>
            <a className="link meetings-link" href="https://www.google.com">
              DMEXCO
            </a>
            <span className="meetings-location">&nbsp;(Cologne)</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-block tags">
        <h2 className="sidebar-heading">Tags</h2>
        <ul className="tags-list">
          <li dataTag="Android">Android</li>
          <li dataTag="Apple">Apple</li>
          <li dataTag="apps">apps</li>
          <li dataTag="BBM">BBM</li>
          <li dataTag="best practice">best practice</li>
          <li dataTag="Blackberry Messanger">Blackberry Messanger</li>
          <li dataTag="business">business</li>
          <li dataTag="Casual Connect">Casual Connect</li>
          <li dataTag="chatbots">chatbots</li>
          <li dataTag="Android">Android</li>
          <li dataTag="Apple">Apple</li>
          <li dataTag="apps">apps</li>
          <li dataTag="BBM">BBM</li>
          <li dataTag="best practice">best practice</li>
          <li dataTag="Blackberry Messanger">Blackberry Messanger</li>
          <li dataTag="business">business</li>
          <li dataTag="Casual Connect">Casual Connect</li>
          <li dataTag="chatbots">chatbots</li>{" "}
          <li dataTag="Android">Android</li>
          <li dataTag="Apple">Apple</li>
          <li dataTag="apps">apps</li>
          <li dataTag="BBM">BBM</li>
          <li dataTag="best practice">best practice</li>
          <li dataTag="Blackberry Messanger">Blackberry Messanger</li>
          <li dataTag="business">business</li>
          <li dataTag="Casual Connect">Casual Connect</li>
          <li dataTag="chatbots">chatbots</li>{" "}
          <li dataTag="Android">Android</li>
          <li dataTag="Apple">Apple</li>
          <li dataTag="apps">apps</li>
          <li dataTag="BBM">BBM</li>
          <li dataTag="best practice">best practice</li>
          <li dataTag="Blackberry Messanger">Blackberry Messanger</li>
          <li dataTag="business">business</li>
          <li dataTag="Casual Connect">Casual Connect</li>
          <li dataTag="chatbots">chatbots</li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
