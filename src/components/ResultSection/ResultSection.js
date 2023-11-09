import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawScore } from "../../redux/actions/scoresAC";
import { increaseScore } from "../../redux/actions/scoresAC";
import { decreaseScore } from "../../redux/actions/scoresAC";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { setCurrentAC } from "../../redux/actions/currentAC";
import "./ResultSection.css";

const ResultSection = ({ getCompChoice }) => {
  console.log("render ResultSection");
  const dispatch = useDispatch();
  const current = useSelector((store) => store?.currentReducer?.current);

  const handleResult = () => {
    let result = "";

    if (
      (current === "paper" &&
        getCompChoice === "stone" &&
        getCompChoice !== "paper") ||
      (current === "stone" &&
        getCompChoice === "scissors" &&
        getCompChoice !== "stone") ||
      (current === "scissors" &&
        getCompChoice === "paper" &&
        getCompChoice !== "scissors")
    ) {
      result = "YOU WIN";
      dispatch(increaseScore());
    } else if (current === getCompChoice) {
      result = "DRAW";
      dispatch(drawScore());
    } else {
      dispatch(decreaseScore());
      result = "YOU LOOSE";
    }
    return result;
  };

  let scoreRes = handleResult();

  const handleReset = () => {
    dispatch(isChoosenAC(false));
    dispatch(setCurrentAC(""));
    scoreRes = "";
  };

  return (
    <div className="draw-result">
      <span>{scoreRes}</span>
      <button className="play-again" onClick={handleReset}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default ResultSection;
