import React, { Component } from 'react';
import Moment from 'moment';

export default class Header extends Component{
  render(){
    return(
    <header className="container-fluid">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1>{Moment().format('LLLL')}</h1>
        </div>
      </div>
    </header>
    ) 
  }
}
