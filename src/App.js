import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ScoreSection from "./components/ScoreSection/ScoreSection";
import SelectionField from "./components/SelectionField/SelectionField";
import Rules from "./components/Rules/Rules";
import DrawSection from "./components/DrawSection/DrawSection";
import { Routes, Route } from "react-router-dom";
import { drawScore } from "../src/redux/actions/scoresAC";
import { increaseScore } from "../src/redux/actions/scoresAC";
import { decreaseScore } from "../src/redux/actions/scoresAC";
import { getResutl } from "../src/redux/actions/resultAC";
import { compChoiceAC } from "../src/redux/actions/compChoiceAC";
import RulesCard from "./components/RulesCard/RulesCard";

const App = () => {
  const [isShowRules, setIsShowRules] = useState(false);
  console.log(isShowRules);
  console.log("render app");
  const dispatch = useDispatch();

  const generateRandomChoice = () => {
    const variant = ["paper", "stone", "scissors"];
    const randomIndex = Math.floor(Math.random() * variant.length);
    const item = variant[randomIndex];
    dispatch(compChoiceAC(item));
  };

  const compChoice =
    useSelector((store) => store?.compChoicetReducer?.compChoice) ||
    generateRandomChoice();

  const handleResult = (current) => {
    console.log(current);
    console.log(compChoice);

    if (
      (current === "paper" &&
        compChoice === "stone" &&
        compChoice !== "paper") ||
      (current === "stone" &&
        compChoice === "scissors" &&
        compChoice !== "stone") ||
      (current === "scissors" &&
        compChoice === "paper" &&
        compChoice !== "scissors")
    ) {
      dispatch(getResutl("YOU WIN"));
      setTimeout(() => {
        dispatch(increaseScore());
      }, 1000);
    } else if (current === compChoice) {
      dispatch(getResutl("DRAW"));
      dispatch(drawScore());
    } else if (
      (current === "paper" && compChoice === "scissors") ||
      (current === "stone" && compChoice === "paper") ||
      (current === "scissors" && compChoice === "stone")
    ) {
      dispatch(getResutl("YOU LOOSE"));
      setTimeout(() => {
        dispatch(decreaseScore());
      }, 1000);
    }
  };

  return (
    <div className="main-container">
      <ScoreSection />
      <Routes>
        <Route exact path="/draw" element={<DrawSection />} />
        <Route
          exact
          path="/"
          element={<SelectionField handleResult={handleResult} />}
        />
      </Routes>
      <div className="rules-btn">
        <Rules setIsShowRules={setIsShowRules} />
      </div>
      {isShowRules ? <RulesCard setIsShowRules={setIsShowRules} /> : ""}
    </div>
  );
};

export default App;
