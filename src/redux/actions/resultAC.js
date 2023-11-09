import { GET_RESULT } from '../constants';

export const getResutl = (payload) => {
  return {
    type: GET_RESULT,
    payload: payload,
  };
};
