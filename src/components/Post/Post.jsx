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
  test = () => 34;

  render() {
    const { thumbnail, title, author } = this.props;
    return (
      <Card className={styles.card}>
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
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Post;
