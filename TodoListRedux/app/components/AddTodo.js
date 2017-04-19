import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const AddTodo = (props, { store }) => {
  let todo_text = '';
  let textInputRef = null;

  const clearText = () => {
    textInputRef.setNativeProps({text: ''});
  }

  const _onAddTodo = () => {
    if (todo_text !== '') {
      clearText();
      store.dispatch({
        type: 'ADD_TODO',
        text: todo_text,
      })
    }
  }

  return (
    <View style={{flexDirection:'row'}}>
      <TextInput
        ref={(c) => { textInputRef = c; }}
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

AddTodo.contextTypes = {
  store: React.PropTypes.object,
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

AddTodo.defaultProps = {
  onAddTodo: () => {}
}

export default AddTodo