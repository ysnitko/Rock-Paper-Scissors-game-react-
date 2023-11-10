import { IS_CHOOSEN } from "../constants";

const choosenReducer = (state = { isChoosen: false }, { type, payload }) => {
  switch (type) {
    case IS_CHOOSEN:
      return { ...state, isChoosen: payload };
    default:
      return state;
  }
};

export default choosenReducer;
