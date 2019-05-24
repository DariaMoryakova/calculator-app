import React from 'react';
import './Result.css';

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
