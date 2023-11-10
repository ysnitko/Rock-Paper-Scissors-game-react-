import React from "react";
import "./Scissors.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentAC } from "../../redux/actions/currentAC";
import { isChoosenAC } from "../../redux/actions/choosenAC";

const Scissors = () => {
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const dispatch = useDispatch();
  return (
    <>
      {isChoosen ? (
        <button className="scissors active-scissors"></button>
      ) : (
        <button
          className="scissors"
          onClick={() => {
            dispatch(setCurrentAC("scissors"));
            dispatch(isChoosenAC(true));
          }}
        ></button>
      )}
    </>
  );
};

export default Scissors;
