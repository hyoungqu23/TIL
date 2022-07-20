import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './coffeeSlice';

export const CoffeeView = () => {
  const [value, setValue] = useState(1);

  // State를 Component에서 활용하기
  const numberOfCoffees = useSelector((state) => state.coffee.numberOfCoffees);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Coffees: {numberOfCoffees}</h2>
      <button onClick={() => dispatch(ordered(1))}>ORDER</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      <button onClick={() => dispatch(restocked(value))}>RESTOCK</button>
    </div>
  );
};
