import { COMP_CHOICE } from "../constants";

const compChoicetReducer = (state = { compChoice: "" }, { type, payload }) => {
  switch (type) {
    case COMP_CHOICE:
      return { ...state, compChoice: payload };

    default:
      return state;
  }
};

export default compChoicetReducer;
