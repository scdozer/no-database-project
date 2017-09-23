import React, { Component } from 'react';
import axios from 'axios';

export default class ToDoListForm extends Component {
  constructor() {
    super();

    this.state = {
      toDos: {
        location: '',
        type: '',
        days: '',
        imageUrl: '',
        description: ''
      }
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newToDo = Object.assign({}, this.state.toDos);
    newToDo[name] = value;

    this.setState({
      toDos: newToDo
    })
  }

  handleSubmit = () => {
    axios.post('http://localhost:8777/packages', this.state.toDos).then(response => {
      console.log('response', response);
      this.props.updateParentList(response.data);
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-4">
            <input
              name="content"
              value={this.state.toDos.content}
              placeholder="content"
              onChange={this.handleChange}/>
          </div>
          <div className="col-xs-4">
            <input
              name="dueDate"
              value={this.state.toDos.dueDate}
              placeholder="due date"
              onChange={this.handleChange}/>
          </div>
          <div className="col-xs-4">
            <button onClick={this.handleSubmit}>add to do</button>
          </div>
        </div>
      </div>
    )
  }
}
