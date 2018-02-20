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

export default App;

