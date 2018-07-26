import React, { Component } from 'react';
import MasterPage from '../../components/masterpage';

export default class Home extends React.Component {
    render(){
        var title = "Portal Demo";
        return <MasterPage title={title}>
                <h1>This is Home Screen</h1>
            </MasterPage>
    }
}
 