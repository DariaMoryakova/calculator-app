import React, { Component } from 'react';
import './App.css';
import Calculator from '../components/Calculator/Calculator';
import Result from '../components/Result/Result'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInput1: 'testOne',
        userInput2:"testTwo",
        result:"TestThree"
      }
}



  render() {
    
  return (
    <div className="App">
      <Calculator > </Calculator>
    </div>
  )}
}

export default App;
