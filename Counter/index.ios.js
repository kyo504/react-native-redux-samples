'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Counter from './Counter';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    }
  }

  render() {
    return (
      <Counter 
        value={this.state.value}
        onIncrement={() => this.setState({value: this.state.value+1})}
        onDecrement={() => this.setState({value: this.state.value-1})}
      />
    );
  }
}

AppRegistry.registerComponent('Counter', () => App);
