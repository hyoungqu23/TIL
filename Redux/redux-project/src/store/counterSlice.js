import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  isCounterShown: true,
};

// Redux Toolkit: counter State Slice
const counterSlice = createSlice({
  // 식별자 설정
  name: 'counter',

  // 초기 State 설정
  initialState: initialCounterState,

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

// Action Creator
export const counterActions = counterSlice.actions;
export default counterSlice;

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
