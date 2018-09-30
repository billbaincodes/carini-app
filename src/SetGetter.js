import React, { Component } from 'react';
import './App.css';
import { runInThisContext } from 'vm';

let regEx = /(?<=g'>)(.*?)(?=<)/gmi
let ul = document.querySelector('ul')

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
      this.state.sortedList.map(song => {
        console.log(song)
      })
    })
  }


  render() {
    return (
      <div>
        <h3>come get ya sets</h3>
        <button onClick={this.setFetch}>Sets Here!</button>
        <ul>
          {this.state.sortedList}
        </ul>
      </div>

    );
  }


}

export default SetGetter;
