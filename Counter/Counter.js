'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{this.state.count}</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableHighlight onPress={() => this.setState({count: this.state.count+1})}>
            <View style={{width:20, borderWidth:1, borderColor:'black'}}>
              <Text style={{textAlign:'center'}}>+</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.setState({count: this.state.count-1})}>
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
