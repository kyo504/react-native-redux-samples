/**
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Button from './Button';

type Props = {
  value: number,
  onIncrement: Function,
  onDecrement: Function,
}

type State = {

}

export default class Counter extends Component<Props, State> {

  // static propTypes = {
  //   onIncrement: React.PropTypes.func,
  //   onDecrement: React.PropTypes.func,
  //   value: React.PropTypes.number,
  // }

  constructor(props: Props) {
    super(props);
  }

  render() {

    const { onIncrement, onDecrement } = this.props;

    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{this.props.value}</Text>
        <View style={{flexDirection:'row'}}>
          <Button text="+" onPress={() => onIncrement()} />
          <Button text="-" onPress={() => onDecrement()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
