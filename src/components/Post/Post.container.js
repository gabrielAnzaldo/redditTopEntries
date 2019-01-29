import { connect } from 'react-redux';
import Post from './Post';
import { setSelectedPost } from '../../actions';

export default connect(
  null,
  { setSelectedPost },
)(Post);
