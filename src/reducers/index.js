import { Map, fromJS } from 'immutable';
import { GET_TOP_ENTRIES, SET_SELECTED_POST } from '../constants';

export default (state = new Map(), action) => {
  switch (action.type) {
    case GET_TOP_ENTRIES:
      return state.setIn(['topEntries'], fromJS(action.entriesData));
    case SET_SELECTED_POST:
      return state.setIn(['selectedPost'], fromJS(action.selectedPost));
    default:
      return state;
  }
};
