import React from "react";
import Paper from "../Paper/Paper";
import Stone from "../Stone/Stone";
import Scissors from "../Scissors/Scissors";
import "./SelectionField.css";

const SelectionField = ({ handleResult, isWinner, isLooser }) => {
  return (
    <div className="selection-container">
      <div className="paper-scissors">
        <Paper handleResult={handleResult} />
        <Scissors handleResult={handleResult} />
      </div>
      <Stone handleResult={handleResult} />
    </div>
  );
};

export default SelectionField;
