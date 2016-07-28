'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

import App from './app/App';
import reducer from './app/reducers/counter';

let logger = createLogger();
let store = createStore(reducer, applyMiddleware(logger));

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
