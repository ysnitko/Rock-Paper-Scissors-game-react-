import React from "react";
import logo from "../../helpers/img/logo.svg";
import "./ScoreSection.css";

const ScoreSection = () => {
  return (
    <div className="score-container">
      <img src={logo} alt="logo" />
      <div className="score-section">
        <span className="score-header">Score</span>
        <span className="score">0</span>
      </div>
    </div>
  );
};

export default ScoreSection;
