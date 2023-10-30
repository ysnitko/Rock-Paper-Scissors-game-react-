import React from "react";
import "./App.css";
import ScoreSection from "./components/ScoreSection/ScoreSection";
import SelectionField from "./components/SelectionField/SelectionField";
import Rules from "./components/Rules/Rules";

const App = () => {
  return (
    <div className="main-container">
      <ScoreSection />
      <SelectionField />
      <div className="rules-btn">
        <Rules />
      </div>
    </div>
  );
};

export default App;
