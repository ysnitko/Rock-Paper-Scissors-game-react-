import React from 'react';
import './Stone.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentAC } from '../../redux/actions/currentAC';
import { isChoosenAC } from '../../redux/actions/choosenAC';
import { useNavigate } from 'react-router-dom';

const Stone = ({ handleResult }) => {
  const dispatch = useDispatch();
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const navigate = useNavigate();
  const isWin = useSelector((store) => store?.isWinnerReducer?.isWin);
  const isLoose = useSelector((store) => store?.isLooseReducer?.isLoose);
  const navigateDraw = () => {
    navigate('/draw');
  };

  return (
    <div className="stone-container">
      {isChoosen ? (
        <button className="stone active-stone"></button>
      ) : (
        <button
          className="stone"
          onClick={() => {
            navigateDraw();
            dispatch(isChoosenAC(true));
            dispatch(setCurrentAC('stone'));
            handleResult('stone');
          }}
        ></button>
      )}
    </div>
  );
};

export default Stone;
