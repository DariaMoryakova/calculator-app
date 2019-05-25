import React from "react";
import "./ComputeButton.css";

//Last button for user to press to submit for calculator to perform mathematical camputation on numbers:
const ComputeButton = props => {
  return (
    <button
      type="button"
      className="ComputeButton"
      onClick={() =>
        props.handleClick(
          props.status.operation,
          props.status.x,
          props.status.y
        )
      }
    >
      Calculate!
    </button>
  );
};

export default ComputeButton;
