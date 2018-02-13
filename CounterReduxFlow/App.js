/**
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Counter from './app/Counter';
import store from './app/store/configureStore';

type Props = {

}

type State = {

}

export default class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
