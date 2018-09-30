import React, { Component } from 'react';
import './App.css';

let regEx = /(?<=g'>)(.*?)(?=<)/gmi

class SetGetter extends Component {

  constructor(){
    super()
    this.state = {
      sortedList: [],
    }
  }


  setFetch = () => {
    fetch('https://api.phish.net/v3/setlist/random?apikey=5B8686EDCD6647974F51')
    .then(response => response.json())
    .then(randomShow => {
      let setlist = randomShow.response.data[0].setlistdata.toString()
      let sortedList = setlist.match(regEx)
      this.setState({sortedList: sortedList})
      }
    )
  }

  render() {
    return (
      <div>
        <h3>come get ya sets</h3>
        <button onClick={this.setFetch}>Sets Here!</button>
        <div>{this.state.sortedList}</div>
      </div>

    );
  }


}

export default SetGetter;
