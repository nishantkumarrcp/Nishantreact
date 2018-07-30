import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import RegistrationScreen from './containers/registration';
import StudentScreen from './containers/student/list';
import HomeScreen from './containers/home';
import LoginScreen from './containers/login';
import UnImplemented from './containers/unimplemented';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/register" component={RegistrationScreen} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;
