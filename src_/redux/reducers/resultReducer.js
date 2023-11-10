import { GET_RESULT } from '../constants';

const resultReducer = (state = { result: '' }, { type, payload }) => {
  switch (type) {
    case GET_RESULT:
      return { ...state, result: payload };
    default:
      return state;
  }
};

export default resultReducer;
