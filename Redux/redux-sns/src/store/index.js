import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reducer from './../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

const logger = createLogger();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
