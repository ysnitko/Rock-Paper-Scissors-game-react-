import React from 'react';
import Stone from '../Stone/Stone';
// import Empty from '../Empty/Empty';
import Scissors from '../Scissors/Scissors';
// import ResultSection from "../ResultSection/ResultSection";
import './DrawSection.css';
import Paper from '../Paper/Paper';

const DrawSection = ({ isChoosen, current }) => {
  const computerChoice = () => {
    const variant = ['paper', 'stone', 'scissors'];
    const randomIndex = Math.floor(Math.random() * variant.length);
    const item = variant[randomIndex];
    return item;
  };

  const getCompChoice = computerChoice();
  console.log(getCompChoice);

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
      {/* <ResultSection /> */}
      <div className="picked-turn">
        <span className="picked-text">THE HOUSE PICKED</span>
        {getCompChoice === 'stone' ? (
          <Stone isChoosen={isChoosen} />
        ) : '' || getCompChoice === 'scissors' ? (
          <Scissors isChoosen={isChoosen} />
        ) : '' || getCompChoice === 'paper' ? (
          <Paper isChoosen={isChoosen} />
        ) : (
          ''
        )}
        {/* <Empty /> */}
      </div>
    </div>
  );
};

export default DrawSection;
