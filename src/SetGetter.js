import React, { Component } from 'react';
import './App.css';

let regEx = /(?<='>)(.*?)(?=<)/g

class SetGetter extends Component {


  setFetch = () => {
    fetch('https://api.phish.net/v3/setlist/random?apikey=5B8686EDCD6647974F51')
    .then(response => response.json())
    .then(randomShow => {
      let setlist = randomShow.response.data[0].setlistdata
      setlist = setlist.toString()

      console.log(regEx.exec(setlist))
      }
    )
  }

  render() {
    return (
      <div>
        <h3>come get ya sets</h3>
        <button onClick={this.setFetch}>Sets Here!</button>
      </div>

    );
  }


}

export default SetGetter;
