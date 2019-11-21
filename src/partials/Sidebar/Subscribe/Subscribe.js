import React from 'react';
import './Subscribe.scss';

const Subscribe = props => {
  return (
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
  )
};

export default Subscribe