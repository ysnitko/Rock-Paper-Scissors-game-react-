import React from "react";
import { useSelector } from "react-redux";
import Stone from "../Stone/Stone";
import Scissors from "../Scissors/Scissors";
import Paper from "../Paper/Paper";

const Computer = () => {
  console.log("render compchoice");
  const compChoice = useSelector(
    (store) => store?.compChoicetReducer?.compChoice
  );
  console.log(compChoice);

  return (
    <div className="picked-turn">
      <span className="picked-text">THE HOUSE PICKED</span>
      {compChoice === "stone" ? (
        <Stone />
      ) : "" || compChoice === "scissors" ? (
        <Scissors />
      ) : "" || compChoice === "paper" ? (
        <Paper />
      ) : (
        ""
      )}
    </div>
  );
};

export default Computer;
