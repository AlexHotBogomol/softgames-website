import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
import './index.scss';

import Notfound from './templates/Notfound';
import Home from "./templates/Home";
import Games from "./templates/Games";
import News from "./templates/News";
import Company from "./templates/Company";
import Career from "./templates/Career";
import Advertisers from "./templates/Advertisers";
import Publishers from "./templates/Publishers";
import Developers from "./templates/Developers";
import SinglePost from "./templates/SinglePost";

const history = createBrowserHistory();

const routes = (   
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/games/" component={Games} />
            <Route exact path="/news/" component={News} />
            <Route exact path="/company/" component={Company} />
            <Route exact path="/career/" component={Career} />
            <Route exact path="/advertisers/" component={Advertisers} />
            <Route exact path="/publishers/" component={Publishers} />
            <Route exact path="/developers/" component={Developers} />
            <Route exact path="/blog/:slug" component={SinglePost} />
            <Redirect from='/post/' to='/' />
            <Redirect exact from='/page/' to='/' />
            <Redirect exact from='/search/' to='/' />
            <Route component={Notfound} />
        </Switch>
      </Router>
  )

ReactDOM.render(routes, document.getElementById('root'));