import React from "react";
import "./Operation.css";

// Operation component which is responsible of each calcular operations such as addition,mult,div and ect.
// Operation component changes it's color and camputation depending on operation performed on two numbers:
const Operation = props => {
  const selectedClass = props.choice.replace("Operation", "selected");
  return (
    <div>
      {props.selected === props.route ? (
        <button
          type="button"
          className={selectedClass}
          onClick={() => props.click(props.route)}
        >
          <div className="operationText">
            <p> {props.operation} </p>
          </div>
        </button>
      ) : (
        <button
          type="button"
          className={props.choice}
          onClick={() => props.click(props.route)}
        >
          <div className="operationText">
            <p> {props.operation} </p>
          </div>
        </button>
      )}
    </div>
  );
};
export default Operation;
