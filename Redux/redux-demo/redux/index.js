// Import redux
const redux = require('redux');

// Import redux createStore
const createStore = redux.createStore;

// Import redux bindActionCreators
const bindActionCreators = redux.bindActionCreators;

// Import redux combineReducers
const combineReducers = redux.combineReducers;

// Import redux applyMiddleware
const applyMiddleware = redux.applyMiddleware;

// Import redux-logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

// Declare Constant for Action Type
const SNACK_ORDERED = 'SNACK_ORDERED';
const SNACK_RESTOCKED = 'SNACK_RESTOCKED';
const COFFEE_ORDERED = 'COFFEE_ORDERED';
const COFFEE_RESTOCKED = 'COFFEE_RESTOCKED';

// Declare Action Creator
const orderSnack = (amount = 1) => {
  return {
    type: SNACK_ORDERED,
    payload: amount,
  };
};

const restockSnack = (amount = 1) => {
  return {
    type: SNACK_RESTOCKED,
    payload: amount,
  };
};

const orderCoffee = (amount = 1) => {
  return {
    type: COFFEE_ORDERED,
    payload: amount,
  };
};

const restockCoffee = (amount = 1) => {
  return {
    type: COFFEE_RESTOCKED,
    payload: amount,
  };
};

// Declare State
// const initialState = {
//   numberOfSnacks: 10,
//   numberOfCoffees: 20,
// };

// Declare two Separated States
const initialSnackState = {
  numberOfSnacks: 10,
};

const initialCoffeeState = {
  numberOfCoffees: 20,
};

// Declare Reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SNACK_ORDERED:
//       return {
//         // 불변 상태 유지
//         ...state,
//         numberOfSnacks: state.numberOfSnacks - action.payload,
//       };
//     case SNACK_RESTOCKED:
//       return {
//         // 불변 상태 유지
//         ...state,
//         numberOfSnacks: state.numberOfSnacks + action.payload,
//       };
//     case COFFEE_ORDERED:
//       return {
//         // 불변 상태 유지
//         ...state,
//         numberOfCoffees: state.numberOfCoffees - action.payload,
//       };
//     case COFFEE_RESTOCKED:
//       return {
//         // 불변 상태 유지
//         ...state,
//         numberOfCoffees: state.numberOfCoffees + action.payload,
//       };
//     default: {
//       return state;
//     }
//   }
// };

const snackReducer = (state = initialSnackState, action) => {
  switch (action.type) {
    case SNACK_ORDERED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfSnacks: state.numberOfSnacks - action.payload,
      };
    case SNACK_RESTOCKED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfSnacks: state.numberOfSnacks + action.payload,
      };
    default: {
      return state;
    }
  }
};

const coffeeReducer = (state = initialCoffeeState, action) => {
  switch (action.type) {
    case COFFEE_ORDERED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfCoffees: state.numberOfCoffees - action.payload,
      };
    case COFFEE_RESTOCKED:
      return {
        // 불변 상태 유지
        ...state,
        numberOfCoffees: state.numberOfCoffees + action.payload,
      };
    default: {
      return state;
    }
  }
};

// Declare Store
// const store = createStore(reducer);
// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Combine Reducers
const rootReducer = combineReducers({
  snack: snackReducer,
  coffee: coffeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(orderSnack());
// store.dispatch(orderSnack());
// store.dispatch(restockSnack(3));
// store.dispatch(restockSnack(4));
// store.dispatch(restockSnack());

// Use BindActionCreators
const actions = bindActionCreators(
  { orderSnack, restockSnack, orderCoffee, restockCoffee },
  store.dispatch,
);

actions.orderSnack();
actions.orderSnack();
actions.orderSnack();
actions.restockSnack(3);

actions.orderCoffee(2);
actions.orderCoffee(2);
actions.restockCoffee(3);
actions.restockCoffee(3);

unsubscribe();

store.dispatch(orderSnack());
store.dispatch(orderSnack());
store.dispatch(orderSnack());
