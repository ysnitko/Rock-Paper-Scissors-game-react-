import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Stone from "../Stone/Stone";
import Empty from "../Empty/Empty";
import Scissors from "../Scissors/Scissors";
import ResultSection from "../ResultSection/ResultSection";
import "./DrawSection.css";
import Paper from "../Paper/Paper";

const DrawSection = () => {
  console.log("render DrawSection");
  const current = useSelector((store) => store?.currentReducer?.current);
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

  const computerChoice = () => {
    const variant = ["paper", "stone", "scissors"];
    const randomIndex = Math.floor(Math.random() * variant.length);
    const item = variant[randomIndex];
    return item;
  };

  const getCompChoice = computerChoice();

  return (
    <div className="draw-section">
      <div className="picked-turn">
        <span className="picked-text">YOU PICKED</span>
        {current === "paper" ? (
          <Paper />
        ) : "" || current === "stone" ? (
          <Stone />
        ) : "" || current === "scissors" ? (
          <Scissors />
        ) : (
          ""
        )}
      </div>
      {time === 0 && <ResultSection getCompChoice={getCompChoice} />}

      <div className="picked-turn">
        <span className="picked-text">THE HOUSE PICKED</span>
        {time === 0 && getCompChoice === "stone" ? (
          <Stone />
        ) : "" || (time === 0 && getCompChoice === "scissors") ? (
          <Scissors />
        ) : "" || (time === 0 && getCompChoice === "paper") ? (
          <Paper />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default DrawSection;
