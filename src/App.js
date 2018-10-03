import React, { Component } from 'react';
import './App.css';
import RandomSetGetter from './RandomSetGetter';
import GetSetByDate from './GetSetByDate';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Makisupa Set Tool</h2>
        <h4>Setlist come to your house</h4>
        <div className="buttonContainer">
          <RandomSetGetter /> 
          <GetSetByDate />
        </div>
      </div>
    );
  }
}

export default App;
