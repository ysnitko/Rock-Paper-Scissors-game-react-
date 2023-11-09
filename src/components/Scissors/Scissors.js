import React from "react";
import "./Scissors.css";
import { useSelector } from "react-redux";

const Scissors = ({ handleChoice }) => {
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  return (
    <>
      {isChoosen ? (
        <button className="scissors active-scissors"></button>
      ) : (
        <button
          className="scissors"
          onClick={() => handleChoice("scissors")}
        ></button>
      )}
    </>
  );
};

export default Scissors;
