import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const AddTodo = ({
  onAddTodo
}) => {
  var todo_text = '';
  var _textInput = null;

  clearText = function() {
    _textInput.setNativeProps({text: ''});
  }

  _onAddTodo = function() {
    if (todo_text !== '') {
      clearText();
      onAddTodo(todo_text);
    }
  }

  return (
    <View style={{flexDirection:'row'}}>
      <TextInput
        ref={(component) => _textInput = component}
        style={{width: 100, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => todo_text = text}
        placeholder='Add a todo'
      />
      <TouchableHighlight underlayColor='transparent' onPress={() => _onAddTodo()}>
        <View style={{borderWidth:1, borderRadius:3, borderColor:'black'}}>
          <Text style={{marginHorizontal:5}}>Add</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

AddTodo.defaultProps = {
  onAddTodo: () => {}
}

export default AddTodo