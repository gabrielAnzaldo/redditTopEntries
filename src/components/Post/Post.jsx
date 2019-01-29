import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ChevronRight from '@material-ui/icons/ChevronRight';
import styles from './styles.scss';

class Post extends Component {
  onSelectPost = () => {
    const { setSelectedPost, data } = this.props;
    setSelectedPost(data);
  };

  render() {
    const { data } = this.props;
    const { thumbnail, title, author } = data;
    return (
      <Card className={styles.card} onClick={this.onSelectPost}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="Recipe"
              className={styles.avatar}
              src={thumbnail}
            >
              R
            </Avatar>
          }
          action={
            <IconButton>
              <ChevronRight />
            </IconButton>
          }
          title={author}
        />
        <CardContent>
          <Typography component="p">{title}</Typography>
        </CardContent>
        <CardActions className={styles.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <CloseIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

Post.propTypes = {
  setSelectedPost: PropTypes.func.isRequired,
  data: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Post;
