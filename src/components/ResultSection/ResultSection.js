import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { setCurrentAC } from "../../redux/actions/currentAC";
import { compChoiceAC } from "../../redux/actions/compChoiceAC";
import { getResutl } from "../../redux/actions/resultAC";
import { isWintAC } from "../../redux/actions/isWinAC";
import { isLooseAC } from "../../redux/actions/isLooseAC";
import { useNavigate } from "react-router-dom";
import "./ResultSection.css";

const ResultSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const result = useSelector((store) => store?.resultReducer?.result);
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="draw-result">
      <span>{result}</span>
      <button
        className="play-again"
        onClick={() => {
          dispatch(isChoosenAC(false));
          dispatch(setCurrentAC(""));
          dispatch(compChoiceAC(""));
          dispatch(getResutl(""));
          dispatch(isWintAC(""));
          dispatch(isLooseAC(false));
          navigateHome();
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default ResultSection;
