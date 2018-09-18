import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import Post from '../Post';
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
        {posts &&
          posts.map(singlePost => (
            <Post
              key={singlePost.getIn('data', 'id')}
              data={singlePost.get('data')}
            />
          ))}
      </div>
    );
  }
}

SideBar.propTypes = {
  getTopEntries: PropTypes.func.isRequired,
  posts: ImmutablePropTypes.list.isRequired,
};

export default SideBar;
