import React, { Component } from 'react';
import './App.css';

let dateExpression = /\d{2}[/|-]\d{2}[/|-]\d{4}/


class GetSetByDate extends Component {

  constructor(){
    super()
    this.state = {
      showDate: undefined,
      validDate: 'Invalid Date'
    }
    this.dateUpdater = this.dateUpdater.bind(this)
  }

  // setByDateFormat = (randomShow) => {
  //   let setlist = randomShow.response.data[0].setlistdata.toString()
  //   let sortedList = setlist.match(randomShowExpression)
  //   this.setState({sortedList: sortedList})
  // }


  setByDateFetch = () => {
    fetch('https://api.phish.net/v3/setlist/random?apikey=5B8686EDCD6647974F51')
    .then(response => response.json())
    .then(randomShow => this.setByDateFormat(randomShow))
  }

  dateValidator = () => {
    if (dateExpression.test(this.state.showDate)) {
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
        <button>Get Set by Date</button> 
        <input onChange={this.dateUpdater} type="text" name="date" placeholder="mm-dd-yyyy"/>
        <p>{this.state.validDate}: {this.state.showDate}</p>
      </div>
    )
  }




}

export default GetSetByDate;
