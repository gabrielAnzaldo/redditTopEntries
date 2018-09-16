import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    number: 7,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        hello JS world
        {' '}
        {number}
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root'),
);
