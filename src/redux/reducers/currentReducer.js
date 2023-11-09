import { SET_CURRENT } from "../constants";

const currentReducer = (state = { current: "" }, { type, payload }) => {
  switch (type) {
    case SET_CURRENT:
      return { ...state, current: payload };

    default:
      return state;
  }
};

export default currentReducer;
