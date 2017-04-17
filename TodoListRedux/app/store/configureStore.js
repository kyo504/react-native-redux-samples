import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from '../reducers'

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back',
    completed: false,
  }],
};

let logger = createLogger();
export default createStore(reducers, persistedState, applyMiddleware(logger));
