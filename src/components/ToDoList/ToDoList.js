import React, { Component } from 'react';
import axios from 'axios';

import ToDoListForm from './ToDoListForm';
import ToDoListList from './ToDoListList';

export default class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      toDos: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8777/packages').then(response => {
      this.setState({
        toDos: response.data
      })
    })
  }

  updateList = (individualToDo) => {
    this.setState({
      toDos: individualToDo
    })
  }

  completeToDo = (index) => {
    axios.delete(`http://localhost:8777/packages/${index}`).then(response => {
      this.setState({
        toDos: response.data
      })
    })
  }


  render() {
    return (
      <div>
        <div className="container-fluid todoList">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>shit to do</h2>
              <hr></hr>
              <ToDoListForm updateParentList={this.updateList}/>
              <hr></hr>
              <ToDoListList individualToDo={this.state.toDos} completeToDo={this.completeToDo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
