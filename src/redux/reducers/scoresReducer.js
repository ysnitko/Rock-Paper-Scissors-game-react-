import { INCREASE_SCORE, DECREASE_SCORE, DRAW_SCORE } from "../constants";

const scoresReducer = (state = { score: 0 }, { type }) => {
  switch (type) {
    case INCREASE_SCORE:
      return { ...state, score: state.score + 1 };
    case DECREASE_SCORE:
      return { ...state, score: state.score - 1 };
    case DRAW_SCORE:
      return { ...state, score: state.score };
    default:
      return state;
  }
};

export default scoresReducer;
