import React from 'react';
import './Result.css';

// Result display will show the result of mathematical camputation ones performed by calculator: 
const Result = (props) => {
    return (
        <div  className="resultContainer"> 
            <div className="Result">
                <p> {props.inputOne} {props.operation} {props.inputTwo} = {props.calculation}  </p>
            </div>
        </div> 
    )
} 

export default Result; 
