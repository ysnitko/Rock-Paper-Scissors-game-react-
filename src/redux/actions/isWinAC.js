import { IS_WIN } from '../constants';

export const isWintAC = (payload) => {
  return {
    type: IS_WIN,
    payload: payload,
  };
};
