import { IS_CHOOSEN } from "../constants";

export const isChoosenAC = (payload) => {
  return {
    type: IS_CHOOSEN,
    payload: payload,
  };
};
