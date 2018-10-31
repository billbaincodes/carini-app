import React, { Component } from 'react';
import './App.css';
import RandomSetGetter from './RandomSetGetter';
import GetSetByDate from './GetSetByDate';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Makisupa SetTool 🎸</h2>
        <h4>Setlists come to your house, use the buttons to obtain a random or dated set list</h4>
        <div className="buttonContainer">
          <RandomSetGetter /> 
          <GetSetByDate />
        </div>
      </div>
    );
  }
}

export default App;
