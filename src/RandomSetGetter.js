import React, { Component } from 'react';
import './App.css';

let randomShowExpression = /(?<=g'>)(.*?)(?=<)/gmi

class RandomSetGetter extends Component {

  constructor(){
    super()
    this.state = {
      sortedList: [],
    }
  }

  randomShowFormat = (randomShow) => {
    let setlist = randomShow.response.data[0].setlistdata.toString()
    let sortedList = setlist.match(randomShowExpression)
    this.setState({sortedList: sortedList})
  }


  randomSetFetch = () => {
    fetch('https://api.phish.net/v3/setlist/random?apikey=5B8686EDCD6647974F51')
    .then(response => response.json())
    .then(randomShow => this.randomShowFormat(randomShow))
  }


  render() {
    return (
      <div>
        <button onClick={this.randomSetFetch}>Random Set</button>
        {this.state.sortedList.map(song => <p>{song}</p>)}
      </div>

    );
  }


}

export default RandomSetGetter;
