import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentAC } from '../../redux/actions/currentAC';
import { isChoosenAC } from '../../redux/actions/choosenAC';

import './Paper.css';
import { useNavigate } from 'react-router-dom';

const Paper = ({ handleResult }) => {
  console.log('render Paper');
  const dispatch = useDispatch();
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const isWin = useSelector((store) => store?.isWinnerReducer?.isWin);
  const isLoose = useSelector((store) => store?.isLooseReducer?.isLoose);
  const navigate = useNavigate();
  const navigateDraw = () => {
    navigate('/draw');
  };

  return (
    <div>
      {isChoosen ? (
        <button className="paper active-paper"></button>
      ) : (
        <button
          className="paper"
          onClick={() => {
            navigateDraw();
            dispatch(isChoosenAC(true));
            dispatch(setCurrentAC('paper'));
            handleResult('paper');
          }}
        ></button>
      )}
    </div>
  );
};

export default Paper;
