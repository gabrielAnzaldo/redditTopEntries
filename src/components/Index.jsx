import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './SideBar';
import DetailPost from './DetailPost';

const App = () => (
  <Fragment>
    <SideBar />
    <DetailPost />
  </Fragment>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
