import React, { PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux';
import Todo from './Todo'
import { toggleTodo } from '../actions';

const VisibleTodoList = ({
  todos,
  onTodoClick,
}) => {

  let styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  return (
    <View>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            onClick={() => onTodoClick(todo.id) }
          />
        )
      })}
    </View>
  )
}

VisibleTodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
}

VisibleTodoList.defaultProps = {
  todos: [],
  onTodoClick: () => { }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => dispatch(toggleTodo(id)),
  };
};

const getVisibleTodos = function (todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed === true);
    case 'SHOW_ACTIVE':
      return todos.filter(t => t.completed === false);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
