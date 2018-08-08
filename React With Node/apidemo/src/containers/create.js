import React, { Component } from 'react';

export default class List extends React.Component{
    constructor(props){
        super(props);
    }
    onCreate(){
        var formData = new FormData();
        formData.append('userid', this.userid);
        formData.append('name', this.username);
        formData.append('city', this.city);
        formData.append('password', this.password);
        formData.append('registration', this.registration);

        fetch('https://itsea.in/api/rest_api.php', {
            method:'POST',
            body: formData
        }).then(response => {
            if(response.status == 200){
                return response.json();
            }
        }).then(responseData => {
            alert(responseData.msg);
            this.props.history.push('list');
        }).catch(error => {
            alert(error);
        });
    }
    render(){
        return (
            <div>
                Registration ID <input onChange={event => this.registration = event.target.value } />
                <br/>
                User Name <input onChange={event => this.username = event.target.value } />
                <br/>
                User ID <input onChange={event => this.userid = event.target.value } />
                <br/>
                Password <input onChange={event => this.password = event.target.value } />
                <br/>
                City <input onChange={event => this.city = event.target.value } />
                <br/>
                <input type='button' value='Create User' onClick={this.onCreate.bind(this)} />
            </div>
        );
    }
}