import React from 'react';
import './InputOne.css'; 

const InputOne = (props) =>{
    return(
        <div className="form-group" id="calculator-form" method="GET" > 
           <label >  </label>
            <input className="InputOne" placeholder="Type first number" />
        </div>
    )
} 

export default InputOne; 