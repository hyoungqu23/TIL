const redux = require('redux');

const countReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'DEC') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(countReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INC' });
store.dispatch({ type: 'DEC' });
