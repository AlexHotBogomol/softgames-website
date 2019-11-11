import React, {Component} from "react";
import "./Sidebar.scss";
import {Link} from 'react-router-dom';
import Download from "../../assets/icons/Download";
import WpApiService from "../../services/WpApiService";

import hr from "../../assets/images/hr.jpg";

class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      tags: [],
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    this.wpApiService.getAllTags().then((res) => {
      this.setState({
        tags: res.data
      })
    })
  };

  render(){
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
          <p className="pressKit-question">
            You need additional material or have further media inquiries?
          </p>
          <p className="pressKit-offer">Please contact us:</p>
          <div className="hrCard">
            <div className="hrCard-imgWrapper">
              <img src={hr} alt="hr" />
            </div>
            <div className="hrCard-content">
              <h5>Name</h5>
              <p>PR & Communications Manager</p>
              <p>+ 12 345 67 890</p>
            </div>
          </div>
          <a href="PRESS@SOFTGAMES.COM" className="btn btn--secondary w-100">
            PRESS@SOFTGAMES.COM
          </a>
        </div>
        <div className="sidebar-block subscribe">
          <h2 className="sidebar-heading subscribe-heading">Subscribe</h2>
          <p className="sidebar-description subscribe-description">
            to our Press Mailing List
          </p>
          <form action="/" method="POST">
            <label>
              <span className="caption">Media Outlet*</span>
              <input
                type="text"
                placeholder="Media Outlet*"
                name="media_outlet"
                required
              />
            </label>
            <label>
              <span className="caption">Name*</span>
              <input type="text" placeholder="Your Name*" name="name" required />
            </label>
            <label>
              <span className="caption">E-mail*</span>
              <input
                type="email"
                placeholder="Your E-mail*"
                name="email"
                required
              />
            </label>
          </form>
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
        {this.state.tags.length ?
          (
            <div className="sidebar-block tags">
              <h2 className="sidebar-heading">Tags</h2>
              <ul className="tags-list">
                {this.state.tags.map(tag => {
                  return (
                    <li
                      key={tag.id}
                    >
                      <Link to={`/news/${tag.slug}`}>{tag.name}</Link>
                    </li>
                  )})}
              </ul>
            </div>
          ) : null
        }
      </section>
    )
  }
};

export default Sidebar;
