import { IS_WIN } from '../constants';

const isWinnerReducer = (state = { isWin: '' }, { type, payload }) => {
  switch (type) {
    case IS_WIN:
      return { ...state, isWin: payload };

    default:
      return state;
  }
};

export default isWinnerReducer;
