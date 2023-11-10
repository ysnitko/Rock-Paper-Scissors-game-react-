import { SET_CURRENT } from "../constants";

export const setCurrentAC = (payload) => {
  return {
    type: SET_CURRENT,
    payload: payload,
  };
};
