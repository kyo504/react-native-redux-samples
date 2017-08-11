import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { fetchTodos } from '../api';

import Todo from './Todo';

class VisiblaTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos => {
      console.log(this.props.filter, todos);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos => {
        console.log(this.props.filter, todos);
      });
    }
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const TodoList = ({ todos, onTodoClick }) =>
  <ul>
    {todos.map(todo => {
      return <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo} />;
    })}
  </ul>;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(t => !t.completed);
    case 'completed':
      return todos.filter(t => t.completed);
  }
};

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state.todos, params.filter || 'all'),
    filter,
  };
};
const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export default withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo })(VisiblaTodoList));
