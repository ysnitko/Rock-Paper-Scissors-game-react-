import { combineReducers } from 'redux';
import scoresReducer from './scoresReducer';
import choosenReducer from './choosenReducer';
import currentReducer from './currentReducer';
import resultReducer from './resultReducer';
import compChoicetReducer from './compChoiceReducer';
import isWinnerReducer from './isWinReducer';
import isLooseReducer from './isLooseReducer';

const reducer = combineReducers({
  scoresReducer,
  choosenReducer,
  currentReducer,
  resultReducer,
  compChoicetReducer,
  isWinnerReducer,
  isLooseReducer,
});

export default reducer;
