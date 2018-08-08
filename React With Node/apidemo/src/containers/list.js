import React, { Component } from 'react';

import 'react-table/react-table.css';
import ReactTable from 'react-table'

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[]
        };
    }
    componentDidMount(){
        var formData = new FormData();
        formData.append('getlist', '1');
        fetch('https://itsea.in/api/rest_api.php', {
            method:'POST',
            body: formData
        }).then(response => {
            if(response.status == 200){
                return response.json();
            }
        }).then(responseData => {
            this.setState({
                users: responseData.list
            })
        }).catch(error => {
            alert(error);
        });
    }
    render(){
        const columns = [{
            Header: 'ID',
            accessor: 'id'
          },{
            Header: 'Name',
            accessor: 'name'
          },{
            Header: 'UserId',
            accessor: 'userid'
          },{
            Header: 'City',
            accessor: 'city'
          }]
        
          
        return (
            <ReactTable
                data={this.state.users}
                columns={columns}
            />
        );
    }
}