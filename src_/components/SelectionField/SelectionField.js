import React from "react";
import Paper from "../Paper/Paper";
import Stone from "../Stone/Stone";
import Scissors from "../Scissors/Scissors";
import { useDispatch } from "react-redux";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { setCurrentAC } from "../../redux/actions/currentAC";
import "./SelectionField.css";

const SelectionField = () => {
  console.log("render SelectionField");
  const dispatch = useDispatch();
  const handleChoice = (item) => {
    dispatch(setCurrentAC(item));
    dispatch(isChoosenAC(true));
  };

  return (
    <div className="selection-container">
      <div className="paper-scissors">
        <Paper handleChoice={handleChoice} />
        <Scissors handleChoice={handleChoice} />
      </div>
      <Stone handleChoice={handleChoice} />
    </div>
  );
};

export default SelectionField;
