import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import authSliceReducer from './authSlice';

// Redux Toolkit: configureStore()
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSliceReducer,
  },
});

export default store;
