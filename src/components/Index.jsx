import React, { Component } from 'react';
import ReactDOM, {render } from 'react-dom';

class App extends Component {
  state = {
    number: 7,
  };

  render() {
    return (
      <div>Hello JS world number {this.state.number}!</div>
    );
  }
}

render(
  <App />,
  document.getElementById('root'),
);
