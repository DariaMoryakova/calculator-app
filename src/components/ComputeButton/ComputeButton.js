import React from 'react';
import './ComputeButton.css'; 

//Last button for user to press to submit for calculator to perform mathematical camputation on numbers: 
const ComputeButton = (props) =>{
    return(
        <button type="button" onClick={props.click} className="ComputeButton">
            Calculate!
        </button>
    )
} 

export default ComputeButton; 