import { combineReducers } from 'redux';
import scoresReducer from './scoresReducer';
import choosenReducer from './choosenReducer';
import currentReducer from './currentReducer';
import resultReducer from './resultReducer';

const reducer = combineReducers({
  scoresReducer,
  choosenReducer,
  currentReducer,
  resultReducer,
});

export default reducer;
