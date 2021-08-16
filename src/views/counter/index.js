import React from "react";
import Button from "@material-ui/core/Button";

const Counter = ({ handleIncrement, handleReset, handleDecrement, currentValue }) => (
  <div>
    <h1>{"Current value :  " + currentValue}</h1>
    <Button variant="contained" color="primary" onClick={handleIncrement}>
      Increment
    </Button>
    <Button variant="contained" onClick={handleReset}>
      Reset
    </Button>
    <Button variant="contained" color="secondary" onClick={handleDecrement}>
      Decrement
    </Button>
  </div>
);

export default Counter;
