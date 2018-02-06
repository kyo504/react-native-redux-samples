/**
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Counter from './Counter';

type Props = {
  
}

type State = {
  value: number,
}

export default class App extends Component<Props, State> {

  constructor(props: Props) {
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
