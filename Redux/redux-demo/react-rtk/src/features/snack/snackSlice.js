// Import createSlice
import { createSlice } from '@reduxjs/toolkit';

// Set Initial State
const initialState = { numeberOfSnacks: 10 };

// Create a Slice, which will automatically generate Action Creator
const snackSlice = createSlice({
  name: 'snack',
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numeberOfSnacks -= action.payload;
    },
    restocked: (state, action) => {
      state.numeberOfSnacks += action.payload;
    },
  },
});

export default snackSlice.reducer;

// Export Action Type, Action Object, Action Creator, Switch Statements
export const { ordered, restocked } = snackSlice.actions;
