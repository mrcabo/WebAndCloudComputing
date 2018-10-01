import React from 'react';
import { Route } from 'react-router-dom';


import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';

const BaseRouter = () => (
    <div>
      {/*  <Route exact path='/' component={ArticleList} />
        <Route exact path='/articles/:articleID/' component={ArticleDetail} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>
);

export default BaseRouter;