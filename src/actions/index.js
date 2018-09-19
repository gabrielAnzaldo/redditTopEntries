import { GET_TOP_ENTRIES, SET_SELECTED_POST } from '../constants';
import redditService from '../service';

export const setTopEntries = entriesData => ({
  type: GET_TOP_ENTRIES,
  entriesData,
});

export const setSelectedPost = selectedPost => ({
  type: SET_SELECTED_POST,
  selectedPost,
});

export const getTopEntries = () => dispatch =>
  redditService().then(data => dispatch(setTopEntries(data)));
