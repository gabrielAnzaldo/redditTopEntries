import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const DetailPost = ({ match }) => {
  const { id } = match.params;
  return (
    <div className={`${styles.split} ${styles.container}`}>
      content id: {``}
      {id}
    </div>
  );
};

DetailPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default DetailPost;
