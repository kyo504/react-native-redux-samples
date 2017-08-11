import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';
// import { loadState, saveState } from './localStorage';

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  // const persistedState = loadState();

  const logger = createLogger();
  // const store = createStore(reducers, persistedState);
  const store = createStore(reducers);

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

//  const store = createStore(reducers, persistedState, applyMiddleware(logger));
  // store.subscribe(() => {
  //   saveState({
  //     todos: store.getState().todos,
  //   });
  // });

  return store;
};

export default configureStore;
