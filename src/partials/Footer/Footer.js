import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

const Footer = ({joinUsOptions}) => {
  const styles = {
    backgroundImage: `url(${joinUsOptions.image.url})`,
  };
  return (
    <Fragment>
      <section className="joinUs" style={styles}>
        <div className="container">
          <div className="row">
            <div className="col-auto mx-auto">
              <h2 className="joinUs-title">
                {joinUsOptions.title}
              </h2>
              <div className="joinUs-separator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link to={joinUsOptions.button_internal_link} className="btn btn--secondaryInverse">
                {joinUsOptions.button_text}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          Footer
        </div>
      </footer>
    </Fragment>
  )
};

export default Footer
