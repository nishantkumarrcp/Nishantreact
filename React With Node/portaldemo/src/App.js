import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RegistrationScreen from './containers/registration';
import StudentScreen from './containers/student/list';
import HomeScreen from './containers/home';

class App extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

export default App;
