import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './index.scss';

class App extends Component {
  state = {
    number: 7,
  };

  render() {
    const { number } = this.state;
    return <div className={styles.container}>hello JS world {number}</div>;
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
