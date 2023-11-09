import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ScoreSection from "./components/ScoreSection/ScoreSection";
import SelectionField from "./components/SelectionField/SelectionField";
import Rules from "./components/Rules/Rules";
import DrawSection from "./components/DrawSection/DrawSection";

const App = () => {
  console.log("render app");
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);

  return (
    <div className="main-container">
      <ScoreSection />
      {isChoosen ? <DrawSection /> : <SelectionField />}
      <div className="rules-btn">
        <Rules />
      </div>
    </div>
  );
};

export default App;
