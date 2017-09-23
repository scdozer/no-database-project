import React, { Component } from "react";
import axios from 'axios';

export default class Weather extends Component{
  constructor(){
    super();
    this.state = {
      zipCode : '',
      currentWeather: [],
      allData:[]
    }
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip=84106,us&units=imperial&APPID=cbf19a7a01a00453149ac1cfa2b14ab1').then(response => {
      this.setState({
        currentWeather: response.data.main,
        allData: response.data
      })
    })
    .catch(error =>{
      console.log('Connection error:', error)
    })
    }


  // CURRENT WEATHER
  getCurrentWeather = () => {
    let zip = this.state.zipCode;
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=cbf19a7a01a00453149ac1cfa2b14ab1').then(response => {
      console.log('yea?:', response)
      this.setState({
        currentWeather: response.data.main,
        allData: response.data
      })
    })
    .catch(error =>{
      console.log('Connection error:', error)
    })
  }


  render(){
    return(
      <div id="weather_container">
      <div className="container-fluid weather">
          <div className="row">
            <div className="col-sm-12">
              <h2>weather</h2>
              <hr></hr>
              <div className="weather_data">
                 {/*<h3>{this.state.currentWeather.data.main.temp}</h3>*/}
                 <h3>current weather in, {this.state.allData.name}</h3>
                 <h1>{this.state.currentWeather.temp} &deg;F</h1>
              </div>
              <input placeholder="zipcode" onChange={(e) => this.setState({zipCode: e.target.value})}></input>
              <button onClick={this.getCurrentWeather}>search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
