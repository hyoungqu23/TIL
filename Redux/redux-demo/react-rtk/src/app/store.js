// Import configureStore
import { configureStore } from '@reduxjs/toolkit';

// const reduxLogger = require('redux-logger');
// const logger = reduxLogger.createLogger();

// Import Reducers
import snackReducer from '../features/snack/snackSlice';
import coffeeReducer from '../features/coffee/coffeeSlice';
import userReducer from '../features/users/userSlice';

// Declare store
const store = configureStore({
  reducer: {
    snack: snackReducer,
    coffee: coffeeReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
