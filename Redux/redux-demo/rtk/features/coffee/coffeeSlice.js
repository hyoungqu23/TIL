// Import createSlice
const createSlice = require('@reduxjs/toolkit').createSlice;

const { snackActions } = require('../snack/snackSlice');

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
    builder.addCase(snackActions.ordered, (state) => {
      state.numberOfCoffees--;
    });
  },
  // extraReducers: {
  //   ['snack/ordered']: (state) => {
  //     state.numberOfCoffees--;
  //   },
  // },
});

module.exports = coffeeSlice.reducer;
module.exports.coffeeActions = coffeeSlice.actions;
