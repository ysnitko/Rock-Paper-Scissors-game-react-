import { IS_LOOSE } from '../constants';

export const isLooseAC = (payload) => {
  return {
    type: IS_LOOSE,
    payload: payload,
  };
};
