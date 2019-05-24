import React, { Component } from 'react';
import './App.css';
import Calculator from '../components/Calculator/Calculator';
import Result from '../components/Result/Result'; 

class App extends Component {
  constructor() {
    super();
    this.addition = this.addition.bind(this);
    this.state = {
        userInput1: 'testOne',
        userInput2:"testTwo",
        result:"TestThree"
      }
}

addition = () => {
  this.setState({
          result: "addition test"
      })
      console.log("working! working!")
}

  render() {
    
  return (
    <div className="App">
      <Calculator> </Calculator>
    </div>
  )}
}

export default App;
