// Import redux
const redux = require('redux');

// Import redux createStore
const createStore = redux.createStore;

// Import redux applyMiddleware
const applyMiddleware = redux.applyMiddleware;

// Import redux-thunk
const thunkMiddleware = require('redux-thunk').default;

// Import axios
const axios = require('axios');

// Declare State
const initialState = {
  isLoading: false,
  users: [],
  error: '',
};

// Declare Action Type
const FETCH_REQUESTED = 'FETCH_REQUESTED';
const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED';
const FETCH_FAILED = 'FETCH_FAILED';

// Declare Action Creator
const fetchUsersRequest = () => {
  return {
    type: FETCH_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFail = (error) => {
  return {
    type: FETCH_FAILED,
    payload: error,
  };
};

// Declare Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCEEDED:
      return {
        isLoading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_FAILED:
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      };
    default:
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    // side effects allow
    // also, dispatch allows
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/userss')
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFail(error.message));
        // console.log(error);
      });
  };
};

// Declare Store with Middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Subscribe to store and dispatch Async Actions
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
