import React from 'react';
import './Operation.css'; 

const Operation = (props) => {
    
    return(
       
        <button type="button" className={props.choice} >
           <div className="operationText"> 
                <p> {props.operation} </p>
            </div>
        </button>
    )
} 

export default Operation; 