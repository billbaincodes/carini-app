import React, { Component } from 'react';
import './App.css';
import regExs from "./RegularExpressions.js"

let baseURL = "https://api.phish.net/v3/setlists/get?apikey=5B8686EDCD6647974F51&showdate="


class GetSetByDate extends Component {

  constructor(){
    super()
    this.state = {
      showDate: [],
      validDate: 'Invalid Date',
      setOnDate: [],
    }
    this.dateUpdater = this.dateUpdater.bind(this)
  }

  setByDateFormat = (setOnDate) => {
    let setlist = setOnDate.response.data[0].setlistdata.toString()
    let sortedList = setlist.match(regExs.setlistExpression)
    this.setState({setOnDate: sortedList})
    console.log(this.state.setOnDate)
  }


  setByDateFetch = () => {
    fetch(baseURL + this.state.showDate)
    .then(response => response.json())
    .then(setOnDate => this.setByDateFormat(setOnDate))
    .catch((error) => {
      alert('bad date')
    console.log(error)
    })
  }

  dateValidator = () => {
    if (regExs.dateExpression.test(this.state.showDate)) {
      this.setState({validDate: 'Valid Date!'})
    }
    else {
      this.setState({validDate: 'Invalid Date'})
    }
  }

  dateUpdater = (e) => {
    e.preventDefault()
    this.setState({showDate: e.target.value}, this.dateValidator)
    console.log(this.state.showDate);
    
  }

  render() {
    return(
      <div>
        <button onClick={this.setByDateFetch}>Get Set by a specific Date</button> 
        <input onChange={this.dateUpdater} type="text" name="date" placeholder="yyyy-mm-dd"/>
        <p>{this.state.validDate}: {this.state.showDate}</p>
        {this.state.setOnDate.map(song => <p>{song}</p>)}
      </div>
    )
  }




}

export default GetSetByDate;
