import { IS_LOOSE } from '../constants';

const isLooseReducer = (state = { isLoose: '' }, { type, payload }) => {
  switch (type) {
    case IS_LOOSE:
      return { ...state, isWisLoosein: payload };

    default:
      return state;
  }
};

export default isLooseReducer;
