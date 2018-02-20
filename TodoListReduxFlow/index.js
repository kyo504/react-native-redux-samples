

/**
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './app/store/configureStore';
import App from './app/App';

export default class TodoListReduxFlow extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('TodoListReduxFlow', () => TodoListReduxFlow);
