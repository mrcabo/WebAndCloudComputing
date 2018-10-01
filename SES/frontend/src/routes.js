import React from 'react';
import { Route } from 'react-router-dom';


import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';
import MyHouse from './containers/MyHouse';
import Marketplace from './containers/Marketplace';

const BaseRouter = () => (
    <div>
      {/*  <Route exact path='/' component={ArticleList} />
        <Route exact path='/articles/:articleID/' component={ArticleDetail} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/myhouse/' component={MyHouse} />
        <Route exact path='/marketplace/' component={Marketplace} />
    </div>
);

export default BaseRouter;