'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import App from './app/App';
import reducers from './app/reducers';

let logger = createLogger();
let store = createStore(reducers, applyMiddleware(logger));

class CounterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CounterRedux', () => CounterApp);
