import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import styles from '../index.scss';

class SideBar extends Component {
  componentDidMount() {
    const { getTopEntries } = this.props;
    getTopEntries();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className={`${styles.split} ${styles.sidebar}`}>
        <ul>
          {posts &&
            posts.map(singlePost => (
              <li key={singlePost.getIn(['data', 'id'])}>
                {singlePost.getIn(['data', 'title'])}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

SideBar.propTypes = {
  getTopEntries: PropTypes.func.isRequired,
  posts: ImmutablePropTypes.list.isRequired,
};

export default SideBar;
