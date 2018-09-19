import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Route, Link } from 'react-router-dom';
import Post from '../Post';
import PostContent from '../PostContent';
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
            <ListItem key={singlePost.data.id} button>
              <Link
                to={`/${singlePost.data.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Post {...singlePost.data} />
              </Link>
              <Divider />
            </ListItem>
          ))}
        <Route path="/:id" component={PostContent} />
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
