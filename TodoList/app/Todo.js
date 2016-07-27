import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'

const Todo = ({
  text,
  completed,
  onClick,
}) => {

  let styles = StyleSheet.create({
    text: {
      textDecorationLine: completed ? 'line-through' : 'none',
    }
  });

  return (
    <TouchableWithoutFeedback onPress={() => onClick()}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

Todo.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
}

Todo.defaultProps = {
  text: '',
  completed: false,
}

export default Todo;