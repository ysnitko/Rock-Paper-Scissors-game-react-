import React from 'react';
import './ResultSection.css';

const ResultSection = ({
  current,
  getCompChoice,
  handleReset,
  score,
  setScore,
}) => {
  const handleResult = () => {
    let result = '';

    if (
      (current === 'paper' &&
        getCompChoice === 'stone' &&
        getCompChoice !== 'paper') ||
      (current === 'stone' &&
        getCompChoice === 'scissors' &&
        getCompChoice !== 'stone') ||
      (current === 'scissors' &&
        getCompChoice === 'paper' &&
        getCompChoice !== 'scissors')
    ) {
      result = 'YOU WIN';
    } else if (current === getCompChoice) {
      result = 'DRAW';
    } else {
      result = 'YOU LOOSE';
    }
    return result;
  };

  return (
    <div className="draw-result">
      <span>{handleResult()}</span>
      <button className="play-again" onClick={handleReset}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default ResultSection;
