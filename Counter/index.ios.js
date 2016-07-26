'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Counter/>
    );
  }
}

AppRegistry.registerComponent('Counter', () => App);
