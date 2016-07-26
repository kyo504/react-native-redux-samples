'use strict';

import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Counter extends Component {

  static propTypes = {
    increment: React.PropTypes.func,
    decrement: React.PropTypes.func,
    value: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
  }

  render() {

    const { value, increment, decrement } = this.props;

    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{value}</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableHighlight onPress={() => increment()}>
            <View style={{width:20, borderWidth:1, borderColor:'black'}}>
              <Text style={{textAlign:'center'}}>+</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => decrement()}>
            <View style={{width:20, borderWidth:1, borderColor:'black'}}>
              <Text style={{textAlign:'center'}}>-</Text>
            </View>
          </TouchableHighlight>
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
