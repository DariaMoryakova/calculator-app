import React from 'react';
import './Result.css';

// Result display will show the result of mathematical camputation ones performed by calculator: 
const Result = (props) => {
    return (
        <div  className="resultContainer"> 
            <div className="Result">
                <p> {props.test1} </p>
            </div>
        </div> 
    )
} 

export default Result; 
