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

const initialAuthState = {
  isAuthenticated: false,
};

// Redux-toolkit: Multi Slice
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const store = createStore(counterReducer, initialState);

// Redux Toolkit: configureStore()
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// Action Creator
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'DEC' });
// store.dispatch({ type: 'RESET' });
