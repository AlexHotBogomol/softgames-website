import React from 'react';
import './Err404.scss';
import Layout from "../Layout";
import Err404icon from '../../assets/icons/Err404icon';

const Err404 = props => {
  return (
    <Layout>
      <div className="page404">
        <Err404icon
          className="page404-img"
        />
        <h1 className="page404-title">OOPS!</h1>
        <p className="page404-description">Sorry, we can’t find this page</p>
        <a
          className="btn btn--primary"
          href="/"
        >
          Back home
        </a>
      </div>
    </Layout>
  )
};

export default Err404