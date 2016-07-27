import React, { PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Todo from './Todo'

const TodoList = ({
  todos,
  onTodoClick,
}) => {

  let styles = StyleSheet.create({
    container:{
      flex:1,
    }
  })

  return (
    <View>
    {todos.map((todo, index) => {
      return (
        <Todo
          {...todo}
          key={index}
          onClick={() => onTodoClick(todo)}
        />
      )
    })}
    </View>
  )
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
}

TodoList.defaultProps = {
  todos: [],
  onTodoClick: () => {}
}

export default TodoList;