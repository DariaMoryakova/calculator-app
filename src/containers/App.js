import React, { Component } from "react";
import "./App.css";
import Calculator from "../components/Calculator/Calculator";
import Result from "../components/Result/Result";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator> </Calculator>
      </div>
    );
  }
}

export default App;
