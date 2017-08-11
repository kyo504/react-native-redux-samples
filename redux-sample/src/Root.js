import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';
import App from './App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/(:filter)" component={App} />
      </Router>
    </Provider>
  );
};

export default Root;

