import { List } from 'immutable';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import { getTopEntries } from '../../actions';

const mapStateToProps = state => ({
  posts: state.get('topEntries', new List()).toJS(),
});

export default connect(
  mapStateToProps,
  { getTopEntries },
)(SideBar);
