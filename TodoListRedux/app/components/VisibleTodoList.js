import React, { Component } from 'react';
import TodoList from './TodoList';
import store from '../store/configureStore';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate;
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            state.todos,
            state.visivilityFilter
          )
        }
        onTodoClick={(id) => (
          store.dispatch({
            type: 'TOGGLE_TODO',
            id,
          })
        )}
      />
    );
  }
}

export default VisibleTodoList;
