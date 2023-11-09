import React from "react";
import "./Stone.css";
import { useSelector } from "react-redux";

const Stone = ({ handleChoice }) => {
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  return (
    <>
      {isChoosen ? (
        <button className="stone active-stone"></button>
      ) : (
        <button
          className="stone"
          onClick={() => handleChoice("stone")}
        ></button>
      )}
    </>
  );
};

export default Stone;
