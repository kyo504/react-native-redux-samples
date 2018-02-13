import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './actions';

class Counter extends Component {

  static defaultProps = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    count: PropTypes.number,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { count, increment, decrement } = this.props;

    return (
      <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{count}</Text>
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


const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
