import React from 'react';
import Paper from '../Paper/Paper';
import Stone from '../Stone/Stone';
import Scissors from '../Scissors/Scissors';
import './SelectionField.css';

const SelectionField = ({ handleChoice }) => {
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
