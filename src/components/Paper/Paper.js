import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentAC } from "../../redux/actions/currentAC";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { drawScore } from "../../redux/actions/scoresAC";
import { increaseScore } from "../../redux/actions/scoresAC";
import { decreaseScore } from "../../redux/actions/scoresAC";
import { getResutl } from "../../redux/actions/resultAC";
import "./Paper.css";

const Paper = () => {
  const dispatch = useDispatch();
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const current = useSelector((store) => store?.currentReducer?.current);
  const result = useSelector((store) => store?.resultReducer?.result);
  const compChoice = useSelector(
    (store) => store?.compChoicetReducer?.compChoice
  );

  const handleResult = () => {
    if (
      current === "paper" &&
      compChoice === "stone" &&
      compChoice !== "paper"
    ) {
      dispatch(getResutl("YOU WIN"));
      dispatch(increaseScore());
    }
    if (current === compChoice) {
      dispatch(getResutl("DRAW"));
      dispatch(drawScore());
    }
    if (compChoice === "scissors") {
      dispatch(getResutl("YOU LOOSE"));
      dispatch(decreaseScore());
    }
    return result;
  };

  return (
    <div>
      {isChoosen ? (
        <button className="paper active-paper"></button>
      ) : (
        <button
          className="paper"
          onClick={() => {
            handleResult();
            dispatch(isChoosenAC(true));
            dispatch(setCurrentAC("paper"));
          }}
        ></button>
      )}
    </div>
  );
};

export default Paper;
