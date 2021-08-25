import React from "react";
import Button from "@material-ui/core/Button";

const CounterManager = (props) => (
  <div>
    <h1>Counter manager.</h1>
    <h2>{"Avalible counters :  " + props.totalCounters}</h2>
    <Button variant="contained" color="primary" onClick={props.addCounter}>
      Add Counter
    </Button>
    <Button variant="contained" onClick={props.resetCounterManager}>
      Reset
    </Button>
    <Button variant="contained" color="secondary" onClick={props.removeCounter}>
      Del Counter
    </Button>
    <hr />
  </div>
);

export default CounterManager;
