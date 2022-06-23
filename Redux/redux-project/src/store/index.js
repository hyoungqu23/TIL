import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  isCounterShown: true,
};

// Redux Toolkit: counter State Slice
const counterSlice = createSlice({
  // 식별자 설정
  name: 'counter',

  // 초기 State 설정
  initialState,

  // Reducer 설정
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },

    decrement(state, action) {
      state.counter -= action.payload;
    },

    reset(state) {
      state.counter = 0;
    },

    toggle(state) {
      state.isCounterShown = !state.isCounterShown;
    },
  },
});

// const counterReducer = (state, action) => {
//   if (action.type === 'INC') {
//     return {
//       ...state,
//       counter: state.counter + action.step,
//     };
//   }

//   if (action.type === 'DEC') {
//     return {
//       ...state,
//       counter: state.counter - action.step,
//     };
//   }

//   if (action.type === 'RESET') {
//     return {
//       ...state,
//       counter: 0,
//     };
//   }

//   if (action.type === 'TOGGLE') {
//     return {
//       ...state,
//       isCounterShown: !state.isCounterShown,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer, initialState);

// Redux Toolkit: configureStore()
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Action Creator
export const counterActions = counterSlice.actions;
export default store;

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'DEC' });
// store.dispatch({ type: 'RESET' });
