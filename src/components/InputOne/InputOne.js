import React from 'react';
import './InputOne.css'; 

//First user input: 
const InputOne = (props) =>{
    return(
        <div className="form-group" id="calculator-form" method="GET" > 
           <label >  </label>
            <input className="InputOne" placeholder="Type first number" onChange={props.onChange}  value={props.value} />
        </div>
    )
} 

export default InputOne; 