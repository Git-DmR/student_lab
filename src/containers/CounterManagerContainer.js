import React from "react";
import CounterManager from "../views/counterManager/index";
import CounterContainer from "./CounterContainer";
import PropTypes from "prop-types";

class CounterManagerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCounters: 1,
      currentId: 1,
      maxId: 1,
    };
    this.addCounter = this.addCounter.bind(this);
    this.resetCounterManager = this.resetCounterManager.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
  }

  addCounter() {
    this.setState((state) => ({
      totalCounters: this.state.totalCounters + 1,
      maxId: this.state.maxId + 1,
    }));
  }

  resetCounterManager() {
    this.setState((state) => ({
      totalCounters: this.state.totalCounters ** 0,
      currentId: 1,
      maxId: 1,
    }));
  }

  removeCounter() {
    if (this.state.totalCounters > 1) {
      this.setState((state) => ({
        totalCounters: this.state.totalCounters - 1,
        currentId: this.state.currentId + 1,
      }));
    }
  }

  render() {
    const allCounters = [];

    for (var i = 0; i < this.state.totalCounters; i += 1) {
      allCounters.push(i + this.state.currentId);
    }

    const counterItems = allCounters.map((item) => <CounterContainer key={item} id={item} />);

    const props = {
      addCounter: this.addCounter,
      removeCounter: this.removeCounter,
      resetCounterManager: this.resetCounterManager,
      totalCounters: this.state.totalCounters,
    };
    return (
      <div>
        <CounterManager {...props} />
        {counterItems}
      </div>
    );
  }
}

CounterManagerContainer.propTypes = {};

export default CounterManagerContainer;
