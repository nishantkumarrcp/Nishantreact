
import React, { Component } from 'react';
import "./login.css";

export default class Login extends Component {
    render() { 
      return (
        <div class="specialDiv"> 
          Welcome to Login 
          <input type="button" value="Login" onClick={ event => this.props.history.push('home')} />
  
        </div> 
      ) 
    }
  }