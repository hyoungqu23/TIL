import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isCounterShown = useSelector((state) => state.isCounterShown);

  const handlePlusButton = () => {
    // dispatch({ type: 'INC', step: 1 });
    dispatch(counterActions.increment());
  };

  const handlePlus5Button = () => {
    // dispatch({ type: 'INC', step: 5 });
    dispatch(counterActions.decrement({ amount: 5 }));
  };

  const handleMinusButton = () => {
    // dispatch({ type: 'DEC', step: 1 });
    // dispatch(counterActions.reset());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE' });
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterShown && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handlePlusButton}>+</button>
        <button onClick={handlePlus5Button}>+ 5</button>
        <button onClick={handleMinusButton}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
