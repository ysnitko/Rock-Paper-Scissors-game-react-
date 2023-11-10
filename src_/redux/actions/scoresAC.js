import { INCREASE_SCORE, DECREASE_SCORE, DRAW_SCORE } from "../constants";

export const increaseScore = () => {
  return {
    type: INCREASE_SCORE,
  };
};

export const decreaseScore = () => {
  return {
    type: DECREASE_SCORE,
  };
};

export const drawScore = () => {
  return {
    type: DRAW_SCORE,
  };
};
