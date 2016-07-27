import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

var count = 0;
function getNextID() {
  count = count + 1;
  return count;
}

export default class App extends Component {

  constructor(props) {
    super(props);

    let nextID = getNextID();

    this.state = {
      completed: false,
      filter: 'SHOW_ALL',
      todos: [{
        id: 0,
        text: 'Use redux',
        completed: true,
      },{
        id: nextID,
        text: 'Learn to connect it to React',
        completed: false,
      }],
      visibletodos: [{
        text: 'Use redux',
        completed: true,
      },{
        id: nextID,
        text: 'Learn to connect it to React',
        completed: false,
      }],
    }
  }

  _onAddTodo(text) {
    if(text === '') return;

    let nextID = getNextID();

    this.setState({
      'todos': [
        ...this.state.todos,
        {
          id: nextID,
          text: text, 
          completed: false,
        }
      ],
      'visibletodos': [
        ...this.state.todos,
        {
          id: nextID,
          text: text, 
          completed: false,
        }
      ]
    })
  }

  _onTodoClick(todo, index) {
    let todos = this.state.visibletodos;
    todos[todo.id].completed = !todos[todo.id].completed;
    this.setState({todos: todos});
  }

  _onFilterChange(filter) {
    switch(filter) {
      case 'SHOW_ALL':
        this.setState({visibletodos: [...this.state.todos]});
        break;
      case 'SHOW_COMPLETED':
        this.setState({visibletodos: this.state.todos.filter((todo) => {
          return todo.completed === true;
        })})
        break;
      case 'SHOW_ACTIVE':
        this.setState({visibletodos: this.state.todos.filter((todo) => {
          return todo.completed === false;
        })})
        break;
      default:
        this.setState({visibletodos: Object.assign({}, this.state.todos)})      
    }

    this.setState({filter});
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo onAddTodo={(text) => this._onAddTodo(text)}/>
        <TodoList
          todos={this.state.visibletodos}
          onTodoClick={(todo) => this._onTodoClick(todo)}
        />
        <Footer
          filter={this.state.filter}
          onFilterChange={(filter) => this._onFilterChange(filter)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

