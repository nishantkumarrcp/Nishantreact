import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Survey1 extends Component {
    render() {
        const data = [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
        }, {
            name: 'Prakash Kumar',
            age: 30,
            friend:{
                name: 'Deepthi'
            }
        }]
       
        const columns = [{
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
        }, {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <span style={{ color: 'blue'}}>{props.value}</span> // Custom cell components!
        }, {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name // Custom value accessors!
        }, {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age'
        }]
       
        return <ReactTable
          data={data}
          columns={columns}
        />;
      }
}

class Survey2 extends Component {
    render() {
        const data = [
            { name: 'Prakash', rating: 4, overall: 'Good' }, 
            { name: 'Preethi', rating: 3, overall: 'Good' }, 
            { name: 'Rakesh', rating: 4, overall: 'Excellent' }, 
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' },
            { name: 'Venkat', rating: 5, overall: 'Good' }
        ]
       
        const columns = [
            { Header: 'User', accessor: 'name'},
            { Header: 'Rating', accessor: 'rating'},
            { Header: 'Overall Experience', accessor: 'overall'}
        ]

        return <ReactTable
          data={data}
          columns={columns}
          showPagination = {true}
          defaultPageSize = {5}
          showPaginationTop = {true}
          pageSizeOptions = {[5, 10, 20]}
        />;
      }
}

export default Survey2;