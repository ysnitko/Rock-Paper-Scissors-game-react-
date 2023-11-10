import { COMP_CHOICE } from "../constants";

export const compChoiceAC = (payload) => {
  return {
    type: COMP_CHOICE,
    payload: payload,
  };
};
