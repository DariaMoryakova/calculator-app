// !!IMPORTANT this file contains main functionally of the app and logic
import React from "react";
import "./Calculator.css";
import Result from "../Result/Result";
import Input from "../InputOne/InputOne";
import ComputeButton from "../ComputeButton/ComputeButton";
import Operation from "../Operation/Operation";
import api from "../../utils/api";
import ops from "../../operations.json";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
    this.handleInputOne = this.handleInputOne.bind(this);
    this.handleInputTwo = this.handleInputTwo.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
  }
  ops1 = ops.slice(0, 3);
  ops2 = ops.slice(3);

  handleMap = x => {
    return (
      <Operation
        choice={x.choice}
        operation={x.operation}
        route={x.route}
        click={this.handleOperator}
        selected={this.state.operation}
        key={x.operation}
      />
    );
  };

  handleOperator = x => {
    this.setState({ operation: x });
  };

  handleInputOne = e => {
    this.setState({
      x: e.target.value
    });
  };

  handleInputTwo = e => {
    this.setState({
      y: e.target.value
    });
  };

  handleApiCall = (operator, x, y) => {
    api
      .callProxy(operator, x, y)
      .then(res => {
        this.setState({ result: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="calculatorContainer">
        <div className="Calculator">
          {/* Result will display result of calculation performed by calculator: */}
          <Result value={this.state.result} />
          <div className="first">
            {/* First user input: */}
            <Input onChange={this.handleInputOne} placeholder="First Value" />
            {/* Second user input: */}
            <Input onChange={this.handleInputTwo} placeholder="Second Value" />
            {/* ComputeButton is basically submit button: */}
            <ComputeButton
              status={this.state}
              handleClick={this.handleApiCall}
            />
          </div>

          <div className="operationsContainer">
            {this.ops1.map(this.handleMap)}
          </div>
          <div className="operationsContainer">
            {this.ops2.map(this.handleMap)}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
