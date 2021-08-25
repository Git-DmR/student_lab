import React from "react";
import Button from "@material-ui/core/Button";

const CounterManager = (props) => (
  <div>
    <h1>Counter manager.</h1>
    <h2>
      Avalible counters : <span>{props.totalCounters}</span>
    </h2>
    <Button color="primary" onClick={props.addCounter}>
      Add Counter
    </Button>
    <Button onClick={props.resetCounterManager}>Reset</Button>
    <Button color="secondary" onClick={props.removeCounter}>
      Del Counter
    </Button>
    <hr />
  </div>
);

export default CounterManager;
