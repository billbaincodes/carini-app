import React, { Component } from 'react';
import './App.css';
import regExs from "./RegularExpressions.js"



class RandomSetGetter extends Component {

  constructor(){
    super()
    this.state = {
      sortedList: [],
    }
  }

  randomShowFormat = (randomShow) => {
    let setlist = randomShow.response.data[0].setlistdata.toString()
    let sortedList = setlist.match(regExs.setlistExpression)
    this.setState({sortedList: sortedList})
  }


  randomSetFetch = () => {
    fetch('https://api.phish.net/v3/setlist/random?apikey=')
    .then(response => response.json())
    .then(randomShow => this.randomShowFormat(randomShow))
    .catch((error) => {
      alert('there was an error', error)
    })
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
