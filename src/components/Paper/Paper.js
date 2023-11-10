import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentAC } from '../../redux/actions/currentAC';
import { isChoosenAC } from '../../redux/actions/choosenAC';
import { drawScore } from '../../redux/actions/scoresAC';
import { increaseScore } from '../../redux/actions/scoresAC';
import { decreaseScore } from '../../redux/actions/scoresAC';
import { getResutl } from '../../redux/actions/resultAC';
import { compChoiceAC } from '../../redux/actions/compChoiceAC';
import './Paper.css';

const generateRandomChoice = () => {
  const variant = ['paper', 'stone', 'scissors'];
  const randomIndex = Math.floor(Math.random() * variant.length);
  return variant[randomIndex];
};

const Paper = () => {
  console.log('render Paper');
  const dispatch = useDispatch();
  const isChoosen = useSelector((store) => store?.choosenReducer?.isChoosen);
  const current = useSelector((store) => store?.currentReducer?.current);
  const result = useSelector((store) => store?.resultReducer?.result);
  const compChoice = useSelector(
    (store) => store?.compChoicetReducer?.compChoice
  );

  const compChoiceFunc = generateRandomChoice();
  console.log(compChoiceFunc);

  useEffect(() => {
    const randomChoice = generateRandomChoice();
    dispatch(compChoiceAC(randomChoice));
  }, [dispatch]);

  const handleResult = () => {
    if (
      current === 'paper' &&
      compChoice === 'stone' &&
      compChoice !== 'paper' &&
      compChoice !== 'scissors'
    ) {
      dispatch(getResutl('YOU WIN'));
      console.log(result);
      dispatch(increaseScore());
    } else if (current === compChoice) {
      dispatch(getResutl('DRAW'));
      dispatch(drawScore());
      console.log(result);
    } else {
      dispatch(getResutl('YOU LOOSE'));
      dispatch(decreaseScore());
      console.log(result);
    }
  };

  return (
    <div>
      {isChoosen ? (
        <button className="paper active-paper"></button>
      ) : (
        <button
          className="paper"
          onClick={() => {
            dispatch(isChoosenAC(true));
            dispatch(setCurrentAC('paper'));
            handleResult();
          }}
        ></button>
      )}
    </div>
  );
};

export default Paper;
