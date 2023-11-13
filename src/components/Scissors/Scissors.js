import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentAC } from "../../redux/actions/currentAC";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { useNavigate } from "react-router-dom";
import "./Scissors.css";

const Scissors = ({ handleResult }) => {
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isWin = useSelector((store) => store?.isWinnerReducer?.isWin);
  const navigateDraw = () => {
    navigate("/draw");
  };

  return (
    <>
      {isChoosen ? (
        <button
          className={`scissors active-scissors ${
            isWin === "scissors" ? "winner-scissors" : ""
          }`}
        ></button>
      ) : (
        <button
          className="scissors"
          onClick={() => {
            navigateDraw();
            dispatch(isChoosenAC(true));
            dispatch(setCurrentAC("scissors"));
            handleResult("scissors");
          }}
        ></button>
      )}
    </>
  );
};

export default Scissors;
