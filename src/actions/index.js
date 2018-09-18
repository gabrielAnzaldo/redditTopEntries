import { GET_TOP_ENTRIES } from '../constants';
import redditService from '../service';

export const setTopEntries = entriesData => ({
  type: GET_TOP_ENTRIES,
  entriesData,
});

export const getTopEntries = () => dispatch =>
  redditService().then(data => dispatch(setTopEntries(data)));
