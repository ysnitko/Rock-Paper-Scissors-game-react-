import { combineReducers } from "redux";
import scoresReducer from "./scoresReducer";
import choosenReducer from "./choosenReducer";
import currentReducer from "./currentReducer";
import resultReducer from "./resultReducer";
import compChoicetReducer from "./compChoiceReducer";

const reducer = combineReducers({
  scoresReducer,
  choosenReducer,
  currentReducer,
  resultReducer,
  compChoicetReducer,
});

export default reducer;
