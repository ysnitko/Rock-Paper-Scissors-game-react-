import React from "react";
import { useSelector } from "react-redux";

import "./Paper.css";

const Paper = ({ handleChoice }) => {
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);

  return (
    <>
      {isChoosen ? (
        <button className="paper active-paper"></button>
      ) : (
        <button
          className="paper"
          onClick={() => handleChoice("paper")}
        ></button>
      )}
    </>
  );
};

export default Paper;
