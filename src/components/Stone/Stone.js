import React from "react";
import "./Stone.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentAC } from "../../redux/actions/currentAC";
import { isChoosenAC } from "../../redux/actions/choosenAC";
import { useNavigate } from "react-router-dom";

const Stone = ({ handleResult }) => {
  const dispatch = useDispatch();
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const navigate = useNavigate();
  const navigateDraw = () => {
    navigate("/draw");
  };

  return (
    <>
      {isChoosen ? (
        <button className="stone active-stone"></button>
      ) : (
        <button
          className="stone"
          onClick={() => {
            navigateDraw();
            dispatch(isChoosenAC(true));
            dispatch(setCurrentAC("stone"));
            handleResult("stone");
          }}
        ></button>
      )}
    </>
  );
};

export default Stone;
