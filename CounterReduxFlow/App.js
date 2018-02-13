import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Counter from './app/Counter';
import store from './app/store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
