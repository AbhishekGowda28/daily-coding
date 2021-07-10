import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="counter">The Count is {this.state.counter}</h1>
        <button className="increment" onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Increment Counter</button>
        <button className="decrement" onClick={() => { if (this.state.counter) { this.setState({ counter: this.state.counter - 1 }) } }}>Decrement Counter</button>
        <div className={this.state.counter ? 'error-msg-inactive' : 'error-msg-active'}>Counter cannot go below Zero</div>
      </div>
    );
  }
}

export default App;
