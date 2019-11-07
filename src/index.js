import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './index.scss';

import Notfound from './templates/Notfound';
import Home from "./templates/Home";
import Games from "./templates/Games";

const routes = (   
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games/" component={Games} />
            <Redirect exact from='/post/' to='/' />
            <Redirect exact from='/page/' to='/' />
            <Redirect exact from='/search/' to='/' />
            <Route component={Notfound} />
        </Switch>
      </Router> 
  )

ReactDOM.render(routes, document.getElementById('root'));