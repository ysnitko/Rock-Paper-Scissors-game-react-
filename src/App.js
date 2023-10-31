import React, { useState } from 'react';
import './App.css';
import ScoreSection from './components/ScoreSection/ScoreSection';
import SelectionField from './components/SelectionField/SelectionField';
import Rules from './components/Rules/Rules';
import DrawSection from './components/DrawSection/DrawSection';

const App = () => {
  const [current, setCurrent] = useState('');
  const [isChoosen, setIsChoosen] = useState(false);

  const handleChoice = (item) => {
    setCurrent(item);
    setIsChoosen(true);
    console.log('current: ' + item);
  };

  return (
    <div className="main-container">
      <ScoreSection />
      {isChoosen ? (
        <DrawSection isChoosen={isChoosen} current={current} />
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
