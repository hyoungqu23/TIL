import { createStore } from 'redux';

const initialState = {
  counter: 0,
  isCounterShown: true,
};

const counterReducer = (state, action) => {
  if (action.type === 'INC') {
    return {
      ...state,
      counter: state.counter + action.step,
    };
  }

  if (action.type === 'DEC') {
    return {
      ...state,
      counter: state.counter - action.step,
    };
  }

  if (action.type === 'RESET') {
    return {
      ...state,
      counter: 0,
    };
  }

  if (action.type === 'TOGGLE') {
    return {
      ...state,
      isCounterShown: !state.isCounterShown,
    };
  }

  return state;
};

const store = createStore(counterReducer, initialState);

export default store;

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'DEC' });
// store.dispatch({ type: 'RESET' });
