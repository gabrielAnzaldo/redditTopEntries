import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
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
            <ListItem button>
              <Post key={singlePost.data.id} {...singlePost.data} />
              <Divider />
            </ListItem>
          ))}
      </div>
    );
  }
}

SideBar.propTypes = {
  getTopEntries: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default SideBar;
