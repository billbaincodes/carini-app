import React, { Component } from 'react';
import './App.css';
import RandomSetGetter from './RandomSetGetter';
// import sampleSet from './sampleSet'
import GetSetByDate from './GetSetByDate';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Carini had a lumpy head</h3>
        <h3>come get ya sets</h3>
        <RandomSetGetter /> 
        <GetSetByDate />
      </div>
    );
  }
}

export default App;
