import { SET_FILTER } from '../actions/currentFilter';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state;
  }
}

export default filter;
