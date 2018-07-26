import React, { Component } from 'react';

import { STUDENTS } from '../../../data';

export default class Student extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            students: STUDENTS
        }
    }
    
    onSearch() {
    }
    
    onReset() {
    }
        
    render(){
        var students = this.state.students;
        var rows = [];
        for(var student of students){
            rows.push(<tr>
                        <td> {student.name} </td>
                        <td> {student.age} </td>
                        <td> {student.city} </td>
                    </tr>);
        }

        return <div>
            <h1>{this.props.title}</h1>
            <input type='text' placeholder='name' />
            <input type='text' placeholder='age' />
            <input type='text' placeholder='city' />
            <input type='button' value='Search' onClick={this.onSearch.bind(this)}/>
            <input type='button' value='Reset' onClick={this.onReset.bind(this)} />
            <table style={{ backgroundColor: 'yellow' }}>
                <thead>
                    <td>Name</td>
                    <td>Age</td>
                    <td>City</td>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    }
}