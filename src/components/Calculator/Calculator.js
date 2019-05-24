import React from 'react';
import './Calculator.css';
import Result from '../Result/Result';
import InputOne from '../InputOne/InputOne'; 
import InputTwo from '../InputTwo/InputTwo'; 
import ComputeButton from '../ComputeButton/ComputeButton';
import Operation from '../Operation/Operation';




const Calculator = () => {

    return(
        <div className="calculatorContainer"> 
            <div className="Calculator"> 
            <Result test1="test"> </Result>
                 <div className="first"> 
                    <InputOne value="Type first number" /> 
                    <InputTwo value="Type second number" /> 
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
    )
}

export default Calculator; 