import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//  good place for button would be in constructor
//  class - a diagram. constructor builds instances with actual data
class App extends Component {
  constructor (props) {
    super()
    this.state = {
      counter: 0
    }
  }
  handleClick(event) {
    this.setState({
      counter: this.state.counter +1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={'http://www.flickr.com/photos/drift-words/850446'} className="App-logo" alt="logo" />

          <h2>Hello {this.props.name}</h2>
          <h3>You are {this.props.age} years old</h3>
          <p>The initial count is {this.state.counter</p>
          <p>my favorite {this.props.person.title} was {this.props.person.nm} of {this.props.person.nation} </p>

          <p>The first count button is: {this.state.counter}</p>
          <button onClick={(event) => this.handleClick(event)}>counter </button>
        </div>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      </div>
    )
  }
}

export default App
