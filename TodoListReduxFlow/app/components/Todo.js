import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native'

const Todo = ({
  text,
  completed,
  onClick,
}) => {
  return (
    <Text 
      onPress={() => onClick() }
      style={{textDecorationLine: completed ? 'line-through' : 'none'}}>
      {text}
    </Text>
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
