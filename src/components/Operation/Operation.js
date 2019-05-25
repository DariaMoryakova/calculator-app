import React from "react";
import "./Operation.css";

// Operation component which is responsible of each calcular operations such as addition,mult,div and ect.
// Operation component changes it's color and camputation depending on operation performed on two numbers:
const Operation = props => {
  return (
    <button
      type="button"
      className={props.choice}
      onClick={() => props.click(props.route)}
    >
      <div className="operationText">
        <p> {props.operation} </p>
      </div>
    </button>
  );
};

export default Operation;
