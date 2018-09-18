import { Map, fromJS } from 'immutable';
import { GET_TOP_ENTRIES } from '../constants';

export default (state = new Map(), action) => {
  switch (action.type) {
    case GET_TOP_ENTRIES:
      return state.set('topEntries', fromJS(action.entriesData));
    default:
      return state;
  }
};
