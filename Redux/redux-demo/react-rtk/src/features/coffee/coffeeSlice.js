// Import createSlice
import { createSlice } from '@reduxjs/toolkit';

import { ordered as snackOrdered } from '../snack/snackSlice';

const initialState = {
  numberOfCoffees: 20,
};

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfCoffees -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfCoffees += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(snackOrdered, (state) => {
      state.numberOfCoffees--;
    });
  },
  // extraReducers: {
  //   ['snack/ordered']: (state) => {
  //     state.numberOfCoffees--;
  //   },
  // },
});

export default coffeeSlice.reducer;
export const { ordered, restocked } = coffeeSlice.actions;
