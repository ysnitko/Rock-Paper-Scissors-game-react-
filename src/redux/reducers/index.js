import { combineReducers } from "redux";
import scoresReducer from "./scoresReducer";
import choosenReducer from "./choosenReducer";
import currentReducer from "./currentReducer";

const reducer = combineReducers({
  scoresReducer,
  choosenReducer,
  currentReducer,
});

export default reducer;
