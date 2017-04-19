import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import TodoApp from './app/App';
import store from './app/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

AppRegistry.registerComponent('TodoListRedux', () => App);
