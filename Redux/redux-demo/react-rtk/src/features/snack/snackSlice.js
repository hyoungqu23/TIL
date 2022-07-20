// Import createSlice
import { createSlice } from '@reduxjs/toolkit';

// Set Initial State
const initialState = { numberOfSnacks: 10 };

// Create a Slice, which will automatically generate Action Creator
const snackSlice = createSlice({
  name: 'snack',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfSnacks -= action.payload;
    },
    restocked: (state, action) => {
      state.numberOfSnacks += action.payload;
    },
  },
});

export default snackSlice.reducer;

// Export Action Type, Action Object, Action Creator, Switch Statements
export const { ordered, restocked } = snackSlice.actions;
