import React, { Component } from 'react';
import './App.css';
import RandomSetGetter from './RandomSetGetter';
import GetSetByDate from './GetSetByDate';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Makisupa SetTool</h2>
        <h4>Setlists come to your house, use the buttons to obtain a random or dated set list. CORS required.</h4>
        <li>
          <ul>
            <li>Lyia Tiefling</li>
            <li>Neero Triton</li>
            <li>Amanda</li>
            <li>Tweezer -> Death Don't Hurt Very Long ->  Tweezer</li>
          </ul>
        </li>
        <div className="buttonContainer">
          <RandomSetGetter /> 
          <GetSetByDate />
        </div>
      </div>
    );
  }
}

export default App;
