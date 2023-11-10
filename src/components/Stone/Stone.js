import React from "react";
import "./Stone.css";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentAC } from "../../redux/actions/currentAC";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { drawScore } from "../../redux/actions/scoresAC";
import { increaseScore } from "../../redux/actions/scoresAC";
import { decreaseScore } from "../../redux/actions/scoresAC";
import { getResutl } from "../../redux/actions/resultAC";
const Stone = () => {
  const dispatch = useDispatch();
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const current = useSelector((store) => store?.currentReducer?.current);
  const result = useSelector((store) => store?.resultReducer?.result);
  const compChoice = useSelector(
    (store) => store?.compChoicetReducer?.compChoice
  );
  const handleResult = () => {
    if (
      (current === "paper" &&
        compChoice === "stone" &&
        compChoice !== "paper") ||
      (current === "stone" &&
        compChoice === "scissors" &&
        compChoice !== "stone") ||
      (current === "scissors" &&
        compChoice === "paper" &&
        compChoice !== "scissors")
    ) {
      dispatch(getResutl("YOU WIN"));
      dispatch(increaseScore());
    }
    if (current === compChoice) {
      dispatch(getResutl("DRAW"));
      dispatch(drawScore());
    } else {
      dispatch(getResutl("YOU LOOSE"));
      dispatch(decreaseScore());
    }
    return result;
  };
  return (
    <>
      {isChoosen ? (
        <button className="stone active-stone"></button>
      ) : (
        <button
          className="stone"
          onClick={() => {
            dispatch(setCurrentAC("stone"));
            dispatch(isChoosenAC(true));
            handleResult();
          }}
        ></button>
      )}
    </>
  );
};

export default Stone;
