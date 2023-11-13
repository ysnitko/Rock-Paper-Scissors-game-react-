import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentAC } from "../../redux/actions/currentAC";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { useNavigate } from "react-router-dom";
import "./Paper.css";

const Paper = ({ handleResult }) => {
  const dispatch = useDispatch();
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const isWin = useSelector((store) => store?.isWinnerReducer?.isWin);
  const navigate = useNavigate();
  const navigateDraw = () => {
    navigate("/draw");
  };

  return (
    <div>
      {isChoosen ? (
        <button
          className={`paper active-paper ${
            isWin === "paper" ? "winner-paper" : ""
          }`}
        ></button>
      ) : (
        <button
          className="paper"
          onClick={() => {
            navigateDraw();
            dispatch(isChoosenAC(true));
            dispatch(setCurrentAC("paper"));
            handleResult("paper");
          }}
        ></button>
      )}
    </div>
  );
};

export default Paper;
