import React, { Component } from 'react';

export default class Header extends React.Component {
    render(){
        return <div>{this.props.title} Header</div>;
    }
}