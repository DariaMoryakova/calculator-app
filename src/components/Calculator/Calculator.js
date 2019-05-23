import React from 'react';
import './Calculator.css';
import Result from '../Result/Result';
import InputOne from '../InputOne/InputOne'; 
import InputTwo from '../InputTwo/InputTwo'; 

const Calculator = () => {
    
    return(
        <div class="calculatorContainer"> 
            <div class="Calculator"> 
                <p>  </p>
                <Result> </Result>
                <InputOne/> 
                <InputTwo/> 
            </div>
        </div>
    )
}

export default Calculator; 