import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import * as todoActions from './actions'

const App = ({
  visibleTodos,
  visibilityFilter,
  actions
}) => {
  const { addTodo, completeTodo, setVisibilityFilter } = actions;

  return (
    <View style={styles.container}>
      <AddTodo onAddTodo={(text) => addTodo(text)} />
      <TodoList
        todos={visibleTodos}
        onTodoClick={(index) => completeTodo(index)}
      />
      <Footer
        filter={visibilityFilter}
        onFilterChange={(filter) => setVisibilityFilter(filter)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

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

const mapStateToProps = (state) => {
  return {
    visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

