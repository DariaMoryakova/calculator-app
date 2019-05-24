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
            userInput1: 'testOne',
            userInput2:"testTwo",
            result:"TestThree",
            operation:"addition"
          }
      }
      addition() {
        this.setState({
            operation: "addition"
        })
        console.log("addition! working!")
        console.log(this.state.userInput1);
      }
      //test function:
      handleInputOne(e) {
        this.setState({ 
            userInput1: e.target.value 
        })
      }
    render() {
    return(
        <div className="calculatorContainer"> 
            <div className="Calculator"> 
            
            {/* Result will display result of calculation performed by calculator: */}
            <Result test1="test"> </Result>

                 <div className="first"> 
                    {/* First user input: */}
                    <InputOne value={this.state.userInput1}  onChange={this.handleInputOne} /> 
                    {/* Second user input: */}
                    <InputTwo /> 
                    {/* ComputeButton is basically submit button: */}
                    <ComputeButton/> 
                </div>
        
                <div className="operationsContainer"> 
                    <Operation click={() => this.addition()} choice="Operation addition height1" operation="+" /> 
                    <Operation click={() => this.substruct()} choice="Operation substruct height1" operation="-" /> 
                    <Operation click={() => this.multiplication()} choice="Operation multiplication height2" operation="*" /> 
                </div>
                <div className="operationsContainer"> 
                    <Operation  click={() => this.mod()} choice="Operation mod height1" operation="%"  /> 
                    <Operation  click={() => this.exp()} choice="Operation division height1" operation="/"  />  
                    <Operation  click={() => this.exp()} choice="Operation exp height2" operation="^" />  
                </div>

            </div>
        </div>
    )}
}

export default Calculator; 