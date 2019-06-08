import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { middleware } from '../navigators';

const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('dispatching a function');
  } else {
    console.log('dispatching', action);
  }
  const result = next(action);
  console.log('nextState', store.getState());
};

const middlewares = [
  middleware,
  logger,
  thunk
];

export default createStore(reducer, applyMiddleware(...middlewares));