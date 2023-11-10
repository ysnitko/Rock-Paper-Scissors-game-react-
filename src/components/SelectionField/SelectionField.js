import React from "react";
import Paper from "../Paper/Paper";
import Stone from "../Stone/Stone";
import Scissors from "../Scissors/Scissors";
import "./SelectionField.css";

const SelectionField = () => {
  console.log("render SelectionField");

  return (
    <div className="selection-container">
      <div className="paper-scissors">
        <Paper />
        <Scissors />
      </div>
      <Stone />
    </div>
  );
};

export default SelectionField;
