import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import logo from "../../helpers/img/logo.svg";
import "./ScoreSection.css";

const ScoreSection = () => {
  const score = useSelector((store) => store?.scoresReducer?.score);

  return (
    <div className="score-container">
      <img src={logo} alt="logo" />
      <div className="score-section">
        <span className="score-header">SCORE</span>
        <span className="score">{score}</span>
      </div>
    </div>
  );
};

export default ScoreSection;
