import React from 'react';
import PropTypes from 'prop-types';

const PostContent = ({ match }) => <div>this is a test {match.params.id}</div>;

PostContent.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default PostContent;
