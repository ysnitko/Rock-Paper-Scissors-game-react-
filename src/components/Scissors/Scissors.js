import React from 'react';
import './Scissors.css';

const Scissors = ({ handleChoice, isChoosen }) => {
  return (
    <>
      {isChoosen ? (
        <button className="scissors active-scissors"></button>
      ) : (
        <button
          className="scissors"
          onClick={() => handleChoice('scissors')}
        ></button>
      )}
    </>
  );
};

export default Scissors;
