import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import { Provider } from 'react-redux';

import TodoApp from './app/App';
import store from './app/store/configureStore';

/*const TodoList = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}*/


class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    }
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object,
}

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

AppRegistry.registerComponent('TodoListRedux', () => App);
