import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isCounterShown = useSelector((state) => state.isCounterShown);

  const handlePlusButton = () => {
    // dispatch({ type: 'INC', step: 1 });
    dispatch(counterActions.increment(1));
  };

  const handlePlus5Button = () => {
    // dispatch({ type: 'INC', step: 5 });
    dispatch(counterActions.increment(5));
  };

  const handleMinusButton = () => {
    // dispatch({ type: 'DEC', step: 1 });
    dispatch(counterActions.decrement(1));
  };

  const handleToggleButton = () => {
    // dispatch({ type: 'TOGGLE' });
    dispatch(counterActions.toggle());
  };

  const handleResetButton = () => {
    dispatch(counterActions.reset());
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
      <button onClick={handleToggleButton}>Toggle Counter</button>
      <button onClick={handleResetButton}>Reset Counter</button>
    </main>
  );
};

export default Counter;
