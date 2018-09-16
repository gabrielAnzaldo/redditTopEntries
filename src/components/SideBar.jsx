import React, { Component } from 'react';
import styles from './index.scss';
import redditService from '../service';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    redditService().then(data => this.setState({ posts: data }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className={`${styles.split} ${styles.sidebar}`}>
        <ul>
          {posts.map(singlePost => (
            <li key={singlePost.data.id}>{singlePost.data.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SideBar;
