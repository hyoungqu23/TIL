import { configureStore } from '@reduxjs/toolkit';
import cartUiSlice from './cartUi-slice';

const store = configureStore({
  reducer: {
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
