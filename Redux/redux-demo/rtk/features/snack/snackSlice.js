// Import createSlice
const createSlice = require('@reduxjs/toolkit').createSlice;

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

module.exports = snackSlice.reducer;

// Export Action Type, Action Object, Action Creator, Switch Statements
module.exports.snackActions = snackSlice.actions;
