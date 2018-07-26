import React, { Component } from 'react';
import './registration.css';

import { isNullOrEmpty } from '../../util';

export default class RegistrationScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        errorUserName: '',
        errorPassword: '',
        errorConfirmPassword: '',
        errorMessages: []
      }
    }
    onUserNameChange(event){
      this.username = event.target.value;
    }
    onPasswordChange(event){
      this.password = event.target.value;
    }
    onConfirmPasswordChange(event){
      this.confirmPassword = event.target.value;
    }
    onRegister(){
      //debugger;
      var isValid = true;
      var errorUserName = '';
      var errorPassword = '';
      var errorConfirmPassword = '';
      var errorMessages = [];
      
      if(isNullOrEmpty(this.username)){
        errorUserName = 'Please enter UserName';
        isValid = false;
        errorMessages.push(errorUserName);
      }
      if(isNullOrEmpty(this.password)) {
        errorPassword = 'Please enter Password';
        isValid = false;
        errorMessages.push(errorPassword);
      } else {
        if(this.password != this.confirmPassword){
          errorConfirmPassword = 'Password Mismatch';
          isValid = false;
          errorMessages.push(errorConfirmPassword);
        }
      }
      if(isNullOrEmpty(this.confirmPassword)){
        errorConfirmPassword = 'Please enter Confirm Password';
        isValid = false;
        errorMessages.push(errorConfirmPassword);
      } 
      
      this.setState({
        errorUserName: errorUserName,
        errorPassword: errorPassword,
        errorConfirmPassword: errorConfirmPassword,
        errorMessages: errorMessages
      });
      
      if(isValid){
        // 
        alert('Registration Success');
      }
      
      /*this.setState({
        errorUserName: 'Please enter UserName',
        errorPassword: 'Please enter Password',
        errorConfirmPassword: 'Password Mismatch'
      });*/
    }
    render(){
    
      var errorElements = [];
      for(var errorMessage of this.state.errorMessages){
        errorElements.push(<li>{errorMessage}</li>);
      }
      return <div>
        <h3>Using CSS to style an HTML Form</h3>
        <div>
          <label>UserName</label>
          <input type="text" id="username" name="username" placeholder="Your name.." onChange={this.onUserNameChange.bind(this)}/>
          <span class="error">{this.state.errorUserName} </span>
          <br/>
          <label>Password</label>
          <input type="text" id="password" name="password" placeholder="Your password.."  onChange={this.onPasswordChange.bind(this)}/>
          <span class="error">{this.state.errorPassword}</span>
          <br/>
          <label>Confirm Password</label>
          <input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm password.."  onChange={this.onConfirmPasswordChange.bind(this)}/>
          <span class="error">{this.state.errorConfirmPassword} </span>
          <br/>
          <br/>
          
          <input type="submit" value="Register" onClick={this.onRegister.bind(this)} />
          <ul class='warning'>
            {errorElements}
          </ul>
        </div>
      </div>
    }
  }