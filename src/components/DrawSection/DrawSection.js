import React, { useEffect, useState } from 'react';
import Stone from '../Stone/Stone';
import Empty from '../Empty/Empty';
import Scissors from '../Scissors/Scissors';
import ResultSection from '../ResultSection/ResultSection';
import './DrawSection.css';
import Paper from '../Paper/Paper';

const DrawSection = ({
  isChoosen,
  current,
  handleReset,
  computerChoice,
  score,
  setScore,
}) => {
  const [time, setTime] = useState(1);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [time]);

  const getCompChoice = computerChoice();

  return (
    <div className="draw-section">
      <div className="picked-turn">
        <span className="picked-text">YOU PICKED</span>
        {current === 'paper' ? (
          <Paper isChoosen={isChoosen} />
        ) : '' || current === 'stone' ? (
          <Stone isChoosen={isChoosen} />
        ) : '' || current === 'scissors' ? (
          <Scissors isChoosen={isChoosen} />
        ) : (
          ''
        )}
      </div>
      {time === 0 && (
        <ResultSection
          getCompChoice={getCompChoice}
          current={current}
          handleReset={handleReset}
          score={score}
          setScore={setScore}
        />
      )}

      <div className="picked-turn">
        <span className="picked-text">THE HOUSE PICKED</span>
        {time === 0 && getCompChoice === 'stone' ? (
          <Stone isChoosen={isChoosen} />
        ) : '' || (time === 0 && getCompChoice === 'scissors') ? (
          <Scissors isChoosen={isChoosen} />
        ) : '' || (time === 0 && getCompChoice === 'paper') ? (
          <Paper isChoosen={isChoosen} />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default DrawSection;
