import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/views/home';
import House from '@/views/house';
import Login from '@/views/login';
import Signup from '@/views/signup';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={ House } path='/house'/>
          <Route component={ Login } path='/login'/>
          <Route component={ Signup } path='/signup'/>
          <Route component={ Home } path='/home'/>
          <Redirect to='/home'/>
        </Switch>
      </Router>
    )
  }
}
