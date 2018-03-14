import { combineReducers } from 'redux';
import notes from './notes';
import nextId from './nextId';
import filter from './currentFilter';


const rootReducer = combineReducers({
  notes,
  nextId,
  filter,
})

export default rootReducer;
