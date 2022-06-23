import { createStore } from 'redux';

const initialState = {
  counter: 0,
};

const counterReducer = (state, action) => {
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

  if (action.type === 'RESET') {
    return {
      counter: 0,
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
