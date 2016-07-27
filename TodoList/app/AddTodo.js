import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const AddTodo = ({
  onAddTodo
}) => {

  const styles = StyleSheet.create({
    container: {
      flex:1,
    }
  })

  var todo_text = '';
  var _textInput = null;

  clearText = function() {
    _textInput.setNativeProps({text: ''});
  }

  _onAddTodo = function() {
    clearText();
    onAddTodo(todo_text);
  }

  return (
    <View style={{flexDirection:'row'}}>
      <TextInput
        ref={(component) => _textInput = component}
        style={{width: 100, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => todo_text = text}
        placeholder='Add a todo'
      />
      <TouchableHighlight onPress={() => _onAddTodo()}>
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

}

export default AddTodo