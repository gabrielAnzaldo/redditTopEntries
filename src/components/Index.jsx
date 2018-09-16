import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './index.scss';

class App extends Component {
  state = {
    number: 7,
  };

  render() {
    const { number } = this.state;
    return (
      <Fragment>
        <div className={`${styles.split} ${styles.sidebar}`}>
          sidebar {number}
        </div>
        <div className={`${styles.split} ${styles.container}`}>content</div>
      </Fragment>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
