import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './snackSlice';

export const SnackView = () => {
  // State를 Component에서 활용하기
  const numberOfSnacks = useSelector((state) => state.snack.numberOfSnacks);

  // redux store에서 dispatch function의 reference를 반환
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Snacks: {numberOfSnacks}</h2>
      <button onClick={() => dispatch(ordered(1))}>ORDER</button>
      <button onClick={() => dispatch(restocked(5))}>RESTOCK</button>
    </div>
  );
};
