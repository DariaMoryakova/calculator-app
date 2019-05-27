import React from 'react';
import './InputTwo.css'; 

//Second user input: 
const InputTwo = (props) =>{
    return(
        <div className="form-group" id="calculator-form" method="GET" > 
                <label >  </label>
                <input className="InputOne" placeholder="Type second number"  onChange={props.onChange}  value={props.value} />
        </div>
    
    )
} 

export default InputTwo; 