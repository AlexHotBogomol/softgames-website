import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './index.css';

import Header from "./partials/Header/Header";
import Footer from "./partials/Footer";

import Notfound from './templates/Notfound';
import Home from "./templates/Home";

const routes = (   
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Redirect exact from='/post/' to='/' />
            <Redirect exact from='/page/' to='/' />
            <Redirect exact from='/search/' to='/' />
            <Route component={Notfound} />
        </Switch>
      </Router> 
  )

ReactDOM.render(routes, document.getElementById('root'));