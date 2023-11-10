import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isChoosenAC } from '../../redux/actions/choosenAC';
import { setCurrentAC } from '../../redux/actions/currentAC';
import { compChoiceAC } from '../../redux/actions/compChoiceAC';

import './ResultSection.css';

const ResultSection = () => {
  console.log('render ResultSection');
  const dispatch = useDispatch();
  const result = useSelector((store) => store?.resultReducer?.result);

  return (
    <div className="draw-result">
      <span>{result}</span>
      <button
        className="play-again"
        onClick={() => {
          dispatch(isChoosenAC(false));
          dispatch(setCurrentAC(''));
          dispatch(compChoiceAC(''));
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default ResultSection;
