import React, { Component } from 'react';
import Header from './components/Header';
import Weather from './components/weather';

import './App.css';
import ToDoList from './components/ToDoList/ToDoList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="col-sm-6"><Weather /></div>
          <div className="col-sm-6"><ToDoList /></div>
        </div>
      </div>
    );
  }
}

export default App;
