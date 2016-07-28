import * as types from './actionTypes'

export const addTodo = (text) => { 
  return {
    type : types.ADD_TODO,
    text,
  }
}

export const completeTodo = (index) => {
  return {
    type: types.COMPLETE_TODO,
    index,
  }  
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter,
  }
}
