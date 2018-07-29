import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import RegistrationScreen from './containers/registration';
import StudentScreen from './containers/student/list';
import HomeScreen from './containers/home';

class Login extends Component {
  render() { 
    return (
      <div> 
        Welcome to Login 
        <input type="button" value="Login" onClick={ event => this.props.history.push('home')} />

      </div> 
    ) 
  }
}

class UnImplemented extends Component {
  render() { return (<div> Need to Implement</div> ) }
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/register" component={RegistrationScreen} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;
