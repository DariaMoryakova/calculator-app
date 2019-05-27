// !!IMPORTANT this file contains main functionally of the app and logic 
import React from 'react';
import './Calculator.css';
import Result from '../Result/Result';
import InputOne from '../InputOne/InputOne'; 
import InputTwo from '../InputTwo/InputTwo'; 
import ComputeButton from '../ComputeButton/ComputeButton';
import Operation from '../Operation/Operation';


class Calculator extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            userInput1: 'first number',
            userInput2:"second number",
            result:"TestThree",
            operation:"add",
            calculation: 0
          }
      }
    addition() {
        this.setState({
            operation: "+"
        })
        console.log("addition! working!")
      }
    substruct() {
        this.setState({
            operation: "-"
        })
    }
    multiply() {
        this.setState({
            operation: "*"
        })
    }
    divide() {
        this.setState({
            operation: '/'
        })
    }
    exp() {
        this.setState({
            operation: '^'
        })
    }
    mod() {
        this.setState({
            operation: '%'
        })
    }
  
      handleUserInputOne(event) {
        this.setState({userInput1: event.target.value}) 
      }
      handleUserInputTwo(event) {
        this.setState({userInput2: event.target.value}) 
      }

    calculate() {
        let firstInput = this.state.userInput1;
        let secondInput = this.state.userInput2; 
        let operation = this.state.operation; 

        switch(operation) {
        case '+':
            this.setState({
                calculation: Number(firstInput) + Number(secondInput)
          });
         
        break;
  
        case '-':
            this.setState({
                calculation: Number(firstInput) - Number(secondInput)
          });
        break;

        case '*':
            this.setState({
                calculation: Number(firstInput) * Number(secondInput)
          });
        break;

        case '/':
            this.setState({
                calculation: Number(firstInput) / Number(secondInput)
          });
        break;
        
        case '^':
        this.setState({
            calculation: Number(firstInput) ^ Number(secondInput)
        });
        break;

        case '%':
        this.setState({
            calculation: Number(firstInput) % Number(secondInput)
        });
        break;

        default:
        this.setState({
            calculation: Number(firstInput) + Number(secondInput)
          });
        }
        
    }
  
    render() {
    return(
        <div className="calculatorContainer"> 
            <div className="Calculator"> 

            {/* Result will display result of calculation performed by calculator: */}
            <Result inputOne={this.state.userInput1}  inputTwo={this.state.userInput2} operation={this.state.operation} calculation={this.state.calculation} />

            <div className="first"> 
                <InputOne onChange={this.handleUserInputOne.bind(this)} value={this.state.userInput1}  /> 
                <InputTwo onChange={this.handleUserInputTwo.bind(this)} value={this.state.userInput2}  /> 
                <ComputeButton click={() => this.calculate()}  result={this.state.calculation} /> 
            </div>
        
            <div className="operationsContainer"> 
                <Operation click={() => this.addition()} choice="Operation addition height1" operation="+" /> 
                <Operation click={() => this.substruct()} choice="Operation substruct height1" operation="-" /> 
                <Operation click={() => this.multiply()} choice="Operation multiplication height2" operation="*" /> 
            </div>
            <div className="operationsContainer"> 
                <Operation  click={() => this.mod()} choice="Operation mod height1" operation="%"  /> 
                <Operation  click={() => this.divide()} choice="Operation division height1" operation="/"  />  
                <Operation  click={() => this.exp()} choice="Operation exp height2" operation="^" />  
            </div>

            </div>
        </div>
    )}
}

export default Calculator; 