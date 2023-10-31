import React from 'react';
import './Paper.css';

const Paper = ({ handleChoice, isChoosen }) => {
  return (
    <>
      {isChoosen ? (
        <button className="paper active-paper"></button>
      ) : (
        <button
          className="paper"
          onClick={() => handleChoice('paper')}
        ></button>
      )}
    </>
  );
};

export default Paper;
