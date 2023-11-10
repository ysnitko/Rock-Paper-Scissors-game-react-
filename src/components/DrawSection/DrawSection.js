import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResultSection from "../ResultSection/ResultSection";
import "./DrawSection.css";
import Player from "../Player/Player";
import Computer from "../Computer/Computer";
import { compChoiceAC } from "../../redux/actions/compChoiceAC";

const DrawSection = () => {
  console.log("render DrawSection");
  const [time, setTime] = useState(1);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const countdown = setInterval(() => {
  //     setTime((prevTime) => prevTime - 1);
  //   }, 1000);
  //   if (time === 0) {
  //     clearInterval(countdown);
  //   }

  //   return () => {
  //     clearInterval(countdown);
  //   };
  // }, [time]);

  return (
    <div className="draw-section">
      <Player />
      <ResultSection />
      <Computer />
    </div>
  );
};

export default DrawSection;
