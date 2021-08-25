import React from "react";
import Counter from "../views/counter/index";
import PropTypes from "prop-types";

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      currentValue: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((state) => ({
      currentValue: this.state.currentValue + 1,
    }));
    console.log("Counter #" + this.state.id + " has been incremented.");
  }

  handleReset() {
    this.setState((state) => ({
      currentValue: 0,
    }));
    console.log("#" + this.state.id + " Counter has been reset.");
  }

  handleDecrement() {
    this.setState((state) => ({
      currentValue: this.state.currentValue - 1,
    }));
    console.log("#" + this.state.id + " Counter has been decremented.");
  }

  componentDidMount() {
    console.log("#" + this.state.id + " Counter did mount.");
  }

  componentWillUnmount() {
    console.log("#" + this.state.id + " Counter will unmount.");
  }

  render() {
    const props = {
      handleIncrement: this.handleIncrement,
      handleReset: this.handleReset,
      handleDecrement: this.handleDecrement,
      currentValue: this.state.currentValue,
      id: this.props.id,
    };
    return <Counter {...props} />;
  }
}

CounterContainer.propTypes = {
  handleIncrement: PropTypes.func,
  handleReset: PropTypes.func,
  handleDecrement: PropTypes.func,
  currentValue: PropTypes.number,
  id: PropTypes.number,
};

export default CounterContainer;
