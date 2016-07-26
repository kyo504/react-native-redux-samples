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
    onIncrement: React.PropTypes.func,
    onDecrement: React.PropTypes.func,
    value: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{this.props.value}</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableHighlight onPress={() => this.props.onIncrement()}>
            <View style={{width:20, borderWidth:1, borderColor:'black'}}>
              <Text style={{textAlign:'center'}}>+</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.onDecrement()}>
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
