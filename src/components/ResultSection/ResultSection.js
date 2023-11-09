import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drawScore } from '../../redux/actions/scoresAC';
import { increaseScore } from '../../redux/actions/scoresAC';
import { decreaseScore } from '../../redux/actions/scoresAC';
import { isChoosenAC } from '../../redux/actions/choosenAC';
import { setCurrentAC } from '../../redux/actions/currentAC';
import { getResutl } from '../../redux/actions/resultAC';
import './ResultSection.css';

const ResultSection = ({ getCompChoice }) => {
  console.log('render ResultSection');
  const dispatch = useDispatch();
  const current = useSelector((store) => store?.currentReducer?.current);
  const result = useSelector((store) => store?.resultReducer?.result);

  const handleResult = () => {
    if (
      (current === 'paper' &&
        getCompChoice === 'stone' &&
        getCompChoice !== 'paper') ||
      (current === 'stone' &&
        getCompChoice === 'scissors' &&
        getCompChoice !== 'stone') ||
      (current === 'scissors' &&
        getCompChoice === 'paper' &&
        getCompChoice !== 'scissors')
    ) {
      dispatch(getResutl('YOU WIN'));
    }
    if (current === getCompChoice) {
      dispatch(getResutl('DRAW'));
    } else {
      dispatch(getResutl('YOU LOOSE'));
    }
    return result;
  };

  let scoreRes = handleResult();
  console.log(scoreRes);

  const handleReset = () => {
    dispatch(isChoosenAC(false));
    dispatch(setCurrentAC(''));
    scoreRes = '';
  };

  return (
    <div className="draw-result">
      <span>{scoreRes}</span>
      <button className="play-again" onClick={handleReset}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default ResultSection;
