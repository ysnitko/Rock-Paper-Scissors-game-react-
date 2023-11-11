import React, { useEffect, useState } from "react";
import ResultSection from "../ResultSection/ResultSection";
import "./DrawSection.css";
import Player from "../Player/Player";
import Computer from "../Computer/Computer";
import Empty from "../Empty/Empty";

const DrawSection = () => {
  console.log("render DrawSection");
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime(0);
    }, 1000);
    if (time === 0) {
      clearTimeout(timeOut);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [time]);

  return (
    <div className="draw-section">
      <Player />
      {time === 0 ? <ResultSection /> : ""}
      {time === 0 ? <Computer /> : <Empty />}
    </div>
  );
};

export default DrawSection;
