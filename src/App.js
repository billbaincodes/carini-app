import React, { Component } from 'react';
import './App.css';
import RandomSetGetter from './RandomSetGetter';
// import sampleSet from './sampleSet'
import GetSetByDate from './GetSetByDate';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Makisupa Set Tool</h2>
        <h3>come get ya sets</h3>
        <div className="buttonContainer">
          <RandomSetGetter /> 
          <GetSetByDate />
        </div>
      </div>
    );
  }
}

export default App;
