/**
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './app/store/configureStore';
import type { Store } from './app/types/Store';
import Counter from './app/Counter';

const store: Store = configureStore();

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}