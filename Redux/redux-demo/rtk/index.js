const store = require('./app/store');

const snackActions = require('./features/snack/snackSlice').snackActions;
const coffeeActions = require('./features/coffee/coffeeSlice').coffeeActions;
const fetchUsers = require('./features/users/userSlice').fetchUsers;

console.log('Initial state ', store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log('Updated State ', store.getState());
});

store.dispatch(fetchUsers());

store.dispatch(snackActions.ordered(2));
store.dispatch(snackActions.ordered(3));
store.dispatch(snackActions.ordered(1));
store.dispatch(snackActions.restocked(6));

store.dispatch(coffeeActions.ordered(2));
store.dispatch(coffeeActions.ordered(3));
store.dispatch(coffeeActions.ordered(1));
store.dispatch(coffeeActions.restocked(6));

unsubscribe();
