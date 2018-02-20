import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let todo_text = '';
  let textInputRef = null;

  const clearText = () => {
    textInputRef.setNativeProps({ text: '' });
  }

  const _onAddTodo = () => {
    if (todo_text !== '') {
      clearText();
      dispatch(addTodo(todo_text));
    }
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        ref={(c) => { textInputRef = c; }}
        style={{ width: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => todo_text = text}
        placeholder='Add a todo'
      />
      <TouchableHighlight underlayColor='transparent' onPress={() => _onAddTodo()}>
        <View style={{ borderWidth: 1, borderRadius: 3, borderColor: 'black' }}>
          <Text style={{ marginHorizontal: 5 }}>Add</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

// In this case, we don't subcribe to store and just inject dispatch function as prop
export default connect()(AddTodo);
