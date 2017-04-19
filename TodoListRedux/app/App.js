import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
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

export default App;

