import React, { useState } from 'react';
import './App.css';
import ScoreSection from './components/ScoreSection/ScoreSection';
import SelectionField from './components/SelectionField/SelectionField';
import Rules from './components/Rules/Rules';
import DrawSection from './components/DrawSection/DrawSection';

const App = () => {
  const [current, setCurrent] = useState('');
  const [isChoosen, setIsChoosen] = useState(false);
  const [score, setScore] = useState(0);

  const handleReset = () => {
    setIsChoosen(false);
    setCurrent('');
  };

  const computerChoice = () => {
    const variant = ['paper', 'stone', 'scissors'];
    const randomIndex = Math.floor(Math.random() * variant.length);
    const item = variant[randomIndex];
    return item;
  };

  const handleChoice = (item) => {
    setCurrent(item);
    setIsChoosen(true);
  };

  return (
    <div className="main-container">
      <ScoreSection score={score} />
      {isChoosen ? (
        <DrawSection
          isChoosen={isChoosen}
          current={current}
          handleReset={handleReset}
          computerChoice={computerChoice}
          score={score}
          setScore={setScore}
        />
      ) : (
        <SelectionField
          current={current}
          setCurrent={setCurrent}
          handleChoice={handleChoice}
        />
      )}
      <div className="rules-btn">
        <Rules />
      </div>
    </div>
  );
};

export default App;
