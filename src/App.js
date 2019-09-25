import React, {Component} from 'react';
import './App.css';

class App extends Component {
  warning = null;

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  onDecrementhandler = () => {
    if (this.state.counter !== 0) {
      this.setState({counter: this.state.counter - 1})
      this.warning = null;
    } else {
      this.warning = <h1 data-test="warning-msg">The counter can't go below 0</h1>
      this.forceUpdate();
    }
  }

  onIncrementHandler = () => {
    this.setState({counter: this.state.counter + 1});
    if (this.warning) {
      this.warning = null;
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button
        onClick={this.onIncrementHandler}
        data-test="increment-button">Increment counter</button>
        <button 
        data-test="decrement-button"
        onClick={this.onDecrementhandler}>Decrement button</button>
        {this.warning}
      </div>
    );
  }

}

export default App;
