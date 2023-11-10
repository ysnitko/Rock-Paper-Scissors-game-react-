import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Stone from "../Stone/Stone";
import Scissors from "../Scissors/Scissors";
import Paper from "../Paper/Paper";

const Player = () => {
  const current = useSelector((store) => store?.currentReducer?.current);
  console.log("render player");

  return (
    <div className="picked-turn">
      <span className="picked-text">YOU PICKED</span>
      {current === "paper" ? (
        <Paper />
      ) : "" || current === "stone" ? (
        <Stone />
      ) : "" || current === "scissors" ? (
        <Scissors />
      ) : (
        ""
      )}
    </div>
  );
};

export default Player;
