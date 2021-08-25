import React from "react";
import Button from "@material-ui/core/Button";

const Counter = (props) => (
  <div>
    <span>{"Counter_Id: " + props.id}</span>
    <h2>
      Current value : <span>{props.currentValue}</span>
    </h2>
    <Button variant="contained" color="primary" onClick={props.handleIncrement}>
      Increment
    </Button>
    <Button variant="contained" onClick={props.handleReset}>
      Reset
    </Button>
    <Button variant="contained" color="secondary" onClick={props.handleDecrement}>
      Decrement
    </Button>
    <hr />
  </div>
);

export default Counter;
