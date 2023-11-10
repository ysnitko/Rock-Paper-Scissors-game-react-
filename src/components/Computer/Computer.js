import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stone from '../Stone/Stone';
import Scissors from '../Scissors/Scissors';
import Paper from '../Paper/Paper';
import Empty from '../Empty/Empty';
import { compChoiceAC } from '../../redux/actions/compChoiceAC';

const Computer = () => {
  console.log('render compchoice');
  const compChoice = useSelector(
    (store) => store?.compChoicetReducer?.compChoice
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const variant = ['paper', 'stone', 'scissors'];
  //   const randomIndex = Math.floor(Math.random() * variant.length);
  //   const item = variant[randomIndex];
  //   dispatch(compChoiceAC(item));
  // }, [dispatch]);
  console.log(compChoice);
  return (
    <div className="picked-turn">
      <span className="picked-text">THE HOUSE PICKED</span>
      {compChoice === 'stone' ? (
        <Stone />
      ) : '' || compChoice === 'scissors' ? (
        <Scissors />
      ) : '' || compChoice === 'paper' ? (
        <Paper />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Computer;
