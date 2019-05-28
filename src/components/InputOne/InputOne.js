import React from "react";
import "./InputOne.css";

//First user input:
const InputOne = props => {
  return (
    <div className="form-group" id="calculator-form" method="GET">
      <label> </label>
      <input
        className="InputOne"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputOne;
