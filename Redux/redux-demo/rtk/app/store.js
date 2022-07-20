// Import configureStore
const configureStore = require('@reduxjs/toolkit').configureStore;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

// Import Reducers
const snackReducer = require('../features/snack/snackSlice');
const coffeeReducer = require('../features/coffee/coffeeSlice');
const userReducer = require('../features/users/userSlice');

// Declare store
const store = configureStore({
  reducer: {
    snack: snackReducer,
    coffee: coffeeReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
