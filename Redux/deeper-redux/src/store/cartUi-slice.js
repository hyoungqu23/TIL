import { createSlice } from '@reduxjs/toolkit';

const cartUiSlice = createSlice({
  name: 'cart-UI',

  initialState: {
    isCartVisible: false,
  },

  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice;
