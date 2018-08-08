import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';

import UserList from './containers/list';
import CreateUser from './containers/create';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/list' component={UserList} />
        <Route path='/create' component={CreateUser} />
      </div>
    );
  }
}

export default App;
