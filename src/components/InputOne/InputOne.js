import React from "react";
import "./InputOne.css";

//First user input:
const InputOne = props => {
  //   constructor = props => {
  //     super(props);
  //   };
  return (
    <div className="form-group" id="calculator-form" method="GET">
      <label> </label>
      <input
        className="InputOne"
        placeholder="Type first number"
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputOne;
