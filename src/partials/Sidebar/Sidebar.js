import React, {Component} from "react";
import "./Sidebar.scss";
import {Link} from 'react-router-dom';
import Download from "../../assets/icons/Download";
import WpApiService from "../../services/WpApiService";
import {CSSTransition} from "react-transition-group";

import hr from "../../assets/images/hr.jpg";

class Sidebar extends Component{
  constructor(props){
    super(props);

    this.state = {
      tags: [],
      options: [],
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount = () => {
    this.wpApiService.getAllTags('news_tag').then(({data: tags}) => {
      this.setState({
        tags
      })
    });

    this.wpApiService.getAcfOptionByField('sidebar').then(({ data: options }) => {
      this.setState({
        options
      });
    });
  };

  render(){
    const {options, tags} = this.state;

    return (
      <section className="sidebar">
        {options.press_block ? (
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
            unmountOnExit={true}
          >
            <div className="sidebar-block pressKit">
              {options.press_block.heading ? (
                <h2 className="sidebar-heading">
                  {options.press_block.heading}
                </h2>
              ) : null}
              {options.press_block.description ? (
                <p className="pressKit-description">
                  {options.press_block.description}
                </p>
              ) : null}
              {options.press_block.download_file ? (
                <a
                  href={options.press_block.download_file.url}
                  download
                  className="btn btn--primary btn--withIcon pressKit-btn"
                >
                  <Download />
                  <span>{options.press_block.dowload_button_text}</span>
                </a>
              ) : null}
              {options.press_block.extra_text ? (
                <p className="pressKit-extra">({options.press_block.extra_text})</p>
              ) : null}
              {options.press_block.question ? (
                <p className="pressKit-question">
                  {options.press_block.question}
                </p>
              ) : null}
              {options.press_block.offer ? (
                <p className="pressKit-question">
                  {options.press_block.offer}
                </p>
              ) : null}
              {options.hr_card ? (
                <div className="hrCard">
                  <div className="hrCard-imgWrapper">
                    <img src={hr} alt="hr" />
                  </div>
                  <div className="hrCard-content">
                    <h5>{options.hr_card.name}</h5>
                    <p>{options.hr_card.position}</p>
                    <p>{options.hr_card.phone}</p>
                  </div>
                </div>
              ) : null}
              {options.press_block.another_button_text ? (
                <a href={`mailto:${options.press_block.another_button_link.toLowerCase()}`} className="btn btn--secondary w-100">
                  {options.press_block.another_button_text}
                </a>
              ) : null}
            </div>
          </CSSTransition>
        ) : null}
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames="fade"
          unmountOnExit={true}
        >
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
        </CSSTransition>
        {options.meetings_block && options.meetings_block.meetings.length ? (
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
            unmountOnExit={true}
          >
            <div className="sidebar-block meetings">
              {options.meetings_block.meetings_heading ? (
                <h2 className="sidebar-heading">
                   {options.meetings_block.meetings_heading}
                </h2>
              ) : null}
              <ul className="meetings-list">
              {options.meetings_block.meetings.map((meeting, index)=>{
                return (
                  <li key={index}>
                    <p className="accentText meetings-date">{meeting.date}</p>
                    <a className="link meetings-link" href={meeting.link}>
                      {meeting.name}
                    </a>
                    <span className="meetings-location">&nbsp;({meeting.location})</span>
                  </li>
                )
              })}
              </ul>
            </div>
          </CSSTransition>
        ) : null}
        {tags.length ?
          (
            <CSSTransition
              in={true}
              appear={true}
              timeout={300}
              classNames="fade"
              unmountOnExit={true}
            >
              <div className="sidebar-block tags">
                <h2 className="sidebar-heading">Tags</h2>
                <ul className="tags-list">
                  {tags.map(tag => {
                    return (
                      <li
                        key={tag.id}
                      >
                        <Link to={`/news/${tag.slug}`}>{tag.name}</Link>
                      </li>
                    )})}
                </ul>
              </div>
            </CSSTransition>
          ) : null
        }
      </section>
    )
  }
};

export default Sidebar;
