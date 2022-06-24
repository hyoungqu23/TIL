import { createSlice, configureStore } from '@reduxjs/toolkit';

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

// Action Creator
export const authActions = authSlice.actions;
export default authSlice.reducer;
