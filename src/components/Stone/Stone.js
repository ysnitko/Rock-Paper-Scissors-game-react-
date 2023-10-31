import React from 'react';
import './Stone.css';

const Stone = ({ handleChoice, isChoosen }) => {
  return (
    <>
      {isChoosen ? (
        <button className="stone active-stone"></button>
      ) : (
        <button
          className="stone"
          onClick={() => handleChoice('stone')}
        ></button>
      )}
    </>
  );
};

export default Stone;
