import React from "react";
import Button from "@material-ui/core/Button";

const Counter = (props) => (
  <div>
    <h1>{"Current value :  " + props.currentValue}</h1>
    <Button variant="contained" color="primary" onClick={props.handleIncrement}>
      Increment
    </Button>
    <Button variant="contained" onClick={props.handleReset}>
      Reset
    </Button>
    <Button variant="contained" color="secondary" onClick={props.handleDecrement}>
      Decrement
    </Button>
  </div>
);

export default Counter;
